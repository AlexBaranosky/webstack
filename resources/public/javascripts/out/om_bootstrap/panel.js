// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.panel');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om_bootstrap.mixins');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.panel.Panel = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"on-select","on-select",-192407950),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Keyword(null,"header","header",119441134),om_bootstrap.types.Renderable,new cljs.core.Keyword(null,"footer","footer",1606445390),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"list-group","list-group",-304522729)),om_bootstrap.types.Renderable], true, false));
var ufv___20239 = schema.utils.use_fn_validation;var output_schema20231_20240 = om_bootstrap.types.Component;var input_schema20232_20241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.panel.Panel,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker20233_20242 = schema.core.checker.call(null,input_schema20232_20241);var output_checker20234_20243 = schema.core.checker.call(null,output_schema20231_20240);/**
* Inputs: [opts :- Panel & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.panel.panel = ((function (ufv___20239,output_schema20231_20240,input_schema20232_20241,input_checker20233_20242,output_checker20234_20243){
return (function() { 
var panel__delegate = function (G__20235,rest20236){var validate__11825__auto__ = ufv___20239.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20244 = cljs.core.list_STAR_.call(null,G__20235,rest20236);var temp__4222__auto___20245 = input_checker20233_20242.call(null,args__11826__auto___20244);if(cljs.core.truth_(temp__4222__auto___20245))
{var error__11827__auto___20246 = temp__4222__auto___20245;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.call(null,error__11827__auto___20246)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20232_20241,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20244,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20246], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__20235;var children = rest20236;while(true){
var vec__20238 = om_bootstrap.types.separate.call(null,om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.call(null,vec__20238,(0),null);var props = cljs.core.nth.call(null,vec__20238,(1),null);var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"panel","panel",-558637456),true);return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4222__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4222__auto__))
{var header = temp__4222__auto__;return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.util.clone_with_props.call(null,header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null))],null))));
} else
{return null;
}
})(),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,children))))?null:cljs.core.apply.call(null,React.DOM.div,{"ref": "body", "className": "panel-body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))),(function (){var temp__4222__auto__ = new cljs.core.Keyword(null,"list-group","list-group",-304522729).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4222__auto__))
{var list_group = temp__4222__auto__;return list_group;
} else
{return null;
}
})(),(function (){var temp__4222__auto__ = new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4222__auto__))
{var footer = temp__4222__auto__;return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[footer],null))));
} else
{return null;
}
})()],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20247 = output_checker20234_20243.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20247))
{var error__11827__auto___20248 = temp__4222__auto___20247;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.call(null,error__11827__auto___20248)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20231_20240,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20248], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var panel = function (G__20235,var_args){
var rest20236 = null;if (arguments.length > 1) {
  rest20236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return panel__delegate.call(this,G__20235,rest20236);};
panel.cljs$lang$maxFixedArity = 1;
panel.cljs$lang$applyTo = (function (arglist__20249){
var G__20235 = cljs.core.first(arglist__20249);
var rest20236 = cljs.core.rest(arglist__20249);
return panel__delegate(G__20235,rest20236);
});
panel.cljs$core$IFn$_invoke$arity$variadic = panel__delegate;
return panel;
})()
;})(ufv___20239,output_schema20231_20240,input_schema20232_20241,input_checker20233_20242,output_checker20234_20243))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.panel.panel),schema.core.make_fn_schema.call(null,output_schema20231_20240,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20232_20241], null)));
