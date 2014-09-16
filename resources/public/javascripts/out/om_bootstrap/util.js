// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by looking up the proper merge function and in the
* supplied map of key -> merge-fn and using that for the big merge. If
* a key doesn't have a merge function, the right value wins (as with
* merge).
*/
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key.call(null,e);var v = cljs.core.val.call(null,e);var temp__4220__auto__ = (function (){var and__8098__auto__ = cljs.core.contains_QMARK_.call(null,m,k);if(and__8098__auto__)
{return k__GT_fn.call(null,k);
} else
{return and__8098__auto__;
}
})();if(cljs.core.truth_(temp__4220__auto__))
{var f = temp__4220__auto__;return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function merge(m1,m2){return cljs.core.reduce.call(null,merge_entry,(function (){var or__8110__auto__ = m1;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___19321 = schema.utils.use_fn_validation;var output_schema19316_19322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema19317_19323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker19318_19324 = schema.core.checker.call(null,input_schema19317_19323);var output_checker19319_19325 = schema.core.checker.call(null,output_schema19316_19322);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___19321,output_schema19316_19322,input_schema19317_19323,input_checker19318_19324,output_checker19319_19325){
return (function collectify(G__19320){var validate__11825__auto__ = ufv___19321.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19320], null);var temp__4222__auto___19327 = input_checker19318_19324.call(null,args__11826__auto___19326);if(cljs.core.truth_(temp__4222__auto___19327))
{var error__11827__auto___19328 = temp__4222__auto___19327;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__11827__auto___19328)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19317_19323,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19326,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19328], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var x = G__19320;while(true){
if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19329 = output_checker19319_19325.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19329))
{var error__11827__auto___19330 = temp__4222__auto___19329;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__11827__auto___19330)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19316_19322,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19330], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19321,output_schema19316_19322,input_schema19317_19323,input_checker19318_19324,output_checker19319_19325))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema19316_19322,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19317_19323], null)));
var ufv___19336 = schema.utils.use_fn_validation;var output_schema19331_19337 = schema.core.Bool;var input_schema19332_19338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker19333_19339 = schema.core.checker.call(null,input_schema19332_19338);var output_checker19334_19340 = schema.core.checker.call(null,output_schema19331_19337);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___19336,output_schema19331_19337,input_schema19332_19338,input_checker19333_19339,output_checker19334_19340){
return (function strict_valid_component_QMARK_(G__19335){var validate__11825__auto__ = ufv___19336.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19335], null);var temp__4222__auto___19342 = input_checker19333_19339.call(null,args__11826__auto___19341);if(cljs.core.truth_(temp__4222__auto___19342))
{var error__11827__auto___19343 = temp__4222__auto___19342;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__11827__auto___19343)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19332_19338,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19341,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19343], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var child = G__19335;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19344 = output_checker19334_19340.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19344))
{var error__11827__auto___19345 = temp__4222__auto___19344;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__11827__auto___19345)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19331_19337,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19345], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19336,output_schema19331_19337,input_schema19332_19338,input_checker19333_19339,output_checker19334_19340))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19331_19337,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19332_19338], null)));
var ufv___19351 = schema.utils.use_fn_validation;var output_schema19346_19352 = schema.core.Bool;var input_schema19347_19353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker19348_19354 = schema.core.checker.call(null,input_schema19347_19353);var output_checker19349_19355 = schema.core.checker.call(null,output_schema19346_19352);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___19351,output_schema19346_19352,input_schema19347_19353,input_checker19348_19354,output_checker19349_19355){
return (function valid_component_QMARK_(G__19350){var validate__11825__auto__ = ufv___19351.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19356 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19350], null);var temp__4222__auto___19357 = input_checker19348_19354.call(null,args__11826__auto___19356);if(cljs.core.truth_(temp__4222__auto___19357))
{var error__11827__auto___19358 = temp__4222__auto___19357;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__11827__auto___19358)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19347_19353,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19356,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19358], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var child = G__19350;while(true){
var or__8110__auto__ = typeof child === 'string';if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = typeof child === 'number';if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19359 = output_checker19349_19355.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19359))
{var error__11827__auto___19360 = temp__4222__auto___19359;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__11827__auto___19360)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19346_19352,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19360], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19351,output_schema19346_19352,input_schema19347_19353,input_checker19348_19354,output_checker19349_19355))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19346_19352,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19347_19353], null)));
var ufv___19366 = schema.utils.use_fn_validation;var output_schema19361_19367 = schema.core.Bool;var input_schema19362_19368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker19363_19369 = schema.core.checker.call(null,input_schema19362_19368);var output_checker19364_19370 = schema.core.checker.call(null,output_schema19361_19367);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___19366,output_schema19361_19367,input_schema19362_19368,input_checker19363_19369,output_checker19364_19370){
return (function some_valid_component_QMARK_(G__19365){var validate__11825__auto__ = ufv___19366.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19371 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19365], null);var temp__4222__auto___19372 = input_checker19363_19369.call(null,args__11826__auto___19371);if(cljs.core.truth_(temp__4222__auto___19372))
{var error__11827__auto___19373 = temp__4222__auto___19372;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__11827__auto___19373)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19362_19368,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19371,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19373], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var children = G__19365;while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19374 = output_checker19364_19370.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19374))
{var error__11827__auto___19375 = temp__4222__auto___19374;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__11827__auto___19375)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19361_19367,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19375], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19366,output_schema19361_19367,input_schema19362_19368,input_checker19363_19369,output_checker19364_19370))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema19361_19367,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19362_19368], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__8098__auto__ = l;if(cljs.core.truth_(and__8098__auto__))
{return r;
} else
{return and__8098__auto__;
}
})()))
{return (function() { 
var G__19376__delegate = function (args){cljs.core.apply.call(null,l,args);
return cljs.core.apply.call(null,r,args);
};
var G__19376 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19376__delegate.call(this,args);};
G__19376.cljs$lang$maxFixedArity = 0;
G__19376.cljs$lang$applyTo = (function (arglist__19377){
var args = cljs.core.seq(arglist__19377);
return G__19376__delegate(args);
});
G__19376.cljs$core$IFn$_invoke$arity$variadic = G__19376__delegate;
return G__19376;
})()
;
} else
{var or__8110__auto__ = l;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return r;
}
}
});
/**
* Map of React keyword to a custom function for its merge. Tries to
* do a decent job with event handlers as well; currently only
* handles :on-select :on-click, :on-blur, kebab-cased as om-tools
* prefers.
*/
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));
});var orig_fn = ((function (merge_class){
return (function (l,r){var or__8110__auto__ = l;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return r;
}
});})(merge_class))
;var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){return null;
});})(merge_class,orig_fn))
;return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
* Merges two maps that represent React properties. Merges occur
* according to the functions defined in `react-merges`.
* @param {...*} var_args
*/
om_bootstrap.util.merge_props = (function() { 
var merge_props__delegate = function (prop_maps){var react_merge = (function react_merge(xs){return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function normalize_class(m){if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)))
{return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else
{return m;
}
});
return react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
};
var merge_props = function (var_args){
var prop_maps = null;if (arguments.length > 0) {
  prop_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge_props__delegate.call(this,prop_maps);};
merge_props.cljs$lang$maxFixedArity = 0;
merge_props.cljs$lang$applyTo = (function (arglist__19378){
var prop_maps = cljs.core.seq(arglist__19378);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj19386 = {};return obj19386;
})();var seq__19387_19391 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));var chunk__19388_19392 = null;var count__19389_19393 = (0);var i__19390_19394 = (0);while(true){
if((i__19390_19394 < count__19389_19393))
{var k_19395 = cljs.core._nth.call(null,chunk__19388_19392,i__19390_19394);if(cljs.core.truth_(arr.hasOwnProperty(k_19395)))
{(ret[k_19395] = (arr[k_19395]));
} else
{}
{
var G__19396 = seq__19387_19391;
var G__19397 = chunk__19388_19392;
var G__19398 = count__19389_19393;
var G__19399 = (i__19390_19394 + (1));
seq__19387_19391 = G__19396;
chunk__19388_19392 = G__19397;
count__19389_19393 = G__19398;
i__19390_19394 = G__19399;
continue;
}
} else
{var temp__4222__auto___19400 = cljs.core.seq.call(null,seq__19387_19391);if(temp__4222__auto___19400)
{var seq__19387_19401__$1 = temp__4222__auto___19400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19387_19401__$1))
{var c__8866__auto___19402 = cljs.core.chunk_first.call(null,seq__19387_19401__$1);{
var G__19403 = cljs.core.chunk_rest.call(null,seq__19387_19401__$1);
var G__19404 = c__8866__auto___19402;
var G__19405 = cljs.core.count.call(null,c__8866__auto___19402);
var G__19406 = (0);
seq__19387_19391 = G__19403;
chunk__19388_19392 = G__19404;
count__19389_19393 = G__19405;
i__19390_19394 = G__19406;
continue;
}
} else
{var k_19407 = cljs.core.first.call(null,seq__19387_19401__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_19407)))
{(ret[k_19407] = (arr[k_19407]));
} else
{}
{
var G__19408 = cljs.core.next.call(null,seq__19387_19401__$1);
var G__19409 = null;
var G__19410 = (0);
var G__19411 = (0);
seq__19387_19391 = G__19408;
chunk__19388_19392 = G__19409;
count__19389_19393 = G__19410;
i__19390_19394 = G__19411;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
/**
* Merges the supplied extra properties into the underlying Om cursor
* and calls the constructor to clone the React component.
* 
* Requires that the supplied child has an Om cursor attached to it!
*/
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props.call(null,child);return child.constructor((function (){var G__19413 = om_bootstrap.util.copy_js.call(null,child.props);(G__19413["__om_cursor"] = ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props)));
return G__19413;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4222__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);if(cljs.core.truth_(temp__4222__auto__))
{var children = temp__4222__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else
{return null;
}
})());return child.constructor(cljs.core.clj__GT_js.call(null,new_props));
});
/**
* Returns a shallow copy of the supplied component (child); the copy
* will have any props provided by extra-props merged in. Props are
* merged in the same manner as merge-props, so props like :class will
* be merged intelligently.
* 
* extra-props can be a function of the old props that returns new
* props, OR it can be a map of props.
* 
* If the supplied child is an Om component, any supplied extra
* properties will be merged into the underlying cursor and accessible
* in the Om constructor.
*/
om_bootstrap.util.clone_with_props = (function() {
var clone_with_props = null;
var clone_with_props__1 = (function (child){return clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});
var clone_with_props__2 = (function (child,extra_props){if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child)))
{return child;
} else
{if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props)))
{return child.constructor(child.props);
} else
{if(cljs.core.truth_(om.core.get_props.call(null,child)))
{return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else
{return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});
clone_with_props = function(child,extra_props){
switch(arguments.length){
case 1:
return clone_with_props__1.call(this,child);
case 2:
return clone_with_props__2.call(this,child,extra_props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_with_props.cljs$core$IFn$_invoke$arity$1 = clone_with_props__1;
clone_with_props.cljs$core$IFn$_invoke$arity$2 = clone_with_props__2;
return clone_with_props;
})()
;
