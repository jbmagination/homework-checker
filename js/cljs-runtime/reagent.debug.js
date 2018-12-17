goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__20055__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20056__i = 0, G__20056__a = new Array(arguments.length -  0);
while (G__20056__i < G__20056__a.length) {G__20056__a[G__20056__i] = arguments[G__20056__i + 0]; ++G__20056__i;}
  args = new cljs.core.IndexedSeq(G__20056__a,0,null);
} 
return G__20055__delegate.call(this,args);};
G__20055.cljs$lang$maxFixedArity = 0;
G__20055.cljs$lang$applyTo = (function (arglist__20057){
var args = cljs.core.seq(arglist__20057);
return G__20055__delegate(args);
});
G__20055.cljs$core$IFn$_invoke$arity$variadic = G__20055__delegate;
return G__20055;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20058__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20060__i = 0, G__20060__a = new Array(arguments.length -  0);
while (G__20060__i < G__20060__a.length) {G__20060__a[G__20060__i] = arguments[G__20060__i + 0]; ++G__20060__i;}
  args = new cljs.core.IndexedSeq(G__20060__a,0,null);
} 
return G__20058__delegate.call(this,args);};
G__20058.cljs$lang$maxFixedArity = 0;
G__20058.cljs$lang$applyTo = (function (arglist__20063){
var args = cljs.core.seq(arglist__20063);
return G__20058__delegate(args);
});
G__20058.cljs$core$IFn$_invoke$arity$variadic = G__20058__delegate;
return G__20058;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
