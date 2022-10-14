(ns app.main
  (:require [reagent.core :as r]
            [reagent.dom :as rd]
            [qrcode :as qr]
            ["@zxing/library" :as zx]))

;; Global state

(defonce status (r/atom {:download-link-href "#"
                         :log []
                         :mode :send
                         :n 0}))


;; Dynamic html components

(defn dropzone [parse-file]
  "parse-file: function to be called with the dropped file as 'File' argument"
  [:form#upload
   [:div#dropzone {:on-drag-over #(do
                                    (.stopPropagation %)
                                    (.preventDefault %)
                                    ;; maybe do something
                                    false)
                   :on-drag-leave #(do
                                     (.stopPropagation %)
                                     (.preventDefault %)
                                     ;; maybe do something
                                     false)
                   :on-drop #(do
                               (.stopPropagation %)
                               (.preventDefault %)
                               (let [flist (->> (.. % -dataTransfer -files))]
                                 (if (< 1 (. flist -length))
                                   (js/alert "Sorry but I can't handle more than one file at the moment.")
                                   (parse-file (. flist item 0))))
                               false)}
    "Drop a file here to start serving it!"]])

(defn forget-file-button []
  [:button {:on-click #(do (.stopPropagation %)
                           (.preventDefault %)
                           (swap! status assoc :n 0)
                           (swap! status dissoc :uploadeable-content :qrtext)
                           false)}
   "Cancel file upload"])

(defn qrzone [qrtext]
  (r/create-class {:display-name "qrzone"
                   :component-did-mount #(. qr toCanvas
                                            (js/document.getElementById "qrcode")
                                            (clj->js [{:data (:qrtext @status)
                                                       :mode "byte"}]))
                   :component-did-update #(. qr toCanvas
                                             (js/document.getElementById "qrcode")
                                             (clj->js [{:data (:qrtext @status)
                                                        :mode "byte"}]))
                   :reagent-render (fn [qrtext] [:canvas#qrcode])}))

(defn sendzone []
  [:div#sendzone
   [:p (str "A file of size "
            ;; (count (:content @status))
            "is ready to be served.")]
   [qrzone (:qrtext @status)]
   [forget-file-button]])

(defn receivezone []
  [:div#receivezone
   [:p "Acknowledging chunks..."]
   [qrzone (:n @status)]])

(defn logzone []
  [:div
   [:div
    [:h5 "Status"]
    [:p (with-out-str (cljs.pprint/pprint @status))]]
   [:div
    [:h5 "Log"]
    (into [:div]
          (for [l (:log @status)]
            [:p l]))
    [:p {:style ; no funciona bien por algún motivo
         (comment) (comment {:display (if (:download-link-visible @status) "block" "hidden")})
         "display:hidden;"}
     "File is available for download " [:a {:href (:download-link-href @status) :download true} "here."]]]])


;; Functionality

(defn log [msg]
  (swap! status update :log conj msg))

(defn next-n [n]
  "Used for 2 different things:
    - given n, give me next n
    - given [0, 254][255, x], give me [1, 255]"
  (inc (mod n 255)))

(defn -plan-slices [bytes chunksize]
  "Returns a list of [start end index] vectors (index starts at 1)"
  (let [byterange (for [n (range)
                        :let [bb (* (inc n) (dec chunksize))]
                        :while (> bytes bb)]
                    [(- bb (dec chunksize)) bb])
        byterange (if (zero? (mod bytes (dec chunksize)))
                    byterange
                    (concat byterange [[(- bytes (mod bytes (dec chunksize))) bytes]]))]
    (map conj byterange (map next-n (range)))))

(defn parse-file [blob]
  (-> (.arrayBuffer blob) ; for big files we can convert to a stream instead
      (.then #(do (let [plan (-plan-slices (.-size blob) 1000)
                        b (.-Blob js/window)
                        chunk-blobs (map (fn [[s e n]]
                                           (b. [(array (if (= e (.-size blob)) 0 n))
                                                (.slice blob s e)]
                                               (clj->js {:type (.-type blob)})))
                                         plan)
                        ui8 (.-Uint8ClampedArray js/window)
                        chunk-arrays (map (fn [b]
			                    (.then (.arrayBuffer b)
					           (fn [a] (ui8. a))))
                                          chunk-blobs)
                        _ (.then (first chunk-arrays)
                                 (fn [a]
                                   ;; now we display first chunk and wait for ack
                                   (swap! status assoc
                                          :n 1
                                          :uploadeable-content (rest chunk-arrays)
                                          :qrtext a
                                          )))])))))

