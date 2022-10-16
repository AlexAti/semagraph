goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21951 = arguments.length;
var i__5770__auto___21952 = (0);
while(true){
if((i__5770__auto___21952 < len__5769__auto___21951)){
args__5775__auto__.push((arguments[i__5770__auto___21952]));

var G__21953 = (i__5770__auto___21952 + (1));
i__5770__auto___21952 = G__21953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21633){
var G__21634 = cljs.core.first(seq21633);
var seq21633__$1 = cljs.core.next(seq21633);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21634,seq21633__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21637 = cljs.core.seq(sources);
var chunk__21638 = null;
var count__21639 = (0);
var i__21640 = (0);
while(true){
if((i__21640 < count__21639)){
var map__21653 = chunk__21638.cljs$core$IIndexed$_nth$arity$2(null,i__21640);
var map__21653__$1 = cljs.core.__destructure_map(map__21653);
var src = map__21653__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21654){var e_21954 = e21654;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21954);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21954.message)].join('')));
}

var G__21955 = seq__21637;
var G__21956 = chunk__21638;
var G__21957 = count__21639;
var G__21958 = (i__21640 + (1));
seq__21637 = G__21955;
chunk__21638 = G__21956;
count__21639 = G__21957;
i__21640 = G__21958;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21637);
if(temp__5804__auto__){
var seq__21637__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21637__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21637__$1);
var G__21959 = cljs.core.chunk_rest(seq__21637__$1);
var G__21960 = c__5568__auto__;
var G__21961 = cljs.core.count(c__5568__auto__);
var G__21962 = (0);
seq__21637 = G__21959;
chunk__21638 = G__21960;
count__21639 = G__21961;
i__21640 = G__21962;
continue;
} else {
var map__21659 = cljs.core.first(seq__21637__$1);
var map__21659__$1 = cljs.core.__destructure_map(map__21659);
var src = map__21659__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21660){var e_21963 = e21660;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21963);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21963.message)].join('')));
}

var G__21964 = cljs.core.next(seq__21637__$1);
var G__21965 = null;
var G__21966 = (0);
var G__21967 = (0);
seq__21637 = G__21964;
chunk__21638 = G__21965;
count__21639 = G__21966;
i__21640 = G__21967;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21667 = cljs.core.seq(js_requires);
var chunk__21668 = null;
var count__21669 = (0);
var i__21670 = (0);
while(true){
if((i__21670 < count__21669)){
var js_ns = chunk__21668.cljs$core$IIndexed$_nth$arity$2(null,i__21670);
var require_str_21968 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21968);


var G__21969 = seq__21667;
var G__21970 = chunk__21668;
var G__21971 = count__21669;
var G__21972 = (i__21670 + (1));
seq__21667 = G__21969;
chunk__21668 = G__21970;
count__21669 = G__21971;
i__21670 = G__21972;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21667);
if(temp__5804__auto__){
var seq__21667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21667__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21667__$1);
var G__21973 = cljs.core.chunk_rest(seq__21667__$1);
var G__21974 = c__5568__auto__;
var G__21975 = cljs.core.count(c__5568__auto__);
var G__21976 = (0);
seq__21667 = G__21973;
chunk__21668 = G__21974;
count__21669 = G__21975;
i__21670 = G__21976;
continue;
} else {
var js_ns = cljs.core.first(seq__21667__$1);
var require_str_21977 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21977);


