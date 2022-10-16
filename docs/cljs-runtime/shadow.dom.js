goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19561 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19561(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19565 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19565(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18412 = coll;
var G__18413 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18412,G__18413) : shadow.dom.lazy_native_coll_seq.call(null,G__18412,G__18413));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18463 = arguments.length;
switch (G__18463) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18487 = arguments.length;
switch (G__18487) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18498 = arguments.length;
switch (G__18498) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18518 = arguments.length;
switch (G__18518) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18542 = arguments.length;
switch (G__18542) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18569 = arguments.length;
switch (G__18569) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18581){if((e18581 instanceof Object)){
var e = e18581;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18581;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18589 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18590 = null;
var count__18591 = (0);
var i__18592 = (0);
while(true){
if((i__18592 < count__18591)){
var el = chunk__18590.cljs$core$IIndexed$_nth$arity$2(null,i__18592);
var handler_19572__$1 = ((function (seq__18589,chunk__18590,count__18591,i__18592,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18589,chunk__18590,count__18591,i__18592,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19572__$1);


var G__19573 = seq__18589;
var G__19574 = chunk__18590;
var G__19575 = count__18591;
var G__19576 = (i__18592 + (1));
seq__18589 = G__19573;
chunk__18590 = G__19574;
count__18591 = G__19575;
i__18592 = G__19576;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18589);
if(temp__5804__auto__){
var seq__18589__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18589__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18589__$1);
var G__19577 = cljs.core.chunk_rest(seq__18589__$1);
var G__19578 = c__5568__auto__;
var G__19579 = cljs.core.count(c__5568__auto__);
var G__19580 = (0);
seq__18589 = G__19577;
chunk__18590 = G__19578;
count__18591 = G__19579;
i__18592 = G__19580;
continue;
} else {
var el = cljs.core.first(seq__18589__$1);
var handler_19581__$1 = ((function (seq__18589,chunk__18590,count__18591,i__18592,el,seq__18589__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18589,chunk__18590,count__18591,i__18592,el,seq__18589__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19581__$1);


var G__19582 = cljs.core.next(seq__18589__$1);
var G__19583 = null;
var G__19584 = (0);
var G__19585 = (0);
seq__18589 = G__19582;
chunk__18590 = G__19583;
count__18591 = G__19584;
i__18592 = G__19585;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18610 = arguments.length;
switch (G__18610) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18620 = cljs.core.seq(events);
var chunk__18621 = null;
var count__18622 = (0);
var i__18623 = (0);
while(true){
if((i__18623 < count__18622)){
var vec__18633 = chunk__18621.cljs$core$IIndexed$_nth$arity$2(null,i__18623);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18633,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18633,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19587 = seq__18620;
var G__19588 = chunk__18621;
var G__19589 = count__18622;
var G__19590 = (i__18623 + (1));
seq__18620 = G__19587;
chunk__18621 = G__19588;
count__18622 = G__19589;
i__18623 = G__19590;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18620);
if(temp__5804__auto__){
var seq__18620__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18620__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18620__$1);
var G__19591 = cljs.core.chunk_rest(seq__18620__$1);
var G__19592 = c__5568__auto__;
var G__19593 = cljs.core.count(c__5568__auto__);
var G__19594 = (0);
seq__18620 = G__19591;
chunk__18621 = G__19592;
count__18622 = G__19593;
i__18623 = G__19594;
continue;
} else {
var vec__18640 = cljs.core.first(seq__18620__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19595 = cljs.core.next(seq__18620__$1);
var G__19596 = null;
var G__19597 = (0);
var G__19598 = (0);
seq__18620 = G__19595;
chunk__18621 = G__19596;
count__18622 = G__19597;
i__18623 = G__19598;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18647 = cljs.core.seq(styles);
var chunk__18648 = null;
var count__18649 = (0);
var i__18650 = (0);
while(true){
if((i__18650 < count__18649)){
var vec__18667 = chunk__18648.cljs$core$IIndexed$_nth$arity$2(null,i__18650);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18667,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18667,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19599 = seq__18647;
var G__19600 = chunk__18648;
var G__19601 = count__18649;
var G__19602 = (i__18650 + (1));
seq__18647 = G__19599;
chunk__18648 = G__19600;
count__18649 = G__19601;
i__18650 = G__19602;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18647);
if(temp__5804__auto__){
var seq__18647__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18647__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18647__$1);
var G__19603 = cljs.core.chunk_rest(seq__18647__$1);
var G__19604 = c__5568__auto__;
var G__19605 = cljs.core.count(c__5568__auto__);
var G__19606 = (0);
seq__18647 = G__19603;
chunk__18648 = G__19604;
count__18649 = G__19605;
i__18650 = G__19606;
continue;
} else {
var vec__18673 = cljs.core.first(seq__18647__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18673,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18673,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19607 = cljs.core.next(seq__18647__$1);
var G__19608 = null;
var G__19609 = (0);
var G__19610 = (0);
seq__18647 = G__19607;
chunk__18648 = G__19608;
count__18649 = G__19609;
i__18650 = G__19610;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18680_19611 = key;
var G__18680_19612__$1 = (((G__18680_19611 instanceof cljs.core.Keyword))?G__18680_19611.fqn:null);
switch (G__18680_19612__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19615 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19615,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19615,"aria-");
}
})())){
el.setAttribute(ks_19615,value);
} else {
(el[ks_19615] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18725){
var map__18726 = p__18725;
var map__18726__$1 = cljs.core.__destructure_map(map__18726);
var props = map__18726__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18726__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18731 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18738 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18738,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18738;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18750 = arguments.length;
switch (G__18750) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18763){
var vec__18767 = p__18763;
var seq__18768 = cljs.core.seq(vec__18767);
var first__18769 = cljs.core.first(seq__18768);
var seq__18768__$1 = cljs.core.next(seq__18768);
var nn = first__18769;
var first__18769__$1 = cljs.core.first(seq__18768__$1);
var seq__18768__$2 = cljs.core.next(seq__18768__$1);
var np = first__18769__$1;
var nc = seq__18768__$2;
var node = vec__18767;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18772 = nn;
var G__18773 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18772,G__18773) : create_fn.call(null,G__18772,G__18773));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18775 = nn;
var G__18776 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18775,G__18776) : create_fn.call(null,G__18775,G__18776));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18781 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18781,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18781,(1),null);
var seq__18786_19626 = cljs.core.seq(node_children);
var chunk__18787_19627 = null;
var count__18788_19628 = (0);
var i__18789_19629 = (0);
while(true){
if((i__18789_19629 < count__18788_19628)){
var child_struct_19630 = chunk__18787_19627.cljs$core$IIndexed$_nth$arity$2(null,i__18789_19629);
var children_19631 = shadow.dom.dom_node(child_struct_19630);
if(cljs.core.seq_QMARK_(children_19631)){
var seq__18869_19632 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19631));
var chunk__18871_19633 = null;
var count__18872_19634 = (0);
var i__18873_19635 = (0);
while(true){
if((i__18873_19635 < count__18872_19634)){
var child_19636 = chunk__18871_19633.cljs$core$IIndexed$_nth$arity$2(null,i__18873_19635);
if(cljs.core.truth_(child_19636)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19636);


var G__19637 = seq__18869_19632;
var G__19638 = chunk__18871_19633;
var G__19639 = count__18872_19634;
var G__19640 = (i__18873_19635 + (1));
seq__18869_19632 = G__19637;
chunk__18871_19633 = G__19638;
count__18872_19634 = G__19639;
i__18873_19635 = G__19640;
continue;
} else {
var G__19641 = seq__18869_19632;
var G__19642 = chunk__18871_19633;
var G__19643 = count__18872_19634;
var G__19644 = (i__18873_19635 + (1));
seq__18869_19632 = G__19641;
chunk__18871_19633 = G__19642;
count__18872_19634 = G__19643;
i__18873_19635 = G__19644;
continue;
}
} else {
var temp__5804__auto___19645 = cljs.core.seq(seq__18869_19632);
if(temp__5804__auto___19645){
var seq__18869_19646__$1 = temp__5804__auto___19645;
if(cljs.core.chunked_seq_QMARK_(seq__18869_19646__$1)){
var c__5568__auto___19647 = cljs.core.chunk_first(seq__18869_19646__$1);
var G__19648 = cljs.core.chunk_rest(seq__18869_19646__$1);
var G__19649 = c__5568__auto___19647;
var G__19650 = cljs.core.count(c__5568__auto___19647);
var G__19651 = (0);
seq__18869_19632 = G__19648;
chunk__18871_19633 = G__19649;
count__18872_19634 = G__19650;
i__18873_19635 = G__19651;
continue;
} else {
var child_19652 = cljs.core.first(seq__18869_19646__$1);
if(cljs.core.truth_(child_19652)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19652);


var G__19653 = cljs.core.next(seq__18869_19646__$1);
var G__19654 = null;
var G__19655 = (0);
var G__19656 = (0);
seq__18869_19632 = G__19653;
chunk__18871_19633 = G__19654;
count__18872_19634 = G__19655;
i__18873_19635 = G__19656;
continue;
} else {
var G__19657 = cljs.core.next(seq__18869_19646__$1);
var G__19658 = null;
var G__19659 = (0);
var G__19660 = (0);
seq__18869_19632 = G__19657;
chunk__18871_19633 = G__19658;
count__18872_19634 = G__19659;
i__18873_19635 = G__19660;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19631);
}


var G__19661 = seq__18786_19626;
var G__19662 = chunk__18787_19627;
var G__19663 = count__18788_19628;
var G__19664 = (i__18789_19629 + (1));
seq__18786_19626 = G__19661;
chunk__18787_19627 = G__19662;
count__18788_19628 = G__19663;
i__18789_19629 = G__19664;
continue;
} else {
var temp__5804__auto___19665 = cljs.core.seq(seq__18786_19626);
if(temp__5804__auto___19665){
var seq__18786_19666__$1 = temp__5804__auto___19665;
if(cljs.core.chunked_seq_QMARK_(seq__18786_19666__$1)){
var c__5568__auto___19667 = cljs.core.chunk_first(seq__18786_19666__$1);
var G__19668 = cljs.core.chunk_rest(seq__18786_19666__$1);
var G__19669 = c__5568__auto___19667;
var G__19670 = cljs.core.count(c__5568__auto___19667);
var G__19671 = (0);
seq__18786_19626 = G__19668;
chunk__18787_19627 = G__19669;
count__18788_19628 = G__19670;
i__18789_19629 = G__19671;
continue;
} else {
var child_struct_19672 = cljs.core.first(seq__18786_19666__$1);
var children_19673 = shadow.dom.dom_node(child_struct_19672);
if(cljs.core.seq_QMARK_(children_19673)){
var seq__18904_19674 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19673));
var chunk__18906_19675 = null;
var count__18907_19676 = (0);
var i__18908_19677 = (0);
while(true){
if((i__18908_19677 < count__18907_19676)){
var child_19686 = chunk__18906_19675.cljs$core$IIndexed$_nth$arity$2(null,i__18908_19677);
if(cljs.core.truth_(child_19686)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19686);


var G__19688 = seq__18904_19674;
var G__19689 = chunk__18906_19675;
var G__19690 = count__18907_19676;
var G__19691 = (i__18908_19677 + (1));
seq__18904_19674 = G__19688;
chunk__18906_19675 = G__19689;
count__18907_19676 = G__19690;
i__18908_19677 = G__19691;
continue;
} else {
var G__19698 = seq__18904_19674;
var G__19699 = chunk__18906_19675;
var G__19700 = count__18907_19676;
var G__19701 = (i__18908_19677 + (1));
seq__18904_19674 = G__19698;
chunk__18906_19675 = G__19699;
count__18907_19676 = G__19700;
i__18908_19677 = G__19701;
continue;
}
} else {
var temp__5804__auto___19702__$1 = cljs.core.seq(seq__18904_19674);
if(temp__5804__auto___19702__$1){
var seq__18904_19703__$1 = temp__5804__auto___19702__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18904_19703__$1)){
var c__5568__auto___19704 = cljs.core.chunk_first(seq__18904_19703__$1);
var G__19705 = cljs.core.chunk_rest(seq__18904_19703__$1);
var G__19706 = c__5568__auto___19704;
var G__19707 = cljs.core.count(c__5568__auto___19704);
var G__19708 = (0);
seq__18904_19674 = G__19705;
chunk__18906_19675 = G__19706;
count__18907_19676 = G__19707;
i__18908_19677 = G__19708;
continue;
} else {
var child_19709 = cljs.core.first(seq__18904_19703__$1);
if(cljs.core.truth_(child_19709)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19709);


var G__19710 = cljs.core.next(seq__18904_19703__$1);
var G__19711 = null;
var G__19712 = (0);
var G__19713 = (0);
seq__18904_19674 = G__19710;
chunk__18906_19675 = G__19711;
count__18907_19676 = G__19712;
i__18908_19677 = G__19713;
continue;
} else {
var G__19717 = cljs.core.next(seq__18904_19703__$1);
var G__19718 = null;
var G__19719 = (0);
var G__19720 = (0);
seq__18904_19674 = G__19717;
chunk__18906_19675 = G__19718;
count__18907_19676 = G__19719;
i__18908_19677 = G__19720;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19673);
}


var G__19724 = cljs.core.next(seq__18786_19666__$1);
var G__19725 = null;
var G__19726 = (0);
var G__19727 = (0);
seq__18786_19626 = G__19724;
chunk__18787_19627 = G__19725;
count__18788_19628 = G__19726;
i__18789_19629 = G__19727;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18947 = cljs.core.seq(node);
var chunk__18948 = null;
var count__18949 = (0);
var i__18950 = (0);
while(true){
if((i__18950 < count__18949)){
var n = chunk__18948.cljs$core$IIndexed$_nth$arity$2(null,i__18950);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19736 = seq__18947;
var G__19737 = chunk__18948;
var G__19738 = count__18949;
var G__19739 = (i__18950 + (1));
seq__18947 = G__19736;
chunk__18948 = G__19737;
count__18949 = G__19738;
i__18950 = G__19739;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18947);
if(temp__5804__auto__){
var seq__18947__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18947__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18947__$1);
var G__19747 = cljs.core.chunk_rest(seq__18947__$1);
var G__19748 = c__5568__auto__;
var G__19749 = cljs.core.count(c__5568__auto__);
var G__19750 = (0);
seq__18947 = G__19747;
chunk__18948 = G__19748;
count__18949 = G__19749;
i__18950 = G__19750;
continue;
} else {
var n = cljs.core.first(seq__18947__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19751 = cljs.core.next(seq__18947__$1);
var G__19752 = null;
var G__19753 = (0);
var G__19754 = (0);
seq__18947 = G__19751;
chunk__18948 = G__19752;
count__18949 = G__19753;
i__18950 = G__19754;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18973 = arguments.length;
switch (G__18973) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18990 = arguments.length;
switch (G__18990) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__19015 = arguments.length;
switch (G__19015) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19768 = arguments.length;
var i__5770__auto___19769 = (0);
while(true){
if((i__5770__auto___19769 < len__5769__auto___19768)){
args__5775__auto__.push((arguments[i__5770__auto___19769]));

var G__19771 = (i__5770__auto___19769 + (1));
i__5770__auto___19769 = G__19771;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__19050_19772 = cljs.core.seq(nodes);
var chunk__19051_19773 = null;
var count__19052_19774 = (0);
var i__19053_19775 = (0);
while(true){
if((i__19053_19775 < count__19052_19774)){
var node_19776 = chunk__19051_19773.cljs$core$IIndexed$_nth$arity$2(null,i__19053_19775);
fragment.appendChild(shadow.dom._to_dom(node_19776));


var G__19777 = seq__19050_19772;
var G__19778 = chunk__19051_19773;
var G__19779 = count__19052_19774;
var G__19780 = (i__19053_19775 + (1));
seq__19050_19772 = G__19777;
chunk__19051_19773 = G__19778;
count__19052_19774 = G__19779;
i__19053_19775 = G__19780;
continue;
} else {
var temp__5804__auto___19781 = cljs.core.seq(seq__19050_19772);
if(temp__5804__auto___19781){
var seq__19050_19782__$1 = temp__5804__auto___19781;
if(cljs.core.chunked_seq_QMARK_(seq__19050_19782__$1)){
var c__5568__auto___19783 = cljs.core.chunk_first(seq__19050_19782__$1);
var G__19784 = cljs.core.chunk_rest(seq__19050_19782__$1);
var G__19785 = c__5568__auto___19783;
var G__19786 = cljs.core.count(c__5568__auto___19783);
var G__19787 = (0);
seq__19050_19772 = G__19784;
chunk__19051_19773 = G__19785;
count__19052_19774 = G__19786;
i__19053_19775 = G__19787;
continue;
} else {
var node_19789 = cljs.core.first(seq__19050_19782__$1);
fragment.appendChild(shadow.dom._to_dom(node_19789));


var G__19793 = cljs.core.next(seq__19050_19782__$1);
var G__19794 = null;
var G__19795 = (0);
var G__19796 = (0);
seq__19050_19772 = G__19793;
chunk__19051_19773 = G__19794;
count__19052_19774 = G__19795;
i__19053_19775 = G__19796;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19039){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19039));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19079_19798 = cljs.core.seq(scripts);
var chunk__19080_19799 = null;
var count__19081_19800 = (0);
var i__19082_19801 = (0);
while(true){
if((i__19082_19801 < count__19081_19800)){
var vec__19102_19802 = chunk__19080_19799.cljs$core$IIndexed$_nth$arity$2(null,i__19082_19801);
var script_tag_19803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19102_19802,(0),null);
var script_body_19804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19102_19802,(1),null);
eval(script_body_19804);


var G__19805 = seq__19079_19798;
var G__19806 = chunk__19080_19799;
var G__19807 = count__19081_19800;
var G__19808 = (i__19082_19801 + (1));
seq__19079_19798 = G__19805;
chunk__19080_19799 = G__19806;
count__19081_19800 = G__19807;
i__19082_19801 = G__19808;
continue;
} else {
var temp__5804__auto___19810 = cljs.core.seq(seq__19079_19798);
if(temp__5804__auto___19810){
var seq__19079_19811__$1 = temp__5804__auto___19810;
if(cljs.core.chunked_seq_QMARK_(seq__19079_19811__$1)){
var c__5568__auto___19812 = cljs.core.chunk_first(seq__19079_19811__$1);
var G__19813 = cljs.core.chunk_rest(seq__19079_19811__$1);
var G__19814 = c__5568__auto___19812;
var G__19815 = cljs.core.count(c__5568__auto___19812);
var G__19816 = (0);
seq__19079_19798 = G__19813;
chunk__19080_19799 = G__19814;
count__19081_19800 = G__19815;
i__19082_19801 = G__19816;
continue;
} else {
var vec__19108_19817 = cljs.core.first(seq__19079_19811__$1);
var script_tag_19818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19108_19817,(0),null);
var script_body_19819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19108_19817,(1),null);
eval(script_body_19819);


var G__19820 = cljs.core.next(seq__19079_19811__$1);
var G__19821 = null;
var G__19822 = (0);
var G__19823 = (0);
seq__19079_19798 = G__19820;
chunk__19080_19799 = G__19821;
count__19081_19800 = G__19822;
i__19082_19801 = G__19823;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__19116){
var vec__19117 = p__19116;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19117,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19117,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__19138 = arguments.length;
switch (G__19138) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__19167 = cljs.core.seq(style_keys);
var chunk__19169 = null;
var count__19170 = (0);
var i__19171 = (0);
while(true){
if((i__19171 < count__19170)){
var it = chunk__19169.cljs$core$IIndexed$_nth$arity$2(null,i__19171);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19830 = seq__19167;
var G__19831 = chunk__19169;
var G__19832 = count__19170;
var G__19833 = (i__19171 + (1));
seq__19167 = G__19830;
chunk__19169 = G__19831;
count__19170 = G__19832;
i__19171 = G__19833;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19167);
if(temp__5804__auto__){
var seq__19167__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19167__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19167__$1);
var G__19834 = cljs.core.chunk_rest(seq__19167__$1);
var G__19835 = c__5568__auto__;
var G__19836 = cljs.core.count(c__5568__auto__);
var G__19837 = (0);
seq__19167 = G__19834;
chunk__19169 = G__19835;
count__19170 = G__19836;
i__19171 = G__19837;
continue;
} else {
var it = cljs.core.first(seq__19167__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19838 = cljs.core.next(seq__19167__$1);
var G__19839 = null;
var G__19840 = (0);
var G__19841 = (0);
seq__19167 = G__19838;
chunk__19169 = G__19839;
count__19170 = G__19840;
i__19171 = G__19841;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19186,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19209 = k19186;
var G__19209__$1 = (((G__19209 instanceof cljs.core.Keyword))?G__19209.fqn:null);
switch (G__19209__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19186,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19220){
var vec__19221 = p__19220;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19221,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19221,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19185){
var self__ = this;
var G__19185__$1 = this;
return (new cljs.core.RecordIter((0),G__19185__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19187,other19188){
var self__ = this;
var this19187__$1 = this;
return (((!((other19188 == null)))) && ((((this19187__$1.constructor === other19188.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19187__$1.x,other19188.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19187__$1.y,other19188.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19187__$1.__extmap,other19188.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19186){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19246 = k19186;
var G__19246__$1 = (((G__19246 instanceof cljs.core.Keyword))?G__19246.fqn:null);
switch (G__19246__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19186);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19185){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19247 = cljs.core.keyword_identical_QMARK_;
var expr__19248 = k__5352__auto__;
if(cljs.core.truth_((pred__19247.cljs$core$IFn$_invoke$arity$2 ? pred__19247.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19248) : pred__19247.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19248)))){
return (new shadow.dom.Coordinate(G__19185,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19247.cljs$core$IFn$_invoke$arity$2 ? pred__19247.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19248) : pred__19247.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19248)))){
return (new shadow.dom.Coordinate(self__.x,G__19185,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19185),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19185){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19185,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19195){
var extmap__5385__auto__ = (function (){var G__19256 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19195,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19195)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19256);
} else {
return G__19256;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19195),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19195),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19266,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19277 = k19266;
var G__19277__$1 = (((G__19277 instanceof cljs.core.Keyword))?G__19277.fqn:null);
switch (G__19277__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19266,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19278){
var vec__19279 = p__19278;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19279,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19279,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19265){
var self__ = this;
var G__19265__$1 = this;
return (new cljs.core.RecordIter((0),G__19265__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19267,other19268){
var self__ = this;
var this19267__$1 = this;
return (((!((other19268 == null)))) && ((((this19267__$1.constructor === other19268.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19267__$1.w,other19268.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19267__$1.h,other19268.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19267__$1.__extmap,other19268.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19266){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19289 = k19266;
var G__19289__$1 = (((G__19289 instanceof cljs.core.Keyword))?G__19289.fqn:null);
switch (G__19289__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19266);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19265){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19295 = cljs.core.keyword_identical_QMARK_;
var expr__19296 = k__5352__auto__;
if(cljs.core.truth_((pred__19295.cljs$core$IFn$_invoke$arity$2 ? pred__19295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19296) : pred__19295.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19296)))){
return (new shadow.dom.Size(G__19265,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19295.cljs$core$IFn$_invoke$arity$2 ? pred__19295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19296) : pred__19295.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19296)))){
return (new shadow.dom.Size(self__.w,G__19265,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19265),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19265){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19265,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19271){
var extmap__5385__auto__ = (function (){var G__19306 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19271,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19271)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19306);
} else {
return G__19306;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19271),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19271),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19878 = (i + (1));
var G__19879 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19878;
ret = G__19879;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19347){
var vec__19348 = p__19347;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19348,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19348,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19354 = arguments.length;
switch (G__19354) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19884 = ps;
var G__19885 = (i + (1));
el__$1 = G__19884;
i = G__19885;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19428 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19428,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19428,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19428,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19432_19890 = cljs.core.seq(props);
var chunk__19433_19891 = null;
var count__19434_19892 = (0);
var i__19435_19893 = (0);
while(true){
if((i__19435_19893 < count__19434_19892)){
var vec__19454_19894 = chunk__19433_19891.cljs$core$IIndexed$_nth$arity$2(null,i__19435_19893);
var k_19895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19454_19894,(0),null);
var v_19896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19454_19894,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19895);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19895),v_19896);


var G__19899 = seq__19432_19890;
var G__19900 = chunk__19433_19891;
var G__19901 = count__19434_19892;
var G__19902 = (i__19435_19893 + (1));
seq__19432_19890 = G__19899;
chunk__19433_19891 = G__19900;
count__19434_19892 = G__19901;
i__19435_19893 = G__19902;
continue;
} else {
var temp__5804__auto___19903 = cljs.core.seq(seq__19432_19890);
if(temp__5804__auto___19903){
var seq__19432_19904__$1 = temp__5804__auto___19903;
if(cljs.core.chunked_seq_QMARK_(seq__19432_19904__$1)){
var c__5568__auto___19905 = cljs.core.chunk_first(seq__19432_19904__$1);
var G__19906 = cljs.core.chunk_rest(seq__19432_19904__$1);
var G__19907 = c__5568__auto___19905;
var G__19908 = cljs.core.count(c__5568__auto___19905);
var G__19909 = (0);
seq__19432_19890 = G__19906;
chunk__19433_19891 = G__19907;
count__19434_19892 = G__19908;
i__19435_19893 = G__19909;
continue;
} else {
var vec__19459_19911 = cljs.core.first(seq__19432_19904__$1);
var k_19912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19459_19911,(0),null);
var v_19913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19459_19911,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19912);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19912),v_19913);


var G__19915 = cljs.core.next(seq__19432_19904__$1);
var G__19916 = null;
var G__19917 = (0);
var G__19918 = (0);
seq__19432_19890 = G__19915;
chunk__19433_19891 = G__19916;
count__19434_19892 = G__19917;
i__19435_19893 = G__19918;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19473 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19473,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19473,(1),null);
var seq__19479_19919 = cljs.core.seq(node_children);
var chunk__19481_19920 = null;
var count__19482_19921 = (0);
var i__19483_19922 = (0);
while(true){
if((i__19483_19922 < count__19482_19921)){
var child_struct_19923 = chunk__19481_19920.cljs$core$IIndexed$_nth$arity$2(null,i__19483_19922);
if((!((child_struct_19923 == null)))){
if(typeof child_struct_19923 === 'string'){
var text_19924 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19924),child_struct_19923].join(''));
} else {
var children_19925 = shadow.dom.svg_node(child_struct_19923);
if(cljs.core.seq_QMARK_(children_19925)){
var seq__19506_19926 = cljs.core.seq(children_19925);
var chunk__19508_19927 = null;
var count__19509_19928 = (0);
var i__19510_19929 = (0);
while(true){
if((i__19510_19929 < count__19509_19928)){
var child_19930 = chunk__19508_19927.cljs$core$IIndexed$_nth$arity$2(null,i__19510_19929);
if(cljs.core.truth_(child_19930)){
node.appendChild(child_19930);


var G__19931 = seq__19506_19926;
var G__19932 = chunk__19508_19927;
var G__19933 = count__19509_19928;
var G__19934 = (i__19510_19929 + (1));
seq__19506_19926 = G__19931;
chunk__19508_19927 = G__19932;
count__19509_19928 = G__19933;
i__19510_19929 = G__19934;
continue;
} else {
var G__19935 = seq__19506_19926;
var G__19936 = chunk__19508_19927;
var G__19937 = count__19509_19928;
var G__19938 = (i__19510_19929 + (1));
seq__19506_19926 = G__19935;
chunk__19508_19927 = G__19936;
count__19509_19928 = G__19937;
i__19510_19929 = G__19938;
continue;
}
} else {
var temp__5804__auto___19939 = cljs.core.seq(seq__19506_19926);
if(temp__5804__auto___19939){
var seq__19506_19940__$1 = temp__5804__auto___19939;
if(cljs.core.chunked_seq_QMARK_(seq__19506_19940__$1)){
var c__5568__auto___19941 = cljs.core.chunk_first(seq__19506_19940__$1);
var G__19942 = cljs.core.chunk_rest(seq__19506_19940__$1);
var G__19943 = c__5568__auto___19941;
var G__19944 = cljs.core.count(c__5568__auto___19941);
var G__19945 = (0);
seq__19506_19926 = G__19942;
chunk__19508_19927 = G__19943;
count__19509_19928 = G__19944;
i__19510_19929 = G__19945;
continue;
} else {
var child_19946 = cljs.core.first(seq__19506_19940__$1);
if(cljs.core.truth_(child_19946)){
node.appendChild(child_19946);


var G__19947 = cljs.core.next(seq__19506_19940__$1);
var G__19948 = null;
var G__19949 = (0);
var G__19950 = (0);
seq__19506_19926 = G__19947;
chunk__19508_19927 = G__19948;
count__19509_19928 = G__19949;
i__19510_19929 = G__19950;
continue;
} else {
var G__19951 = cljs.core.next(seq__19506_19940__$1);
var G__19952 = null;
var G__19953 = (0);
var G__19954 = (0);
seq__19506_19926 = G__19951;
chunk__19508_19927 = G__19952;
count__19509_19928 = G__19953;
i__19510_19929 = G__19954;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19925);
}
}


var G__19955 = seq__19479_19919;
var G__19956 = chunk__19481_19920;
var G__19957 = count__19482_19921;
var G__19958 = (i__19483_19922 + (1));
seq__19479_19919 = G__19955;
chunk__19481_19920 = G__19956;
count__19482_19921 = G__19957;
i__19483_19922 = G__19958;
continue;
} else {
var G__19959 = seq__19479_19919;
var G__19960 = chunk__19481_19920;
var G__19961 = count__19482_19921;
var G__19962 = (i__19483_19922 + (1));
seq__19479_19919 = G__19959;
chunk__19481_19920 = G__19960;
count__19482_19921 = G__19961;
i__19483_19922 = G__19962;
continue;
}
} else {
var temp__5804__auto___19963 = cljs.core.seq(seq__19479_19919);
if(temp__5804__auto___19963){
var seq__19479_19964__$1 = temp__5804__auto___19963;
if(cljs.core.chunked_seq_QMARK_(seq__19479_19964__$1)){
var c__5568__auto___19965 = cljs.core.chunk_first(seq__19479_19964__$1);
var G__19970 = cljs.core.chunk_rest(seq__19479_19964__$1);
var G__19971 = c__5568__auto___19965;
var G__19972 = cljs.core.count(c__5568__auto___19965);
var G__19973 = (0);
seq__19479_19919 = G__19970;
chunk__19481_19920 = G__19971;
count__19482_19921 = G__19972;
i__19483_19922 = G__19973;
continue;
} else {
var child_struct_19974 = cljs.core.first(seq__19479_19964__$1);
if((!((child_struct_19974 == null)))){
if(typeof child_struct_19974 === 'string'){
var text_19975 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19975),child_struct_19974].join(''));
} else {
var children_19976 = shadow.dom.svg_node(child_struct_19974);
if(cljs.core.seq_QMARK_(children_19976)){
var seq__19517_19977 = cljs.core.seq(children_19976);
var chunk__19519_19978 = null;
var count__19520_19979 = (0);
var i__19521_19980 = (0);
while(true){
if((i__19521_19980 < count__19520_19979)){
var child_19984 = chunk__19519_19978.cljs$core$IIndexed$_nth$arity$2(null,i__19521_19980);
if(cljs.core.truth_(child_19984)){
node.appendChild(child_19984);


var G__19985 = seq__19517_19977;
var G__19986 = chunk__19519_19978;
var G__19987 = count__19520_19979;
var G__19988 = (i__19521_19980 + (1));
seq__19517_19977 = G__19985;
chunk__19519_19978 = G__19986;
count__19520_19979 = G__19987;
i__19521_19980 = G__19988;
continue;
} else {
var G__19989 = seq__19517_19977;
var G__19990 = chunk__19519_19978;
var G__19991 = count__19520_19979;
var G__19992 = (i__19521_19980 + (1));
seq__19517_19977 = G__19989;
chunk__19519_19978 = G__19990;
count__19520_19979 = G__19991;
i__19521_19980 = G__19992;
continue;
}
} else {
var temp__5804__auto___19993__$1 = cljs.core.seq(seq__19517_19977);
if(temp__5804__auto___19993__$1){
var seq__19517_19994__$1 = temp__5804__auto___19993__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19517_19994__$1)){
var c__5568__auto___19998 = cljs.core.chunk_first(seq__19517_19994__$1);
var G__19999 = cljs.core.chunk_rest(seq__19517_19994__$1);
var G__20000 = c__5568__auto___19998;
var G__20001 = cljs.core.count(c__5568__auto___19998);
var G__20002 = (0);
seq__19517_19977 = G__19999;
chunk__19519_19978 = G__20000;
count__19520_19979 = G__20001;
i__19521_19980 = G__20002;
continue;
} else {
var child_20003 = cljs.core.first(seq__19517_19994__$1);
if(cljs.core.truth_(child_20003)){
node.appendChild(child_20003);


var G__20004 = cljs.core.next(seq__19517_19994__$1);
var G__20005 = null;
var G__20006 = (0);
var G__20007 = (0);
seq__19517_19977 = G__20004;
chunk__19519_19978 = G__20005;
count__19520_19979 = G__20006;
i__19521_19980 = G__20007;
continue;
} else {
var G__20008 = cljs.core.next(seq__19517_19994__$1);
var G__20009 = null;
var G__20010 = (0);
var G__20011 = (0);
seq__19517_19977 = G__20008;
chunk__19519_19978 = G__20009;
count__19520_19979 = G__20010;
i__19521_19980 = G__20011;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19976);
}
}


var G__20012 = cljs.core.next(seq__19479_19964__$1);
var G__20013 = null;
var G__20014 = (0);
var G__20015 = (0);
seq__19479_19919 = G__20012;
chunk__19481_19920 = G__20013;
count__19482_19921 = G__20014;
i__19483_19922 = G__20015;
continue;
} else {
var G__20016 = cljs.core.next(seq__19479_19964__$1);
var G__20017 = null;
var G__20018 = (0);
var G__20019 = (0);
seq__19479_19919 = G__20016;
chunk__19481_19920 = G__20017;
count__19482_19921 = G__20018;
i__19483_19922 = G__20019;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20023 = arguments.length;
var i__5770__auto___20024 = (0);
while(true){
if((i__5770__auto___20024 < len__5769__auto___20023)){
args__5775__auto__.push((arguments[i__5770__auto___20024]));

var G__20025 = (i__5770__auto___20024 + (1));
i__5770__auto___20024 = G__20025;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19530){
var G__19531 = cljs.core.first(seq19530);
var seq19530__$1 = cljs.core.next(seq19530);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19531,seq19530__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19538 = arguments.length;
switch (G__19538) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15574__auto___20043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_19543){
var state_val_19544 = (state_19543[(1)]);
if((state_val_19544 === (1))){
var state_19543__$1 = state_19543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19543__$1,(2),once_or_cleanup);
} else {
if((state_val_19544 === (2))){
var inst_19540 = (state_19543[(2)]);
var inst_19541 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19543__$1 = (function (){var statearr_19549 = state_19543;
(statearr_19549[(7)] = inst_19540);

return statearr_19549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19543__$1,inst_19541);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15401__auto__ = null;
var shadow$dom$state_machine__15401__auto____0 = (function (){
var statearr_19550 = [null,null,null,null,null,null,null,null];
(statearr_19550[(0)] = shadow$dom$state_machine__15401__auto__);

(statearr_19550[(1)] = (1));

return statearr_19550;
});
var shadow$dom$state_machine__15401__auto____1 = (function (state_19543){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19543);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19551){var ex__15404__auto__ = e19551;
var statearr_19552_20054 = state_19543;
(statearr_19552_20054[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_19543[(4)]))){
var statearr_19553_20055 = state_19543;
(statearr_19553_20055[(1)] = cljs.core.first((state_19543[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20056 = state_19543;
state_19543 = G__20056;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
shadow$dom$state_machine__15401__auto__ = function(state_19543){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15401__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15401__auto____1.call(this,state_19543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15401__auto____0;
shadow$dom$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15401__auto____1;
return shadow$dom$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_19558 = f__15575__auto__();
(statearr_19558[(6)] = c__15574__auto___20043);

return statearr_19558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