(defn advance-qr []
  (if (empty? (:uploadeable-content @status))
    (swap! status #(-> %
                       (assoc :n 0)
                       (dissoc :qrtext :uploadeable-content)))
    (.then (first (:uploadeable-content @status))
           (fn [c] (swap! status #(-> %
                                      (assoc :qrtext c)
                                      (update :n next-n)
                                      (update :uploadeable-content rest)))))))

(defn receive-new-ack [res]
  (let [res (.-rawBytes res)
        n (:n @status)]
    (println "The first byte is " (first res) "and n is " (:n @status))
    (when (and (> n 0)
               (= n (first res)))
      advance-qr)))

(declare enable-file-download)
(defn receive-new-chunk [res]
  (log (.-text res))
  (let [chunk-n (first (.-rawBytes res))
        res (rest (.-rawBytes res))]
    ;; Only for first chunk received
    (when (and (= 1 chunk-n)
               (= 0 (:n @status)))
      (swap! status assoc :downloaded-content []
                          :mode :receive))
    ;; Every chunk
    (swap! status #(-> %
                       (update :n next-n)
                       (update :downloaded-content conj res)
                       (update :qrtext chunk-n)))
    ;; Only for last chunk received
    (when (= chunk-n 0)
      (swap! status assoc :mode :send)
      (enable-file-download "out.txt" (:downloaded-content @status)))))

(defn receive-new-qr [res]
  (if (= :send (:mode @status))
    (receive-new-ack res)
    (receive-new-chunk res)))

(defn start-listening []
  (let [codeReader (.-BrowserQRCodeReader zx)
        codeReader (codeReader.)
        _ (-> (.getVideoInputDevices codeReader)
              (.then (fn [devs]
                       (swap! status update :device (.-deviceId (first devs))))))
        _ (.decodeFromInputVideoDeviceContinuously codeReader
                                                   (:device @status)
                                                   "preview"
                                                   (fn [res err]
                                                     (when res
                                                       (receive-new-qr res))
                                                     (comment (when err
                                                                "As long as this error belongs into one of the following categories \\
                                                      the code reader is going to continue as excepted. \\
                                                      Any other error will stop the decoding loop: \\
                                                      NotFoundException, ChecksumException, FormatException"
                                                                (.log js/console (str "error: " err))))))]))

(defn enable-file-download [filename binary-arraybuffer-list]
  (let [;fl (. js/Buffer from binary-arraybuffer)
        _ (log "file download en marcha")
        b (.-Blob js/window)
        val (. js/URL createObjectURL (b. binary-arraybuffer-list
                                              (clj->js {:type "text/plain"})))
        _ (swap! status assoc :download-link-href val)
        _ (log (str "ahora la dir es " ))])
  ;; we can autoclick for the download
  "function downloadBuffer(arrayBuffer, fileName) {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob(
    [ arrayBuffer ],
    { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
  ))
  a.download = fileName
  a.click()
}
"
  )

(comment "
a.href = window.URL.createObjectURL(new Blob(['Test,Text'], {type: 'text/csv'}));

function save(filename, data) {
    const blob = new Blob([data], {type: 'text/csv'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}")

;; App lifecycle

(defn render! [component]
  (rd/render component
             (js/document.getElementById "app")))

(defn app []
  [:div
   [:div#sender
    (if (:uploadeable-content @status)
      [sendzone]
      [dropzone parse-file])]
   [:div#receiver
    [:p "Video"]
    (when (= :receive (:mode @status))
      [receivezone])
    [:video#preview]]
   [logzone]])

(defn reload! []
  (render! [app])
  (start-listening))

(defn main! []
  (if (and (. js/window -Blob)
           (. js/window -File)
           (. js/window -FileList)
           (. js/window -FileReader)
;           (. js/window -FileWriter)
           )
    (reload!)
    (render! [:p "Sorry but full File API support is required..."])))
