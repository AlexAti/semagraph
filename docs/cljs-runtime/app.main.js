goog.provide('app.main');
var module$node_modules$qrcode$lib$browser=shadow.js.require("module$node_modules$qrcode$lib$browser", {});
var module$node_modules$$zxing$library$cjs$index=shadow.js.require("module$node_modules$$zxing$library$cjs$index", {});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.status !== 'undefined')){
} else {
app.main.status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"download-link-href","download-link-href",669863850),"#",new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"n","n",562130025),(0)], null));
}
app.main.dropzone = (function app$main$dropzone(parse_file){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form#upload","form#upload",1592249252),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#dropzone","div#dropzone",221543289),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__6290_SHARP_){
p1__6290_SHARP_.stopPropagation();

p1__6290_SHARP_.preventDefault();

return false;
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (p1__6291_SHARP_){
p1__6291_SHARP_.stopPropagation();

p1__6291_SHARP_.preventDefault();

return false;
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__6292_SHARP_){
p1__6292_SHARP_.stopPropagation();

p1__6292_SHARP_.preventDefault();

var flist_6316 = p1__6292_SHARP_.dataTransfer.files;
if(((1) < flist_6316.length)){
alert("Sorry but I can't handle more than one file at the moment.");
} else {
var G__6293_6317 = flist_6316.item((0));
(parse_file.cljs$core$IFn$_invoke$arity$1 ? parse_file.cljs$core$IFn$_invoke$arity$1(G__6293_6317) : parse_file.call(null,G__6293_6317));
}

return false;
})], null),"Drop a file here to start serving it!"], null)], null);
});
app.main.forget_file_button = (function app$main$forget_file_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__6294_SHARP_){
p1__6294_SHARP_.stopPropagation();

p1__6294_SHARP_.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.status,cljs.core.assoc,new cljs.core.Keyword(null,"n","n",562130025),(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.status,cljs.core.dissoc,new cljs.core.Keyword(null,"uploadeable-content","uploadeable-content",-1909484592),new cljs.core.Keyword(null,"qrtext","qrtext",-979493068));

return false;
})], null),"Cancel file upload"], null);
});
app.main.qrzone = (function app$main$qrzone(qrtext){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"qrzone",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return module$node_modules$qrcode$lib$browser.toCanvas(document.getElementById("qrcode"),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"qrtext","qrtext",-979493068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status)),new cljs.core.Keyword(null,"mode","mode",654403691),"byte"], null)], null)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
return module$node_modules$qrcode$lib$browser.toCanvas(document.getElementById("qrcode"),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"qrtext","qrtext",-979493068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status)),new cljs.core.Keyword(null,"mode","mode",654403691),"byte"], null)], null)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (qrtext__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#qrcode","canvas#qrcode",1977746343)], null);
})], null));
});
app.main.sendzone = (function app$main$sendzone(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sendzone","div#sendzone",-538146790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["A file of size ","is ready to be served."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.qrzone,new cljs.core.Keyword(null,"qrtext","qrtext",-979493068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.forget_file_button], null)], null);
});
app.main.receivezone = (function app$main$receivezone(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#receivezone","div#receivezone",-386663971),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Acknowledging chunks..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.qrzone,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status))], null)], null);
});
app.main.logzone = (function app$main$logzone(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6295_6318 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6296_6319 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6297_6320 = true;
var _STAR_print_fn_STAR__temp_val__6298_6321 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6297_6320);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6298_6321);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6296_6319);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6295_6318);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Log"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__5523__auto__ = (function app$main$logzone_$_iter__6299(s__6300){
return (new cljs.core.LazySeq(null,(function (){
var s__6300__$1 = s__6300;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6300__$1);
if(temp__5804__auto__){
var s__6300__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6300__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__6300__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__6302 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__6301 = (0);
while(true){
if((i__6301 < size__5522__auto__)){
var l = cljs.core._nth(c__5521__auto__,i__6301);
cljs.core.chunk_append(b__6302,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),l], null));

var G__6322 = (i__6301 + (1));
i__6301 = G__6322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6302),app$main$logzone_$_iter__6299(cljs.core.chunk_rest(s__6300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6302),null);
}
} else {
var l = cljs.core.first(s__6300__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),l], null),app$main$logzone_$_iter__6299(cljs.core.rest(s__6300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status)));
})()),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),null,null,"display:hidden;"], null),"File is available for download ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"download-link-href","download-link-href",669863850).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status)),new cljs.core.Keyword(null,"download","download",-300081668),true], null),"here."], null)], null)], null)], null);
});
app.main.log = (function app$main$log(msg){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.status,cljs.core.update,new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
app.main.next_n = (function app$main$next_n(n){

return (cljs.core.mod(n,(255)) + (1));
});
app.main._plan_slices = (function app$main$_plan_slices(bytes,chunksize){

var byterange = (function (){var iter__5523__auto__ = (function app$main$_plan_slices_$_iter__6303(s__6304){
return (new cljs.core.LazySeq(null,(function (){
var s__6304__$1 = s__6304;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6304__$1);
if(temp__5804__auto__){
var s__6304__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6304__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__6304__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__6306 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__6305 = (0);
while(true){
if((i__6305 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__6305);
var bb = ((n + (1)) * (chunksize - (1)));
if((bytes > bb)){
cljs.core.chunk_append(b__6306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(bb - (chunksize - (1))),bb], null));

var G__6323 = (i__6305 + (1));
i__6305 = G__6323;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6306),app$main$_plan_slices_$_iter__6303(cljs.core.chunk_rest(s__6304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6306),null);
}
} else {
var n = cljs.core.first(s__6304__$2);
var bb = ((n + (1)) * (chunksize - (1)));
if((bytes > bb)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(bb - (chunksize - (1))),bb], null),app$main$_plan_slices_$_iter__6303(cljs.core.rest(s__6304__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$0());
})();
var byterange__$1 = (((cljs.core.mod(bytes,(chunksize - (1))) === (0)))?byterange:cljs.core.concat.cljs$core$IFn$_invoke$arity$2(byterange,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(bytes - cljs.core.mod(bytes,(chunksize - (1)))),bytes], null)], null)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,byterange__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.next_n,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
app.main.parse_file = (function app$main$parse_file(blob){
return blob.arrayBuffer().then((function (){
var plan = app.main._plan_slices(blob.size,(1000));
var b = window.Blob;
var chunk_blobs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6307){
var vec__6308 = p__6307;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6308,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6308,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6308,(2),null);
return (new b(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,blob.size))?(0):n)],blob.slice(s,e)], null),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),blob.type], null))));
}),plan);
var ui8 = window.Uint8ClampedArray;
var chunk_arrays = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b__$1){
return b__$1.arrayBuffer().then((function (a){
return (new ui8(a));
}));
}),chunk_blobs);
var _ = cljs.core.first(chunk_arrays).then((function (a){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.status,cljs.core.assoc,new cljs.core.Keyword(null,"n","n",562130025),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"uploadeable-content","uploadeable-content",-1909484592),cljs.core.rest(chunk_arrays),new cljs.core.Keyword(null,"qrtext","qrtext",-979493068),a], 0));
}));
return null;
}));
});
app.main.advance_qr = (function app$main$advance_qr(){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"uploadeable-content","uploadeable-content",-1909484592).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.status,(function (p1__6311_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6311_SHARP_,new cljs.core.Keyword(null,"n","n",562130025),(0)),new cljs.core.Keyword(null,"qrtext","qrtext",-979493068),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"uploadeable-content","uploadeable-content",-1909484592)], 0));
}));
} else {
return cljs.core.first(new cljs.core.Keyword(null,"uploadeable-content","uploadeable-content",-1909484592).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status))).then((function (c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.status,(function (p1__6312_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6312_SHARP_,new cljs.core.Keyword(null,"qrtext","qrtext",-979493068),c),new cljs.core.Keyword(null,"n","n",562130025),app.main.next_n),new cljs.core.Keyword(null,"uploadeable-content","uploadeable-content",-1909484592),cljs.core.rest);
}));
}));
}
});
app.main.receive_new_ack = (function app$main$receive_new_ack(res){
var res__$1 = res.rawBytes;
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The first byte is ",cljs.core.first(res__$1),"and n is ",new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status))], 0));

if((((n > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(res__$1))))){
return app.main.advance_qr;
} else {
return null;
}
});
app.main.receive_new_chunk = (function app$main$receive_new_chunk(res){
app.main.log(res.text);

var chunk_n = cljs.core.first(res.rawBytes);
var res__$1 = cljs.core.rest(res.rawBytes);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),chunk_n)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.status,cljs.core.assoc,new cljs.core.Keyword(null,"downloaded-content","downloaded-content",1640473274),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"receive","receive",1830053389)], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.status,(function (p1__6313_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6313_SHARP_,new cljs.core.Keyword(null,"n","n",562130025),app.main.next_n),new cljs.core.Keyword(null,"downloaded-content","downloaded-content",1640473274),cljs.core.conj,res__$1),new cljs.core.Keyword(null,"qrtext","qrtext",-979493068),chunk_n);
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chunk_n,(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.status,cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"send","send",-652151114));

