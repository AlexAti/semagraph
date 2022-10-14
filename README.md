# Semagraph
- npm i react react-dom qrcode instascan

## How to develop

- Clone the repo
- brew install npm
- npm install -g shadow-cljs
- npm i react react-dom qrcode @zxing/library
- shadow-cljs watch app


(or instead of the last line, from emacs):
- M-x cider-jack-in-cljs

## How do release

- shadow-cljs release app

## Work log
+ App scaffolding
+ Read a dropped file
+ Produce a file for download
+ Produce a QR from a read file
+ Read a QR and produce a file
- Loop
- Work on performance
- Prettify
- deps.edn instead of npm?