var G__21978 = cljs.core.next(seq__21667__$1);
var G__21979 = null;
var G__21980 = (0);
var G__21981 = (0);
seq__21667 = G__21978;
chunk__21668 = G__21979;
count__21669 = G__21980;
i__21670 = G__21981;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21674){
var map__21675 = p__21674;
var map__21675__$1 = cljs.core.__destructure_map(map__21675);
var msg = map__21675__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21675__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21675__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21676(s__21677){
return (new cljs.core.LazySeq(null,(function (){
var s__21677__$1 = s__21677;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21677__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21683 = cljs.core.first(xs__6360__auto__);
var map__21683__$1 = cljs.core.__destructure_map(map__21683);
var src = map__21683__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__21677__$1,map__21683,map__21683__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21675,map__21675__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21676_$_iter__21678(s__21679){
return (new cljs.core.LazySeq(null,((function (s__21677__$1,map__21683,map__21683__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21675,map__21675__$1,msg,info,reload_info){
return (function (){
var s__21679__$1 = s__21679;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21679__$1);
if(temp__5804__auto____$1){
var s__21679__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21679__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21679__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21681 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21680 = (0);
while(true){
if((i__21680 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__21680);
cljs.core.chunk_append(b__21681,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21982 = (i__21680 + (1));
i__21680 = G__21982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21681),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21676_$_iter__21678(cljs.core.chunk_rest(s__21679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21681),null);
}
} else {
var warning = cljs.core.first(s__21679__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21676_$_iter__21678(cljs.core.rest(s__21679__$2)));
}
} else {
return null;
}
break;
}
});})(s__21677__$1,map__21683,map__21683__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21675,map__21675__$1,msg,info,reload_info))
,null,null));
});})(s__21677__$1,map__21683,map__21683__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21675,map__21675__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21676(cljs.core.rest(s__21677__$1)));
} else {
var G__21983 = cljs.core.rest(s__21677__$1);
s__21677__$1 = G__21983;
continue;
}
} else {
var G__21984 = cljs.core.rest(s__21677__$1);
s__21677__$1 = G__21984;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21686_21985 = cljs.core.seq(warnings);
var chunk__21687_21986 = null;
var count__21688_21987 = (0);
var i__21689_21988 = (0);
while(true){
if((i__21689_21988 < count__21688_21987)){
var map__21692_21989 = chunk__21687_21986.cljs$core$IIndexed$_nth$arity$2(null,i__21689_21988);
var map__21692_21990__$1 = cljs.core.__destructure_map(map__21692_21989);
var w_21991 = map__21692_21990__$1;
var msg_21992__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21692_21990__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21692_21990__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21692_21990__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21692_21990__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21995)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21993),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21994),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21992__$1)].join(''));


var G__21996 = seq__21686_21985;
var G__21997 = chunk__21687_21986;
var G__21998 = count__21688_21987;
var G__21999 = (i__21689_21988 + (1));
seq__21686_21985 = G__21996;
chunk__21687_21986 = G__21997;
count__21688_21987 = G__21998;
i__21689_21988 = G__21999;
continue;
} else {
var temp__5804__auto___22000 = cljs.core.seq(seq__21686_21985);
if(temp__5804__auto___22000){
var seq__21686_22001__$1 = temp__5804__auto___22000;
if(cljs.core.chunked_seq_QMARK_(seq__21686_22001__$1)){
var c__5568__auto___22002 = cljs.core.chunk_first(seq__21686_22001__$1);
var G__22003 = cljs.core.chunk_rest(seq__21686_22001__$1);
var G__22004 = c__5568__auto___22002;
var G__22005 = cljs.core.count(c__5568__auto___22002);
var G__22006 = (0);
seq__21686_21985 = G__22003;
chunk__21687_21986 = G__22004;
count__21688_21987 = G__22005;
i__21689_21988 = G__22006;
continue;
} else {
var map__21693_22007 = cljs.core.first(seq__21686_22001__$1);
var map__21693_22008__$1 = cljs.core.__destructure_map(map__21693_22007);
var w_22009 = map__21693_22008__$1;
var msg_22010__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693_22008__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693_22008__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693_22008__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693_22008__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22013)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22011),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22012),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22010__$1)].join(''));


