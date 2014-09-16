// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.random');
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
var ufv___19231 = schema.utils.use_fn_validation;var output_schema19225_19232 = om_bootstrap.types.Component;var input_schema19226_19233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19227_19234 = schema.core.checker.call(null,input_schema19226_19233);var output_checker19228_19235 = schema.core.checker.call(null,output_schema19225_19232);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___19231,output_schema19225_19232,input_schema19226_19233,input_checker19227_19234,output_checker19228_19235){
return (function() { 
var jumbotron__delegate = function (G__19229,rest19230){var validate__11825__auto__ = ufv___19231.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19236 = cljs.core.list_STAR_.call(null,G__19229,rest19230);var temp__4222__auto___19237 = input_checker19227_19234.call(null,args__11826__auto___19236);if(cljs.core.truth_(temp__4222__auto___19237))
{var error__11827__auto___19238 = temp__4222__auto___19237;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.call(null,error__11827__auto___19238)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19226_19233,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19236,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19238], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19229;var children = rest19230;while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19239 = output_checker19228_19235.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19239))
{var error__11827__auto___19240 = temp__4222__auto___19239;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.call(null,error__11827__auto___19240)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19225_19232,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19240], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var jumbotron = function (G__19229,var_args){
var rest19230 = null;if (arguments.length > 1) {
  rest19230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__19229,rest19230);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__19241){
var G__19229 = cljs.core.first(arglist__19241);
var rest19230 = cljs.core.rest(arglist__19241);
return jumbotron__delegate(G__19229,rest19230);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___19231,output_schema19225_19232,input_schema19226_19233,input_checker19227_19234,output_checker19228_19235))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema19225_19232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19226_19233], null)));
var ufv___19250 = schema.utils.use_fn_validation;var output_schema19242_19251 = om_bootstrap.types.Component;var input_schema19243_19252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19244_19253 = schema.core.checker.call(null,input_schema19243_19252);var output_checker19245_19254 = schema.core.checker.call(null,output_schema19242_19251);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___19250,output_schema19242_19251,input_schema19243_19252,input_checker19244_19253,output_checker19245_19254){
return (function() { 
var label__delegate = function (G__19246,rest19247){var validate__11825__auto__ = ufv___19250.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19255 = cljs.core.list_STAR_.call(null,G__19246,rest19247);var temp__4222__auto___19256 = input_checker19244_19253.call(null,args__11826__auto___19255);if(cljs.core.truth_(temp__4222__auto___19256))
{var error__11827__auto___19257 = temp__4222__auto___19256;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.call(null,error__11827__auto___19257)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19243_19252,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19255,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19257], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19246;var children = rest19247;while(true){
var vec__19249 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.call(null,vec__19249,(0),null);var props = cljs.core.nth.call(null,vec__19249,(1),null);var classes = om_bootstrap.types.bs_class_set.call(null,bs);return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19258 = output_checker19245_19254.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19258))
{var error__11827__auto___19259 = temp__4222__auto___19258;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.call(null,error__11827__auto___19259)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19242_19251,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19259], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var label = function (G__19246,var_args){
var rest19247 = null;if (arguments.length > 1) {
  rest19247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__19246,rest19247);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__19260){
var G__19246 = cljs.core.first(arglist__19260);
var rest19247 = cljs.core.rest(arglist__19260);
return label__delegate(G__19246,rest19247);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___19250,output_schema19242_19251,input_schema19243_19252,input_checker19244_19253,output_checker19245_19254))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema19242_19251,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19243_19252], null)));
var ufv___19269 = schema.utils.use_fn_validation;var output_schema19261_19270 = om_bootstrap.types.Component;var input_schema19262_19271 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19263_19272 = schema.core.checker.call(null,input_schema19262_19271);var output_checker19264_19273 = schema.core.checker.call(null,output_schema19261_19270);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___19269,output_schema19261_19270,input_schema19262_19271,input_checker19263_19272,output_checker19264_19273){
return (function() { 
var well__delegate = function (G__19265,rest19266){var validate__11825__auto__ = ufv___19269.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19274 = cljs.core.list_STAR_.call(null,G__19265,rest19266);var temp__4222__auto___19275 = input_checker19263_19272.call(null,args__11826__auto___19274);if(cljs.core.truth_(temp__4222__auto___19275))
{var error__11827__auto___19276 = temp__4222__auto___19275;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.call(null,error__11827__auto___19276)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19262_19271,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19274,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19276], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19265;var children = rest19266;while(true){
var vec__19268 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.call(null,vec__19268,(0),null);var props = cljs.core.nth.call(null,vec__19268,(1),null);var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19277 = output_checker19264_19273.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19277))
{var error__11827__auto___19278 = temp__4222__auto___19277;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.call(null,error__11827__auto___19278)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19261_19270,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19278], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var well = function (G__19265,var_args){
var rest19266 = null;if (arguments.length > 1) {
  rest19266 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__19265,rest19266);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__19279){
var G__19265 = cljs.core.first(arglist__19279);
var rest19266 = cljs.core.rest(arglist__19279);
return well__delegate(G__19265,rest19266);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___19269,output_schema19261_19270,input_schema19262_19271,input_checker19263_19272,output_checker19264_19273))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema19261_19270,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19262_19271], null)));
var ufv___19286 = schema.utils.use_fn_validation;var output_schema19280_19287 = om_bootstrap.types.Component;var input_schema19281_19288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19282_19289 = schema.core.checker.call(null,input_schema19281_19288);var output_checker19283_19290 = schema.core.checker.call(null,output_schema19280_19287);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___19286,output_schema19280_19287,input_schema19281_19288,input_checker19282_19289,output_checker19283_19290){
return (function() { 
var page_header__delegate = function (G__19284,rest19285){var validate__11825__auto__ = ufv___19286.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19291 = cljs.core.list_STAR_.call(null,G__19284,rest19285);var temp__4222__auto___19292 = input_checker19282_19289.call(null,args__11826__auto___19291);if(cljs.core.truth_(temp__4222__auto___19292))
{var error__11827__auto___19293 = temp__4222__auto___19292;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.call(null,error__11827__auto___19293)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19281_19288,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19291,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19293], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19284;var children = rest19285;while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19294 = output_checker19283_19290.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19294))
{var error__11827__auto___19295 = temp__4222__auto___19294;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.call(null,error__11827__auto___19295)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19280_19287,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19295], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var page_header = function (G__19284,var_args){
var rest19285 = null;if (arguments.length > 1) {
  rest19285 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__19284,rest19285);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__19296){
var G__19284 = cljs.core.first(arglist__19296);
var rest19285 = cljs.core.rest(arglist__19296);
return page_header__delegate(G__19284,rest19285);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___19286,output_schema19280_19287,input_schema19281_19288,input_checker19282_19289,output_checker19283_19290))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema19280_19287,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19281_19288], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"placement","placement",768366651),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___19305 = schema.utils.use_fn_validation;var output_schema19297_19306 = om_bootstrap.types.Component;var input_schema19298_19307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19299_19308 = schema.core.checker.call(null,input_schema19298_19307);var output_checker19300_19309 = schema.core.checker.call(null,output_schema19297_19306);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___19305,output_schema19297_19306,input_schema19298_19307,input_checker19299_19308,output_checker19300_19309){
return (function() { 
var tooltip__delegate = function (G__19301,rest19302){var validate__11825__auto__ = ufv___19305.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19310 = cljs.core.list_STAR_.call(null,G__19301,rest19302);var temp__4222__auto___19311 = input_checker19299_19308.call(null,args__11826__auto___19310);if(cljs.core.truth_(temp__4222__auto___19311))
{var error__11827__auto___19312 = temp__4222__auto___19311;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.call(null,error__11827__auto___19312)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19298_19307,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19310,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19312], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19301;var children = rest19302;while(true){
var vec__19304 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.call(null,vec__19304,(0),null);var _ = cljs.core.nth.call(null,vec__19304,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__8110__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.call(null,React.DOM.div,{"style": {"top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"style": {"top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"}),cljs.core.apply.call(null,React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19313 = output_checker19300_19309.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19313))
{var error__11827__auto___19314 = temp__4222__auto___19313;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.call(null,error__11827__auto___19314)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19297_19306,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19314], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var tooltip = function (G__19301,var_args){
var rest19302 = null;if (arguments.length > 1) {
  rest19302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__19301,rest19302);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__19315){
var G__19301 = cljs.core.first(arglist__19315);
var rest19302 = cljs.core.rest(arglist__19315);
return tooltip__delegate(G__19301,rest19302);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___19305,output_schema19297_19306,input_schema19298_19307,input_checker19299_19308,output_checker19300_19309))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema19297_19306,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19298_19307], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284),schema.core.Int], null));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__13595__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));(descriptor__13595__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);
return descriptor__13595__auto__;
})();
/**
* Renders the alert component with timeout mixed in. TODO: This
* should probably use the component macro and be defined inline under
* the alert function. No need for a separate name.
* @param {...*} var_args
*/
om_bootstrap.random.alert_STAR_ = (function() { 
var alert_STAR___delegate = function (data__13624__auto__,owner19316,p__19318){var vec__19336 = p__19318;var opts__13625__auto__ = cljs.core.nth.call(null,vec__19336,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema19340 = schema.core.Any;var input_schema19341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map19337","map19337",-591214547,null))], null);var input_checker19342 = schema.core.checker.call(null,input_schema19341);var output_checker19343 = schema.core.checker.call(null,output_schema19340);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__){
return (function fnk19339(G__19344){var validate__11825__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19344], null);var temp__4222__auto___19354 = input_checker19342.call(null,args__11826__auto___19353);if(cljs.core.truth_(temp__4222__auto___19354))
{var error__11827__auto___19355 = temp__4222__auto___19354;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19339","fnk19339",-927227907,null),cljs.core.pr_str.call(null,error__11827__auto___19355)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19341,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19353,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19355], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var map19337 = G__19344;while(true){
if(cljs.core.map_QMARK_.call(null,map19337))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map19337)));
}
var map19338 = plumbing.fnk.schema.safe_get.call(null,map19337,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get.call(null,map19338,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get.call(null,map19338,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get.call(null,map19338,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map19337,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t19349 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t19349 = (function (output_checker19343,input_schema19341,p__19318,owner,props,data__13624__auto__,map19338,children,map19337,vec__19336,G__19344,opts__13625__auto__,alert_STAR_,owner19316,validate__11825__auto__,input_checker19342,ufv__,output_schema19340,fnk19339,bs,meta19350){
this.output_checker19343 = output_checker19343;
this.input_schema19341 = input_schema19341;
this.p__19318 = p__19318;
this.owner = owner;
this.props = props;
this.data__13624__auto__ = data__13624__auto__;
this.map19338 = map19338;
this.children = children;
this.map19337 = map19337;
this.vec__19336 = vec__19336;
this.G__19344 = G__19344;
this.opts__13625__auto__ = opts__13625__auto__;
this.alert_STAR_ = alert_STAR_;
this.owner19316 = owner19316;
this.validate__11825__auto__ = validate__11825__auto__;
this.input_checker19342 = input_checker19342;
this.ufv__ = ufv__;
this.output_schema19340 = output_schema19340;
this.fnk19339 = fnk19339;
this.bs = bs;
this.meta19350 = meta19350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t19349.cljs$lang$type = true;
om_bootstrap.random.t19349.cljs$lang$ctorStr = "om-bootstrap.random/t19349";
om_bootstrap.random.t19349.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"om-bootstrap.random/t19349");
});})(owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__))
;
om_bootstrap.random.t19349.prototype.om$core$IRender$ = true;
om_bootstrap.random.t19349.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set.call(null,self__.bs);var dismiss_button = (function (){var temp__4222__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4222__auto__))
{var od = temp__4222__auto__;return React.DOM.button({"aria-hidden": true, "onClick": om_tools.dom.format_opts.call(null,od), "className": "close", "type": "button"},"&times;");
} else
{return null;
}
})();return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__))
;
om_bootstrap.random.t19349.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t19349.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__8098__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__8098__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__8098__auto__;
}
})()))
{var G__19352 = self__.owner;G__19352.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__19352;
} else
{return null;
}
});})(owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__))
;
om_bootstrap.random.t19349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__){
return (function (_19351){var self__ = this;
var _19351__$1 = this;return self__.meta19350;
});})(owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__))
;
om_bootstrap.random.t19349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__){
return (function (_19351,meta19350__$1){var self__ = this;
var _19351__$1 = this;return (new om_bootstrap.random.t19349(self__.output_checker19343,self__.input_schema19341,self__.p__19318,self__.owner,self__.props,self__.data__13624__auto__,self__.map19338,self__.children,self__.map19337,self__.vec__19336,self__.G__19344,self__.opts__13625__auto__,self__.alert_STAR_,self__.owner19316,self__.validate__11825__auto__,self__.input_checker19342,self__.ufv__,self__.output_schema19340,self__.fnk19339,self__.bs,meta19350__$1));
});})(owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__))
;
om_bootstrap.random.__GT_t19349 = ((function (owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__){
return (function __GT_t19349(output_checker19343__$1,input_schema19341__$1,p__19318__$1,owner__$1,props__$1,data__13624__auto____$1,map19338__$1,children__$1,map19337__$1,vec__19336__$1,G__19344__$1,opts__13625__auto____$1,alert_STAR___$1,owner19316__$1,validate__11825__auto____$1,input_checker19342__$1,ufv____$1,output_schema19340__$1,fnk19339__$1,bs__$1,meta19350){return (new om_bootstrap.random.t19349(output_checker19343__$1,input_schema19341__$1,p__19318__$1,owner__$1,props__$1,data__13624__auto____$1,map19338__$1,children__$1,map19337__$1,vec__19336__$1,G__19344__$1,opts__13625__auto____$1,alert_STAR___$1,owner19316__$1,validate__11825__auto____$1,input_checker19342__$1,ufv____$1,output_schema19340__$1,fnk19339__$1,bs__$1,meta19350));
});})(owner,children,props,bs,map19338,validate__11825__auto__,ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__))
;
}
return (new om_bootstrap.random.t19349(output_checker19343,input_schema19341,p__19318,owner,props,data__13624__auto__,map19338,children,map19337,vec__19336,G__19344,opts__13625__auto__,alert_STAR_,owner19316,validate__11825__auto__,input_checker19342,ufv__,output_schema19340,fnk19339,bs,null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19356 = output_checker19343.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19356))
{var error__11827__auto___19357 = temp__4222__auto___19356;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19339","fnk19339",-927227907,null),cljs.core.pr_str.call(null,error__11827__auto___19357)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19340,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19357], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv__,output_schema19340,input_schema19341,input_checker19342,output_checker19343,vec__19336,opts__13625__auto__))
,schema.core.make_fn_schema.call(null,output_schema19340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19341], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__13625__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner19316,new cljs.core.Keyword(null,"data","data",-232669377),data__13624__auto__], null));
};
var alert_STAR_ = function (data__13624__auto__,owner19316,var_args){
var p__19318 = null;if (arguments.length > 2) {
  p__19318 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__13624__auto__,owner19316,p__19318);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__19358){
var data__13624__auto__ = cljs.core.first(arglist__19358);
arglist__19358 = cljs.core.next(arglist__19358);
var owner19316 = cljs.core.first(arglist__19358);
var p__19318 = cljs.core.rest(arglist__19358);
return alert_STAR___delegate(data__13624__auto__,owner19316,p__19318);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__13593__auto__){return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__13593__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__13593__auto__,m19317){return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__13593__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m19317));
});
__GT_alert_STAR_ = function(cursor__13593__auto__,m19317){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__13593__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__13593__auto__,m19317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___19367 = schema.utils.use_fn_validation;var output_schema19359_19368 = om_bootstrap.types.Component;var input_schema19360_19369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19361_19370 = schema.core.checker.call(null,input_schema19360_19369);var output_checker19362_19371 = schema.core.checker.call(null,output_schema19359_19368);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___19367,output_schema19359_19368,input_schema19360_19369,input_checker19361_19370,output_checker19362_19371){
return (function() { 
var alert__$1__delegate = function (G__19363,rest19364){var validate__11825__auto__ = ufv___19367.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19372 = cljs.core.list_STAR_.call(null,G__19363,rest19364);var temp__4222__auto___19373 = input_checker19361_19370.call(null,args__11826__auto___19372);if(cljs.core.truth_(temp__4222__auto___19373))
{var error__11827__auto___19374 = temp__4222__auto___19373;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.call(null,error__11827__auto___19374)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19360_19369,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19372,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19374], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19363;var children = rest19364;while(true){
var vec__19366 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.call(null,vec__19366,(0),null);var props = cljs.core.nth.call(null,vec__19366,(1),null);return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19375 = output_checker19362_19371.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19375))
{var error__11827__auto___19376 = temp__4222__auto___19375;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.call(null,error__11827__auto___19376)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19359_19368,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19376], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var alert__$1 = function (G__19363,var_args){
var rest19364 = null;if (arguments.length > 1) {
  rest19364 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__19363,rest19364);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__19377){
var G__19363 = cljs.core.first(arglist__19377);
var rest19364 = cljs.core.rest(arglist__19377);
return alert__$1__delegate(G__19363,rest19364);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___19367,output_schema19359_19368,input_schema19360_19369,input_checker19361_19370,output_checker19362_19371))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema19359_19368,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19360_19369], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___19386 = schema.utils.use_fn_validation;var output_schema19378_19387 = om_bootstrap.types.Component;var input_schema19379_19388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19380_19389 = schema.core.checker.call(null,input_schema19379_19388);var output_checker19381_19390 = schema.core.checker.call(null,output_schema19378_19387);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___19386,output_schema19378_19387,input_schema19379_19388,input_checker19380_19389,output_checker19381_19390){
return (function() { 
var popover__delegate = function (G__19382,rest19383){var validate__11825__auto__ = ufv___19386.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19391 = cljs.core.list_STAR_.call(null,G__19382,rest19383);var temp__4222__auto___19392 = input_checker19380_19389.call(null,args__11826__auto___19391);if(cljs.core.truth_(temp__4222__auto___19392))
{var error__11827__auto___19393 = temp__4222__auto___19392;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.call(null,error__11827__auto___19393)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19379_19388,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19391,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19393], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19382;var children = rest19383;while(true){
var vec__19385 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.call(null,vec__19385,(0),null);var _ = cljs.core.nth.call(null,vec__19385,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__8110__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.call(null,React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"style": {"top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"}),(function (){var temp__4222__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4222__auto__))
{var title = temp__4222__auto__;return cljs.core.apply.call(null,React.DOM.h3,{"className": "popover-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.call(null,React.DOM.div,{"className": "popover-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19394 = output_checker19381_19390.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19394))
{var error__11827__auto___19395 = temp__4222__auto___19394;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.call(null,error__11827__auto___19395)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19378_19387,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19395], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var popover = function (G__19382,var_args){
var rest19383 = null;if (arguments.length > 1) {
  rest19383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__19382,rest19383);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__19396){
var G__19382 = cljs.core.first(arglist__19396);
var rest19383 = cljs.core.rest(arglist__19396);
return popover__delegate(G__19382,rest19383);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___19386,output_schema19378_19387,input_schema19379_19388,input_checker19380_19389,output_checker19381_19390))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema19378_19387,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19379_19388], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___19405 = schema.utils.use_fn_validation;var output_schema19397_19406 = om_bootstrap.types.Component;var input_schema19398_19407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19399_19408 = schema.core.checker.call(null,input_schema19398_19407);var output_checker19400_19409 = schema.core.checker.call(null,output_schema19397_19406);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___19405,output_schema19397_19406,input_schema19398_19407,input_checker19399_19408,output_checker19400_19409){
return (function() { 
var badge__delegate = function (G__19401,rest19402){var validate__11825__auto__ = ufv___19405.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19410 = cljs.core.list_STAR_.call(null,G__19401,rest19402);var temp__4222__auto___19411 = input_checker19399_19408.call(null,args__11826__auto___19410);if(cljs.core.truth_(temp__4222__auto___19411))
{var error__11827__auto___19412 = temp__4222__auto___19411;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.call(null,error__11827__auto___19412)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19398_19407,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19410,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19412], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19401;var children = rest19402;while(true){
var vec__19404 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.call(null,vec__19404,(0),null);var props = cljs.core.nth.call(null,vec__19404,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19413 = output_checker19400_19409.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19413))
{var error__11827__auto___19414 = temp__4222__auto___19413;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.call(null,error__11827__auto___19414)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19397_19406,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19414], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var badge = function (G__19401,var_args){
var rest19402 = null;if (arguments.length > 1) {
  rest19402 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__19401,rest19402);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__19415){
var G__19401 = cljs.core.first(arglist__19415);
var rest19402 = cljs.core.rest(arglist__19415);
return badge__delegate(G__19401,rest19402);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___19405,output_schema19397_19406,input_schema19398_19407,input_checker19399_19408,output_checker19400_19409))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema19397_19406,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19398_19407], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___19424 = schema.utils.use_fn_validation;var output_schema19416_19425 = om_bootstrap.types.Component;var input_schema19417_19426 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19418_19427 = schema.core.checker.call(null,input_schema19417_19426);var output_checker19419_19428 = schema.core.checker.call(null,output_schema19416_19425);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___19424,output_schema19416_19425,input_schema19417_19426,input_checker19418_19427,output_checker19419_19428){
return (function() { 
var glyphicon__delegate = function (G__19420,rest19421){var validate__11825__auto__ = ufv___19424.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19429 = cljs.core.list_STAR_.call(null,G__19420,rest19421);var temp__4222__auto___19430 = input_checker19418_19427.call(null,args__11826__auto___19429);if(cljs.core.truth_(temp__4222__auto___19430))
{var error__11827__auto___19431 = temp__4222__auto___19430;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.call(null,error__11827__auto___19431)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19417_19426,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19429,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19431], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19420;var children = rest19421;while(true){
var vec__19423 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.call(null,vec__19423,(0),null);var props = cljs.core.nth.call(null,vec__19423,(1),null);var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19432 = output_checker19419_19428.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19432))
{var error__11827__auto___19433 = temp__4222__auto___19432;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.call(null,error__11827__auto___19433)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19416_19425,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19433], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var glyphicon = function (G__19420,var_args){
var rest19421 = null;if (arguments.length > 1) {
  rest19421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__19420,rest19421);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__19434){
var G__19420 = cljs.core.first(arglist__19434);
var rest19421 = cljs.core.rest(arglist__19434);
return glyphicon__delegate(G__19420,rest19421);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___19424,output_schema19416_19425,input_schema19417_19426,input_checker19418_19427,output_checker19419_19428))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema19416_19425,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19417_19426], null)));
