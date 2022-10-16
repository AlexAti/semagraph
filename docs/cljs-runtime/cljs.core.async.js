goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15648 = arguments.length;
switch (G__15648) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15655 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15655 = (function (f,blockable,meta15656){
this.f = f;
this.blockable = blockable;
this.meta15656 = meta15656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15657,meta15656__$1){
var self__ = this;
var _15657__$1 = this;
return (new cljs.core.async.t_cljs$core$async15655(self__.f,self__.blockable,meta15656__$1));
}));

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15657){
var self__ = this;
var _15657__$1 = this;
return self__.meta15656;
}));

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15656","meta15656",-142145197,null)], null);
}));

(cljs.core.async.t_cljs$core$async15655.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15655");

(cljs.core.async.t_cljs$core$async15655.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15655");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15655.
 */
cljs.core.async.__GT_t_cljs$core$async15655 = (function cljs$core$async$__GT_t_cljs$core$async15655(f__$1,blockable__$1,meta15656){
return (new cljs.core.async.t_cljs$core$async15655(f__$1,blockable__$1,meta15656));
});

}

return (new cljs.core.async.t_cljs$core$async15655(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15692 = arguments.length;
switch (G__15692) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15715 = arguments.length;
switch (G__15715) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15728 = arguments.length;
switch (G__15728) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18292 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18292) : fn1.call(null,val_18292));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18292) : fn1.call(null,val_18292));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15763 = arguments.length;
switch (G__15763) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___18314 = n;
var x_18316 = (0);
while(true){
if((x_18316 < n__5636__auto___18314)){
(a[x_18316] = x_18316);

var G__18317 = (x_18316 + (1));
x_18316 = G__18317;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15775 = (function (flag,meta15776){
this.flag = flag;
this.meta15776 = meta15776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15777,meta15776__$1){
var self__ = this;
var _15777__$1 = this;
return (new cljs.core.async.t_cljs$core$async15775(self__.flag,meta15776__$1));
}));

(cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15777){
var self__ = this;
var _15777__$1 = this;
return self__.meta15776;
}));

(cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15776","meta15776",1626999875,null)], null);
}));

(cljs.core.async.t_cljs$core$async15775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15775");

(cljs.core.async.t_cljs$core$async15775.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15775.
 */
cljs.core.async.__GT_t_cljs$core$async15775 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15775(flag__$1,meta15776){
return (new cljs.core.async.t_cljs$core$async15775(flag__$1,meta15776));
});

}

return (new cljs.core.async.t_cljs$core$async15775(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15826 = (function (flag,cb,meta15827){
this.flag = flag;
this.cb = cb;
this.meta15827 = meta15827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15828,meta15827__$1){
var self__ = this;
var _15828__$1 = this;
return (new cljs.core.async.t_cljs$core$async15826(self__.flag,self__.cb,meta15827__$1));
}));

(cljs.core.async.t_cljs$core$async15826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15828){
var self__ = this;
var _15828__$1 = this;
return self__.meta15827;
}));

(cljs.core.async.t_cljs$core$async15826.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15826.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15827","meta15827",2013180181,null)], null);
}));

(cljs.core.async.t_cljs$core$async15826.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15826");

(cljs.core.async.t_cljs$core$async15826.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15826");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15826.
 */
cljs.core.async.__GT_t_cljs$core$async15826 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15826(flag__$1,cb__$1,meta15827){
return (new cljs.core.async.t_cljs$core$async15826(flag__$1,cb__$1,meta15827));
});

}