var G__22014 = cljs.core.next(seq__21686_22001__$1);
var G__22015 = null;
var G__22016 = (0);
var G__22017 = (0);
seq__21686_21985 = G__22014;
chunk__21687_21986 = G__22015;
count__21688_21987 = G__22016;
i__21689_21988 = G__22017;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21673_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21673_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21696){
var map__21697 = p__21696;
var map__21697__$1 = cljs.core.__destructure_map(map__21697);
var msg = map__21697__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21697__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21697__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21702 = cljs.core.seq(updates);
var chunk__21704 = null;
var count__21705 = (0);
var i__21706 = (0);
while(true){
if((i__21706 < count__21705)){
var path = chunk__21704.cljs$core$IIndexed$_nth$arity$2(null,i__21706);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21823_22018 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21827_22019 = null;
var count__21828_22020 = (0);
var i__21829_22021 = (0);
while(true){
if((i__21829_22021 < count__21828_22020)){
var node_22022 = chunk__21827_22019.cljs$core$IIndexed$_nth$arity$2(null,i__21829_22021);
if(cljs.core.not(node_22022.shadow$old)){
var path_match_22023 = shadow.cljs.devtools.client.browser.match_paths(node_22022.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22023)){
var new_link_22024 = (function (){var G__21855 = node_22022.cloneNode(true);
G__21855.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22023),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21855;
})();
(node_22022.shadow$old = true);

(new_link_22024.onload = ((function (seq__21823_22018,chunk__21827_22019,count__21828_22020,i__21829_22021,seq__21702,chunk__21704,count__21705,i__21706,new_link_22024,path_match_22023,node_22022,path,map__21697,map__21697__$1,msg,updates,reload_info){
return (function (e){
var seq__21856_22025 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21858_22026 = null;
var count__21859_22027 = (0);
var i__21860_22028 = (0);
while(true){
if((i__21860_22028 < count__21859_22027)){
var map__21864_22029 = chunk__21858_22026.cljs$core$IIndexed$_nth$arity$2(null,i__21860_22028);
var map__21864_22030__$1 = cljs.core.__destructure_map(map__21864_22029);
var task_22031 = map__21864_22030__$1;
var fn_str_22032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864_22030__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864_22030__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22034 = goog.getObjectByName(fn_str_22032,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22033)].join(''));

(fn_obj_22034.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22034.cljs$core$IFn$_invoke$arity$2(path,new_link_22024) : fn_obj_22034.call(null,path,new_link_22024));


var G__22035 = seq__21856_22025;
var G__22036 = chunk__21858_22026;
var G__22037 = count__21859_22027;
var G__22038 = (i__21860_22028 + (1));
seq__21856_22025 = G__22035;
chunk__21858_22026 = G__22036;
count__21859_22027 = G__22037;
i__21860_22028 = G__22038;
continue;
} else {
var temp__5804__auto___22039 = cljs.core.seq(seq__21856_22025);
if(temp__5804__auto___22039){
var seq__21856_22040__$1 = temp__5804__auto___22039;
if(cljs.core.chunked_seq_QMARK_(seq__21856_22040__$1)){
var c__5568__auto___22041 = cljs.core.chunk_first(seq__21856_22040__$1);
var G__22042 = cljs.core.chunk_rest(seq__21856_22040__$1);
var G__22043 = c__5568__auto___22041;
var G__22044 = cljs.core.count(c__5568__auto___22041);
var G__22045 = (0);
seq__21856_22025 = G__22042;
chunk__21858_22026 = G__22043;
count__21859_22027 = G__22044;
i__21860_22028 = G__22045;
continue;
} else {
var map__21865_22046 = cljs.core.first(seq__21856_22040__$1);
var map__21865_22047__$1 = cljs.core.__destructure_map(map__21865_22046);
var task_22048 = map__21865_22047__$1;
var fn_str_22049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21865_22047__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21865_22047__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22051 = goog.getObjectByName(fn_str_22049,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22050)].join(''));

(fn_obj_22051.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22051.cljs$core$IFn$_invoke$arity$2(path,new_link_22024) : fn_obj_22051.call(null,path,new_link_22024));


var G__22052 = cljs.core.next(seq__21856_22040__$1);
var G__22053 = null;
var G__22054 = (0);
var G__22055 = (0);
seq__21856_22025 = G__22052;
chunk__21858_22026 = G__22053;
count__21859_22027 = G__22054;
i__21860_22028 = G__22055;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22022);
});})(seq__21823_22018,chunk__21827_22019,count__21828_22020,i__21829_22021,seq__21702,chunk__21704,count__21705,i__21706,new_link_22024,path_match_22023,node_22022,path,map__21697,map__21697__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22023], 0));

goog.dom.insertSiblingAfter(new_link_22024,node_22022);


var G__22056 = seq__21823_22018;
var G__22057 = chunk__21827_22019;
var G__22058 = count__21828_22020;
var G__22059 = (i__21829_22021 + (1));
seq__21823_22018 = G__22056;
chunk__21827_22019 = G__22057;
count__21828_22020 = G__22058;
i__21829_22021 = G__22059;
continue;
} else {
var G__22060 = seq__21823_22018;
var G__22061 = chunk__21827_22019;
var G__22062 = count__21828_22020;
var G__22063 = (i__21829_22021 + (1));
seq__21823_22018 = G__22060;
chunk__21827_22019 = G__22061;
count__21828_22020 = G__22062;
i__21829_22021 = G__22063;
continue;
}
} else {
var G__22064 = seq__21823_22018;
var G__22065 = chunk__21827_22019;
var G__22066 = count__21828_22020;
var G__22067 = (i__21829_22021 + (1));
seq__21823_22018 = G__22064;
chunk__21827_22019 = G__22065;
count__21828_22020 = G__22066;
i__21829_22021 = G__22067;
continue;
}
} else {
var temp__5804__auto___22068 = cljs.core.seq(seq__21823_22018);
if(temp__5804__auto___22068){
var seq__21823_22069__$1 = temp__5804__auto___22068;
if(cljs.core.chunked_seq_QMARK_(seq__21823_22069__$1)){
var c__5568__auto___22070 = cljs.core.chunk_first(seq__21823_22069__$1);
var G__22071 = cljs.core.chunk_rest(seq__21823_22069__$1);
var G__22072 = c__5568__auto___22070;
var G__22073 = cljs.core.count(c__5568__auto___22070);
var G__22074 = (0);
seq__21823_22018 = G__22071;
chunk__21827_22019 = G__22072;
count__21828_22020 = G__22073;
i__21829_22021 = G__22074;
continue;
} else {
var node_22075 = cljs.core.first(seq__21823_22069__$1);
if(cljs.core.not(node_22075.shadow$old)){
var path_match_22076 = shadow.cljs.devtools.client.browser.match_paths(node_22075.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22076)){
var new_link_22077 = (function (){var G__21866 = node_22075.cloneNode(true);
G__21866.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22076),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21866;
})();
(node_22075.shadow$old = true);

(new_link_22077.onload = ((function (seq__21823_22018,chunk__21827_22019,count__21828_22020,i__21829_22021,seq__21702,chunk__21704,count__21705,i__21706,new_link_22077,path_match_22076,node_22075,seq__21823_22069__$1,temp__5804__auto___22068,path,map__21697,map__21697__$1,msg,updates,reload_info){
return (function (e){
var seq__21867_22078 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21869_22079 = null;
var count__21870_22080 = (0);
var i__21871_22081 = (0);
while(true){
if((i__21871_22081 < count__21870_22080)){
var map__21875_22082 = chunk__21869_22079.cljs$core$IIndexed$_nth$arity$2(null,i__21871_22081);
var map__21875_22083__$1 = cljs.core.__destructure_map(map__21875_22082);
var task_22084 = map__21875_22083__$1;
var fn_str_22085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21875_22083__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21875_22083__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22087 = goog.getObjectByName(fn_str_22085,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22086)].join(''));

(fn_obj_22087.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22087.cljs$core$IFn$_invoke$arity$2(path,new_link_22077) : fn_obj_22087.call(null,path,new_link_22077));


var G__22088 = seq__21867_22078;
var G__22089 = chunk__21869_22079;
var G__22090 = count__21870_22080;
var G__22091 = (i__21871_22081 + (1));
seq__21867_22078 = G__22088;
chunk__21869_22079 = G__22089;
count__21870_22080 = G__22090;
i__21871_22081 = G__22091;
continue;
} else {
var temp__5804__auto___22092__$1 = cljs.core.seq(seq__21867_22078);
if(temp__5804__auto___22092__$1){
var seq__21867_22093__$1 = temp__5804__auto___22092__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21867_22093__$1)){
var c__5568__auto___22094 = cljs.core.chunk_first(seq__21867_22093__$1);
var G__22095 = cljs.core.chunk_rest(seq__21867_22093__$1);
var G__22096 = c__5568__auto___22094;
var G__22097 = cljs.core.count(c__5568__auto___22094);
var G__22098 = (0);
seq__21867_22078 = G__22095;
chunk__21869_22079 = G__22096;
count__21870_22080 = G__22097;
i__21871_22081 = G__22098;
continue;
} else {
var map__21876_22099 = cljs.core.first(seq__21867_22093__$1);
var map__21876_22100__$1 = cljs.core.__destructure_map(map__21876_22099);
var task_22101 = map__21876_22100__$1;
var fn_str_22102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21876_22100__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21876_22100__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22104 = goog.getObjectByName(fn_str_22102,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22103)].join(''));

(fn_obj_22104.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22104.cljs$core$IFn$_invoke$arity$2(path,new_link_22077) : fn_obj_22104.call(null,path,new_link_22077));


var G__22105 = cljs.core.next(seq__21867_22093__$1);
var G__22106 = null;
var G__22107 = (0);
var G__22108 = (0);
seq__21867_22078 = G__22105;
chunk__21869_22079 = G__22106;
count__21870_22080 = G__22107;
i__21871_22081 = G__22108;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22075);
});})(seq__21823_22018,chunk__21827_22019,count__21828_22020,i__21829_22021,seq__21702,chunk__21704,count__21705,i__21706,new_link_22077,path_match_22076,node_22075,seq__21823_22069__$1,temp__5804__auto___22068,path,map__21697,map__21697__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22076], 0));

goog.dom.insertSiblingAfter(new_link_22077,node_22075);


var G__22109 = cljs.core.next(seq__21823_22069__$1);
var G__22110 = null;
var G__22111 = (0);
var G__22112 = (0);
seq__21823_22018 = G__22109;
chunk__21827_22019 = G__22110;
count__21828_22020 = G__22111;
i__21829_22021 = G__22112;
continue;
} else {
var G__22113 = cljs.core.next(seq__21823_22069__$1);
var G__22114 = null;
var G__22115 = (0);
var G__22116 = (0);
seq__21823_22018 = G__22113;
chunk__21827_22019 = G__22114;
count__21828_22020 = G__22115;
i__21829_22021 = G__22116;
continue;
}
} else {
var G__22117 = cljs.core.next(seq__21823_22069__$1);
var G__22118 = null;
var G__22119 = (0);
var G__22120 = (0);
seq__21823_22018 = G__22117;
chunk__21827_22019 = G__22118;
count__21828_22020 = G__22119;
i__21829_22021 = G__22120;
continue;
}
}
} else {
}
}
break;
}