var G__6314 = "out.txt";
var G__6315 = new cljs.core.Keyword(null,"downloaded-content","downloaded-content",1640473274).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status));
return (app.main.enable_file_download.cljs$core$IFn$_invoke$arity$2 ? app.main.enable_file_download.cljs$core$IFn$_invoke$arity$2(G__6314,G__6315) : app.main.enable_file_download.call(null,G__6314,G__6315));
} else {
return null;
}
});
app.main.receive_new_qr = (function app$main$receive_new_qr(res){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status)))){
return app.main.receive_new_ack(res);
} else {
return app.main.receive_new_chunk(res);
}
});
app.main.start_listening = (function app$main$start_listening(){
var codeReader = module$node_modules$$zxing$library$cjs$index.BrowserQRCodeReader;
var codeReader__$1 = (new codeReader());
var _ = codeReader__$1.getVideoInputDevices().then((function (devs){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.status,cljs.core.update,new cljs.core.Keyword(null,"device","device",1817743352),cljs.core.first(devs).deviceId);
}));
var ___$1 = codeReader__$1.decodeFromInputVideoDeviceContinuously(new cljs.core.Keyword(null,"device","device",1817743352).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status)),"preview",(function (res,err){
if(cljs.core.truth_(res)){
app.main.receive_new_qr(res);
} else {
}

return null;
}));
return null;
});
app.main.enable_file_download = (function app$main$enable_file_download(filename,binary_arraybuffer_list){
var __6324 = app.main.log("file download en marcha");
var b_6325 = window.Blob;
var val_6326 = URL.createObjectURL((new b_6325(binary_arraybuffer_list,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/plain"], null)))));
var __6327__$1 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.status,cljs.core.assoc,new cljs.core.Keyword(null,"download-link-href","download-link-href",669863850),val_6326);
var __6328__$2 = app.main.log("ahora la dir es ");

return "function downloadBuffer(arrayBuffer, fileName) {\n  const a = document.createElement('a')\n  a.href = URL.createObjectURL(new Blob(\n    [ arrayBuffer ],\n    { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }\n  ))\n  a.download = fileName\n  a.click()\n}\n";
});
app.main.render_BANG_ = (function app$main$render_BANG_(component){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(component,document.getElementById("app"));
});
app.main.app = (function app$main$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sender","div#sender",1741514263),(cljs.core.truth_(new cljs.core.Keyword(null,"uploadeable-content","uploadeable-content",-1909484592).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.sendzone], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.dropzone,app.main.parse_file], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#receiver","div#receiver",-1801670750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Video"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"receive","receive",1830053389),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.status))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.receivezone], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video#preview","video#preview",1471444055)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.logzone], null)], null);
});
app.main.reload_BANG_ = (function app$main$reload_BANG_(){
app.main.render_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.app], null));

return app.main.start_listening();
});
app.main.main_BANG_ = (function app$main$main_BANG_(){
if(cljs.core.truth_((function (){var and__5043__auto__ = window.Blob;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = window.File;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = window.FileList;
if(cljs.core.truth_(and__5043__auto____$2)){
return window.FileReader;
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return app.main.reload_BANG_();
} else {
return app.main.render_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sorry but full File API support is required..."], null));
}
});

//# sourceMappingURL=app.main.js.map
