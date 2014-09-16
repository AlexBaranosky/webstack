// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___19238 = schema.utils.use_fn_validation;var output_schema19233_19239 = schema.core.Any;var input_schema19234_19240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker19235_19241 = schema.core.checker.call(null,input_schema19234_19240);var output_checker19236_19242 = schema.core.checker.call(null,output_schema19233_19239);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___19238,output_schema19233_19239,input_schema19234_19240,input_checker19235_19241,output_checker19236_19242){
return (function schema_keys(G__19237){var validate__11825__auto__ = ufv___19238.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19237], null);var temp__4222__auto___19244 = input_checker19235_19241.call(null,args__11826__auto___19243);if(cljs.core.truth_(temp__4222__auto___19244))
{var error__11827__auto___19245 = temp__4222__auto___19244;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__11827__auto___19245)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19234_19240,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19243,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19245], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var schema__$1 = G__19237;while(true){
return cljs.core.map.call(null,((function (validate__11825__auto__,ufv___19238,output_schema19233_19239,input_schema19234_19240,input_checker19235_19241,output_checker19236_19242){
return (function (k){if(schema.core.optional_key_QMARK_.call(null,k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__11825__auto__,ufv___19238,output_schema19233_19239,input_schema19234_19240,input_checker19235_19241,output_checker19236_19242))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19246 = output_checker19236_19242.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19246))
{var error__11827__auto___19247 = temp__4222__auto___19246;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__11827__auto___19247)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19233_19239,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19247], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19238,output_schema19233_19239,input_schema19234_19240,input_checker19235_19241,output_checker19236_19242))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema19233_19239,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19234_19240], null)));
var ufv___19253 = schema.utils.use_fn_validation;var output_schema19248_19254 = schema.core.Any;var input_schema19249_19255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker19250_19256 = schema.core.checker.call(null,input_schema19249_19255);var output_checker19251_19257 = schema.core.checker.call(null,output_schema19248_19254);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___19253,output_schema19248_19254,input_schema19249_19255,input_checker19250_19256,output_checker19251_19257){
return (function at_least(G__19252){var validate__11825__auto__ = ufv___19253.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19252], null);var temp__4222__auto___19259 = input_checker19250_19256.call(null,args__11826__auto___19258);if(cljs.core.truth_(temp__4222__auto___19259))
{var error__11827__auto___19260 = temp__4222__auto___19259;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__11827__auto___19260)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19249_19255,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19258,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19260], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var schema__$1 = G__19252;while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19261 = output_checker19251_19257.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19261))
{var error__11827__auto___19262 = temp__4222__auto___19261;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__11827__auto___19262)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19248_19254,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19262], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19253,output_schema19248_19254,input_schema19249_19255,input_checker19250_19256,output_checker19251_19257))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema19248_19254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19249_19255], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
* Map of keyword to the proper bootstrap class name.
*/
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
* Map of style keywords -> styles.
*/
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
* Applies all default bootstrap options to the supplied schema. If
* the incoming schema has one of the the keys from BootstrapClass,
* that wins (even if it's required).
*/
om_bootstrap.types.bootstrap = (function bootstrap(schema__$1){var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___19275 = schema.utils.use_fn_validation;var output_schema19263_19276 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema19264_19277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema19269_19278 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker19265_19279 = schema.core.checker.call(null,input_schema19264_19277);var output_checker19266_19280 = schema.core.checker.call(null,output_schema19263_19276);var input_checker19270_19281 = schema.core.checker.call(null,input_schema19269_19278);var output_checker19271_19282 = schema.core.checker.call(null,output_schema19263_19276);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___19275,output_schema19263_19276,input_schema19264_19277,input_schema19269_19278,input_checker19265_19279,output_checker19266_19280,input_checker19270_19281,output_checker19271_19282){
return (function() {
var separate = null;
var separate__2 = (function (G__19267,G__19268){var validate__11825__auto__ = ufv___19275.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19267,G__19268], null);var temp__4222__auto___19284 = input_checker19265_19279.call(null,args__11826__auto___19283);if(cljs.core.truth_(temp__4222__auto___19284))
{var error__11827__auto___19285 = temp__4222__auto___19284;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11827__auto___19285)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19264_19277,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19283,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19285], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var schema__$1 = G__19267;var opts = G__19268;while(true){
return separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19286 = output_checker19266_19280.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19286))
{var error__11827__auto___19287 = temp__4222__auto___19286;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11827__auto___19287)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19263_19276,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19287], null));
} else
{}
} else
{}
return o__11828__auto__;
});
var separate__3 = (function (G__19272,G__19273,G__19274){var validate__11825__auto__ = ufv___19275.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19288 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19272,G__19273,G__19274], null);var temp__4222__auto___19289 = input_checker19270_19281.call(null,args__11826__auto___19288);if(cljs.core.truth_(temp__4222__auto___19289))
{var error__11827__auto___19290 = temp__4222__auto___19289;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11827__auto___19290)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19269_19278,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19288,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19290], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var schema__$1 = G__19272;var opts = G__19273;var defaults = G__19274;while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));var opts__$1 = cljs.core.merge.call(null,defaults,opts);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19291 = output_checker19271_19282.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19291))
{var error__11827__auto___19292 = temp__4222__auto___19291;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__11827__auto___19292)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19263_19276,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19292], null));
} else
{}
} else
{}
return o__11828__auto__;
});
separate = function(G__19272,G__19273,G__19274){
switch(arguments.length){
case 2:
return separate__2.call(this,G__19272,G__19273);
case 3:
return separate__3.call(this,G__19272,G__19273,G__19274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___19275,output_schema19263_19276,input_schema19264_19277,input_schema19269_19278,input_checker19265_19279,output_checker19266_19280,input_checker19270_19281,output_checker19271_19282))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema19263_19276,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19264_19277,input_schema19269_19278], null)));
var ufv___19306 = schema.utils.use_fn_validation;var output_schema19293_19307 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema19294_19308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker19295_19309 = schema.core.checker.call(null,input_schema19294_19308);var output_checker19296_19310 = schema.core.checker.call(null,output_schema19293_19307);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___19306,output_schema19293_19307,input_schema19294_19308,input_checker19295_19309,output_checker19296_19310){
return (function bs_class_set(G__19297){var validate__11825__auto__ = ufv___19306.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19297], null);var temp__4222__auto___19312 = input_checker19295_19309.call(null,args__11826__auto___19311);if(cljs.core.truth_(temp__4222__auto___19312))
{var error__11827__auto___19313 = temp__4222__auto___19312;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__11827__auto___19313)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19294_19308,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19311,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19313], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__19303 = G__19297;var map__19304 = G__19303;var map__19304__$1 = ((cljs.core.seq_QMARK_.call(null,map__19304))?cljs.core.apply.call(null,cljs.core.hash_map,map__19304):map__19304);var bs_size = cljs.core.get.call(null,map__19304__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.call(null,map__19304__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.call(null,map__19304__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__19303__$1 = G__19303;while(true){
var map__19305 = G__19303__$1;var map__19305__$1 = ((cljs.core.seq_QMARK_.call(null,map__19305))?cljs.core.apply.call(null,cljs.core.hash_map,map__19305):map__19305);var bs_size__$1 = cljs.core.get.call(null,map__19305__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.call(null,map__19305__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.call(null,map__19305__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4220__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);if(cljs.core.truth_(temp__4220__auto__))
{var klass = temp__4220__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,klass))+"-");return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4222__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);if(cljs.core.truth_(temp__4222__auto__))
{var size = temp__4222__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4222__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);if(cljs.core.truth_(temp__4222__auto__))
{var style = temp__4222__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,style))),true], true, false);
} else
{return null;
}
})());
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19314 = output_checker19296_19310.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19314))
{var error__11827__auto___19315 = temp__4222__auto___19314;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__11827__auto___19315)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19293_19307,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19315], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19306,output_schema19293_19307,input_schema19294_19308,input_checker19295_19309,output_checker19296_19310))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema19293_19307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19294_19308], null)));