var G__22121 = seq__21702;
var G__22122 = chunk__21704;
var G__22123 = count__21705;
var G__22124 = (i__21706 + (1));
seq__21702 = G__22121;
chunk__21704 = G__22122;
count__21705 = G__22123;
i__21706 = G__22124;
continue;
} else {
var G__22125 = seq__21702;
var G__22126 = chunk__21704;
var G__22127 = count__21705;
var G__22128 = (i__21706 + (1));
seq__21702 = G__22125;
chunk__21704 = G__22126;
count__21705 = G__22127;
i__21706 = G__22128;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21702);
if(temp__5804__auto__){
var seq__21702__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21702__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21702__$1);
var G__22129 = cljs.core.chunk_rest(seq__21702__$1);
var G__22130 = c__5568__auto__;
var G__22131 = cljs.core.count(c__5568__auto__);
var G__22132 = (0);
seq__21702 = G__22129;
chunk__21704 = G__22130;
count__21705 = G__22131;
i__21706 = G__22132;
continue;
} else {
var path = cljs.core.first(seq__21702__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21877_22133 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21881_22134 = null;
var count__21882_22135 = (0);
var i__21883_22136 = (0);
while(true){
if((i__21883_22136 < count__21882_22135)){
var node_22137 = chunk__21881_22134.cljs$core$IIndexed$_nth$arity$2(null,i__21883_22136);
if(cljs.core.not(node_22137.shadow$old)){
var path_match_22138 = shadow.cljs.devtools.client.browser.match_paths(node_22137.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22138)){
var new_link_22139 = (function (){var G__21909 = node_22137.cloneNode(true);
G__21909.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22138),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21909;
})();
(node_22137.shadow$old = true);

(new_link_22139.onload = ((function (seq__21877_22133,chunk__21881_22134,count__21882_22135,i__21883_22136,seq__21702,chunk__21704,count__21705,i__21706,new_link_22139,path_match_22138,node_22137,path,seq__21702__$1,temp__5804__auto__,map__21697,map__21697__$1,msg,updates,reload_info){
return (function (e){
var seq__21910_22140 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21912_22141 = null;
var count__21913_22142 = (0);
var i__21914_22143 = (0);
while(true){
if((i__21914_22143 < count__21913_22142)){
var map__21918_22144 = chunk__21912_22141.cljs$core$IIndexed$_nth$arity$2(null,i__21914_22143);
var map__21918_22145__$1 = cljs.core.__destructure_map(map__21918_22144);
var task_22146 = map__21918_22145__$1;
var fn_str_22147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918_22145__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918_22145__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22149 = goog.getObjectByName(fn_str_22147,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22148)].join(''));

(fn_obj_22149.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22149.cljs$core$IFn$_invoke$arity$2(path,new_link_22139) : fn_obj_22149.call(null,path,new_link_22139));


var G__22150 = seq__21910_22140;
var G__22151 = chunk__21912_22141;
var G__22152 = count__21913_22142;
var G__22153 = (i__21914_22143 + (1));
seq__21910_22140 = G__22150;
chunk__21912_22141 = G__22151;
count__21913_22142 = G__22152;
i__21914_22143 = G__22153;
continue;
} else {
var temp__5804__auto___22154__$1 = cljs.core.seq(seq__21910_22140);
if(temp__5804__auto___22154__$1){
var seq__21910_22155__$1 = temp__5804__auto___22154__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21910_22155__$1)){
var c__5568__auto___22156 = cljs.core.chunk_first(seq__21910_22155__$1);
var G__22157 = cljs.core.chunk_rest(seq__21910_22155__$1);
var G__22158 = c__5568__auto___22156;
var G__22159 = cljs.core.count(c__5568__auto___22156);
var G__22160 = (0);
seq__21910_22140 = G__22157;
chunk__21912_22141 = G__22158;
count__21913_22142 = G__22159;
i__21914_22143 = G__22160;
continue;
} else {
var map__21919_22161 = cljs.core.first(seq__21910_22155__$1);
var map__21919_22162__$1 = cljs.core.__destructure_map(map__21919_22161);
var task_22163 = map__21919_22162__$1;
var fn_str_22164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21919_22162__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21919_22162__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22166 = goog.getObjectByName(fn_str_22164,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22165)].join(''));

(fn_obj_22166.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22166.cljs$core$IFn$_invoke$arity$2(path,new_link_22139) : fn_obj_22166.call(null,path,new_link_22139));


var G__22167 = cljs.core.next(seq__21910_22155__$1);
var G__22168 = null;
var G__22169 = (0);
var G__22170 = (0);
seq__21910_22140 = G__22167;
chunk__21912_22141 = G__22168;
count__21913_22142 = G__22169;
i__21914_22143 = G__22170;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22137);
});})(seq__21877_22133,chunk__21881_22134,count__21882_22135,i__21883_22136,seq__21702,chunk__21704,count__21705,i__21706,new_link_22139,path_match_22138,node_22137,path,seq__21702__$1,temp__5804__auto__,map__21697,map__21697__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22138], 0));

goog.dom.insertSiblingAfter(new_link_22139,node_22137);


var G__22171 = seq__21877_22133;
var G__22172 = chunk__21881_22134;
var G__22173 = count__21882_22135;
var G__22174 = (i__21883_22136 + (1));
seq__21877_22133 = G__22171;
chunk__21881_22134 = G__22172;
count__21882_22135 = G__22173;
i__21883_22136 = G__22174;
continue;
} else {
var G__22175 = seq__21877_22133;
var G__22176 = chunk__21881_22134;
var G__22177 = count__21882_22135;
var G__22178 = (i__21883_22136 + (1));
seq__21877_22133 = G__22175;
chunk__21881_22134 = G__22176;
count__21882_22135 = G__22177;
i__21883_22136 = G__22178;
continue;
}
} else {
var G__22179 = seq__21877_22133;
var G__22180 = chunk__21881_22134;
var G__22181 = count__21882_22135;
var G__22182 = (i__21883_22136 + (1));
seq__21877_22133 = G__22179;
chunk__21881_22134 = G__22180;
count__21882_22135 = G__22181;
i__21883_22136 = G__22182;
continue;
}
} else {
var temp__5804__auto___22183__$1 = cljs.core.seq(seq__21877_22133);
if(temp__5804__auto___22183__$1){
var seq__21877_22184__$1 = temp__5804__auto___22183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21877_22184__$1)){
var c__5568__auto___22185 = cljs.core.chunk_first(seq__21877_22184__$1);
var G__22186 = cljs.core.chunk_rest(seq__21877_22184__$1);
var G__22187 = c__5568__auto___22185;
var G__22188 = cljs.core.count(c__5568__auto___22185);
var G__22189 = (0);
seq__21877_22133 = G__22186;
chunk__21881_22134 = G__22187;
count__21882_22135 = G__22188;
i__21883_22136 = G__22189;
continue;
} else {
var node_22190 = cljs.core.first(seq__21877_22184__$1);
if(cljs.core.not(node_22190.shadow$old)){
var path_match_22191 = shadow.cljs.devtools.client.browser.match_paths(node_22190.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22191)){
var new_link_22192 = (function (){var G__21920 = node_22190.cloneNode(true);
G__21920.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22191),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21920;
})();
(node_22190.shadow$old = true);

(new_link_22192.onload = ((function (seq__21877_22133,chunk__21881_22134,count__21882_22135,i__21883_22136,seq__21702,chunk__21704,count__21705,i__21706,new_link_22192,path_match_22191,node_22190,seq__21877_22184__$1,temp__5804__auto___22183__$1,path,seq__21702__$1,temp__5804__auto__,map__21697,map__21697__$1,msg,updates,reload_info){
return (function (e){
var seq__21921_22193 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21923_22194 = null;
var count__21924_22195 = (0);
var i__21925_22196 = (0);
while(true){
if((i__21925_22196 < count__21924_22195)){
var map__21929_22197 = chunk__21923_22194.cljs$core$IIndexed$_nth$arity$2(null,i__21925_22196);
var map__21929_22198__$1 = cljs.core.__destructure_map(map__21929_22197);
var task_22199 = map__21929_22198__$1;
var fn_str_22200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21929_22198__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21929_22198__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22202 = goog.getObjectByName(fn_str_22200,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22201)].join(''));

(fn_obj_22202.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22202.cljs$core$IFn$_invoke$arity$2(path,new_link_22192) : fn_obj_22202.call(null,path,new_link_22192));


var G__22203 = seq__21921_22193;
var G__22204 = chunk__21923_22194;
var G__22205 = count__21924_22195;
var G__22206 = (i__21925_22196 + (1));
seq__21921_22193 = G__22203;
chunk__21923_22194 = G__22204;
count__21924_22195 = G__22205;
i__21925_22196 = G__22206;
continue;
} else {
var temp__5804__auto___22207__$2 = cljs.core.seq(seq__21921_22193);
if(temp__5804__auto___22207__$2){
var seq__21921_22208__$1 = temp__5804__auto___22207__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21921_22208__$1)){
var c__5568__auto___22209 = cljs.core.chunk_first(seq__21921_22208__$1);
var G__22210 = cljs.core.chunk_rest(seq__21921_22208__$1);
var G__22211 = c__5568__auto___22209;
var G__22212 = cljs.core.count(c__5568__auto___22209);
var G__22213 = (0);
seq__21921_22193 = G__22210;
chunk__21923_22194 = G__22211;
count__21924_22195 = G__22212;
i__21925_22196 = G__22213;
continue;
} else {
var map__21930_22214 = cljs.core.first(seq__21921_22208__$1);
var map__21930_22215__$1 = cljs.core.__destructure_map(map__21930_22214);
var task_22216 = map__21930_22215__$1;
var fn_str_22217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21930_22215__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21930_22215__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22219 = goog.getObjectByName(fn_str_22217,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22218)].join(''));

(fn_obj_22219.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22219.cljs$core$IFn$_invoke$arity$2(path,new_link_22192) : fn_obj_22219.call(null,path,new_link_22192));


var G__22220 = cljs.core.next(seq__21921_22208__$1);
var G__22221 = null;
var G__22222 = (0);
var G__22223 = (0);
seq__21921_22193 = G__22220;
chunk__21923_22194 = G__22221;
count__21924_22195 = G__22222;
i__21925_22196 = G__22223;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22190);
});})(seq__21877_22133,chunk__21881_22134,count__21882_22135,i__21883_22136,seq__21702,chunk__21704,count__21705,i__21706,new_link_22192,path_match_22191,node_22190,seq__21877_22184__$1,temp__5804__auto___22183__$1,path,seq__21702__$1,temp__5804__auto__,map__21697,map__21697__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22191], 0));