return (new cljs.core.async.t_cljs$core$async15826(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15842_SHARP_){
var G__15844 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15842_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15844) : fret.call(null,G__15844));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15843_SHARP_){
var G__15845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15843_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15845) : fret.call(null,G__15845));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18349 = (i + (1));
i = G__18349;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18356 = arguments.length;
var i__5770__auto___18358 = (0);
while(true){
if((i__5770__auto___18358 < len__5769__auto___18356)){
args__5775__auto__.push((arguments[i__5770__auto___18358]));

var G__18359 = (i__5770__auto___18358 + (1));
i__5770__auto___18358 = G__18359;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15859){
var map__15860 = p__15859;
var map__15860__$1 = cljs.core.__destructure_map(map__15860);
var opts = map__15860__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15850){
var G__15851 = cljs.core.first(seq15850);
var seq15850__$1 = cljs.core.next(seq15850);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15851,seq15850__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15874 = arguments.length;
switch (G__15874) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15574__auto___18372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_15937){
var state_val_15938 = (state_15937[(1)]);
if((state_val_15938 === (7))){
var inst_15931 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
var statearr_15941_18376 = state_15937__$1;
(statearr_15941_18376[(2)] = inst_15931);

(statearr_15941_18376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (1))){
var state_15937__$1 = state_15937;
var statearr_15942_18378 = state_15937__$1;
(statearr_15942_18378[(2)] = null);

(statearr_15942_18378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (4))){
var inst_15890 = (state_15937[(7)]);
var inst_15890__$1 = (state_15937[(2)]);
var inst_15897 = (inst_15890__$1 == null);
var state_15937__$1 = (function (){var statearr_15948 = state_15937;
(statearr_15948[(7)] = inst_15890__$1);

return statearr_15948;
})();
if(cljs.core.truth_(inst_15897)){
var statearr_15952_18382 = state_15937__$1;
(statearr_15952_18382[(1)] = (5));

} else {
var statearr_15953_18383 = state_15937__$1;
(statearr_15953_18383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (13))){
var state_15937__$1 = state_15937;
var statearr_15954_18386 = state_15937__$1;
(statearr_15954_18386[(2)] = null);

(statearr_15954_18386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (6))){
var inst_15890 = (state_15937[(7)]);
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15937__$1,(11),to,inst_15890);
} else {
if((state_val_15938 === (3))){
var inst_15933 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15937__$1,inst_15933);
} else {
if((state_val_15938 === (12))){
var state_15937__$1 = state_15937;
var statearr_15955_18390 = state_15937__$1;
(statearr_15955_18390[(2)] = null);

(statearr_15955_18390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (2))){
var state_15937__$1 = state_15937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15937__$1,(4),from);
} else {
if((state_val_15938 === (11))){
var inst_15924 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
if(cljs.core.truth_(inst_15924)){
var statearr_15957_18391 = state_15937__$1;
(statearr_15957_18391[(1)] = (12));

} else {
var statearr_15961_18392 = state_15937__$1;
(statearr_15961_18392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (9))){
var state_15937__$1 = state_15937;
var statearr_15962_18394 = state_15937__$1;
(statearr_15962_18394[(2)] = null);

(statearr_15962_18394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (5))){
var state_15937__$1 = state_15937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15963_18395 = state_15937__$1;
(statearr_15963_18395[(1)] = (8));

} else {
var statearr_15966_18396 = state_15937__$1;
(statearr_15966_18396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (14))){
var inst_15929 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
var statearr_15967_18397 = state_15937__$1;
(statearr_15967_18397[(2)] = inst_15929);

(statearr_15967_18397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (10))){
var inst_15921 = (state_15937[(2)]);
var state_15937__$1 = state_15937;
var statearr_15974_18402 = state_15937__$1;
(statearr_15974_18402[(2)] = inst_15921);

(statearr_15974_18402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15938 === (8))){
var inst_15911 = cljs.core.async.close_BANG_(to);
var state_15937__$1 = state_15937;
var statearr_15975_18403 = state_15937__$1;
(statearr_15975_18403[(2)] = inst_15911);

(statearr_15975_18403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_15976 = [null,null,null,null,null,null,null,null];
(statearr_15976[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_15976[(1)] = (1));

return statearr_15976;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_15937){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_15937);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e15978){var ex__15404__auto__ = e15978;
var statearr_15982_18416 = state_15937;
(statearr_15982_18416[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_15937[(4)]))){
var statearr_15983_18417 = state_15937;
(statearr_15983_18417[(1)] = cljs.core.first((state_15937[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18418 = state_15937;
state_15937 = G__18418;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_15937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_15937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_15984 = f__15575__auto__();
(statearr_15984[(6)] = c__15574__auto___18372);

return statearr_15984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15989){
var vec__15990 = p__15989;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(1),null);
var job = vec__15990;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15574__auto___18444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_15997){
var state_val_15998 = (state_15997[(1)]);
if((state_val_15998 === (1))){
var state_15997__$1 = state_15997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15997__$1,(2),res,v);
} else {
if((state_val_15998 === (2))){
var inst_15994 = (state_15997[(2)]);
var inst_15995 = cljs.core.async.close_BANG_(res);
var state_15997__$1 = (function (){var statearr_15999 = state_15997;
(statearr_15999[(7)] = inst_15994);

return statearr_15999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15997__$1,inst_15995);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_16001 = [null,null,null,null,null,null,null,null];
(statearr_16001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_16001[(1)] = (1));

return statearr_16001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_15997){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_15997);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16002){var ex__15404__auto__ = e16002;
var statearr_16003_18457 = state_15997;
(statearr_16003_18457[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_15997[(4)]))){
var statearr_16004_18458 = state_15997;
(statearr_16004_18458[(1)] = cljs.core.first((state_15997[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18459 = state_15997;
state_15997 = G__18459;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_15997){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_15997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_16005 = f__15575__auto__();
(statearr_16005[(6)] = c__15574__auto___18444);

return statearr_16005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16006){
var vec__16007 = p__16006;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007,(1),null);
var job = vec__16007;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___18464 = n;
var __18465 = (0);
while(true){
if((__18465 < n__5636__auto___18464)){
var G__16010_18470 = type;
var G__16010_18471__$1 = (((G__16010_18470 instanceof cljs.core.Keyword))?G__16010_18470.fqn:null);
switch (G__16010_18471__$1) {
case "compute":
var c__15574__auto___18473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18465,c__15574__auto___18473,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async){
return (function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = ((function (__18465,c__15574__auto___18473,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async){
return (function (state_16060){
var state_val_16061 = (state_16060[(1)]);
if((state_val_16061 === (1))){
var state_16060__$1 = state_16060;
var statearr_16062_18476 = state_16060__$1;
(statearr_16062_18476[(2)] = null);

(statearr_16062_18476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16061 === (2))){
var state_16060__$1 = state_16060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16060__$1,(4),jobs);
} else {
if((state_val_16061 === (3))){
var inst_16058 = (state_16060[(2)]);
var state_16060__$1 = state_16060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16060__$1,inst_16058);
} else {
if((state_val_16061 === (4))){
var inst_16013 = (state_16060[(2)]);
var inst_16014 = process__$1(inst_16013);
var state_16060__$1 = state_16060;
if(cljs.core.truth_(inst_16014)){
var statearr_16063_18484 = state_16060__$1;
(statearr_16063_18484[(1)] = (5));

} else {
var statearr_16064_18486 = state_16060__$1;
(statearr_16064_18486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16061 === (5))){
var state_16060__$1 = state_16060;
var statearr_16065_18488 = state_16060__$1;
(statearr_16065_18488[(2)] = null);

(statearr_16065_18488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16061 === (6))){
var state_16060__$1 = state_16060;
var statearr_16066_18489 = state_16060__$1;
(statearr_16066_18489[(2)] = null);

(statearr_16066_18489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16061 === (7))){
var inst_16056 = (state_16060[(2)]);
var state_16060__$1 = state_16060;
var statearr_16070_18490 = state_16060__$1;
(statearr_16070_18490[(2)] = inst_16056);

(statearr_16070_18490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18465,c__15574__auto___18473,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async))
;
return ((function (__18465,switch__15400__auto__,c__15574__auto___18473,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_16071 = [null,null,null,null,null,null,null];
(statearr_16071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_16071[(1)] = (1));

return statearr_16071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_16060){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_16060);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16072){var ex__15404__auto__ = e16072;
var statearr_16073_18494 = state_16060;
(statearr_16073_18494[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_16060[(4)]))){
var statearr_16074_18495 = state_16060;
(statearr_16074_18495[(1)] = cljs.core.first((state_16060[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18497 = state_16060;
state_16060 = G__18497;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_16060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_16060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(__18465,switch__15400__auto__,c__15574__auto___18473,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async))
})();
var state__15576__auto__ = (function (){var statearr_16077 = f__15575__auto__();
(statearr_16077[(6)] = c__15574__auto___18473);

return statearr_16077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
});})(__18465,c__15574__auto___18473,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async))
);


break;
case "async":
var c__15574__auto___18499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18465,c__15574__auto___18499,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async){
return (function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = ((function (__18465,c__15574__auto___18499,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async){
return (function (state_16090){
var state_val_16091 = (state_16090[(1)]);
if((state_val_16091 === (1))){
var state_16090__$1 = state_16090;
var statearr_16092_18503 = state_16090__$1;
(statearr_16092_18503[(2)] = null);

(statearr_16092_18503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16091 === (2))){
var state_16090__$1 = state_16090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16090__$1,(4),jobs);
} else {
if((state_val_16091 === (3))){
var inst_16088 = (state_16090[(2)]);
var state_16090__$1 = state_16090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16090__$1,inst_16088);
} else {
if((state_val_16091 === (4))){
var inst_16080 = (state_16090[(2)]);
var inst_16081 = async(inst_16080);
var state_16090__$1 = state_16090;
if(cljs.core.truth_(inst_16081)){
var statearr_16100_18508 = state_16090__$1;
(statearr_16100_18508[(1)] = (5));

} else {
var statearr_16102_18509 = state_16090__$1;
(statearr_16102_18509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16091 === (5))){
var state_16090__$1 = state_16090;
var statearr_16107_18512 = state_16090__$1;
(statearr_16107_18512[(2)] = null);

(statearr_16107_18512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16091 === (6))){
var state_16090__$1 = state_16090;
var statearr_16108_18513 = state_16090__$1;
(statearr_16108_18513[(2)] = null);

(statearr_16108_18513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16091 === (7))){
var inst_16086 = (state_16090[(2)]);
var state_16090__$1 = state_16090;
var statearr_16116_18516 = state_16090__$1;
(statearr_16116_18516[(2)] = inst_16086);

(statearr_16116_18516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18465,c__15574__auto___18499,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async))
;
return ((function (__18465,switch__15400__auto__,c__15574__auto___18499,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_16117 = [null,null,null,null,null,null,null];
(statearr_16117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_16117[(1)] = (1));

return statearr_16117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_16090){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_16090);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16121){var ex__15404__auto__ = e16121;
var statearr_16122_18519 = state_16090;
(statearr_16122_18519[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_16090[(4)]))){
var statearr_16123_18520 = state_16090;
(statearr_16123_18520[(1)] = cljs.core.first((state_16090[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18522 = state_16090;
state_16090 = G__18522;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_16090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_16090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(__18465,switch__15400__auto__,c__15574__auto___18499,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async))
})();
var state__15576__auto__ = (function (){var statearr_16124 = f__15575__auto__();
(statearr_16124[(6)] = c__15574__auto___18499);

return statearr_16124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
});})(__18465,c__15574__auto___18499,G__16010_18470,G__16010_18471__$1,n__5636__auto___18464,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16010_18471__$1)].join('')));

}

var G__18524 = (__18465 + (1));
__18465 = G__18524;
continue;
} else {
}
break;
}

var c__15574__auto___18525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_16147){
var state_val_16148 = (state_16147[(1)]);
if((state_val_16148 === (7))){
var inst_16142 = (state_16147[(2)]);
var state_16147__$1 = state_16147;
var statearr_16156_18526 = state_16147__$1;
(statearr_16156_18526[(2)] = inst_16142);

(statearr_16156_18526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (1))){
var state_16147__$1 = state_16147;
var statearr_16157_18527 = state_16147__$1;
(statearr_16157_18527[(2)] = null);

(statearr_16157_18527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (4))){
var inst_16127 = (state_16147[(7)]);
var inst_16127__$1 = (state_16147[(2)]);
var inst_16128 = (inst_16127__$1 == null);
var state_16147__$1 = (function (){var statearr_16158 = state_16147;
(statearr_16158[(7)] = inst_16127__$1);

return statearr_16158;
})();
if(cljs.core.truth_(inst_16128)){
var statearr_16160_18528 = state_16147__$1;
(statearr_16160_18528[(1)] = (5));

} else {
var statearr_16163_18529 = state_16147__$1;
(statearr_16163_18529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (6))){
var inst_16127 = (state_16147[(7)]);
var inst_16132 = (state_16147[(8)]);
var inst_16132__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16133 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16134 = [inst_16127,inst_16132__$1];
var inst_16135 = (new cljs.core.PersistentVector(null,2,(5),inst_16133,inst_16134,null));
var state_16147__$1 = (function (){var statearr_16166 = state_16147;
(statearr_16166[(8)] = inst_16132__$1);

return statearr_16166;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16147__$1,(8),jobs,inst_16135);
} else {
if((state_val_16148 === (3))){
var inst_16144 = (state_16147[(2)]);
var state_16147__$1 = state_16147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16147__$1,inst_16144);
} else {
if((state_val_16148 === (2))){
var state_16147__$1 = state_16147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16147__$1,(4),from);
} else {
if((state_val_16148 === (9))){
var inst_16139 = (state_16147[(2)]);
var state_16147__$1 = (function (){var statearr_16168 = state_16147;
(statearr_16168[(9)] = inst_16139);

return statearr_16168;
})();
var statearr_16170_18530 = state_16147__$1;
(statearr_16170_18530[(2)] = null);

(statearr_16170_18530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (5))){
var inst_16130 = cljs.core.async.close_BANG_(jobs);
var state_16147__$1 = state_16147;
var statearr_16173_18531 = state_16147__$1;
(statearr_16173_18531[(2)] = inst_16130);

(statearr_16173_18531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16148 === (8))){
var inst_16132 = (state_16147[(8)]);
var inst_16137 = (state_16147[(2)]);
var state_16147__$1 = (function (){var statearr_16177 = state_16147;
(statearr_16177[(10)] = inst_16137);

return statearr_16177;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16147__$1,(9),results,inst_16132);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_16181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_16181[(1)] = (1));

return statearr_16181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_16147){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_16147);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16182){var ex__15404__auto__ = e16182;
var statearr_16183_18533 = state_16147;
(statearr_16183_18533[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_16147[(4)]))){
var statearr_16184_18534 = state_16147;
(statearr_16184_18534[(1)] = cljs.core.first((state_16147[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18535 = state_16147;
state_16147 = G__18535;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_16147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_16147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_16185 = f__15575__auto__();
(statearr_16185[(6)] = c__15574__auto___18525);

return statearr_16185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


var c__15574__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_16226){
var state_val_16227 = (state_16226[(1)]);
if((state_val_16227 === (7))){
var inst_16222 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16232_18536 = state_16226__$1;
(statearr_16232_18536[(2)] = inst_16222);

(statearr_16232_18536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (20))){
var state_16226__$1 = state_16226;
var statearr_16234_18537 = state_16226__$1;
(statearr_16234_18537[(2)] = null);

(statearr_16234_18537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (1))){
var state_16226__$1 = state_16226;
var statearr_16236_18538 = state_16226__$1;
(statearr_16236_18538[(2)] = null);

(statearr_16236_18538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (4))){
var inst_16188 = (state_16226[(7)]);
var inst_16188__$1 = (state_16226[(2)]);
var inst_16189 = (inst_16188__$1 == null);
var state_16226__$1 = (function (){var statearr_16237 = state_16226;
(statearr_16237[(7)] = inst_16188__$1);

return statearr_16237;
})();
if(cljs.core.truth_(inst_16189)){
var statearr_16238_18541 = state_16226__$1;
(statearr_16238_18541[(1)] = (5));

} else {
var statearr_16239_18543 = state_16226__$1;
(statearr_16239_18543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (15))){
var inst_16201 = (state_16226[(8)]);
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16226__$1,(18),to,inst_16201);
} else {
if((state_val_16227 === (21))){
var inst_16217 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16240_18545 = state_16226__$1;
(statearr_16240_18545[(2)] = inst_16217);

(statearr_16240_18545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (13))){
var inst_16219 = (state_16226[(2)]);
var state_16226__$1 = (function (){var statearr_16241 = state_16226;
(statearr_16241[(9)] = inst_16219);

return statearr_16241;
})();
var statearr_16242_18546 = state_16226__$1;
(statearr_16242_18546[(2)] = null);

(statearr_16242_18546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (6))){
var inst_16188 = (state_16226[(7)]);
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16226__$1,(11),inst_16188);
} else {
if((state_val_16227 === (17))){
var inst_16211 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
if(cljs.core.truth_(inst_16211)){
var statearr_16245_18547 = state_16226__$1;
(statearr_16245_18547[(1)] = (19));

} else {
var statearr_16246_18548 = state_16226__$1;
(statearr_16246_18548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (3))){
var inst_16224 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16226__$1,inst_16224);
} else {
if((state_val_16227 === (12))){
var inst_16198 = (state_16226[(10)]);
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16226__$1,(14),inst_16198);
} else {
if((state_val_16227 === (2))){
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16226__$1,(4),results);
} else {
if((state_val_16227 === (19))){
var state_16226__$1 = state_16226;
var statearr_16253_18550 = state_16226__$1;
(statearr_16253_18550[(2)] = null);

(statearr_16253_18550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (11))){
var inst_16198 = (state_16226[(2)]);
var state_16226__$1 = (function (){var statearr_16259 = state_16226;
(statearr_16259[(10)] = inst_16198);

return statearr_16259;
})();
var statearr_16260_18551 = state_16226__$1;
(statearr_16260_18551[(2)] = null);

(statearr_16260_18551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (9))){
var state_16226__$1 = state_16226;
var statearr_16261_18553 = state_16226__$1;
(statearr_16261_18553[(2)] = null);

(statearr_16261_18553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (5))){
var state_16226__$1 = state_16226;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16262_18555 = state_16226__$1;
(statearr_16262_18555[(1)] = (8));

} else {
var statearr_16263_18556 = state_16226__$1;
(statearr_16263_18556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (14))){
var inst_16205 = (state_16226[(11)]);
var inst_16201 = (state_16226[(8)]);
var inst_16201__$1 = (state_16226[(2)]);
var inst_16204 = (inst_16201__$1 == null);
var inst_16205__$1 = cljs.core.not(inst_16204);
var state_16226__$1 = (function (){var statearr_16265 = state_16226;
(statearr_16265[(11)] = inst_16205__$1);

(statearr_16265[(8)] = inst_16201__$1);

return statearr_16265;
})();
if(inst_16205__$1){
var statearr_16266_18561 = state_16226__$1;
(statearr_16266_18561[(1)] = (15));

} else {
var statearr_16268_18562 = state_16226__$1;
(statearr_16268_18562[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (16))){
var inst_16205 = (state_16226[(11)]);
var state_16226__$1 = state_16226;
var statearr_16269_18564 = state_16226__$1;
(statearr_16269_18564[(2)] = inst_16205);

(statearr_16269_18564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (10))){
var inst_16195 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16270_18570 = state_16226__$1;
(statearr_16270_18570[(2)] = inst_16195);

(statearr_16270_18570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (18))){
var inst_16208 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16274_18575 = state_16226__$1;
(statearr_16274_18575[(2)] = inst_16208);

(statearr_16274_18575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (8))){
var inst_16192 = cljs.core.async.close_BANG_(to);
var state_16226__$1 = state_16226;
var statearr_16275_18576 = state_16226__$1;
(statearr_16275_18576[(2)] = inst_16192);

(statearr_16275_18576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_16276 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16276[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_16276[(1)] = (1));

return statearr_16276;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_16226){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_16226);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16278){var ex__15404__auto__ = e16278;
var statearr_16279_18577 = state_16226;
(statearr_16279_18577[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_16226[(4)]))){
var statearr_16280_18578 = state_16226;
(statearr_16280_18578[(1)] = cljs.core.first((state_16226[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18579 = state_16226;
state_16226 = G__18579;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_16226){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_16226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_16281 = f__15575__auto__();
(statearr_16281[(6)] = c__15574__auto__);

return statearr_16281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));

return c__15574__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16290 = arguments.length;
switch (G__16290) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16300 = arguments.length;
switch (G__16300) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16311 = arguments.length;
switch (G__16311) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15574__auto___18585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_16339){
var state_val_16340 = (state_16339[(1)]);
if((state_val_16340 === (7))){
var inst_16335 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16343_18587 = state_16339__$1;
(statearr_16343_18587[(2)] = inst_16335);

(statearr_16343_18587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (1))){
var state_16339__$1 = state_16339;
var statearr_16344_18588 = state_16339__$1;
(statearr_16344_18588[(2)] = null);

(statearr_16344_18588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (4))){
var inst_16315 = (state_16339[(7)]);
var inst_16315__$1 = (state_16339[(2)]);
var inst_16316 = (inst_16315__$1 == null);
var state_16339__$1 = (function (){var statearr_16348 = state_16339;
(statearr_16348[(7)] = inst_16315__$1);

return statearr_16348;
})();
if(cljs.core.truth_(inst_16316)){
var statearr_16349_18593 = state_16339__$1;
(statearr_16349_18593[(1)] = (5));

} else {
var statearr_16350_18594 = state_16339__$1;
(statearr_16350_18594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (13))){
var state_16339__$1 = state_16339;
var statearr_16353_18595 = state_16339__$1;
(statearr_16353_18595[(2)] = null);

(statearr_16353_18595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (6))){
var inst_16315 = (state_16339[(7)]);
var inst_16321 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16315) : p.call(null,inst_16315));
var state_16339__$1 = state_16339;
if(cljs.core.truth_(inst_16321)){
var statearr_16360_18596 = state_16339__$1;
(statearr_16360_18596[(1)] = (9));

} else {
var statearr_16361_18597 = state_16339__$1;
(statearr_16361_18597[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (3))){
var inst_16337 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16339__$1,inst_16337);
} else {
if((state_val_16340 === (12))){
var state_16339__$1 = state_16339;
var statearr_16368_18598 = state_16339__$1;
(statearr_16368_18598[(2)] = null);

(statearr_16368_18598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (2))){
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16339__$1,(4),ch);
} else {
if((state_val_16340 === (11))){
var inst_16315 = (state_16339[(7)]);
var inst_16325 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16339__$1,(8),inst_16325,inst_16315);
} else {
if((state_val_16340 === (9))){
var state_16339__$1 = state_16339;
var statearr_16369_18599 = state_16339__$1;
(statearr_16369_18599[(2)] = tc);

(statearr_16369_18599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (5))){
var inst_16318 = cljs.core.async.close_BANG_(tc);
var inst_16319 = cljs.core.async.close_BANG_(fc);
var state_16339__$1 = (function (){var statearr_16370 = state_16339;
(statearr_16370[(8)] = inst_16318);

return statearr_16370;
})();
var statearr_16374_18600 = state_16339__$1;
(statearr_16374_18600[(2)] = inst_16319);

(statearr_16374_18600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (14))){
var inst_16333 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16379_18601 = state_16339__$1;
(statearr_16379_18601[(2)] = inst_16333);

(statearr_16379_18601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (10))){
var state_16339__$1 = state_16339;
var statearr_16380_18602 = state_16339__$1;
(statearr_16380_18602[(2)] = fc);

(statearr_16380_18602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16340 === (8))){
var inst_16327 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
if(cljs.core.truth_(inst_16327)){
var statearr_16381_18603 = state_16339__$1;
(statearr_16381_18603[(1)] = (12));

} else {
var statearr_16382_18604 = state_16339__$1;
(statearr_16382_18604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_16388 = [null,null,null,null,null,null,null,null,null];
(statearr_16388[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_16388[(1)] = (1));

return statearr_16388;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_16339){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_16339);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16389){var ex__15404__auto__ = e16389;
var statearr_16390_18605 = state_16339;
(statearr_16390_18605[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_16339[(4)]))){
var statearr_16391_18606 = state_16339;
(statearr_16391_18606[(1)] = cljs.core.first((state_16339[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18607 = state_16339;
state_16339 = G__18607;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_16339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_16339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_16392 = f__15575__auto__();
(statearr_16392[(6)] = c__15574__auto___18585);

return statearr_16392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15574__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_16417){
var state_val_16418 = (state_16417[(1)]);
if((state_val_16418 === (7))){
var inst_16413 = (state_16417[(2)]);
var state_16417__$1 = state_16417;
var statearr_16435_18609 = state_16417__$1;
(statearr_16435_18609[(2)] = inst_16413);

(statearr_16435_18609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (1))){
var inst_16394 = init;
var inst_16395 = inst_16394;
var state_16417__$1 = (function (){var statearr_16436 = state_16417;
(statearr_16436[(7)] = inst_16395);

return statearr_16436;
})();
var statearr_16440_18611 = state_16417__$1;
(statearr_16440_18611[(2)] = null);

(statearr_16440_18611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (4))){
var inst_16399 = (state_16417[(8)]);
var inst_16399__$1 = (state_16417[(2)]);
var inst_16400 = (inst_16399__$1 == null);
var state_16417__$1 = (function (){var statearr_16445 = state_16417;
(statearr_16445[(8)] = inst_16399__$1);

return statearr_16445;
})();
if(cljs.core.truth_(inst_16400)){
var statearr_16446_18612 = state_16417__$1;
(statearr_16446_18612[(1)] = (5));

} else {
var statearr_16450_18613 = state_16417__$1;
(statearr_16450_18613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (6))){
var inst_16399 = (state_16417[(8)]);
var inst_16395 = (state_16417[(7)]);
var inst_16403 = (state_16417[(9)]);
var inst_16403__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16395,inst_16399) : f.call(null,inst_16395,inst_16399));
var inst_16405 = cljs.core.reduced_QMARK_(inst_16403__$1);
var state_16417__$1 = (function (){var statearr_16451 = state_16417;
(statearr_16451[(9)] = inst_16403__$1);

return statearr_16451;
})();
if(inst_16405){
var statearr_16452_18614 = state_16417__$1;
(statearr_16452_18614[(1)] = (8));

} else {
var statearr_16453_18615 = state_16417__$1;
(statearr_16453_18615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (3))){
var inst_16415 = (state_16417[(2)]);
var state_16417__$1 = state_16417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16417__$1,inst_16415);
} else {
if((state_val_16418 === (2))){
var state_16417__$1 = state_16417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16417__$1,(4),ch);
} else {
if((state_val_16418 === (9))){
var inst_16403 = (state_16417[(9)]);
var inst_16395 = inst_16403;
var state_16417__$1 = (function (){var statearr_16457 = state_16417;
(statearr_16457[(7)] = inst_16395);

return statearr_16457;
})();
var statearr_16458_18616 = state_16417__$1;
(statearr_16458_18616[(2)] = null);

(statearr_16458_18616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (5))){
var inst_16395 = (state_16417[(7)]);
var state_16417__$1 = state_16417;
var statearr_16459_18617 = state_16417__$1;
(statearr_16459_18617[(2)] = inst_16395);

(statearr_16459_18617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (10))){
var inst_16411 = (state_16417[(2)]);
var state_16417__$1 = state_16417;
var statearr_16460_18618 = state_16417__$1;
(statearr_16460_18618[(2)] = inst_16411);

(statearr_16460_18618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (8))){
var inst_16403 = (state_16417[(9)]);
var inst_16407 = cljs.core.deref(inst_16403);
var state_16417__$1 = state_16417;
var statearr_16461_18619 = state_16417__$1;
(statearr_16461_18619[(2)] = inst_16407);

(statearr_16461_18619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15401__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15401__auto____0 = (function (){
var statearr_16462 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16462[(0)] = cljs$core$async$reduce_$_state_machine__15401__auto__);

(statearr_16462[(1)] = (1));

return statearr_16462;
});
var cljs$core$async$reduce_$_state_machine__15401__auto____1 = (function (state_16417){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_16417);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16463){var ex__15404__auto__ = e16463;
var statearr_16464_18624 = state_16417;
(statearr_16464_18624[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_16417[(4)]))){
var statearr_16465_18625 = state_16417;
(statearr_16465_18625[(1)] = cljs.core.first((state_16417[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18629 = state_16417;
state_16417 = G__18629;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15401__auto__ = function(state_16417){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15401__auto____1.call(this,state_16417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15401__auto____0;
cljs$core$async$reduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15401__auto____1;
return cljs$core$async$reduce_$_state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_16467 = f__15575__auto__();
(statearr_16467[(6)] = c__15574__auto__);

return statearr_16467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));

return c__15574__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15574__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_16474){
var state_val_16475 = (state_16474[(1)]);
if((state_val_16475 === (1))){
var inst_16469 = cljs.core.async.reduce(f__$1,init,ch);
var state_16474__$1 = state_16474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16474__$1,(2),inst_16469);
} else {
if((state_val_16475 === (2))){
var inst_16471 = (state_16474[(2)]);
var inst_16472 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16471) : f__$1.call(null,inst_16471));
var state_16474__$1 = state_16474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16474__$1,inst_16472);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15401__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15401__auto____0 = (function (){
var statearr_16482 = [null,null,null,null,null,null,null];
(statearr_16482[(0)] = cljs$core$async$transduce_$_state_machine__15401__auto__);

(statearr_16482[(1)] = (1));

return statearr_16482;
});
var cljs$core$async$transduce_$_state_machine__15401__auto____1 = (function (state_16474){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_16474);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16483){var ex__15404__auto__ = e16483;
var statearr_16487_18636 = state_16474;
(statearr_16487_18636[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_16474[(4)]))){
var statearr_16490_18637 = state_16474;
(statearr_16490_18637[(1)] = cljs.core.first((state_16474[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18638 = state_16474;
state_16474 = G__18638;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15401__auto__ = function(state_16474){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15401__auto____1.call(this,state_16474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15401__auto____0;
cljs$core$async$transduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15401__auto____1;
return cljs$core$async$transduce_$_state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_16491 = f__15575__auto__();
(statearr_16491[(6)] = c__15574__auto__);

return statearr_16491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));

return c__15574__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16507 = arguments.length;
switch (G__16507) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15574__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_16532){
var state_val_16533 = (state_16532[(1)]);
if((state_val_16533 === (7))){
var inst_16514 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16534_18644 = state_16532__$1;
(statearr_16534_18644[(2)] = inst_16514);

(statearr_16534_18644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (1))){
var inst_16508 = cljs.core.seq(coll);
var inst_16509 = inst_16508;
var state_16532__$1 = (function (){var statearr_16535 = state_16532;
(statearr_16535[(7)] = inst_16509);

return statearr_16535;
})();
var statearr_16536_18645 = state_16532__$1;
(statearr_16536_18645[(2)] = null);

(statearr_16536_18645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (4))){
var inst_16509 = (state_16532[(7)]);
var inst_16512 = cljs.core.first(inst_16509);
var state_16532__$1 = state_16532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16532__$1,(7),ch,inst_16512);
} else {
if((state_val_16533 === (13))){
var inst_16526 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16541_18651 = state_16532__$1;
(statearr_16541_18651[(2)] = inst_16526);

(statearr_16541_18651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (6))){
var inst_16517 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
if(cljs.core.truth_(inst_16517)){
var statearr_16543_18655 = state_16532__$1;
(statearr_16543_18655[(1)] = (8));

} else {
var statearr_16548_18656 = state_16532__$1;
(statearr_16548_18656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (3))){
var inst_16530 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16532__$1,inst_16530);
} else {
if((state_val_16533 === (12))){
var state_16532__$1 = state_16532;
var statearr_16549_18657 = state_16532__$1;
(statearr_16549_18657[(2)] = null);

(statearr_16549_18657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (2))){
var inst_16509 = (state_16532[(7)]);
var state_16532__$1 = state_16532;
if(cljs.core.truth_(inst_16509)){
var statearr_16550_18658 = state_16532__$1;
(statearr_16550_18658[(1)] = (4));

} else {
var statearr_16551_18659 = state_16532__$1;
(statearr_16551_18659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (11))){
var inst_16523 = cljs.core.async.close_BANG_(ch);
var state_16532__$1 = state_16532;
var statearr_16552_18660 = state_16532__$1;
(statearr_16552_18660[(2)] = inst_16523);

(statearr_16552_18660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (9))){
var state_16532__$1 = state_16532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16553_18664 = state_16532__$1;
(statearr_16553_18664[(1)] = (11));

} else {
var statearr_16554_18665 = state_16532__$1;
(statearr_16554_18665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (5))){
var inst_16509 = (state_16532[(7)]);
var state_16532__$1 = state_16532;
var statearr_16555_18666 = state_16532__$1;
(statearr_16555_18666[(2)] = inst_16509);

(statearr_16555_18666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (10))){
var inst_16528 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16556_18670 = state_16532__$1;
(statearr_16556_18670[(2)] = inst_16528);

(statearr_16556_18670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (8))){
var inst_16509 = (state_16532[(7)]);
var inst_16519 = cljs.core.next(inst_16509);
var inst_16509__$1 = inst_16519;
var state_16532__$1 = (function (){var statearr_16557 = state_16532;
(statearr_16557[(7)] = inst_16509__$1);

return statearr_16557;
})();
var statearr_16558_18671 = state_16532__$1;
(statearr_16558_18671[(2)] = null);

(statearr_16558_18671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_16563 = [null,null,null,null,null,null,null,null];
(statearr_16563[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_16563[(1)] = (1));

return statearr_16563;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_16532){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_16532);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16564){var ex__15404__auto__ = e16564;
var statearr_16565_18672 = state_16532;
(statearr_16565_18672[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_16532[(4)]))){
var statearr_16566_18676 = state_16532;
(statearr_16566_18676[(1)] = cljs.core.first((state_16532[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18677 = state_16532;
state_16532 = G__18677;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_16532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_16532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_16567 = f__15575__auto__();
(statearr_16567[(6)] = c__15574__auto__);

return statearr_16567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));

return c__15574__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16569 = arguments.length;
switch (G__16569) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18679 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18679(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18681 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18681(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18682 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18682(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18683 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18683(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16603 = (function (ch,cs,meta16604){
this.ch = ch;
this.cs = cs;
this.meta16604 = meta16604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16605,meta16604__$1){
var self__ = this;
var _16605__$1 = this;
return (new cljs.core.async.t_cljs$core$async16603(self__.ch,self__.cs,meta16604__$1));
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16605){
var self__ = this;
var _16605__$1 = this;
return self__.meta16604;
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16604","meta16604",-1910714254,null)], null);
}));

(cljs.core.async.t_cljs$core$async16603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16603");

(cljs.core.async.t_cljs$core$async16603.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16603.
 */
cljs.core.async.__GT_t_cljs$core$async16603 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16603(ch__$1,cs__$1,meta16604){
return (new cljs.core.async.t_cljs$core$async16603(ch__$1,cs__$1,meta16604));
});

}

return (new cljs.core.async.t_cljs$core$async16603(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15574__auto___18693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_16777){
var state_val_16778 = (state_16777[(1)]);
if((state_val_16778 === (7))){
var inst_16771 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16780_18694 = state_16777__$1;
(statearr_16780_18694[(2)] = inst_16771);

(statearr_16780_18694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (20))){
var inst_16672 = (state_16777[(7)]);
var inst_16687 = cljs.core.first(inst_16672);
var inst_16688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16687,(0),null);
var inst_16689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16687,(1),null);
var state_16777__$1 = (function (){var statearr_16781 = state_16777;
(statearr_16781[(8)] = inst_16688);

return statearr_16781;
})();
if(cljs.core.truth_(inst_16689)){
var statearr_16782_18695 = state_16777__$1;
(statearr_16782_18695[(1)] = (22));

} else {
var statearr_16783_18696 = state_16777__$1;
(statearr_16783_18696[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (27))){
var inst_16640 = (state_16777[(9)]);
var inst_16725 = (state_16777[(10)]);
var inst_16718 = (state_16777[(11)]);
var inst_16720 = (state_16777[(12)]);
var inst_16725__$1 = cljs.core._nth(inst_16718,inst_16720);
var inst_16726 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16725__$1,inst_16640,done);
var state_16777__$1 = (function (){var statearr_16784 = state_16777;
(statearr_16784[(10)] = inst_16725__$1);

return statearr_16784;
})();
if(cljs.core.truth_(inst_16726)){
var statearr_16785_18697 = state_16777__$1;
(statearr_16785_18697[(1)] = (30));

} else {
var statearr_16786_18699 = state_16777__$1;
(statearr_16786_18699[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (1))){
var state_16777__$1 = state_16777;
var statearr_16787_18700 = state_16777__$1;
(statearr_16787_18700[(2)] = null);

(statearr_16787_18700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (24))){
var inst_16672 = (state_16777[(7)]);
var inst_16694 = (state_16777[(2)]);
var inst_16695 = cljs.core.next(inst_16672);
var inst_16649 = inst_16695;
var inst_16650 = null;
var inst_16651 = (0);
var inst_16652 = (0);
var state_16777__$1 = (function (){var statearr_16788 = state_16777;
(statearr_16788[(13)] = inst_16649);

(statearr_16788[(14)] = inst_16694);

(statearr_16788[(15)] = inst_16652);

(statearr_16788[(16)] = inst_16650);

(statearr_16788[(17)] = inst_16651);

return statearr_16788;
})();
var statearr_16789_18704 = state_16777__$1;
(statearr_16789_18704[(2)] = null);

(statearr_16789_18704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (39))){
var state_16777__$1 = state_16777;
var statearr_16806_18705 = state_16777__$1;
(statearr_16806_18705[(2)] = null);

(statearr_16806_18705[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (4))){
var inst_16640 = (state_16777[(9)]);
var inst_16640__$1 = (state_16777[(2)]);
var inst_16641 = (inst_16640__$1 == null);
var state_16777__$1 = (function (){var statearr_16822 = state_16777;
(statearr_16822[(9)] = inst_16640__$1);

return statearr_16822;
})();
if(cljs.core.truth_(inst_16641)){
var statearr_16823_18707 = state_16777__$1;
(statearr_16823_18707[(1)] = (5));

} else {
var statearr_16824_18708 = state_16777__$1;
(statearr_16824_18708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (15))){
var inst_16649 = (state_16777[(13)]);
var inst_16652 = (state_16777[(15)]);
var inst_16650 = (state_16777[(16)]);
var inst_16651 = (state_16777[(17)]);
var inst_16668 = (state_16777[(2)]);
var inst_16669 = (inst_16652 + (1));
var tmp16791 = inst_16649;
var tmp16792 = inst_16650;
var tmp16793 = inst_16651;
var inst_16649__$1 = tmp16791;
var inst_16650__$1 = tmp16792;
var inst_16651__$1 = tmp16793;
var inst_16652__$1 = inst_16669;
var state_16777__$1 = (function (){var statearr_16825 = state_16777;
(statearr_16825[(13)] = inst_16649__$1);

(statearr_16825[(15)] = inst_16652__$1);

(statearr_16825[(18)] = inst_16668);

(statearr_16825[(16)] = inst_16650__$1);

(statearr_16825[(17)] = inst_16651__$1);

return statearr_16825;
})();
var statearr_16826_18713 = state_16777__$1;
(statearr_16826_18713[(2)] = null);

(statearr_16826_18713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (21))){
var inst_16698 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16839_18714 = state_16777__$1;
(statearr_16839_18714[(2)] = inst_16698);

(statearr_16839_18714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (31))){
var inst_16725 = (state_16777[(10)]);
var inst_16729 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16725);
var state_16777__$1 = state_16777;
var statearr_16851_18718 = state_16777__$1;
(statearr_16851_18718[(2)] = inst_16729);

(statearr_16851_18718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (32))){
var inst_16719 = (state_16777[(19)]);
var inst_16717 = (state_16777[(20)]);
var inst_16718 = (state_16777[(11)]);
var inst_16720 = (state_16777[(12)]);
var inst_16731 = (state_16777[(2)]);
var inst_16732 = (inst_16720 + (1));
var tmp16835 = inst_16719;
var tmp16836 = inst_16717;
var tmp16837 = inst_16718;
var inst_16717__$1 = tmp16836;
var inst_16718__$1 = tmp16837;
var inst_16719__$1 = tmp16835;
var inst_16720__$1 = inst_16732;
var state_16777__$1 = (function (){var statearr_16860 = state_16777;
(statearr_16860[(19)] = inst_16719__$1);

(statearr_16860[(20)] = inst_16717__$1);

(statearr_16860[(21)] = inst_16731);

(statearr_16860[(11)] = inst_16718__$1);

(statearr_16860[(12)] = inst_16720__$1);

return statearr_16860;
})();
var statearr_16861_18720 = state_16777__$1;
(statearr_16861_18720[(2)] = null);

(statearr_16861_18720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (40))){
var inst_16744 = (state_16777[(22)]);
var inst_16748 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16744);
var state_16777__$1 = state_16777;
var statearr_16865_18724 = state_16777__$1;
(statearr_16865_18724[(2)] = inst_16748);

(statearr_16865_18724[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (33))){
var inst_16735 = (state_16777[(23)]);
var inst_16737 = cljs.core.chunked_seq_QMARK_(inst_16735);
var state_16777__$1 = state_16777;
if(inst_16737){
var statearr_16869_18727 = state_16777__$1;
(statearr_16869_18727[(1)] = (36));

} else {
var statearr_16871_18728 = state_16777__$1;
(statearr_16871_18728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (13))){
var inst_16662 = (state_16777[(24)]);
var inst_16665 = cljs.core.async.close_BANG_(inst_16662);
var state_16777__$1 = state_16777;
var statearr_16876_18730 = state_16777__$1;
(statearr_16876_18730[(2)] = inst_16665);

(statearr_16876_18730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (22))){
var inst_16688 = (state_16777[(8)]);
var inst_16691 = cljs.core.async.close_BANG_(inst_16688);
var state_16777__$1 = state_16777;
var statearr_16881_18735 = state_16777__$1;
(statearr_16881_18735[(2)] = inst_16691);

(statearr_16881_18735[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (36))){
var inst_16735 = (state_16777[(23)]);
var inst_16739 = cljs.core.chunk_first(inst_16735);
var inst_16740 = cljs.core.chunk_rest(inst_16735);
var inst_16741 = cljs.core.count(inst_16739);
var inst_16717 = inst_16740;
var inst_16718 = inst_16739;
var inst_16719 = inst_16741;
var inst_16720 = (0);
var state_16777__$1 = (function (){var statearr_16888 = state_16777;
(statearr_16888[(19)] = inst_16719);

(statearr_16888[(20)] = inst_16717);

(statearr_16888[(11)] = inst_16718);

(statearr_16888[(12)] = inst_16720);

return statearr_16888;
})();
var statearr_16898_18740 = state_16777__$1;
(statearr_16898_18740[(2)] = null);

(statearr_16898_18740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (41))){
var inst_16735 = (state_16777[(23)]);
var inst_16750 = (state_16777[(2)]);
var inst_16751 = cljs.core.next(inst_16735);
var inst_16717 = inst_16751;
var inst_16718 = null;
var inst_16719 = (0);
var inst_16720 = (0);
var state_16777__$1 = (function (){var statearr_16904 = state_16777;
(statearr_16904[(25)] = inst_16750);

(statearr_16904[(19)] = inst_16719);

(statearr_16904[(20)] = inst_16717);

(statearr_16904[(11)] = inst_16718);

(statearr_16904[(12)] = inst_16720);

return statearr_16904;
})();
var statearr_16905_18744 = state_16777__$1;
(statearr_16905_18744[(2)] = null);

(statearr_16905_18744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (43))){
var state_16777__$1 = state_16777;
var statearr_16910_18745 = state_16777__$1;
(statearr_16910_18745[(2)] = null);

(statearr_16910_18745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (29))){
var inst_16759 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16911_18746 = state_16777__$1;
(statearr_16911_18746[(2)] = inst_16759);

(statearr_16911_18746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (44))){
var inst_16768 = (state_16777[(2)]);
var state_16777__$1 = (function (){var statearr_16912 = state_16777;
(statearr_16912[(26)] = inst_16768);

return statearr_16912;
})();
var statearr_16914_18749 = state_16777__$1;
(statearr_16914_18749[(2)] = null);

(statearr_16914_18749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (6))){
var inst_16708 = (state_16777[(27)]);
var inst_16707 = cljs.core.deref(cs);
var inst_16708__$1 = cljs.core.keys(inst_16707);
var inst_16709 = cljs.core.count(inst_16708__$1);
var inst_16710 = cljs.core.reset_BANG_(dctr,inst_16709);
var inst_16716 = cljs.core.seq(inst_16708__$1);
var inst_16717 = inst_16716;
var inst_16718 = null;
var inst_16719 = (0);
var inst_16720 = (0);
var state_16777__$1 = (function (){var statearr_16915 = state_16777;
(statearr_16915[(19)] = inst_16719);

(statearr_16915[(20)] = inst_16717);

(statearr_16915[(28)] = inst_16710);

(statearr_16915[(27)] = inst_16708__$1);

(statearr_16915[(11)] = inst_16718);

(statearr_16915[(12)] = inst_16720);

return statearr_16915;
})();
var statearr_16916_18753 = state_16777__$1;
(statearr_16916_18753[(2)] = null);

(statearr_16916_18753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (28))){
var inst_16735 = (state_16777[(23)]);
var inst_16717 = (state_16777[(20)]);
var inst_16735__$1 = cljs.core.seq(inst_16717);
var state_16777__$1 = (function (){var statearr_16919 = state_16777;
(statearr_16919[(23)] = inst_16735__$1);

return statearr_16919;
})();
if(inst_16735__$1){
var statearr_16920_18755 = state_16777__$1;
(statearr_16920_18755[(1)] = (33));

} else {
var statearr_16921_18756 = state_16777__$1;
(statearr_16921_18756[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (25))){
var inst_16719 = (state_16777[(19)]);
var inst_16720 = (state_16777[(12)]);
var inst_16722 = (inst_16720 < inst_16719);
var inst_16723 = inst_16722;
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16723)){
var statearr_16922_18757 = state_16777__$1;
(statearr_16922_18757[(1)] = (27));

} else {
var statearr_16924_18758 = state_16777__$1;
(statearr_16924_18758[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (34))){
var state_16777__$1 = state_16777;
var statearr_16925_18759 = state_16777__$1;
(statearr_16925_18759[(2)] = null);

(statearr_16925_18759[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (17))){
var state_16777__$1 = state_16777;
var statearr_16926_18761 = state_16777__$1;
(statearr_16926_18761[(2)] = null);

(statearr_16926_18761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (3))){
var inst_16773 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16777__$1,inst_16773);
} else {
if((state_val_16778 === (12))){
var inst_16703 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16927_18762 = state_16777__$1;
(statearr_16927_18762[(2)] = inst_16703);

(statearr_16927_18762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (2))){
var state_16777__$1 = state_16777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16777__$1,(4),ch);
} else {
if((state_val_16778 === (23))){
var state_16777__$1 = state_16777;
var statearr_16928_18766 = state_16777__$1;
(statearr_16928_18766[(2)] = null);

(statearr_16928_18766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (35))){
var inst_16757 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16929_18771 = state_16777__$1;
(statearr_16929_18771[(2)] = inst_16757);

(statearr_16929_18771[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (19))){
var inst_16672 = (state_16777[(7)]);
var inst_16679 = cljs.core.chunk_first(inst_16672);
var inst_16680 = cljs.core.chunk_rest(inst_16672);
var inst_16681 = cljs.core.count(inst_16679);
var inst_16649 = inst_16680;
var inst_16650 = inst_16679;
var inst_16651 = inst_16681;
var inst_16652 = (0);
var state_16777__$1 = (function (){var statearr_16938 = state_16777;
(statearr_16938[(13)] = inst_16649);

(statearr_16938[(15)] = inst_16652);

(statearr_16938[(16)] = inst_16650);

(statearr_16938[(17)] = inst_16651);

return statearr_16938;
})();
var statearr_16943_18774 = state_16777__$1;
(statearr_16943_18774[(2)] = null);

(statearr_16943_18774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (11))){
var inst_16649 = (state_16777[(13)]);
var inst_16672 = (state_16777[(7)]);
var inst_16672__$1 = cljs.core.seq(inst_16649);
var state_16777__$1 = (function (){var statearr_16945 = state_16777;
(statearr_16945[(7)] = inst_16672__$1);

return statearr_16945;
})();
if(inst_16672__$1){
var statearr_16946_18778 = state_16777__$1;
(statearr_16946_18778[(1)] = (16));

} else {
var statearr_16947_18779 = state_16777__$1;
(statearr_16947_18779[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (9))){
var inst_16705 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16948_18780 = state_16777__$1;
(statearr_16948_18780[(2)] = inst_16705);

(statearr_16948_18780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (5))){
var inst_16647 = cljs.core.deref(cs);
var inst_16648 = cljs.core.seq(inst_16647);
var inst_16649 = inst_16648;
var inst_16650 = null;
var inst_16651 = (0);
var inst_16652 = (0);
var state_16777__$1 = (function (){var statearr_16949 = state_16777;
(statearr_16949[(13)] = inst_16649);

(statearr_16949[(15)] = inst_16652);

(statearr_16949[(16)] = inst_16650);

(statearr_16949[(17)] = inst_16651);

return statearr_16949;
})();
var statearr_16950_18790 = state_16777__$1;
(statearr_16950_18790[(2)] = null);

(statearr_16950_18790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (14))){
var state_16777__$1 = state_16777;
var statearr_16951_18791 = state_16777__$1;
(statearr_16951_18791[(2)] = null);

(statearr_16951_18791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (45))){
var inst_16765 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16952_18798 = state_16777__$1;
(statearr_16952_18798[(2)] = inst_16765);

(statearr_16952_18798[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (26))){
var inst_16708 = (state_16777[(27)]);
var inst_16761 = (state_16777[(2)]);
var inst_16762 = cljs.core.seq(inst_16708);
var state_16777__$1 = (function (){var statearr_16953 = state_16777;
(statearr_16953[(29)] = inst_16761);

return statearr_16953;
})();
if(inst_16762){
var statearr_16954_18800 = state_16777__$1;
(statearr_16954_18800[(1)] = (42));

} else {
var statearr_16955_18801 = state_16777__$1;
(statearr_16955_18801[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (16))){
var inst_16672 = (state_16777[(7)]);
var inst_16677 = cljs.core.chunked_seq_QMARK_(inst_16672);
var state_16777__$1 = state_16777;
if(inst_16677){
var statearr_16956_18802 = state_16777__$1;
(statearr_16956_18802[(1)] = (19));

} else {
var statearr_16957_18803 = state_16777__$1;
(statearr_16957_18803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (38))){
var inst_16754 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16958_18804 = state_16777__$1;
(statearr_16958_18804[(2)] = inst_16754);

(statearr_16958_18804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (30))){
var state_16777__$1 = state_16777;
var statearr_16959_18806 = state_16777__$1;
(statearr_16959_18806[(2)] = null);

(statearr_16959_18806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (10))){
var inst_16652 = (state_16777[(15)]);
var inst_16650 = (state_16777[(16)]);
var inst_16661 = cljs.core._nth(inst_16650,inst_16652);
var inst_16662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16661,(0),null);
var inst_16663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16661,(1),null);
var state_16777__$1 = (function (){var statearr_16960 = state_16777;
(statearr_16960[(24)] = inst_16662);

return statearr_16960;
})();
if(cljs.core.truth_(inst_16663)){
var statearr_16961_18807 = state_16777__$1;
(statearr_16961_18807[(1)] = (13));

} else {
var statearr_16962_18808 = state_16777__$1;
(statearr_16962_18808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (18))){
var inst_16701 = (state_16777[(2)]);
var state_16777__$1 = state_16777;
var statearr_16963_18811 = state_16777__$1;
(statearr_16963_18811[(2)] = inst_16701);

(statearr_16963_18811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (42))){
var state_16777__$1 = state_16777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16777__$1,(45),dchan);
} else {
if((state_val_16778 === (37))){
var inst_16744 = (state_16777[(22)]);
var inst_16640 = (state_16777[(9)]);
var inst_16735 = (state_16777[(23)]);
var inst_16744__$1 = cljs.core.first(inst_16735);
var inst_16745 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16744__$1,inst_16640,done);
var state_16777__$1 = (function (){var statearr_16964 = state_16777;
(statearr_16964[(22)] = inst_16744__$1);

return statearr_16964;
})();
if(cljs.core.truth_(inst_16745)){
var statearr_16965_18814 = state_16777__$1;
(statearr_16965_18814[(1)] = (39));

} else {
var statearr_16966_18815 = state_16777__$1;
(statearr_16966_18815[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16778 === (8))){
var inst_16652 = (state_16777[(15)]);
var inst_16651 = (state_16777[(17)]);
var inst_16654 = (inst_16652 < inst_16651);
var inst_16655 = inst_16654;
var state_16777__$1 = state_16777;
if(cljs.core.truth_(inst_16655)){
var statearr_16967_18817 = state_16777__$1;
(statearr_16967_18817[(1)] = (10));

} else {
var statearr_16968_18819 = state_16777__$1;
(statearr_16968_18819[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15401__auto__ = null;
var cljs$core$async$mult_$_state_machine__15401__auto____0 = (function (){
var statearr_16969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16969[(0)] = cljs$core$async$mult_$_state_machine__15401__auto__);

(statearr_16969[(1)] = (1));

return statearr_16969;
});
var cljs$core$async$mult_$_state_machine__15401__auto____1 = (function (state_16777){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_16777);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e16970){var ex__15404__auto__ = e16970;
var statearr_16971_18822 = state_16777;
(statearr_16971_18822[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_16777[(4)]))){
var statearr_16972_18823 = state_16777;
(statearr_16972_18823[(1)] = cljs.core.first((state_16777[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18826 = state_16777;
state_16777 = G__18826;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15401__auto__ = function(state_16777){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15401__auto____1.call(this,state_16777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15401__auto____0;
cljs$core$async$mult_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15401__auto____1;
return cljs$core$async$mult_$_state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_16973 = f__15575__auto__();
(statearr_16973[(6)] = c__15574__auto___18693);

return statearr_16973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16975 = arguments.length;
switch (G__16975) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18839 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18839(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18841 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18841(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18846 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18846(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18850 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18850(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18852 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18852(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18856 = arguments.length;
var i__5770__auto___18858 = (0);
while(true){
if((i__5770__auto___18858 < len__5769__auto___18856)){
args__5775__auto__.push((arguments[i__5770__auto___18858]));

var G__18859 = (i__5770__auto___18858 + (1));
i__5770__auto___18858 = G__18859;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17003){
var map__17004 = p__17003;
var map__17004__$1 = cljs.core.__destructure_map(map__17004);
var opts = map__17004__$1;
var statearr_17005_18863 = state;
(statearr_17005_18863[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17007_18864 = state;
(statearr_17007_18864[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17008_18865 = state;
(statearr_17008_18865[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16999){
var G__17000 = cljs.core.first(seq16999);
var seq16999__$1 = cljs.core.next(seq16999);
var G__17001 = cljs.core.first(seq16999__$1);
var seq16999__$2 = cljs.core.next(seq16999__$1);
var G__17002 = cljs.core.first(seq16999__$2);
var seq16999__$3 = cljs.core.next(seq16999__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17000,G__17001,G__17002,seq16999__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17012 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17013){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17013 = meta17013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17014,meta17013__$1){
var self__ = this;
var _17014__$1 = this;
return (new cljs.core.async.t_cljs$core$async17012(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17013__$1));
}));

(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17014){
var self__ = this;
var _17014__$1 = this;
return self__.meta17013;
}));

(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17013","meta17013",-1559947759,null)], null);
}));

(cljs.core.async.t_cljs$core$async17012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17012");

(cljs.core.async.t_cljs$core$async17012.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17012.
 */
cljs.core.async.__GT_t_cljs$core$async17012 = (function cljs$core$async$mix_$___GT_t_cljs$core$async17012(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17013){
return (new cljs.core.async.t_cljs$core$async17012(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17013));
});

}

return (new cljs.core.async.t_cljs$core$async17012(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15574__auto___18896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_17093){
var state_val_17094 = (state_17093[(1)]);
if((state_val_17094 === (7))){
var inst_17052 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
if(cljs.core.truth_(inst_17052)){
var statearr_17100_18897 = state_17093__$1;
(statearr_17100_18897[(1)] = (8));

} else {
var statearr_17101_18898 = state_17093__$1;
(statearr_17101_18898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (20))){
var inst_17045 = (state_17093[(7)]);
var state_17093__$1 = state_17093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17093__$1,(23),out,inst_17045);
} else {
if((state_val_17094 === (1))){
var inst_17028 = calc_state();
var inst_17029 = cljs.core.__destructure_map(inst_17028);
var inst_17030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17029,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17029,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17029,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17033 = inst_17028;
var state_17093__$1 = (function (){var statearr_17102 = state_17093;
(statearr_17102[(8)] = inst_17032);

(statearr_17102[(9)] = inst_17031);

(statearr_17102[(10)] = inst_17030);

(statearr_17102[(11)] = inst_17033);

return statearr_17102;
})();
var statearr_17104_18901 = state_17093__$1;
(statearr_17104_18901[(2)] = null);

(statearr_17104_18901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (24))){
var inst_17036 = (state_17093[(12)]);
var inst_17033 = inst_17036;
var state_17093__$1 = (function (){var statearr_17105 = state_17093;
(statearr_17105[(11)] = inst_17033);

return statearr_17105;
})();
var statearr_17106_18903 = state_17093__$1;
(statearr_17106_18903[(2)] = null);

(statearr_17106_18903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (4))){
var inst_17045 = (state_17093[(7)]);
var inst_17047 = (state_17093[(13)]);
var inst_17044 = (state_17093[(2)]);
var inst_17045__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17044,(0),null);
var inst_17046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17044,(1),null);
var inst_17047__$1 = (inst_17045__$1 == null);
var state_17093__$1 = (function (){var statearr_17107 = state_17093;
(statearr_17107[(14)] = inst_17046);

(statearr_17107[(7)] = inst_17045__$1);

(statearr_17107[(13)] = inst_17047__$1);

return statearr_17107;
})();
if(cljs.core.truth_(inst_17047__$1)){
var statearr_17108_18911 = state_17093__$1;
(statearr_17108_18911[(1)] = (5));

} else {
var statearr_17109_18912 = state_17093__$1;
(statearr_17109_18912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (15))){
var inst_17066 = (state_17093[(15)]);
var inst_17037 = (state_17093[(16)]);
var inst_17066__$1 = cljs.core.empty_QMARK_(inst_17037);
var state_17093__$1 = (function (){var statearr_17110 = state_17093;
(statearr_17110[(15)] = inst_17066__$1);

return statearr_17110;
})();
if(inst_17066__$1){
var statearr_17112_18913 = state_17093__$1;
(statearr_17112_18913[(1)] = (17));

} else {
var statearr_17116_18914 = state_17093__$1;
(statearr_17116_18914[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (21))){
var inst_17036 = (state_17093[(12)]);
var inst_17033 = inst_17036;
var state_17093__$1 = (function (){var statearr_17119 = state_17093;
(statearr_17119[(11)] = inst_17033);

return statearr_17119;
})();
var statearr_17120_18916 = state_17093__$1;
(statearr_17120_18916[(2)] = null);

(statearr_17120_18916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (13))){
var inst_17059 = (state_17093[(2)]);
var inst_17060 = calc_state();
var inst_17033 = inst_17060;
var state_17093__$1 = (function (){var statearr_17123 = state_17093;
(statearr_17123[(11)] = inst_17033);

(statearr_17123[(17)] = inst_17059);

return statearr_17123;
})();
var statearr_17125_18919 = state_17093__$1;
(statearr_17125_18919[(2)] = null);

(statearr_17125_18919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (22))){
var inst_17087 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
var statearr_17127_18920 = state_17093__$1;
(statearr_17127_18920[(2)] = inst_17087);

(statearr_17127_18920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (6))){
var inst_17046 = (state_17093[(14)]);
var inst_17050 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17046,change);
var state_17093__$1 = state_17093;
var statearr_17128_18922 = state_17093__$1;
(statearr_17128_18922[(2)] = inst_17050);

(statearr_17128_18922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (25))){
var state_17093__$1 = state_17093;
var statearr_17129_18924 = state_17093__$1;
(statearr_17129_18924[(2)] = null);

(statearr_17129_18924[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (17))){
var inst_17038 = (state_17093[(18)]);
var inst_17046 = (state_17093[(14)]);
var inst_17069 = (inst_17038.cljs$core$IFn$_invoke$arity$1 ? inst_17038.cljs$core$IFn$_invoke$arity$1(inst_17046) : inst_17038.call(null,inst_17046));
var inst_17070 = cljs.core.not(inst_17069);
var state_17093__$1 = state_17093;
var statearr_17130_18925 = state_17093__$1;
(statearr_17130_18925[(2)] = inst_17070);

(statearr_17130_18925[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (3))){
var inst_17091 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17093__$1,inst_17091);
} else {
if((state_val_17094 === (12))){
var state_17093__$1 = state_17093;
var statearr_17134_18927 = state_17093__$1;
(statearr_17134_18927[(2)] = null);

(statearr_17134_18927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (2))){
var inst_17036 = (state_17093[(12)]);
var inst_17033 = (state_17093[(11)]);
var inst_17036__$1 = cljs.core.__destructure_map(inst_17033);
var inst_17037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17036__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17036__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17036__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17093__$1 = (function (){var statearr_17135 = state_17093;
(statearr_17135[(12)] = inst_17036__$1);

(statearr_17135[(18)] = inst_17038);

(statearr_17135[(16)] = inst_17037);

return statearr_17135;
})();
return cljs.core.async.ioc_alts_BANG_(state_17093__$1,(4),inst_17039);
} else {
if((state_val_17094 === (23))){
var inst_17078 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
if(cljs.core.truth_(inst_17078)){
var statearr_17137_18933 = state_17093__$1;
(statearr_17137_18933[(1)] = (24));

} else {
var statearr_17138_18934 = state_17093__$1;
(statearr_17138_18934[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (19))){
var inst_17073 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
var statearr_17139_18935 = state_17093__$1;
(statearr_17139_18935[(2)] = inst_17073);

(statearr_17139_18935[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (11))){
var inst_17046 = (state_17093[(14)]);
var inst_17056 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17046);
var state_17093__$1 = state_17093;
var statearr_17142_18937 = state_17093__$1;
(statearr_17142_18937[(2)] = inst_17056);

(statearr_17142_18937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (9))){
var inst_17063 = (state_17093[(19)]);
var inst_17046 = (state_17093[(14)]);
var inst_17037 = (state_17093[(16)]);
var inst_17063__$1 = (inst_17037.cljs$core$IFn$_invoke$arity$1 ? inst_17037.cljs$core$IFn$_invoke$arity$1(inst_17046) : inst_17037.call(null,inst_17046));
var state_17093__$1 = (function (){var statearr_17147 = state_17093;
(statearr_17147[(19)] = inst_17063__$1);

return statearr_17147;
})();
if(cljs.core.truth_(inst_17063__$1)){
var statearr_17148_18938 = state_17093__$1;
(statearr_17148_18938[(1)] = (14));

} else {
var statearr_17149_18940 = state_17093__$1;
(statearr_17149_18940[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (5))){
var inst_17047 = (state_17093[(13)]);
var state_17093__$1 = state_17093;
var statearr_17150_18942 = state_17093__$1;
(statearr_17150_18942[(2)] = inst_17047);

(statearr_17150_18942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (14))){
var inst_17063 = (state_17093[(19)]);
var state_17093__$1 = state_17093;
var statearr_17151_18945 = state_17093__$1;
(statearr_17151_18945[(2)] = inst_17063);

(statearr_17151_18945[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (26))){
var inst_17083 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
var statearr_17152_18946 = state_17093__$1;
(statearr_17152_18946[(2)] = inst_17083);

(statearr_17152_18946[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (16))){
var inst_17075 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
if(cljs.core.truth_(inst_17075)){
var statearr_17153_18952 = state_17093__$1;
(statearr_17153_18952[(1)] = (20));

} else {
var statearr_17154_18953 = state_17093__$1;
(statearr_17154_18953[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (10))){
var inst_17089 = (state_17093[(2)]);
var state_17093__$1 = state_17093;
var statearr_17155_18956 = state_17093__$1;
(statearr_17155_18956[(2)] = inst_17089);

(statearr_17155_18956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (18))){
var inst_17066 = (state_17093[(15)]);
var state_17093__$1 = state_17093;
var statearr_17156_18957 = state_17093__$1;
(statearr_17156_18957[(2)] = inst_17066);

(statearr_17156_18957[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17094 === (8))){
var inst_17045 = (state_17093[(7)]);
var inst_17054 = (inst_17045 == null);
var state_17093__$1 = state_17093;
if(cljs.core.truth_(inst_17054)){
var statearr_17158_18958 = state_17093__$1;
(statearr_17158_18958[(1)] = (11));

} else {
var statearr_17159_18959 = state_17093__$1;
(statearr_17159_18959[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15401__auto__ = null;
var cljs$core$async$mix_$_state_machine__15401__auto____0 = (function (){
var statearr_17162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17162[(0)] = cljs$core$async$mix_$_state_machine__15401__auto__);

(statearr_17162[(1)] = (1));

return statearr_17162;
});
var cljs$core$async$mix_$_state_machine__15401__auto____1 = (function (state_17093){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17093);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17163){var ex__15404__auto__ = e17163;
var statearr_17164_18963 = state_17093;
(statearr_17164_18963[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_17093[(4)]))){
var statearr_17165_18964 = state_17093;
(statearr_17165_18964[(1)] = cljs.core.first((state_17093[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18966 = state_17093;
state_17093 = G__18966;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15401__auto__ = function(state_17093){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15401__auto____1.call(this,state_17093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15401__auto____0;
cljs$core$async$mix_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15401__auto____1;
return cljs$core$async$mix_$_state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_17168 = f__15575__auto__();
(statearr_17168[(6)] = c__15574__auto___18896);

return statearr_17168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18970 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18970(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18977 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18977(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18981 = (function() {
var G__18982 = null;
var G__18982__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18982__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18982 = function(p,v){
switch(arguments.length){
case 1:
return G__18982__1.call(this,p);
case 2:
return G__18982__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18982.cljs$core$IFn$_invoke$arity$1 = G__18982__1;
G__18982.cljs$core$IFn$_invoke$arity$2 = G__18982__2;
return G__18982;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17194 = arguments.length;
switch (G__17194) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18981(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18981(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17202 = arguments.length;
switch (G__17202) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17196_SHARP_){
if(cljs.core.truth_((p1__17196_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17196_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17196_SHARP_.call(null,topic)))){
return p1__17196_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17196_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17203 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17204){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17204 = meta17204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17205,meta17204__$1){
var self__ = this;
var _17205__$1 = this;
return (new cljs.core.async.t_cljs$core$async17203(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17204__$1));
}));

(cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17205){
var self__ = this;
var _17205__$1 = this;
return self__.meta17204;
}));

(cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17204","meta17204",2007362306,null)], null);
}));

(cljs.core.async.t_cljs$core$async17203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17203");

(cljs.core.async.t_cljs$core$async17203.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17203.
 */
cljs.core.async.__GT_t_cljs$core$async17203 = (function cljs$core$async$__GT_t_cljs$core$async17203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17204){
return (new cljs.core.async.t_cljs$core$async17203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17204));
});

}

return (new cljs.core.async.t_cljs$core$async17203(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15574__auto___19025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_17309){
var state_val_17310 = (state_17309[(1)]);
if((state_val_17310 === (7))){
var inst_17305 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17324_19040 = state_17309__$1;
(statearr_17324_19040[(2)] = inst_17305);

(statearr_17324_19040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (20))){
var state_17309__$1 = state_17309;
var statearr_17325_19044 = state_17309__$1;
(statearr_17325_19044[(2)] = null);

(statearr_17325_19044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (1))){
var state_17309__$1 = state_17309;
var statearr_17327_19049 = state_17309__$1;
(statearr_17327_19049[(2)] = null);

(statearr_17327_19049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (24))){
var inst_17288 = (state_17309[(7)]);
var inst_17297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17288);
var state_17309__$1 = state_17309;
var statearr_17329_19059 = state_17309__$1;
(statearr_17329_19059[(2)] = inst_17297);

(statearr_17329_19059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (4))){
var inst_17239 = (state_17309[(8)]);
var inst_17239__$1 = (state_17309[(2)]);
var inst_17240 = (inst_17239__$1 == null);
var state_17309__$1 = (function (){var statearr_17330 = state_17309;
(statearr_17330[(8)] = inst_17239__$1);

return statearr_17330;
})();
if(cljs.core.truth_(inst_17240)){
var statearr_17331_19060 = state_17309__$1;
(statearr_17331_19060[(1)] = (5));

} else {
var statearr_17332_19061 = state_17309__$1;
(statearr_17332_19061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (15))){
var inst_17282 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17333_19062 = state_17309__$1;
(statearr_17333_19062[(2)] = inst_17282);

(statearr_17333_19062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (21))){
var inst_17302 = (state_17309[(2)]);
var state_17309__$1 = (function (){var statearr_17334 = state_17309;
(statearr_17334[(9)] = inst_17302);

return statearr_17334;
})();
var statearr_17335_19063 = state_17309__$1;
(statearr_17335_19063[(2)] = null);

(statearr_17335_19063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (13))){
var inst_17264 = (state_17309[(10)]);
var inst_17266 = cljs.core.chunked_seq_QMARK_(inst_17264);
var state_17309__$1 = state_17309;
if(inst_17266){
var statearr_17336_19064 = state_17309__$1;
(statearr_17336_19064[(1)] = (16));

} else {
var statearr_17337_19065 = state_17309__$1;
(statearr_17337_19065[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (22))){
var inst_17294 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
if(cljs.core.truth_(inst_17294)){
var statearr_17339_19070 = state_17309__$1;
(statearr_17339_19070[(1)] = (23));

} else {
var statearr_17341_19071 = state_17309__$1;
(statearr_17341_19071[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (6))){
var inst_17290 = (state_17309[(11)]);
var inst_17288 = (state_17309[(7)]);
var inst_17239 = (state_17309[(8)]);
var inst_17288__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17239) : topic_fn.call(null,inst_17239));
var inst_17289 = cljs.core.deref(mults);
var inst_17290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17289,inst_17288__$1);
var state_17309__$1 = (function (){var statearr_17344 = state_17309;
(statearr_17344[(11)] = inst_17290__$1);

(statearr_17344[(7)] = inst_17288__$1);

return statearr_17344;
})();
if(cljs.core.truth_(inst_17290__$1)){
var statearr_17349_19075 = state_17309__$1;
(statearr_17349_19075[(1)] = (19));

} else {
var statearr_17350_19076 = state_17309__$1;
(statearr_17350_19076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (25))){
var inst_17299 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17351_19078 = state_17309__$1;
(statearr_17351_19078[(2)] = inst_17299);

(statearr_17351_19078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (17))){
var inst_17264 = (state_17309[(10)]);
var inst_17273 = cljs.core.first(inst_17264);
var inst_17274 = cljs.core.async.muxch_STAR_(inst_17273);
var inst_17275 = cljs.core.async.close_BANG_(inst_17274);
var inst_17276 = cljs.core.next(inst_17264);
var inst_17249 = inst_17276;
var inst_17250 = null;
var inst_17251 = (0);
var inst_17252 = (0);
var state_17309__$1 = (function (){var statearr_17354 = state_17309;
(statearr_17354[(12)] = inst_17251);

(statearr_17354[(13)] = inst_17275);

(statearr_17354[(14)] = inst_17250);

(statearr_17354[(15)] = inst_17252);

(statearr_17354[(16)] = inst_17249);

return statearr_17354;
})();
var statearr_17357_19083 = state_17309__$1;
(statearr_17357_19083[(2)] = null);

(statearr_17357_19083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (3))){
var inst_17307 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17309__$1,inst_17307);
} else {
if((state_val_17310 === (12))){
var inst_17284 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17362_19087 = state_17309__$1;
(statearr_17362_19087[(2)] = inst_17284);

(statearr_17362_19087[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (2))){
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17309__$1,(4),ch);
} else {
if((state_val_17310 === (23))){
var state_17309__$1 = state_17309;
var statearr_17364_19091 = state_17309__$1;
(statearr_17364_19091[(2)] = null);

(statearr_17364_19091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (19))){
var inst_17290 = (state_17309[(11)]);
var inst_17239 = (state_17309[(8)]);
var inst_17292 = cljs.core.async.muxch_STAR_(inst_17290);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17309__$1,(22),inst_17292,inst_17239);
} else {
if((state_val_17310 === (11))){
var inst_17264 = (state_17309[(10)]);
var inst_17249 = (state_17309[(16)]);
var inst_17264__$1 = cljs.core.seq(inst_17249);
var state_17309__$1 = (function (){var statearr_17377 = state_17309;
(statearr_17377[(10)] = inst_17264__$1);

return statearr_17377;
})();
if(inst_17264__$1){
var statearr_17378_19096 = state_17309__$1;
(statearr_17378_19096[(1)] = (13));

} else {
var statearr_17379_19097 = state_17309__$1;
(statearr_17379_19097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (9))){
var inst_17286 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17384_19101 = state_17309__$1;
(statearr_17384_19101[(2)] = inst_17286);

(statearr_17384_19101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (5))){
var inst_17246 = cljs.core.deref(mults);
var inst_17247 = cljs.core.vals(inst_17246);
var inst_17248 = cljs.core.seq(inst_17247);
var inst_17249 = inst_17248;
var inst_17250 = null;
var inst_17251 = (0);
var inst_17252 = (0);
var state_17309__$1 = (function (){var statearr_17386 = state_17309;
(statearr_17386[(12)] = inst_17251);

(statearr_17386[(14)] = inst_17250);

(statearr_17386[(15)] = inst_17252);

(statearr_17386[(16)] = inst_17249);

return statearr_17386;
})();
var statearr_17387_19106 = state_17309__$1;
(statearr_17387_19106[(2)] = null);

(statearr_17387_19106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (14))){
var state_17309__$1 = state_17309;
var statearr_17392_19107 = state_17309__$1;
(statearr_17392_19107[(2)] = null);

(statearr_17392_19107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (16))){
var inst_17264 = (state_17309[(10)]);
var inst_17268 = cljs.core.chunk_first(inst_17264);
var inst_17269 = cljs.core.chunk_rest(inst_17264);
var inst_17270 = cljs.core.count(inst_17268);
var inst_17249 = inst_17269;
var inst_17250 = inst_17268;
var inst_17251 = inst_17270;
var inst_17252 = (0);
var state_17309__$1 = (function (){var statearr_17393 = state_17309;
(statearr_17393[(12)] = inst_17251);

(statearr_17393[(14)] = inst_17250);

(statearr_17393[(15)] = inst_17252);

(statearr_17393[(16)] = inst_17249);

return statearr_17393;
})();
var statearr_17395_19115 = state_17309__$1;
(statearr_17395_19115[(2)] = null);

(statearr_17395_19115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (10))){
var inst_17251 = (state_17309[(12)]);
var inst_17250 = (state_17309[(14)]);
var inst_17252 = (state_17309[(15)]);
var inst_17249 = (state_17309[(16)]);
var inst_17257 = cljs.core._nth(inst_17250,inst_17252);
var inst_17259 = cljs.core.async.muxch_STAR_(inst_17257);
var inst_17260 = cljs.core.async.close_BANG_(inst_17259);
var inst_17261 = (inst_17252 + (1));
var tmp17389 = inst_17251;
var tmp17390 = inst_17250;
var tmp17391 = inst_17249;
var inst_17249__$1 = tmp17391;
var inst_17250__$1 = tmp17390;
var inst_17251__$1 = tmp17389;
var inst_17252__$1 = inst_17261;
var state_17309__$1 = (function (){var statearr_17397 = state_17309;
(statearr_17397[(17)] = inst_17260);

(statearr_17397[(12)] = inst_17251__$1);

(statearr_17397[(14)] = inst_17250__$1);

(statearr_17397[(15)] = inst_17252__$1);

(statearr_17397[(16)] = inst_17249__$1);

return statearr_17397;
})();
var statearr_17398_19120 = state_17309__$1;
(statearr_17398_19120[(2)] = null);

(statearr_17398_19120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (18))){
var inst_17279 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17399_19122 = state_17309__$1;
(statearr_17399_19122[(2)] = inst_17279);

(statearr_17399_19122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (8))){
var inst_17251 = (state_17309[(12)]);
var inst_17252 = (state_17309[(15)]);
var inst_17254 = (inst_17252 < inst_17251);
var inst_17255 = inst_17254;
var state_17309__$1 = state_17309;
if(cljs.core.truth_(inst_17255)){
var statearr_17401_19123 = state_17309__$1;
(statearr_17401_19123[(1)] = (10));

} else {
var statearr_17403_19124 = state_17309__$1;
(statearr_17403_19124[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_17406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17406[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_17406[(1)] = (1));

return statearr_17406;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_17309){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17309);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17411){var ex__15404__auto__ = e17411;
var statearr_17412_19125 = state_17309;
(statearr_17412_19125[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_17309[(4)]))){
var statearr_17413_19126 = state_17309;
(statearr_17413_19126[(1)] = cljs.core.first((state_17309[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19131 = state_17309;
state_17309 = G__19131;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_17309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_17309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_17414 = f__15575__auto__();
(statearr_17414[(6)] = c__15574__auto___19025);

return statearr_17414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17416 = arguments.length;
switch (G__17416) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17421 = arguments.length;
switch (G__17421) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17430 = arguments.length;
switch (G__17430) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15574__auto___19153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_17480){
var state_val_17481 = (state_17480[(1)]);
if((state_val_17481 === (7))){
var state_17480__$1 = state_17480;
var statearr_17483_19155 = state_17480__$1;
(statearr_17483_19155[(2)] = null);

(statearr_17483_19155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (1))){
var state_17480__$1 = state_17480;
var statearr_17484_19156 = state_17480__$1;
(statearr_17484_19156[(2)] = null);

(statearr_17484_19156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (4))){
var inst_17440 = (state_17480[(7)]);
var inst_17437 = (state_17480[(8)]);
var inst_17442 = (inst_17440 < inst_17437);
var state_17480__$1 = state_17480;
if(cljs.core.truth_(inst_17442)){
var statearr_17485_19157 = state_17480__$1;
(statearr_17485_19157[(1)] = (6));

} else {
var statearr_17486_19158 = state_17480__$1;
(statearr_17486_19158[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (15))){
var inst_17466 = (state_17480[(9)]);
var inst_17471 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17466);
var state_17480__$1 = state_17480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17480__$1,(17),out,inst_17471);
} else {
if((state_val_17481 === (13))){
var inst_17466 = (state_17480[(9)]);
var inst_17466__$1 = (state_17480[(2)]);
var inst_17467 = cljs.core.some(cljs.core.nil_QMARK_,inst_17466__$1);
var state_17480__$1 = (function (){var statearr_17487 = state_17480;
(statearr_17487[(9)] = inst_17466__$1);

return statearr_17487;
})();
if(cljs.core.truth_(inst_17467)){
var statearr_17488_19168 = state_17480__$1;
(statearr_17488_19168[(1)] = (14));

} else {
var statearr_17489_19172 = state_17480__$1;
(statearr_17489_19172[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (6))){
var state_17480__$1 = state_17480;
var statearr_17490_19173 = state_17480__$1;
(statearr_17490_19173[(2)] = null);

(statearr_17490_19173[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (17))){
var inst_17473 = (state_17480[(2)]);
var state_17480__$1 = (function (){var statearr_17492 = state_17480;
(statearr_17492[(10)] = inst_17473);

return statearr_17492;
})();
var statearr_17493_19177 = state_17480__$1;
(statearr_17493_19177[(2)] = null);

(statearr_17493_19177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (3))){
var inst_17478 = (state_17480[(2)]);
var state_17480__$1 = state_17480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17480__$1,inst_17478);
} else {
if((state_val_17481 === (12))){
var _ = (function (){var statearr_17495 = state_17480;
(statearr_17495[(4)] = cljs.core.rest((state_17480[(4)])));

return statearr_17495;
})();
var state_17480__$1 = state_17480;
var ex17491 = (state_17480__$1[(2)]);
var statearr_17496_19182 = state_17480__$1;
(statearr_17496_19182[(5)] = ex17491);


if((ex17491 instanceof Object)){
var statearr_17497_19183 = state_17480__$1;
(statearr_17497_19183[(1)] = (11));

(statearr_17497_19183[(5)] = null);

} else {
throw ex17491;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (2))){
var inst_17435 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17437 = cnt;
var inst_17440 = (0);
var state_17480__$1 = (function (){var statearr_17498 = state_17480;
(statearr_17498[(7)] = inst_17440);

(statearr_17498[(11)] = inst_17435);

(statearr_17498[(8)] = inst_17437);

return statearr_17498;
})();
var statearr_17499_19189 = state_17480__$1;
(statearr_17499_19189[(2)] = null);

(statearr_17499_19189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (11))){
var inst_17445 = (state_17480[(2)]);
var inst_17446 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17480__$1 = (function (){var statearr_17500 = state_17480;
(statearr_17500[(12)] = inst_17445);

return statearr_17500;
})();
var statearr_17501_19194 = state_17480__$1;
(statearr_17501_19194[(2)] = inst_17446);

(statearr_17501_19194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (9))){
var inst_17440 = (state_17480[(7)]);
var _ = (function (){var statearr_17502 = state_17480;
(statearr_17502[(4)] = cljs.core.cons((12),(state_17480[(4)])));

return statearr_17502;
})();
var inst_17452 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17440) : chs__$1.call(null,inst_17440));
var inst_17453 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17440) : done.call(null,inst_17440));
var inst_17454 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17452,inst_17453);
var ___$1 = (function (){var statearr_17503 = state_17480;
(statearr_17503[(4)] = cljs.core.rest((state_17480[(4)])));

return statearr_17503;
})();
var state_17480__$1 = state_17480;
var statearr_17505_19197 = state_17480__$1;
(statearr_17505_19197[(2)] = inst_17454);

(statearr_17505_19197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (5))){
var inst_17464 = (state_17480[(2)]);
var state_17480__$1 = (function (){var statearr_17506 = state_17480;
(statearr_17506[(13)] = inst_17464);

return statearr_17506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17480__$1,(13),dchan);
} else {
if((state_val_17481 === (14))){
var inst_17469 = cljs.core.async.close_BANG_(out);
var state_17480__$1 = state_17480;
var statearr_17507_19198 = state_17480__$1;
(statearr_17507_19198[(2)] = inst_17469);

(statearr_17507_19198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (16))){
var inst_17476 = (state_17480[(2)]);
var state_17480__$1 = state_17480;
var statearr_17508_19199 = state_17480__$1;
(statearr_17508_19199[(2)] = inst_17476);

(statearr_17508_19199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (10))){
var inst_17440 = (state_17480[(7)]);
var inst_17457 = (state_17480[(2)]);
var inst_17458 = (inst_17440 + (1));
var inst_17440__$1 = inst_17458;
var state_17480__$1 = (function (){var statearr_17509 = state_17480;
(statearr_17509[(7)] = inst_17440__$1);

(statearr_17509[(14)] = inst_17457);

return statearr_17509;
})();
var statearr_17510_19200 = state_17480__$1;
(statearr_17510_19200[(2)] = null);

(statearr_17510_19200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17481 === (8))){
var inst_17462 = (state_17480[(2)]);
var state_17480__$1 = state_17480;
var statearr_17511_19201 = state_17480__$1;
(statearr_17511_19201[(2)] = inst_17462);

(statearr_17511_19201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_17512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17512[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_17512[(1)] = (1));

return statearr_17512;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_17480){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17480);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17513){var ex__15404__auto__ = e17513;
var statearr_17514_19211 = state_17480;
(statearr_17514_19211[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_17480[(4)]))){
var statearr_17515_19212 = state_17480;
(statearr_17515_19212[(1)] = cljs.core.first((state_17480[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19213 = state_17480;
state_17480 = G__19213;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_17480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_17480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_17516 = f__15575__auto__();
(statearr_17516[(6)] = c__15574__auto___19153);

return statearr_17516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17519 = arguments.length;
switch (G__17519) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15574__auto___19219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_17551){
var state_val_17552 = (state_17551[(1)]);
if((state_val_17552 === (7))){
var inst_17531 = (state_17551[(7)]);
var inst_17530 = (state_17551[(8)]);
var inst_17530__$1 = (state_17551[(2)]);
var inst_17531__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17530__$1,(0),null);
var inst_17532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17530__$1,(1),null);
var inst_17533 = (inst_17531__$1 == null);
var state_17551__$1 = (function (){var statearr_17553 = state_17551;
(statearr_17553[(9)] = inst_17532);

(statearr_17553[(7)] = inst_17531__$1);

(statearr_17553[(8)] = inst_17530__$1);

return statearr_17553;
})();
if(cljs.core.truth_(inst_17533)){
var statearr_17554_19228 = state_17551__$1;
(statearr_17554_19228[(1)] = (8));

} else {
var statearr_17555_19229 = state_17551__$1;
(statearr_17555_19229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (1))){
var inst_17520 = cljs.core.vec(chs);
var inst_17521 = inst_17520;
var state_17551__$1 = (function (){var statearr_17556 = state_17551;
(statearr_17556[(10)] = inst_17521);

return statearr_17556;
})();
var statearr_17557_19230 = state_17551__$1;
(statearr_17557_19230[(2)] = null);

(statearr_17557_19230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (4))){
var inst_17521 = (state_17551[(10)]);
var state_17551__$1 = state_17551;
return cljs.core.async.ioc_alts_BANG_(state_17551__$1,(7),inst_17521);
} else {
if((state_val_17552 === (6))){
var inst_17547 = (state_17551[(2)]);
var state_17551__$1 = state_17551;
var statearr_17558_19231 = state_17551__$1;
(statearr_17558_19231[(2)] = inst_17547);

(statearr_17558_19231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (3))){
var inst_17549 = (state_17551[(2)]);
var state_17551__$1 = state_17551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17551__$1,inst_17549);
} else {
if((state_val_17552 === (2))){
var inst_17521 = (state_17551[(10)]);
var inst_17523 = cljs.core.count(inst_17521);
var inst_17524 = (inst_17523 > (0));
var state_17551__$1 = state_17551;
if(cljs.core.truth_(inst_17524)){
var statearr_17560_19235 = state_17551__$1;
(statearr_17560_19235[(1)] = (4));

} else {
var statearr_17561_19236 = state_17551__$1;
(statearr_17561_19236[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (11))){
var inst_17521 = (state_17551[(10)]);
var inst_17540 = (state_17551[(2)]);
var tmp17559 = inst_17521;
var inst_17521__$1 = tmp17559;
var state_17551__$1 = (function (){var statearr_17562 = state_17551;
(statearr_17562[(11)] = inst_17540);

(statearr_17562[(10)] = inst_17521__$1);

return statearr_17562;
})();
var statearr_17563_19238 = state_17551__$1;
(statearr_17563_19238[(2)] = null);

(statearr_17563_19238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (9))){
var inst_17531 = (state_17551[(7)]);
var state_17551__$1 = state_17551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17551__$1,(11),out,inst_17531);
} else {
if((state_val_17552 === (5))){
var inst_17545 = cljs.core.async.close_BANG_(out);
var state_17551__$1 = state_17551;
var statearr_17570_19239 = state_17551__$1;
(statearr_17570_19239[(2)] = inst_17545);

(statearr_17570_19239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (10))){
var inst_17543 = (state_17551[(2)]);
var state_17551__$1 = state_17551;
var statearr_17571_19240 = state_17551__$1;
(statearr_17571_19240[(2)] = inst_17543);

(statearr_17571_19240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (8))){
var inst_17532 = (state_17551[(9)]);
var inst_17531 = (state_17551[(7)]);
var inst_17521 = (state_17551[(10)]);
var inst_17530 = (state_17551[(8)]);
var inst_17535 = (function (){var cs = inst_17521;
var vec__17526 = inst_17530;
var v = inst_17531;
var c = inst_17532;
return (function (p1__17517_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17517_SHARP_);
});
})();
var inst_17536 = cljs.core.filterv(inst_17535,inst_17521);
var inst_17521__$1 = inst_17536;
var state_17551__$1 = (function (){var statearr_17572 = state_17551;
(statearr_17572[(10)] = inst_17521__$1);

return statearr_17572;
})();
var statearr_17573_19245 = state_17551__$1;
(statearr_17573_19245[(2)] = null);

(statearr_17573_19245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_17574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17574[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_17574[(1)] = (1));

return statearr_17574;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_17551){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17551);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17575){var ex__15404__auto__ = e17575;
var statearr_17576_19250 = state_17551;
(statearr_17576_19250[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_17551[(4)]))){
var statearr_17577_19252 = state_17551;
(statearr_17577_19252[(1)] = cljs.core.first((state_17551[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19253 = state_17551;
state_17551 = G__19253;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_17551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_17551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_17578 = f__15575__auto__();
(statearr_17578[(6)] = c__15574__auto___19219);

return statearr_17578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17589 = arguments.length;
switch (G__17589) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15574__auto___19258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_17621){
var state_val_17622 = (state_17621[(1)]);
if((state_val_17622 === (7))){
var inst_17600 = (state_17621[(7)]);
var inst_17600__$1 = (state_17621[(2)]);
var inst_17601 = (inst_17600__$1 == null);
var inst_17602 = cljs.core.not(inst_17601);
var state_17621__$1 = (function (){var statearr_17623 = state_17621;
(statearr_17623[(7)] = inst_17600__$1);

return statearr_17623;
})();
if(inst_17602){
var statearr_17624_19259 = state_17621__$1;
(statearr_17624_19259[(1)] = (8));

} else {
var statearr_17625_19260 = state_17621__$1;
(statearr_17625_19260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (1))){
var inst_17595 = (0);
var state_17621__$1 = (function (){var statearr_17630 = state_17621;
(statearr_17630[(8)] = inst_17595);

return statearr_17630;
})();
var statearr_17631_19261 = state_17621__$1;
(statearr_17631_19261[(2)] = null);

(statearr_17631_19261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (4))){
var state_17621__$1 = state_17621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17621__$1,(7),ch);
} else {
if((state_val_17622 === (6))){
var inst_17613 = (state_17621[(2)]);
var state_17621__$1 = state_17621;
var statearr_17636_19262 = state_17621__$1;
(statearr_17636_19262[(2)] = inst_17613);

(statearr_17636_19262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (3))){
var inst_17615 = (state_17621[(2)]);
var inst_17616 = cljs.core.async.close_BANG_(out);
var state_17621__$1 = (function (){var statearr_17637 = state_17621;
(statearr_17637[(9)] = inst_17615);

return statearr_17637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17621__$1,inst_17616);
} else {
if((state_val_17622 === (2))){
var inst_17595 = (state_17621[(8)]);
var inst_17597 = (inst_17595 < n);
var state_17621__$1 = state_17621;
if(cljs.core.truth_(inst_17597)){
var statearr_17638_19263 = state_17621__$1;
(statearr_17638_19263[(1)] = (4));

} else {
var statearr_17639_19264 = state_17621__$1;
(statearr_17639_19264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (11))){
var inst_17595 = (state_17621[(8)]);
var inst_17605 = (state_17621[(2)]);
var inst_17606 = (inst_17595 + (1));
var inst_17595__$1 = inst_17606;
var state_17621__$1 = (function (){var statearr_17640 = state_17621;
(statearr_17640[(10)] = inst_17605);

(statearr_17640[(8)] = inst_17595__$1);

return statearr_17640;
})();
var statearr_17641_19269 = state_17621__$1;
(statearr_17641_19269[(2)] = null);

(statearr_17641_19269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (9))){
var state_17621__$1 = state_17621;
var statearr_17642_19270 = state_17621__$1;
(statearr_17642_19270[(2)] = null);

(statearr_17642_19270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (5))){
var state_17621__$1 = state_17621;
var statearr_17643_19272 = state_17621__$1;
(statearr_17643_19272[(2)] = null);

(statearr_17643_19272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (10))){
var inst_17610 = (state_17621[(2)]);
var state_17621__$1 = state_17621;
var statearr_17647_19273 = state_17621__$1;
(statearr_17647_19273[(2)] = inst_17610);

(statearr_17647_19273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (8))){
var inst_17600 = (state_17621[(7)]);
var state_17621__$1 = state_17621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17621__$1,(11),out,inst_17600);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_17648 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17648[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_17648[(1)] = (1));

return statearr_17648;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_17621){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17621);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17649){var ex__15404__auto__ = e17649;
var statearr_17650_19274 = state_17621;
(statearr_17650_19274[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_17621[(4)]))){
var statearr_17651_19275 = state_17621;
(statearr_17651_19275[(1)] = cljs.core.first((state_17621[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19276 = state_17621;
state_17621 = G__19276;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_17621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_17621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_17652 = f__15575__auto__();
(statearr_17652[(6)] = c__15574__auto___19258);

return statearr_17652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17654 = (function (f,ch,meta17655){
this.f = f;
this.ch = ch;
this.meta17655 = meta17655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17656,meta17655__$1){
var self__ = this;
var _17656__$1 = this;
return (new cljs.core.async.t_cljs$core$async17654(self__.f,self__.ch,meta17655__$1));
}));

(cljs.core.async.t_cljs$core$async17654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17656){
var self__ = this;
var _17656__$1 = this;
return self__.meta17655;
}));

(cljs.core.async.t_cljs$core$async17654.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17654.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17659 = (function (f,ch,meta17655,_,fn1,meta17660){
this.f = f;
this.ch = ch;
this.meta17655 = meta17655;
this._ = _;
this.fn1 = fn1;
this.meta17660 = meta17660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17661,meta17660__$1){
var self__ = this;
var _17661__$1 = this;
return (new cljs.core.async.t_cljs$core$async17659(self__.f,self__.ch,self__.meta17655,self__._,self__.fn1,meta17660__$1));
}));

(cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17661){
var self__ = this;
var _17661__$1 = this;
return self__.meta17660;
}));

(cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17653_SHARP_){
var G__17668 = (((p1__17653_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17653_SHARP_) : self__.f.call(null,p1__17653_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17668) : f1.call(null,G__17668));
});
}));

(cljs.core.async.t_cljs$core$async17659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17655","meta17655",445690298,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17654","cljs.core.async/t_cljs$core$async17654",-1384099675,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17660","meta17660",315832682,null)], null);
}));

(cljs.core.async.t_cljs$core$async17659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17659");

(cljs.core.async.t_cljs$core$async17659.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17659.
 */
cljs.core.async.__GT_t_cljs$core$async17659 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17659(f__$1,ch__$1,meta17655__$1,___$2,fn1__$1,meta17660){
return (new cljs.core.async.t_cljs$core$async17659(f__$1,ch__$1,meta17655__$1,___$2,fn1__$1,meta17660));
});

}

return (new cljs.core.async.t_cljs$core$async17659(self__.f,self__.ch,self__.meta17655,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17682 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17682) : self__.f.call(null,G__17682));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17654.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17655","meta17655",445690298,null)], null);
}));

(cljs.core.async.t_cljs$core$async17654.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17654");

(cljs.core.async.t_cljs$core$async17654.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17654");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17654.
 */
cljs.core.async.__GT_t_cljs$core$async17654 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17654(f__$1,ch__$1,meta17655){
return (new cljs.core.async.t_cljs$core$async17654(f__$1,ch__$1,meta17655));
});

}

return (new cljs.core.async.t_cljs$core$async17654(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17688 = (function (f,ch,meta17689){
this.f = f;
this.ch = ch;
this.meta17689 = meta17689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17690,meta17689__$1){
var self__ = this;
var _17690__$1 = this;
return (new cljs.core.async.t_cljs$core$async17688(self__.f,self__.ch,meta17689__$1));
}));

(cljs.core.async.t_cljs$core$async17688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17690){
var self__ = this;
var _17690__$1 = this;
return self__.meta17689;
}));

(cljs.core.async.t_cljs$core$async17688.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17688.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17688.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17689","meta17689",-953252954,null)], null);
}));

(cljs.core.async.t_cljs$core$async17688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17688");

(cljs.core.async.t_cljs$core$async17688.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17688.
 */
cljs.core.async.__GT_t_cljs$core$async17688 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17688(f__$1,ch__$1,meta17689){
return (new cljs.core.async.t_cljs$core$async17688(f__$1,ch__$1,meta17689));
});

}

return (new cljs.core.async.t_cljs$core$async17688(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17734 = (function (p,ch,meta17735){
this.p = p;
this.ch = ch;
this.meta17735 = meta17735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17736,meta17735__$1){
var self__ = this;
var _17736__$1 = this;
return (new cljs.core.async.t_cljs$core$async17734(self__.p,self__.ch,meta17735__$1));
}));

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17736){
var self__ = this;
var _17736__$1 = this;
return self__.meta17735;
}));

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17735","meta17735",-1736893460,null)], null);
}));

(cljs.core.async.t_cljs$core$async17734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17734");

(cljs.core.async.t_cljs$core$async17734.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17734.
 */
cljs.core.async.__GT_t_cljs$core$async17734 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17734(p__$1,ch__$1,meta17735){
return (new cljs.core.async.t_cljs$core$async17734(p__$1,ch__$1,meta17735));
});

}

return (new cljs.core.async.t_cljs$core$async17734(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17749 = arguments.length;
switch (G__17749) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15574__auto___19285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_17779){
var state_val_17780 = (state_17779[(1)]);
if((state_val_17780 === (7))){
var inst_17775 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17784_19286 = state_17779__$1;
(statearr_17784_19286[(2)] = inst_17775);

(statearr_17784_19286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (1))){
var state_17779__$1 = state_17779;
var statearr_17790_19287 = state_17779__$1;
(statearr_17790_19287[(2)] = null);

(statearr_17790_19287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (4))){
var inst_17758 = (state_17779[(7)]);
var inst_17758__$1 = (state_17779[(2)]);
var inst_17760 = (inst_17758__$1 == null);
var state_17779__$1 = (function (){var statearr_17791 = state_17779;
(statearr_17791[(7)] = inst_17758__$1);

return statearr_17791;
})();
if(cljs.core.truth_(inst_17760)){
var statearr_17792_19290 = state_17779__$1;
(statearr_17792_19290[(1)] = (5));

} else {
var statearr_17793_19291 = state_17779__$1;
(statearr_17793_19291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (6))){
var inst_17758 = (state_17779[(7)]);
var inst_17764 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17758) : p.call(null,inst_17758));
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17764)){
var statearr_17794_19292 = state_17779__$1;
(statearr_17794_19292[(1)] = (8));

} else {
var statearr_17797_19293 = state_17779__$1;
(statearr_17797_19293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (3))){
var inst_17777 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17779__$1,inst_17777);
} else {
if((state_val_17780 === (2))){
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17779__$1,(4),ch);
} else {
if((state_val_17780 === (11))){
var inst_17767 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17804_19298 = state_17779__$1;
(statearr_17804_19298[(2)] = inst_17767);

(statearr_17804_19298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (9))){
var state_17779__$1 = state_17779;
var statearr_17810_19299 = state_17779__$1;
(statearr_17810_19299[(2)] = null);

(statearr_17810_19299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (5))){
var inst_17762 = cljs.core.async.close_BANG_(out);
var state_17779__$1 = state_17779;
var statearr_17811_19300 = state_17779__$1;
(statearr_17811_19300[(2)] = inst_17762);

(statearr_17811_19300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (10))){
var inst_17770 = (state_17779[(2)]);
var state_17779__$1 = (function (){var statearr_17813 = state_17779;
(statearr_17813[(8)] = inst_17770);

return statearr_17813;
})();
var statearr_17814_19301 = state_17779__$1;
(statearr_17814_19301[(2)] = null);

(statearr_17814_19301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (8))){
var inst_17758 = (state_17779[(7)]);
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17779__$1,(11),out,inst_17758);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_17816 = [null,null,null,null,null,null,null,null,null];
(statearr_17816[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_17816[(1)] = (1));

return statearr_17816;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_17779){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17779);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17817){var ex__15404__auto__ = e17817;
var statearr_17818_19302 = state_17779;
(statearr_17818_19302[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_17779[(4)]))){
var statearr_17819_19303 = state_17779;
(statearr_17819_19303[(1)] = cljs.core.first((state_17779[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19304 = state_17779;
state_17779 = G__19304;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_17779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_17779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_17824 = f__15575__auto__();
(statearr_17824[(6)] = c__15574__auto___19285);

return statearr_17824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17832 = arguments.length;
switch (G__17832) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15574__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_17922){
var state_val_17923 = (state_17922[(1)]);
if((state_val_17923 === (7))){
var inst_17910 = (state_17922[(2)]);
var state_17922__$1 = state_17922;
var statearr_17924_19309 = state_17922__$1;
(statearr_17924_19309[(2)] = inst_17910);

(statearr_17924_19309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (20))){
var inst_17867 = (state_17922[(7)]);
var inst_17887 = (state_17922[(2)]);
var inst_17888 = cljs.core.next(inst_17867);
var inst_17852 = inst_17888;
var inst_17853 = null;
var inst_17854 = (0);
var inst_17855 = (0);
var state_17922__$1 = (function (){var statearr_17926 = state_17922;
(statearr_17926[(8)] = inst_17853);

(statearr_17926[(9)] = inst_17855);

(statearr_17926[(10)] = inst_17852);

(statearr_17926[(11)] = inst_17854);

(statearr_17926[(12)] = inst_17887);

return statearr_17926;
})();
var statearr_17927_19310 = state_17922__$1;
(statearr_17927_19310[(2)] = null);

(statearr_17927_19310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (1))){
var state_17922__$1 = state_17922;
var statearr_17928_19311 = state_17922__$1;
(statearr_17928_19311[(2)] = null);

(statearr_17928_19311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (4))){
var inst_17839 = (state_17922[(13)]);
var inst_17839__$1 = (state_17922[(2)]);
var inst_17840 = (inst_17839__$1 == null);
var state_17922__$1 = (function (){var statearr_17929 = state_17922;
(statearr_17929[(13)] = inst_17839__$1);

return statearr_17929;
})();
if(cljs.core.truth_(inst_17840)){
var statearr_17930_19312 = state_17922__$1;
(statearr_17930_19312[(1)] = (5));

} else {
var statearr_17931_19313 = state_17922__$1;
(statearr_17931_19313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (15))){
var state_17922__$1 = state_17922;
var statearr_17935_19314 = state_17922__$1;
(statearr_17935_19314[(2)] = null);

(statearr_17935_19314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (21))){
var state_17922__$1 = state_17922;
var statearr_17936_19315 = state_17922__$1;
(statearr_17936_19315[(2)] = null);

(statearr_17936_19315[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (13))){
var inst_17853 = (state_17922[(8)]);
var inst_17855 = (state_17922[(9)]);
var inst_17852 = (state_17922[(10)]);
var inst_17854 = (state_17922[(11)]);
var inst_17863 = (state_17922[(2)]);
var inst_17864 = (inst_17855 + (1));
var tmp17932 = inst_17853;
var tmp17933 = inst_17852;
var tmp17934 = inst_17854;
var inst_17852__$1 = tmp17933;
var inst_17853__$1 = tmp17932;
var inst_17854__$1 = tmp17934;
var inst_17855__$1 = inst_17864;
var state_17922__$1 = (function (){var statearr_17938 = state_17922;
(statearr_17938[(8)] = inst_17853__$1);

(statearr_17938[(9)] = inst_17855__$1);

(statearr_17938[(10)] = inst_17852__$1);

(statearr_17938[(11)] = inst_17854__$1);

(statearr_17938[(14)] = inst_17863);

return statearr_17938;
})();
var statearr_17939_19316 = state_17922__$1;
(statearr_17939_19316[(2)] = null);

(statearr_17939_19316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (22))){
var state_17922__$1 = state_17922;
var statearr_17940_19317 = state_17922__$1;
(statearr_17940_19317[(2)] = null);

(statearr_17940_19317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (6))){
var inst_17839 = (state_17922[(13)]);
var inst_17848 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17839) : f.call(null,inst_17839));
var inst_17849 = cljs.core.seq(inst_17848);
var inst_17852 = inst_17849;
var inst_17853 = null;
var inst_17854 = (0);
var inst_17855 = (0);
var state_17922__$1 = (function (){var statearr_17941 = state_17922;
(statearr_17941[(8)] = inst_17853);

(statearr_17941[(9)] = inst_17855);

(statearr_17941[(10)] = inst_17852);

(statearr_17941[(11)] = inst_17854);

return statearr_17941;
})();
var statearr_17942_19318 = state_17922__$1;
(statearr_17942_19318[(2)] = null);

(statearr_17942_19318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (17))){
var inst_17867 = (state_17922[(7)]);
var inst_17872 = cljs.core.chunk_first(inst_17867);
var inst_17873 = cljs.core.chunk_rest(inst_17867);
var inst_17878 = cljs.core.count(inst_17872);
var inst_17852 = inst_17873;
var inst_17853 = inst_17872;
var inst_17854 = inst_17878;
var inst_17855 = (0);
var state_17922__$1 = (function (){var statearr_17943 = state_17922;
(statearr_17943[(8)] = inst_17853);

(statearr_17943[(9)] = inst_17855);

(statearr_17943[(10)] = inst_17852);

(statearr_17943[(11)] = inst_17854);

return statearr_17943;
})();
var statearr_17944_19319 = state_17922__$1;
(statearr_17944_19319[(2)] = null);

(statearr_17944_19319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (3))){
var inst_17912 = (state_17922[(2)]);
var state_17922__$1 = state_17922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17922__$1,inst_17912);
} else {
if((state_val_17923 === (12))){
var inst_17896 = (state_17922[(2)]);
var state_17922__$1 = state_17922;
var statearr_17946_19320 = state_17922__$1;
(statearr_17946_19320[(2)] = inst_17896);

(statearr_17946_19320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (2))){
var state_17922__$1 = state_17922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17922__$1,(4),in$);
} else {
if((state_val_17923 === (23))){
var inst_17908 = (state_17922[(2)]);
var state_17922__$1 = state_17922;
var statearr_17951_19321 = state_17922__$1;
(statearr_17951_19321[(2)] = inst_17908);

(statearr_17951_19321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (19))){
var inst_17891 = (state_17922[(2)]);
var state_17922__$1 = state_17922;
var statearr_17952_19322 = state_17922__$1;
(statearr_17952_19322[(2)] = inst_17891);

(statearr_17952_19322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (11))){
var inst_17852 = (state_17922[(10)]);
var inst_17867 = (state_17922[(7)]);
var inst_17867__$1 = cljs.core.seq(inst_17852);
var state_17922__$1 = (function (){var statearr_17958 = state_17922;
(statearr_17958[(7)] = inst_17867__$1);

return statearr_17958;
})();
if(inst_17867__$1){
var statearr_17959_19323 = state_17922__$1;
(statearr_17959_19323[(1)] = (14));

} else {
var statearr_17961_19324 = state_17922__$1;
(statearr_17961_19324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (9))){
var inst_17898 = (state_17922[(2)]);
var inst_17903 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17922__$1 = (function (){var statearr_17962 = state_17922;
(statearr_17962[(15)] = inst_17898);

return statearr_17962;
})();
if(cljs.core.truth_(inst_17903)){
var statearr_17963_19326 = state_17922__$1;
(statearr_17963_19326[(1)] = (21));

} else {
var statearr_17964_19328 = state_17922__$1;
(statearr_17964_19328[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (5))){
var inst_17842 = cljs.core.async.close_BANG_(out);
var state_17922__$1 = state_17922;
var statearr_17965_19329 = state_17922__$1;
(statearr_17965_19329[(2)] = inst_17842);

(statearr_17965_19329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (14))){
var inst_17867 = (state_17922[(7)]);
var inst_17869 = cljs.core.chunked_seq_QMARK_(inst_17867);
var state_17922__$1 = state_17922;
if(inst_17869){
var statearr_17970_19330 = state_17922__$1;
(statearr_17970_19330[(1)] = (17));

} else {
var statearr_17971_19331 = state_17922__$1;
(statearr_17971_19331[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (16))){
var inst_17894 = (state_17922[(2)]);
var state_17922__$1 = state_17922;
var statearr_17972_19332 = state_17922__$1;
(statearr_17972_19332[(2)] = inst_17894);

(statearr_17972_19332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17923 === (10))){
var inst_17853 = (state_17922[(8)]);
var inst_17855 = (state_17922[(9)]);
var inst_17861 = cljs.core._nth(inst_17853,inst_17855);
var state_17922__$1 = state_17922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17922__$1,(13),out,inst_17861);
} else {
if((state_val_17923 === (18))){
var inst_17867 = (state_17922[(7)]);
var inst_17885 = cljs.core.first(inst_17867);
var state_17922__$1 = state_17922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17922__$1,(20),out,inst_17885);
} else {
if((state_val_17923 === (8))){
var inst_17855 = (state_17922[(9)]);
var inst_17854 = (state_17922[(11)]);
var inst_17858 = (inst_17855 < inst_17854);
var inst_17859 = inst_17858;
var state_17922__$1 = state_17922;
if(cljs.core.truth_(inst_17859)){
var statearr_17974_19334 = state_17922__$1;
(statearr_17974_19334[(1)] = (10));

} else {
var statearr_17975_19335 = state_17922__$1;
(statearr_17975_19335[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_17976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17976[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__);

(statearr_17976[(1)] = (1));

return statearr_17976;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____1 = (function (state_17922){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17922);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17977){var ex__15404__auto__ = e17977;
var statearr_17978_19340 = state_17922;
(statearr_17978_19340[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_17922[(4)]))){
var statearr_17979_19344 = state_17922;
(statearr_17979_19344[(1)] = cljs.core.first((state_17922[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19345 = state_17922;
state_17922 = G__19345;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__ = function(state_17922){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____1.call(this,state_17922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_17981 = f__15575__auto__();
(statearr_17981[(6)] = c__15574__auto__);

return statearr_17981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));

return c__15574__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17991 = arguments.length;
switch (G__17991) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18006 = arguments.length;
switch (G__18006) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18009 = arguments.length;
switch (G__18009) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15574__auto___19356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_18034){
var state_val_18035 = (state_18034[(1)]);
if((state_val_18035 === (7))){
var inst_18029 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
var statearr_18036_19358 = state_18034__$1;
(statearr_18036_19358[(2)] = inst_18029);

(statearr_18036_19358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (1))){
var inst_18010 = null;
var state_18034__$1 = (function (){var statearr_18037 = state_18034;
(statearr_18037[(7)] = inst_18010);

return statearr_18037;
})();
var statearr_18038_19359 = state_18034__$1;
(statearr_18038_19359[(2)] = null);

(statearr_18038_19359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (4))){
var inst_18013 = (state_18034[(8)]);
var inst_18013__$1 = (state_18034[(2)]);
var inst_18014 = (inst_18013__$1 == null);
var inst_18015 = cljs.core.not(inst_18014);
var state_18034__$1 = (function (){var statearr_18039 = state_18034;
(statearr_18039[(8)] = inst_18013__$1);

return statearr_18039;
})();
if(inst_18015){
var statearr_18040_19360 = state_18034__$1;
(statearr_18040_19360[(1)] = (5));

} else {
var statearr_18041_19361 = state_18034__$1;
(statearr_18041_19361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (6))){
var state_18034__$1 = state_18034;
var statearr_18042_19362 = state_18034__$1;
(statearr_18042_19362[(2)] = null);

(statearr_18042_19362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (3))){
var inst_18031 = (state_18034[(2)]);
var inst_18032 = cljs.core.async.close_BANG_(out);
var state_18034__$1 = (function (){var statearr_18043 = state_18034;
(statearr_18043[(9)] = inst_18031);

return statearr_18043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18034__$1,inst_18032);
} else {
if((state_val_18035 === (2))){
var state_18034__$1 = state_18034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18034__$1,(4),ch);
} else {
if((state_val_18035 === (11))){
var inst_18013 = (state_18034[(8)]);
var inst_18023 = (state_18034[(2)]);
var inst_18010 = inst_18013;
var state_18034__$1 = (function (){var statearr_18044 = state_18034;
(statearr_18044[(7)] = inst_18010);

(statearr_18044[(10)] = inst_18023);

return statearr_18044;
})();
var statearr_18046_19365 = state_18034__$1;
(statearr_18046_19365[(2)] = null);

(statearr_18046_19365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (9))){
var inst_18013 = (state_18034[(8)]);
var state_18034__$1 = state_18034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18034__$1,(11),out,inst_18013);
} else {
if((state_val_18035 === (5))){
var inst_18013 = (state_18034[(8)]);
var inst_18010 = (state_18034[(7)]);
var inst_18018 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18013,inst_18010);
var state_18034__$1 = state_18034;
if(inst_18018){
var statearr_18048_19367 = state_18034__$1;
(statearr_18048_19367[(1)] = (8));

} else {
var statearr_18049_19368 = state_18034__$1;
(statearr_18049_19368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (10))){
var inst_18026 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
var statearr_18050_19369 = state_18034__$1;
(statearr_18050_19369[(2)] = inst_18026);

(statearr_18050_19369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (8))){
var inst_18010 = (state_18034[(7)]);
var tmp18047 = inst_18010;
var inst_18010__$1 = tmp18047;
var state_18034__$1 = (function (){var statearr_18051 = state_18034;
(statearr_18051[(7)] = inst_18010__$1);

return statearr_18051;
})();
var statearr_18052_19370 = state_18034__$1;
(statearr_18052_19370[(2)] = null);

(statearr_18052_19370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_18056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18056[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_18056[(1)] = (1));

return statearr_18056;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_18034){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18034);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18058){var ex__15404__auto__ = e18058;
var statearr_18061_19374 = state_18034;
(statearr_18061_19374[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_18034[(4)]))){
var statearr_18064_19375 = state_18034;
(statearr_18064_19375[(1)] = cljs.core.first((state_18034[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19376 = state_18034;
state_18034 = G__19376;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_18034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_18034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_18068 = f__15575__auto__();
(statearr_18068[(6)] = c__15574__auto___19356);

return statearr_18068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18070 = arguments.length;
switch (G__18070) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15574__auto___19378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_18109){
var state_val_18110 = (state_18109[(1)]);
if((state_val_18110 === (7))){
var inst_18105 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18112_19379 = state_18109__$1;
(statearr_18112_19379[(2)] = inst_18105);

(statearr_18112_19379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (1))){
var inst_18072 = (new Array(n));
var inst_18073 = inst_18072;
var inst_18074 = (0);
var state_18109__$1 = (function (){var statearr_18113 = state_18109;
(statearr_18113[(7)] = inst_18074);

(statearr_18113[(8)] = inst_18073);

return statearr_18113;
})();
var statearr_18114_19380 = state_18109__$1;
(statearr_18114_19380[(2)] = null);

(statearr_18114_19380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (4))){
var inst_18077 = (state_18109[(9)]);
var inst_18077__$1 = (state_18109[(2)]);
var inst_18078 = (inst_18077__$1 == null);
var inst_18079 = cljs.core.not(inst_18078);
var state_18109__$1 = (function (){var statearr_18115 = state_18109;
(statearr_18115[(9)] = inst_18077__$1);

return statearr_18115;
})();
if(inst_18079){
var statearr_18116_19388 = state_18109__$1;
(statearr_18116_19388[(1)] = (5));

} else {
var statearr_18117_19389 = state_18109__$1;
(statearr_18117_19389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (15))){
var inst_18099 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18118_19396 = state_18109__$1;
(statearr_18118_19396[(2)] = inst_18099);

(statearr_18118_19396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (13))){
var state_18109__$1 = state_18109;
var statearr_18120_19397 = state_18109__$1;
(statearr_18120_19397[(2)] = null);

(statearr_18120_19397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (6))){
var inst_18074 = (state_18109[(7)]);
var inst_18095 = (inst_18074 > (0));
var state_18109__$1 = state_18109;
if(cljs.core.truth_(inst_18095)){
var statearr_18121_19404 = state_18109__$1;
(statearr_18121_19404[(1)] = (12));

} else {
var statearr_18122_19405 = state_18109__$1;
(statearr_18122_19405[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (3))){
var inst_18107 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18109__$1,inst_18107);
} else {
if((state_val_18110 === (12))){
var inst_18073 = (state_18109[(8)]);
var inst_18097 = cljs.core.vec(inst_18073);
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18109__$1,(15),out,inst_18097);
} else {
if((state_val_18110 === (2))){
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18109__$1,(4),ch);
} else {
if((state_val_18110 === (11))){
var inst_18089 = (state_18109[(2)]);
var inst_18090 = (new Array(n));
var inst_18073 = inst_18090;
var inst_18074 = (0);
var state_18109__$1 = (function (){var statearr_18123 = state_18109;
(statearr_18123[(7)] = inst_18074);

(statearr_18123[(10)] = inst_18089);

(statearr_18123[(8)] = inst_18073);

return statearr_18123;
})();
var statearr_18124_19406 = state_18109__$1;
(statearr_18124_19406[(2)] = null);

(statearr_18124_19406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (9))){
var inst_18073 = (state_18109[(8)]);
var inst_18087 = cljs.core.vec(inst_18073);
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18109__$1,(11),out,inst_18087);
} else {
if((state_val_18110 === (5))){
var inst_18074 = (state_18109[(7)]);
var inst_18077 = (state_18109[(9)]);
var inst_18082 = (state_18109[(11)]);
var inst_18073 = (state_18109[(8)]);
var inst_18081 = (inst_18073[inst_18074] = inst_18077);
var inst_18082__$1 = (inst_18074 + (1));
var inst_18083 = (inst_18082__$1 < n);
var state_18109__$1 = (function (){var statearr_18126 = state_18109;
(statearr_18126[(12)] = inst_18081);

(statearr_18126[(11)] = inst_18082__$1);

return statearr_18126;
})();
if(cljs.core.truth_(inst_18083)){
var statearr_18127_19414 = state_18109__$1;
(statearr_18127_19414[(1)] = (8));

} else {
var statearr_18128_19415 = state_18109__$1;
(statearr_18128_19415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (14))){
var inst_18102 = (state_18109[(2)]);
var inst_18103 = cljs.core.async.close_BANG_(out);
var state_18109__$1 = (function (){var statearr_18130 = state_18109;
(statearr_18130[(13)] = inst_18102);

return statearr_18130;
})();
var statearr_18131_19419 = state_18109__$1;
(statearr_18131_19419[(2)] = inst_18103);

(statearr_18131_19419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (10))){
var inst_18093 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18132_19420 = state_18109__$1;
(statearr_18132_19420[(2)] = inst_18093);

(statearr_18132_19420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (8))){
var inst_18082 = (state_18109[(11)]);
var inst_18073 = (state_18109[(8)]);
var tmp18129 = inst_18073;
var inst_18073__$1 = tmp18129;
var inst_18074 = inst_18082;
var state_18109__$1 = (function (){var statearr_18133 = state_18109;
(statearr_18133[(7)] = inst_18074);

(statearr_18133[(8)] = inst_18073__$1);

return statearr_18133;
})();
var statearr_18134_19424 = state_18109__$1;
(statearr_18134_19424[(2)] = null);

(statearr_18134_19424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_18136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18136[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_18136[(1)] = (1));

return statearr_18136;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_18109){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18109);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18137){var ex__15404__auto__ = e18137;
var statearr_18138_19425 = state_18109;
(statearr_18138_19425[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_18109[(4)]))){
var statearr_18139_19426 = state_18109;
(statearr_18139_19426[(1)] = cljs.core.first((state_18109[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19427 = state_18109;
state_18109 = G__19427;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_18109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_18109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_18140 = f__15575__auto__();
(statearr_18140[(6)] = c__15574__auto___19378);

return statearr_18140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18143 = arguments.length;
switch (G__18143) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15574__auto___19436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15575__auto__ = (function (){var switch__15400__auto__ = (function (state_18190){
var state_val_18191 = (state_18190[(1)]);
if((state_val_18191 === (7))){
var inst_18186 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18193_19440 = state_18190__$1;
(statearr_18193_19440[(2)] = inst_18186);

(statearr_18193_19440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (1))){
var inst_18145 = [];
var inst_18146 = inst_18145;
var inst_18147 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18190__$1 = (function (){var statearr_18194 = state_18190;
(statearr_18194[(7)] = inst_18146);

(statearr_18194[(8)] = inst_18147);

return statearr_18194;
})();
var statearr_18195_19442 = state_18190__$1;
(statearr_18195_19442[(2)] = null);

(statearr_18195_19442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (4))){
var inst_18150 = (state_18190[(9)]);
var inst_18150__$1 = (state_18190[(2)]);
var inst_18151 = (inst_18150__$1 == null);
var inst_18152 = cljs.core.not(inst_18151);
var state_18190__$1 = (function (){var statearr_18196 = state_18190;
(statearr_18196[(9)] = inst_18150__$1);

return statearr_18196;
})();
if(inst_18152){
var statearr_18197_19446 = state_18190__$1;
(statearr_18197_19446[(1)] = (5));

} else {
var statearr_18198_19447 = state_18190__$1;
(statearr_18198_19447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (15))){
var inst_18146 = (state_18190[(7)]);
var inst_18177 = cljs.core.vec(inst_18146);
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18190__$1,(18),out,inst_18177);
} else {
if((state_val_18191 === (13))){
var inst_18172 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18199_19451 = state_18190__$1;
(statearr_18199_19451[(2)] = inst_18172);

(statearr_18199_19451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (6))){
var inst_18146 = (state_18190[(7)]);
var inst_18174 = inst_18146.length;
var inst_18175 = (inst_18174 > (0));
var state_18190__$1 = state_18190;
if(cljs.core.truth_(inst_18175)){
var statearr_18200_19452 = state_18190__$1;
(statearr_18200_19452[(1)] = (15));

} else {
var statearr_18202_19453 = state_18190__$1;
(statearr_18202_19453[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (17))){
var inst_18183 = (state_18190[(2)]);
var inst_18184 = cljs.core.async.close_BANG_(out);
var state_18190__$1 = (function (){var statearr_18203 = state_18190;
(statearr_18203[(10)] = inst_18183);

return statearr_18203;
})();
var statearr_18204_19457 = state_18190__$1;
(statearr_18204_19457[(2)] = inst_18184);

(statearr_18204_19457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (3))){
var inst_18188 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18190__$1,inst_18188);
} else {
if((state_val_18191 === (12))){
var inst_18146 = (state_18190[(7)]);
var inst_18165 = cljs.core.vec(inst_18146);
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18190__$1,(14),out,inst_18165);
} else {
if((state_val_18191 === (2))){
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18190__$1,(4),ch);
} else {
if((state_val_18191 === (11))){
var inst_18146 = (state_18190[(7)]);
var inst_18150 = (state_18190[(9)]);
var inst_18154 = (state_18190[(11)]);
var inst_18162 = inst_18146.push(inst_18150);
var tmp18205 = inst_18146;
var inst_18146__$1 = tmp18205;
var inst_18147 = inst_18154;
var state_18190__$1 = (function (){var statearr_18206 = state_18190;
(statearr_18206[(7)] = inst_18146__$1);

(statearr_18206[(12)] = inst_18162);

(statearr_18206[(8)] = inst_18147);

return statearr_18206;
})();
var statearr_18207_19458 = state_18190__$1;
(statearr_18207_19458[(2)] = null);

(statearr_18207_19458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (9))){
var inst_18147 = (state_18190[(8)]);
var inst_18158 = cljs.core.keyword_identical_QMARK_(inst_18147,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18190__$1 = state_18190;
var statearr_18209_19462 = state_18190__$1;
(statearr_18209_19462[(2)] = inst_18158);

(statearr_18209_19462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (5))){
var inst_18150 = (state_18190[(9)]);
var inst_18155 = (state_18190[(13)]);
var inst_18147 = (state_18190[(8)]);
var inst_18154 = (state_18190[(11)]);
var inst_18154__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18150) : f.call(null,inst_18150));
var inst_18155__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18154__$1,inst_18147);
var state_18190__$1 = (function (){var statearr_18210 = state_18190;
(statearr_18210[(13)] = inst_18155__$1);

(statearr_18210[(11)] = inst_18154__$1);

return statearr_18210;
})();
if(inst_18155__$1){
var statearr_18211_19463 = state_18190__$1;
(statearr_18211_19463[(1)] = (8));

} else {
var statearr_18212_19464 = state_18190__$1;
(statearr_18212_19464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (14))){
var inst_18150 = (state_18190[(9)]);
var inst_18154 = (state_18190[(11)]);
var inst_18167 = (state_18190[(2)]);
var inst_18168 = [];
var inst_18169 = inst_18168.push(inst_18150);
var inst_18146 = inst_18168;
var inst_18147 = inst_18154;
var state_18190__$1 = (function (){var statearr_18213 = state_18190;
(statearr_18213[(14)] = inst_18169);

(statearr_18213[(7)] = inst_18146);

(statearr_18213[(15)] = inst_18167);

(statearr_18213[(8)] = inst_18147);

return statearr_18213;
})();
var statearr_18214_19466 = state_18190__$1;
(statearr_18214_19466[(2)] = null);

(statearr_18214_19466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (16))){
var state_18190__$1 = state_18190;
var statearr_18215_19467 = state_18190__$1;
(statearr_18215_19467[(2)] = null);

(statearr_18215_19467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (10))){
var inst_18160 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
if(cljs.core.truth_(inst_18160)){
var statearr_18217_19468 = state_18190__$1;
(statearr_18217_19468[(1)] = (11));

} else {
var statearr_18218_19469 = state_18190__$1;
(statearr_18218_19469[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (18))){
var inst_18180 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18219_19470 = state_18190__$1;
(statearr_18219_19470[(2)] = inst_18180);

(statearr_18219_19470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (8))){
var inst_18155 = (state_18190[(13)]);
var state_18190__$1 = state_18190;
var statearr_18220_19471 = state_18190__$1;
(statearr_18220_19471[(2)] = inst_18155);

(statearr_18220_19471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_18221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18221[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_18221[(1)] = (1));

return statearr_18221;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_18190){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18190);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18222){var ex__15404__auto__ = e18222;
var statearr_18223_19485 = state_18190;
(statearr_18223_19485[(2)] = ex__15404__auto__);


if(cljs.core.seq((state_18190[(4)]))){
var statearr_18224_19486 = state_18190;
(statearr_18224_19486[(1)] = cljs.core.first((state_18190[(4)])));

} else {
throw ex__15404__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19487 = state_18190;
state_18190 = G__19487;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_18190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_18190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
})();
var state__15576__auto__ = (function (){var statearr_18228 = f__15575__auto__();
(statearr_18228[(6)] = c__15574__auto___19436);

return statearr_18228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15576__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
