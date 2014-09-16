// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__11855__11856__auto__){var G__19697 = p1__11855__11856__auto__;if(G__19697)
{var bit__8760__auto__ = null;if(cljs.core.truth_((function (){var or__8110__auto__ = bit__8760__auto__;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return G__19697.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__19697.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19697);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19697);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__19698_SHARP_){return (cljs.core.val.call(null,p1__19698_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__19700 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__19700,(0),null);var v = cljs.core.nth.call(null,vec__19700,(1),null);var p = vec__19700;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___19706 = schema.utils.use_fn_validation;var output_schema19701_19707 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema19702_19708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker19703_19709 = schema.core.checker.call(null,input_schema19702_19708);var output_checker19704_19710 = schema.core.checker.call(null,output_schema19701_19707);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___19706,output_schema19701_19707,input_schema19702_19708,input_checker19703_19709,output_checker19704_19710){
return (function unwrap_schema_form_key(G__19705){var validate__11825__auto__ = ufv___19706.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19705], null);var temp__4222__auto___19712 = input_checker19703_19709.call(null,args__11826__auto___19711);if(cljs.core.truth_(temp__4222__auto___19712))
{var error__11827__auto___19713 = temp__4222__auto___19712;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__11827__auto___19713)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19702_19708,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19711,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19713], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var k = G__19705;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19714 = output_checker19704_19710.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19714))
{var error__11827__auto___19715 = temp__4222__auto___19714;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__11827__auto___19715)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19701_19707,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19715], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19706,output_schema19701_19707,input_schema19702_19708,input_checker19703_19709,output_checker19704_19710))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema19701_19707,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19702_19708], null)));
var ufv___19721 = schema.utils.use_fn_validation;var output_schema19716_19722 = schema.core.Any;var input_schema19717_19723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19718_19724 = schema.core.checker.call(null,input_schema19717_19723);var output_checker19719_19725 = schema.core.checker.call(null,output_schema19716_19722);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___19721,output_schema19716_19722,input_schema19717_19723,input_checker19718_19724,output_checker19719_19725){
return (function explicit_schema_key_map(G__19720){var validate__11825__auto__ = ufv___19721.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19720], null);var temp__4222__auto___19727 = input_checker19718_19724.call(null,args__11826__auto___19726);if(cljs.core.truth_(temp__4222__auto___19727))
{var error__11827__auto___19728 = temp__4222__auto___19727;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__11827__auto___19728)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19717_19723,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19726,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19728], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var s = G__19720;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19729 = output_checker19719_19725.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19729))
{var error__11827__auto___19730 = temp__4222__auto___19729;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__11827__auto___19730)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19716_19722,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19730], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19721,output_schema19716_19722,input_schema19717_19723,input_checker19718_19724,output_checker19719_19725))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema19716_19722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19717_19723], null)));
var ufv___19736 = schema.utils.use_fn_validation;var output_schema19731_19737 = schema.core.Any;var input_schema19732_19738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19733_19739 = schema.core.checker.call(null,input_schema19732_19738);var output_checker19734_19740 = schema.core.checker.call(null,output_schema19731_19737);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___19736,output_schema19731_19737,input_schema19732_19738,input_checker19733_19739,output_checker19734_19740){
return (function split_schema_keys(G__19735){var validate__11825__auto__ = ufv___19736.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19735], null);var temp__4222__auto___19742 = input_checker19733_19739.call(null,args__11826__auto___19741);if(cljs.core.truth_(temp__4222__auto___19742))
{var error__11827__auto___19743 = temp__4222__auto___19742;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__11827__auto___19743)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19732_19738,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19741,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19743], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var s = G__19735;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19744 = output_checker19734_19740.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19744))
{var error__11827__auto___19745 = temp__4222__auto___19744;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__11827__auto___19745)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19731_19737,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19745], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19736,output_schema19731_19737,input_schema19732_19738,input_checker19733_19739,output_checker19734_19740))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema19731_19737,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19732_19738], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__19749){var vec__19750 = p__19749;var k = cljs.core.nth.call(null,vec__19750,(0),null);var v = cljs.core.nth.call(null,vec__19750,(1),null);var pk = key_project.call(null,k);var temp__4220__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4220__auto__))
{var vec__19751 = temp__4220__auto__;var ok = cljs.core.nth.call(null,vec__19751,(0),null);var ov = cljs.core.nth.call(null,vec__19751,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__19752){
var key_project = cljs.core.first(arglist__19752);
arglist__19752 = cljs.core.next(arglist__19752);
var key_combine = cljs.core.first(arglist__19752);
arglist__19752 = cljs.core.next(arglist__19752);
var val_combine = cljs.core.first(arglist__19752);
var maps = cljs.core.rest(arglist__19752);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___19760 = schema.utils.use_fn_validation;var output_schema19754_19761 = plumbing.fnk.schema.InputSchema;var input_schema19755_19762 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker19756_19763 = schema.core.checker.call(null,input_schema19755_19762);var output_checker19757_19764 = schema.core.checker.call(null,output_schema19754_19761);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___19760,output_schema19754_19761,input_schema19755_19762,input_checker19756_19763,output_checker19757_19764){
return (function union_input_schemata(G__19758,G__19759){var validate__11825__auto__ = ufv___19760.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19758,G__19759], null);var temp__4222__auto___19766 = input_checker19756_19763.call(null,args__11826__auto___19765);if(cljs.core.truth_(temp__4222__auto___19766))
{var error__11827__auto___19767 = temp__4222__auto___19766;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__11827__auto___19767)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19755_19762,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19765,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19767], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var i1 = G__19758;var i2 = G__19759;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__11825__auto__,ufv___19760,output_schema19754_19761,input_schema19755_19762,input_checker19756_19763,output_checker19757_19764){
return (function (p1__19753_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__19753_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__19753_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__11825__auto__,ufv___19760,output_schema19754_19761,input_schema19755_19762,input_checker19756_19763,output_checker19757_19764))
,((function (validate__11825__auto__,ufv___19760,output_schema19754_19761,input_schema19755_19762,input_checker19756_19763,output_checker19757_19764){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__11825__auto__,ufv___19760,output_schema19754_19761,input_schema19755_19762,input_checker19756_19763,output_checker19757_19764))
,((function (validate__11825__auto__,ufv___19760,output_schema19754_19761,input_schema19755_19762,input_checker19756_19763,output_checker19757_19764){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__11825__auto__,ufv___19760,output_schema19754_19761,input_schema19755_19762,input_checker19756_19763,output_checker19757_19764))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19768 = output_checker19757_19764.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19768))
{var error__11827__auto___19769 = temp__4222__auto___19768;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__11827__auto___19769)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19754_19761,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19769], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19760,output_schema19754_19761,input_schema19755_19762,input_checker19756_19763,output_checker19757_19764))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema19754_19761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19755_19762], null)));
var ufv___19775 = schema.utils.use_fn_validation;var output_schema19770_19776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema19771_19777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker19772_19778 = schema.core.checker.call(null,input_schema19771_19777);var output_checker19773_19779 = schema.core.checker.call(null,output_schema19770_19776);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___19775,output_schema19770_19776,input_schema19771_19777,input_checker19772_19778,output_checker19773_19779){
return (function required_toplevel_keys(G__19774){var validate__11825__auto__ = ufv___19775.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19774], null);var temp__4222__auto___19781 = input_checker19772_19778.call(null,args__11826__auto___19780);if(cljs.core.truth_(temp__4222__auto___19781))
{var error__11827__auto___19782 = temp__4222__auto___19781;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__11827__auto___19782)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19771_19777,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19780,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19782], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var input_schema = G__19774;while(true){
return cljs.core.keep.call(null,((function (validate__11825__auto__,ufv___19775,output_schema19770_19776,input_schema19771_19777,input_checker19772_19778,output_checker19773_19779){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__11825__auto__,ufv___19775,output_schema19770_19776,input_schema19771_19777,input_checker19772_19778,output_checker19773_19779))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19783 = output_checker19773_19779.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19783))
{var error__11827__auto___19784 = temp__4222__auto___19783;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__11827__auto___19784)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19770_19776,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19784], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19775,output_schema19770_19776,input_schema19771_19777,input_checker19772_19778,output_checker19773_19779))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema19770_19776,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19771_19777], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8835__auto__ = (function iter__19793(s__19794){return (new cljs.core.LazySeq(null,(function (){var s__19794__$1 = s__19794;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__19794__$1);if(temp__4222__auto__)
{var s__19794__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19794__$2))
{var c__8833__auto__ = cljs.core.chunk_first.call(null,s__19794__$2);var size__8834__auto__ = cljs.core.count.call(null,c__8833__auto__);var b__19796 = cljs.core.chunk_buffer.call(null,size__8834__auto__);if((function (){var i__19795 = (0);while(true){
if((i__19795 < size__8834__auto__))
{var vec__19799 = cljs.core._nth.call(null,c__8833__auto__,i__19795);var k = cljs.core.nth.call(null,vec__19799,(0),null);var v = cljs.core.nth.call(null,vec__19799,(1),null);cljs.core.chunk_append.call(null,b__19796,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__19801 = (i__19795 + (1));
i__19795 = G__19801;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19796),iter__19793.call(null,cljs.core.chunk_rest.call(null,s__19794__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19796),null);
}
} else
{var vec__19800 = cljs.core.first.call(null,s__19794__$2);var k = cljs.core.nth.call(null,vec__19800,(0),null);var v = cljs.core.nth.call(null,vec__19800,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__19793.call(null,cljs.core.rest.call(null,s__19794__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8835__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8835__auto__ = (function iter__19810(s__19811){return (new cljs.core.LazySeq(null,(function (){var s__19811__$1 = s__19811;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__19811__$1);if(temp__4222__auto__)
{var s__19811__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19811__$2))
{var c__8833__auto__ = cljs.core.chunk_first.call(null,s__19811__$2);var size__8834__auto__ = cljs.core.count.call(null,c__8833__auto__);var b__19813 = cljs.core.chunk_buffer.call(null,size__8834__auto__);if((function (){var i__19812 = (0);while(true){
if((i__19812 < size__8834__auto__))
{var vec__19816 = cljs.core._nth.call(null,c__8833__auto__,i__19812);var k = cljs.core.nth.call(null,vec__19816,(0),null);var v = cljs.core.nth.call(null,vec__19816,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__19813,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__19818 = (i__19812 + (1));
i__19812 = G__19818;
continue;
}
} else
{{
var G__19819 = (i__19812 + (1));
i__19812 = G__19819;
continue;
}
}
} else
{{
var G__19820 = (i__19812 + (1));
i__19812 = G__19820;
continue;
}
}
} else
{{
var G__19821 = (i__19812 + (1));
i__19812 = G__19821;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19813),iter__19810.call(null,cljs.core.chunk_rest.call(null,s__19811__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19813),null);
}
} else
{var vec__19817 = cljs.core.first.call(null,s__19811__$2);var k = cljs.core.nth.call(null,vec__19817,(0),null);var v = cljs.core.nth.call(null,vec__19817,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__19810.call(null,cljs.core.rest.call(null,s__19811__$2)));
} else
{{
var G__19822 = cljs.core.rest.call(null,s__19811__$2);
s__19811__$1 = G__19822;
continue;
}
}
} else
{{
var G__19823 = cljs.core.rest.call(null,s__19811__$2);
s__19811__$1 = G__19823;
continue;
}
}
} else
{{
var G__19824 = cljs.core.rest.call(null,s__19811__$2);
s__19811__$1 = G__19824;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8835__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___19847 = schema.utils.use_fn_validation;var output_schema19825_19848 = schema.core.Any;var input_schema19826_19849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19827_19850 = schema.core.checker.call(null,input_schema19826_19849);var output_checker19828_19851 = schema.core.checker.call(null,output_schema19825_19848);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___19847,output_schema19825_19848,input_schema19826_19849,input_checker19827_19850,output_checker19828_19851){
return (function compose_schemata(G__19829,G__19830){var validate__11825__auto__ = true;if(validate__11825__auto__)
{var args__11826__auto___19852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19829,G__19830], null);var temp__4222__auto___19853 = input_checker19827_19850.call(null,args__11826__auto___19852);if(cljs.core.truth_(temp__4222__auto___19853))
{var error__11827__auto___19854 = temp__4222__auto___19853;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__11827__auto___19854)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19826_19849,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19852,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19854], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__19841 = G__19829;var vec__19843 = G__19841;var i2 = cljs.core.nth.call(null,vec__19843,(0),null);var o2 = cljs.core.nth.call(null,vec__19843,(1),null);var G__19842 = G__19830;var vec__19844 = G__19842;var i1 = cljs.core.nth.call(null,vec__19844,(0),null);var o1 = cljs.core.nth.call(null,vec__19844,(1),null);var G__19841__$1 = G__19841;var G__19842__$1 = G__19842;while(true){
var vec__19845 = G__19841__$1;var i2__$1 = cljs.core.nth.call(null,vec__19845,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19845,(1),null);var vec__19846 = G__19842__$1;var i1__$1 = cljs.core.nth.call(null,vec__19846,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19846,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__11825__auto__)
{var temp__4222__auto___19855 = output_checker19828_19851.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19855))
{var error__11827__auto___19856 = temp__4222__auto___19855;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__11827__auto___19856)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19825_19848,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19856], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19847,output_schema19825_19848,input_schema19826_19849,input_checker19827_19850,output_checker19828_19851))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema19825_19848,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19826_19849], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___19935 = schema.utils.use_fn_validation;var output_schema19857_19936 = schema.core.Any;var input_schema19858_19937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker19859_19938 = schema.core.checker.call(null,input_schema19858_19937);var output_checker19860_19939 = schema.core.checker.call(null,output_schema19857_19936);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939){
return (function split_schema(G__19861,G__19862){var validate__11825__auto__ = ufv___19935.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19861,G__19862], null);var temp__4222__auto___19941 = input_checker19859_19938.call(null,args__11826__auto___19940);if(cljs.core.truth_(temp__4222__auto___19941))
{var error__11827__auto___19942 = temp__4222__auto___19941;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__11827__auto___19942)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19858_19937,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19940,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19942], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var s = G__19861;var ks = G__19862;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__8835__auto__ = ((function (ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939){
return (function iter__19899(s__19900){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939){
return (function (){var s__19900__$1 = s__19900;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__19900__$1);if(temp__4222__auto__)
{var s__19900__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19900__$2))
{var c__8833__auto__ = cljs.core.chunk_first.call(null,s__19900__$2);var size__8834__auto__ = cljs.core.count.call(null,c__8833__auto__);var b__19902 = cljs.core.chunk_buffer.call(null,size__8834__auto__);if((function (){var i__19901 = (0);while(true){
if((i__19901 < size__8834__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__8833__auto__,i__19901);cljs.core.chunk_append.call(null,b__19902,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8835__auto__ = ((function (i__19901,in_QMARK_,c__8833__auto__,size__8834__auto__,b__19902,s__19900__$2,temp__4222__auto__,ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939){
return (function iter__19919(s__19920){return (new cljs.core.LazySeq(null,((function (i__19901,in_QMARK_,c__8833__auto__,size__8834__auto__,b__19902,s__19900__$2,temp__4222__auto__,ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939){
return (function (){var s__19920__$1 = s__19920;while(true){
var temp__4222__auto____$1 = cljs.core.seq.call(null,s__19920__$1);if(temp__4222__auto____$1)
{var s__19920__$2 = temp__4222__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19920__$2))
{var c__8833__auto____$1 = cljs.core.chunk_first.call(null,s__19920__$2);var size__8834__auto____$1 = cljs.core.count.call(null,c__8833__auto____$1);var b__19922 = cljs.core.chunk_buffer.call(null,size__8834__auto____$1);if((function (){var i__19921 = (0);while(true){
if((i__19921 < size__8834__auto____$1))
{var vec__19925 = cljs.core._nth.call(null,c__8833__auto____$1,i__19921);var k = cljs.core.nth.call(null,vec__19925,(0),null);var v = cljs.core.nth.call(null,vec__19925,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19943 = (i__19921 + (1));
i__19921 = G__19943;
continue;
}
} else
{{
var G__19944 = (i__19921 + (1));
i__19921 = G__19944;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19922),iter__19919.call(null,cljs.core.chunk_rest.call(null,s__19920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19922),null);
}
} else
{var vec__19926 = cljs.core.first.call(null,s__19920__$2);var k = cljs.core.nth.call(null,vec__19926,(0),null);var v = cljs.core.nth.call(null,vec__19926,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19919.call(null,cljs.core.rest.call(null,s__19920__$2)));
} else
{{
var G__19945 = cljs.core.rest.call(null,s__19920__$2);
s__19920__$1 = G__19945;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__19901,in_QMARK_,c__8833__auto__,size__8834__auto__,b__19902,s__19900__$2,temp__4222__auto__,ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939))
,null,null));
});})(i__19901,in_QMARK_,c__8833__auto__,size__8834__auto__,b__19902,s__19900__$2,temp__4222__auto__,ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939))
;return iter__8835__auto__.call(null,s);
})()));
{
var G__19946 = (i__19901 + (1));
i__19901 = G__19946;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19902),iter__19899.call(null,cljs.core.chunk_rest.call(null,s__19900__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19902),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__19900__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8835__auto__ = ((function (in_QMARK_,s__19900__$2,temp__4222__auto__,ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939){
return (function iter__19927(s__19928){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__19900__$2,temp__4222__auto__,ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939){
return (function (){var s__19928__$1 = s__19928;while(true){
var temp__4222__auto____$1 = cljs.core.seq.call(null,s__19928__$1);if(temp__4222__auto____$1)
{var s__19928__$2 = temp__4222__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19928__$2))
{var c__8833__auto__ = cljs.core.chunk_first.call(null,s__19928__$2);var size__8834__auto__ = cljs.core.count.call(null,c__8833__auto__);var b__19930 = cljs.core.chunk_buffer.call(null,size__8834__auto__);if((function (){var i__19929 = (0);while(true){
if((i__19929 < size__8834__auto__))
{var vec__19933 = cljs.core._nth.call(null,c__8833__auto__,i__19929);var k = cljs.core.nth.call(null,vec__19933,(0),null);var v = cljs.core.nth.call(null,vec__19933,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19930,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19947 = (i__19929 + (1));
i__19929 = G__19947;
continue;
}
} else
{{
var G__19948 = (i__19929 + (1));
i__19929 = G__19948;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19930),iter__19927.call(null,cljs.core.chunk_rest.call(null,s__19928__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19930),null);
}
} else
{var vec__19934 = cljs.core.first.call(null,s__19928__$2);var k = cljs.core.nth.call(null,vec__19934,(0),null);var v = cljs.core.nth.call(null,vec__19934,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19927.call(null,cljs.core.rest.call(null,s__19928__$2)));
} else
{{
var G__19949 = cljs.core.rest.call(null,s__19928__$2);
s__19928__$1 = G__19949;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__19900__$2,temp__4222__auto__,ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939))
,null,null));
});})(in_QMARK_,s__19900__$2,temp__4222__auto__,ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939))
;return iter__8835__auto__.call(null,s);
})()),iter__19899.call(null,cljs.core.rest.call(null,s__19900__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939))
,null,null));
});})(ks__$1,validate__11825__auto__,ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939))
;return iter__8835__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19950 = output_checker19860_19939.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19950))
{var error__11827__auto___19951 = temp__4222__auto___19950;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__11827__auto___19951)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19857_19936,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19951], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19935,output_schema19857_19936,input_schema19858_19937,input_checker19859_19938,output_checker19860_19939))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema19857_19936,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19858_19937], null)));
var ufv___19982 = schema.utils.use_fn_validation;var output_schema19952_19983 = plumbing.fnk.schema.GraphIOSchemata;var input_schema19953_19984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19954_19985 = schema.core.checker.call(null,input_schema19953_19984);var output_checker19955_19986 = schema.core.checker.call(null,output_schema19952_19983);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___19982,output_schema19952_19983,input_schema19953_19984,input_checker19954_19985,output_checker19955_19986){
return (function sequence_schemata(G__19956,G__19957){var validate__11825__auto__ = ufv___19982.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19956,G__19957], null);var temp__4222__auto___19988 = input_checker19954_19985.call(null,args__11826__auto___19987);if(cljs.core.truth_(temp__4222__auto___19988))
{var error__11827__auto___19989 = temp__4222__auto___19988;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__11827__auto___19989)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19953_19984,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19987,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19989], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__19973 = G__19956;var vec__19975 = G__19973;var i1 = cljs.core.nth.call(null,vec__19975,(0),null);var o1 = cljs.core.nth.call(null,vec__19975,(1),null);var G__19974 = G__19957;var vec__19976 = G__19974;var k = cljs.core.nth.call(null,vec__19976,(0),null);var vec__19977 = cljs.core.nth.call(null,vec__19976,(1),null);var i2 = cljs.core.nth.call(null,vec__19977,(0),null);var o2 = cljs.core.nth.call(null,vec__19977,(1),null);var G__19973__$1 = G__19973;var G__19974__$1 = G__19974;while(true){
var vec__19978 = G__19973__$1;var i1__$1 = cljs.core.nth.call(null,vec__19978,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19978,(1),null);var vec__19979 = G__19974__$1;var k__$1 = cljs.core.nth.call(null,vec__19979,(0),null);var vec__19980 = cljs.core.nth.call(null,vec__19979,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__19980,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19980,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__19981 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__19981,(0),null);var unused = cljs.core.nth.call(null,vec__19981,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19990 = output_checker19955_19986.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19990))
{var error__11827__auto___19991 = temp__4222__auto___19990;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__11827__auto___19991)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19952_19983,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19991], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___19982,output_schema19952_19983,input_schema19953_19984,input_checker19954_19985,output_checker19955_19986))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema19952_19983,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19953_19984], null)));