goog.dom.insertSiblingAfter(new_link_22192,node_22190);


var G__22224 = cljs.core.next(seq__21877_22184__$1);
var G__22225 = null;
var G__22226 = (0);
var G__22227 = (0);
seq__21877_22133 = G__22224;
chunk__21881_22134 = G__22225;
count__21882_22135 = G__22226;
i__21883_22136 = G__22227;
continue;
} else {
var G__22228 = cljs.core.next(seq__21877_22184__$1);
var G__22229 = null;
var G__22230 = (0);
var G__22231 = (0);
seq__21877_22133 = G__22228;
chunk__21881_22134 = G__22229;
count__21882_22135 = G__22230;
i__21883_22136 = G__22231;
continue;
}
} else {
var G__22232 = cljs.core.next(seq__21877_22184__$1);
var G__22233 = null;
var G__22234 = (0);
var G__22235 = (0);
seq__21877_22133 = G__22232;
chunk__21881_22134 = G__22233;
count__21882_22135 = G__22234;
i__21883_22136 = G__22235;
continue;
}
}
} else {
}
}
break;
}


var G__22236 = cljs.core.next(seq__21702__$1);
var G__22237 = null;
var G__22238 = (0);
var G__22239 = (0);
seq__21702 = G__22236;
chunk__21704 = G__22237;
count__21705 = G__22238;
i__21706 = G__22239;
continue;
} else {
var G__22240 = cljs.core.next(seq__21702__$1);
var G__22241 = null;
var G__22242 = (0);
var G__22243 = (0);
seq__21702 = G__22240;
chunk__21704 = G__22241;
count__21705 = G__22242;
i__21706 = G__22243;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21931){
var map__21932 = p__21931;
var map__21932__$1 = cljs.core.__destructure_map(map__21932);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21932__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21933){
var map__21934 = p__21933;
var map__21934__$1 = cljs.core.__destructure_map(map__21934);
var _ = map__21934__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21934__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21935,done,error){
var map__21936 = p__21935;
var map__21936__$1 = cljs.core.__destructure_map(map__21936);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21936__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21937,done,error){
var map__21938 = p__21937;
var map__21938__$1 = cljs.core.__destructure_map(map__21938);
var msg = map__21938__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21938__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21938__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21938__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21939){
var map__21940 = p__21939;
var map__21940__$1 = cljs.core.__destructure_map(map__21940);
var src = map__21940__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21940__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21941 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21941) : done.call(null,G__21941));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21942){
var map__21943 = p__21942;
var map__21943__$1 = cljs.core.__destructure_map(map__21943);
var msg__$1 = map__21943__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21943__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21944){var ex = e21944;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21945){
var map__21946 = p__21945;
var map__21946__$1 = cljs.core.__destructure_map(map__21946);
var env = map__21946__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21946__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21947){
var map__21948 = p__21947;
var map__21948__$1 = cljs.core.__destructure_map(map__21948);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21949){
var map__21950 = p__21949;
var map__21950__$1 = cljs.core.__destructure_map(map__21950);
var svc = map__21950__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21950__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
