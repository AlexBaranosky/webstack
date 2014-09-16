// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om_bootstrap.mixins');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"active?","active?",459499776),schema.core.Bool,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.Bool,new cljs.core.Keyword(null,"block?","block?",1102479923),schema.core.Bool,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),schema.core.Bool,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),schema.core.Bool], null));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),schema.core.Bool,new cljs.core.Keyword(null,"justified?","justified?",-1045366764),schema.core.Bool], null));
var ufv___23187 = schema.utils.use_fn_validation;var output_schema23181_23188 = schema.core.Any;var input_schema23182_23189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.Bool,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker23183_23190 = schema.core.checker.call(null,input_schema23182_23189);var output_checker23184_23191 = schema.core.checker.call(null,output_schema23181_23188);/**
* Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? s/Bool, :props {s/Any s/Any}} children]
*/
om_bootstrap.button.render_anchor = ((function (ufv___23187,output_schema23181_23188,input_schema23182_23189,input_checker23183_23190,output_checker23184_23191){
return (function render_anchor(G__23185,G__23186){var validate__11825__auto__ = ufv___23187.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23185,G__23186], null);var temp__4222__auto___23193 = input_checker23183_23190.call(null,args__11826__auto___23192);if(cljs.core.truth_(temp__4222__auto___23193))
{var error__11827__auto___23194 = temp__4222__auto___23193;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__11827__auto___23194)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23182_23189,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23192,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23194], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__23185;var children = G__23186;while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23195 = output_checker23184_23191.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23195))
{var error__11827__auto___23196 = temp__4222__auto___23195;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__11827__auto___23196)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23181_23188,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23196], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23187,output_schema23181_23188,input_schema23182_23189,input_checker23183_23190,output_checker23184_23191))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema23181_23188,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23182_23189], null)));
var ufv___23205 = schema.utils.use_fn_validation;var output_schema23197_23206 = om_bootstrap.types.Component;var input_schema23198_23207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);var input_checker23199_23208 = schema.core.checker.call(null,input_schema23198_23207);var output_checker23200_23209 = schema.core.checker.call(null,output_schema23197_23206);/**
* Inputs: [props :- Button & children]
* Returns: t/Component
* 
* Renders a button.
* @param {...*} var_args
*/
om_bootstrap.button.button = ((function (ufv___23205,output_schema23197_23206,input_schema23198_23207,input_checker23199_23208,output_checker23200_23209){
return (function() { 
var button__delegate = function (G__23201,rest23202){var validate__11825__auto__ = ufv___23205.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23210 = cljs.core.list_STAR_.call(null,G__23201,rest23202);var temp__4222__auto___23211 = input_checker23199_23208.call(null,args__11826__auto___23210);if(cljs.core.truth_(temp__4222__auto___23211))
{var error__11827__auto___23212 = temp__4222__auto___23211;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__11827__auto___23212)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23198_23207,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23210,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23212], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var props = G__23201;var children = rest23202;while(true){
var vec__23204 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));var bs = cljs.core.nth.call(null,vec__23204,(0),null);var props__$1 = cljs.core.nth.call(null,vec__23204,(1),null);var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs)))
{return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else
{if(cljs.core.truth_((function (){var or__8110__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})()))
{return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else
{return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23213 = output_checker23200_23209.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23213))
{var error__11827__auto___23214 = temp__4222__auto___23213;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__11827__auto___23214)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23197_23206,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23214], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var button = function (G__23201,var_args){
var rest23202 = null;if (arguments.length > 1) {
  rest23202 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button__delegate.call(this,G__23201,rest23202);};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = (function (arglist__23215){
var G__23201 = cljs.core.first(arglist__23215);
var rest23202 = cljs.core.rest(arglist__23215);
return button__delegate(G__23201,rest23202);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;})(ufv___23205,output_schema23197_23206,input_schema23198_23207,input_checker23199_23208,output_checker23200_23209))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema23197_23206,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23198_23207], null)));
var ufv___23224 = schema.utils.use_fn_validation;var output_schema23216_23225 = om_bootstrap.types.Component;var input_schema23217_23226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker23218_23227 = schema.core.checker.call(null,input_schema23217_23226);var output_checker23219_23228 = schema.core.checker.call(null,output_schema23216_23225);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Renders a button toolbar.
* @param {...*} var_args
*/
om_bootstrap.button.toolbar = ((function (ufv___23224,output_schema23216_23225,input_schema23217_23226,input_checker23218_23227,output_checker23219_23228){
return (function() { 
var toolbar__delegate = function (G__23220,rest23221){var validate__11825__auto__ = ufv___23224.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23229 = cljs.core.list_STAR_.call(null,G__23220,rest23221);var temp__4222__auto___23230 = input_checker23218_23227.call(null,args__11826__auto___23229);if(cljs.core.truth_(temp__4222__auto___23230))
{var error__11827__auto___23231 = temp__4222__auto___23230;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__11827__auto___23231)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23217_23226,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23229,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23231], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__23220;var children = rest23221;while(true){
var vec__23223 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));var bs = cljs.core.nth.call(null,vec__23223,(0),null);var props = cljs.core.nth.call(null,vec__23223,(1),null);return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs))), "role": "toolbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23232 = output_checker23219_23228.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23232))
{var error__11827__auto___23233 = temp__4222__auto___23232;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__11827__auto___23233)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23216_23225,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23233], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var toolbar = function (G__23220,var_args){
var rest23221 = null;if (arguments.length > 1) {
  rest23221 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return toolbar__delegate.call(this,G__23220,rest23221);};
toolbar.cljs$lang$maxFixedArity = 1;
toolbar.cljs$lang$applyTo = (function (arglist__23234){
var G__23220 = cljs.core.first(arglist__23234);
var rest23221 = cljs.core.rest(arglist__23234);
return toolbar__delegate(G__23220,rest23221);
});
toolbar.cljs$core$IFn$_invoke$arity$variadic = toolbar__delegate;
return toolbar;
})()
;})(ufv___23224,output_schema23216_23225,input_schema23217_23226,input_checker23218_23227,output_checker23219_23228))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema23216_23225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23217_23226], null)));
var ufv___23243 = schema.utils.use_fn_validation;var output_schema23235_23244 = om_bootstrap.types.Component;var input_schema23236_23245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker23237_23246 = schema.core.checker.call(null,input_schema23236_23245);var output_checker23238_23247 = schema.core.checker.call(null,output_schema23235_23244);/**
* Inputs: [opts :- ButtonGroup & children]
* Returns: t/Component
* 
* Renders the supplied children in a wrapping button-group div.
* @param {...*} var_args
*/
om_bootstrap.button.button_group = ((function (ufv___23243,output_schema23235_23244,input_schema23236_23245,input_checker23237_23246,output_checker23238_23247){
return (function() { 
var button_group__delegate = function (G__23239,rest23240){var validate__11825__auto__ = ufv___23243.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23248 = cljs.core.list_STAR_.call(null,G__23239,rest23240);var temp__4222__auto___23249 = input_checker23237_23246.call(null,args__11826__auto___23248);if(cljs.core.truth_(temp__4222__auto___23249))
{var error__11827__auto___23250 = temp__4222__auto___23249;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__11827__auto___23250)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23236_23245,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23248,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23250], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__23239;var children = rest23240;while(true){
var vec__23242 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));var bs = cljs.core.nth.call(null,vec__23242,(0),null);var props = cljs.core.nth.call(null,vec__23242,(1),null);var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23251 = output_checker23238_23247.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23251))
{var error__11827__auto___23252 = temp__4222__auto___23251;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__11827__auto___23252)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23235_23244,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23252], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var button_group = function (G__23239,var_args){
var rest23240 = null;if (arguments.length > 1) {
  rest23240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button_group__delegate.call(this,G__23239,rest23240);};
button_group.cljs$lang$maxFixedArity = 1;
button_group.cljs$lang$applyTo = (function (arglist__23253){
var G__23239 = cljs.core.first(arglist__23253);
var rest23240 = cljs.core.rest(arglist__23253);
return button_group__delegate(G__23239,rest23240);
});
button_group.cljs$core$IFn$_invoke$arity$variadic = button_group__delegate;
return button_group;
})()
;})(ufv___23243,output_schema23235_23244,input_schema23236_23245,input_checker23237_23246,output_checker23238_23247))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema23235_23244,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23236_23245], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function render_nav_item(props,open_QMARK_,children){var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function render_button_group(props,open_QMARK_,children){var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___23262 = schema.utils.use_fn_validation;var output_schema23254_23263 = om_bootstrap.types.Component;var input_schema23255_23264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker23256_23265 = schema.core.checker.call(null,input_schema23255_23264);var output_checker23257_23266 = schema.core.checker.call(null,output_schema23254_23263);/**
* Inputs: [opts :- MenuItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.menu_item = ((function (ufv___23262,output_schema23254_23263,input_schema23255_23264,input_checker23256_23265,output_checker23257_23266){
return (function() { 
var menu_item__delegate = function (G__23258,rest23259){var validate__11825__auto__ = ufv___23262.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23267 = cljs.core.list_STAR_.call(null,G__23258,rest23259);var temp__4222__auto___23268 = input_checker23256_23265.call(null,args__11826__auto___23267);if(cljs.core.truth_(temp__4222__auto___23268))
{var error__11827__auto___23269 = temp__4222__auto___23268;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__11827__auto___23269)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23255_23264,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23267,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23269], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__23258;var children = rest23259;while(true){
var vec__23261 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__23261,(0),null);var props = cljs.core.nth.call(null,vec__23261,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (vec__23261,bs,props,classes,validate__11825__auto__,ufv___23262,output_schema23254_23263,input_schema23255_23264,input_checker23256_23265,output_checker23257_23266){
return (function (e){var temp__4222__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4222__auto__))
{var on_select = temp__4222__auto__;e.preventDefault();
return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return null;
}
});})(vec__23261,bs,props,classes,validate__11825__auto__,ufv___23262,output_schema23254_23263,input_schema23255_23264,input_checker23256_23265,output_checker23257_23266))
;var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"tabIndex": "-1", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));var li_attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null);return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23270 = output_checker23257_23266.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23270))
{var error__11827__auto___23271 = temp__4222__auto___23270;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__11827__auto___23271)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23254_23263,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23271], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var menu_item = function (G__23258,var_args){
var rest23259 = null;if (arguments.length > 1) {
  rest23259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return menu_item__delegate.call(this,G__23258,rest23259);};
menu_item.cljs$lang$maxFixedArity = 1;
menu_item.cljs$lang$applyTo = (function (arglist__23272){
var G__23258 = cljs.core.first(arglist__23272);
var rest23259 = cljs.core.rest(arglist__23272);
return menu_item__delegate(G__23258,rest23259);
});
menu_item.cljs$core$IFn$_invoke$arity$variadic = menu_item__delegate;
return menu_item;
})()
;})(ufv___23262,output_schema23254_23263,input_schema23255_23264,input_checker23256_23265,output_checker23257_23266))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema23254_23263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23255_23264], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___23282 = schema.utils.use_fn_validation;var output_schema23274_23283 = om_bootstrap.types.Component;var input_schema23275_23284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker23276_23285 = schema.core.checker.call(null,input_schema23275_23284);var output_checker23277_23286 = schema.core.checker.call(null,output_schema23274_23283);/**
* Inputs: [opts :- DropdownMenu & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_menu = ((function (ufv___23282,output_schema23274_23283,input_schema23275_23284,input_checker23276_23285,output_checker23277_23286){
return (function() { 
var dropdown_menu__delegate = function (G__23278,rest23279){var validate__11825__auto__ = ufv___23282.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23287 = cljs.core.list_STAR_.call(null,G__23278,rest23279);var temp__4222__auto___23288 = input_checker23276_23285.call(null,args__11826__auto___23287);if(cljs.core.truth_(temp__4222__auto___23288))
{var error__11827__auto___23289 = temp__4222__auto___23288;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__11827__auto___23289)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23275_23284,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23287,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23289], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__23278;var children = rest23279;while(true){
var vec__23281 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);var bs = cljs.core.nth.call(null,vec__23281,(0),null);var props = cljs.core.nth.call(null,vec__23281,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4220__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4220__auto__))
{var on_select = temp__4220__auto__;return cljs.core.map.call(null,((function (on_select,temp__4220__auto__,vec__23281,bs,props,classes,ul_attrs,validate__11825__auto__,ufv___23282,output_schema23274_23283,input_schema23275_23284,input_checker23276_23285,output_checker23277_23286){
return (function (p1__23273_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__23273_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4220__auto__,vec__23281,bs,props,classes,ul_attrs,validate__11825__auto__,ufv___23282,output_schema23274_23283,input_schema23275_23284,input_checker23276_23285,output_checker23277_23286))
,children);
} else
{return children;
}
})()],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23290 = output_checker23277_23286.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23290))
{var error__11827__auto___23291 = temp__4222__auto___23290;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__11827__auto___23291)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23274_23283,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23291], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var dropdown_menu = function (G__23278,var_args){
var rest23279 = null;if (arguments.length > 1) {
  rest23279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown_menu__delegate.call(this,G__23278,rest23279);};
dropdown_menu.cljs$lang$maxFixedArity = 1;
dropdown_menu.cljs$lang$applyTo = (function (arglist__23292){
var G__23278 = cljs.core.first(arglist__23292);
var rest23279 = cljs.core.rest(arglist__23292);
return dropdown_menu__delegate(G__23278,rest23279);
});
dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = dropdown_menu__delegate;
return dropdown_menu;
})()
;})(ufv___23282,output_schema23274_23283,input_schema23275_23284,input_checker23276_23285,output_checker23277_23286))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema23274_23283,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23275_23284], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__13595__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));(descriptor__13595__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);
return descriptor__13595__auto__;
})();
/**
* Generates a dropdown button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_STAR_ = (function() { 
var dropdown_STAR___delegate = function (data__13624__auto__,owner23294,p__23296){var vec__23315 = p__23296;var opts__13625__auto__ = cljs.core.nth.call(null,vec__23315,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema23318 = schema.core.Any;var input_schema23319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map23316","map23316",-433017387,null))], null);var input_checker23320 = schema.core.checker.call(null,input_schema23319);var output_checker23321 = schema.core.checker.call(null,output_schema23318);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function fnk23317(G__23322){var validate__11825__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23322], null);var temp__4222__auto___23334 = input_checker23320.call(null,args__11826__auto___23333);if(cljs.core.truth_(temp__4222__auto___23334))
{var error__11827__auto___23335 = temp__4222__auto___23334;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk23317","fnk23317",367355051,null),cljs.core.pr_str.call(null,error__11827__auto___23335)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23319,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23333,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23335], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var map23316 = G__23322;while(true){
if(cljs.core.map_QMARK_.call(null,map23316))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23316)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map23316,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map23316,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t23328 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t23328 = (function (input_checker23320,vec__23315,owner,output_checker23321,data__13624__auto__,output_schema23318,owner23294,fnk23317,G__23322,opts__13625__auto__,state,map23316,dropdown_STAR_,validate__11825__auto__,ufv__,input_schema23319,p__23296,meta23329){
this.input_checker23320 = input_checker23320;
this.vec__23315 = vec__23315;
this.owner = owner;
this.output_checker23321 = output_checker23321;
this.data__13624__auto__ = data__13624__auto__;
this.output_schema23318 = output_schema23318;
this.owner23294 = owner23294;
this.fnk23317 = fnk23317;
this.G__23322 = G__23322;
this.opts__13625__auto__ = opts__13625__auto__;
this.state = state;
this.map23316 = map23316;
this.dropdown_STAR_ = dropdown_STAR_;
this.validate__11825__auto__ = validate__11825__auto__;
this.ufv__ = ufv__;
this.input_schema23319 = input_schema23319;
this.p__23296 = p__23296;
this.meta23329 = meta23329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t23328.cljs$lang$type = true;
om_bootstrap.button.t23328.cljs$lang$ctorStr = "om-bootstrap.button/t23328";
om_bootstrap.button.t23328.cljs$lang$ctorPrWriter = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"om-bootstrap.button/t23328");
});})(state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
;
om_bootstrap.button.t23328.prototype.om$core$IRender$ = true;
om_bootstrap.button.t23328.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__23331 = om.core.get_props.call(null,self__.owner);var map__23331__$1 = ((cljs.core.seq_QMARK_.call(null,map__23331))?cljs.core.apply.call(null,cljs.core.hash_map,map__23331):map__23331);var children = cljs.core.get.call(null,map__23331__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__23331__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__23332 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__23332,(0),null);var props = cljs.core.nth.call(null,vec__23332,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__23331,map__23331__$1,children,opts,vec__23332,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__23331,map__23331__$1,children,opts,vec__23332,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
], null);var update_child_props = ((function (open_QMARK_,map__23331,map__23331__$1,children,opts,vec__23332,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function (props__$1){var handle = (cljs.core.truth_((function (){var or__8110__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__23331,map__23331__$1,children,opts,vec__23332,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function (key){var temp__4220__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4220__auto__))
{var os = temp__4220__auto__;return os.call(null,key);
} else
{return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__23331,map__23331__$1,children,opts,vec__23332,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
:null);return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__23331,map__23331__$1,children,opts,vec__23332,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
;return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__23331,map__23331__$1,children,opts,vec__23332,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function (p1__23293_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__23293_SHARP_,update_child_props);
});})(open_QMARK_,map__23331,map__23331__$1,children,opts,vec__23332,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
,children))], null));
});})(state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
;
om_bootstrap.button.t23328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function (_23330){var self__ = this;
var _23330__$1 = this;return self__.meta23329;
});})(state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
;
om_bootstrap.button.t23328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function (_23330,meta23329__$1){var self__ = this;
var _23330__$1 = this;return (new om_bootstrap.button.t23328(self__.input_checker23320,self__.vec__23315,self__.owner,self__.output_checker23321,self__.data__13624__auto__,self__.output_schema23318,self__.owner23294,self__.fnk23317,self__.G__23322,self__.opts__13625__auto__,self__.state,self__.map23316,self__.dropdown_STAR_,self__.validate__11825__auto__,self__.ufv__,self__.input_schema23319,self__.p__23296,meta23329__$1));
});})(state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
;
om_bootstrap.button.__GT_t23328 = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__){
return (function __GT_t23328(input_checker23320__$1,vec__23315__$1,owner__$1,output_checker23321__$1,data__13624__auto____$1,output_schema23318__$1,owner23294__$1,fnk23317__$1,G__23322__$1,opts__13625__auto____$1,state__$1,map23316__$1,dropdown_STAR___$1,validate__11825__auto____$1,ufv____$1,input_schema23319__$1,p__23296__$1,meta23329){return (new om_bootstrap.button.t23328(input_checker23320__$1,vec__23315__$1,owner__$1,output_checker23321__$1,data__13624__auto____$1,output_schema23318__$1,owner23294__$1,fnk23317__$1,G__23322__$1,opts__13625__auto____$1,state__$1,map23316__$1,dropdown_STAR___$1,validate__11825__auto____$1,ufv____$1,input_schema23319__$1,p__23296__$1,meta23329));
});})(state,owner,validate__11825__auto__,ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
;
}
return (new om_bootstrap.button.t23328(input_checker23320,vec__23315,owner,output_checker23321,data__13624__auto__,output_schema23318,owner23294,fnk23317,G__23322,opts__13625__auto__,state,map23316,dropdown_STAR_,validate__11825__auto__,ufv__,input_schema23319,p__23296,null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23336 = output_checker23321.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23336))
{var error__11827__auto___23337 = temp__4222__auto___23336;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk23317","fnk23317",367355051,null),cljs.core.pr_str.call(null,error__11827__auto___23337)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23318,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23337], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv__,output_schema23318,input_schema23319,input_checker23320,output_checker23321,vec__23315,opts__13625__auto__))
,schema.core.make_fn_schema.call(null,output_schema23318,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23319], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner23294),new cljs.core.Keyword(null,"opts","opts",155075701),opts__13625__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23294,new cljs.core.Keyword(null,"data","data",-232669377),data__13624__auto__], null));
};
var dropdown_STAR_ = function (data__13624__auto__,owner23294,var_args){
var p__23296 = null;if (arguments.length > 2) {
  p__23296 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return dropdown_STAR___delegate.call(this,data__13624__auto__,owner23294,p__23296);};
dropdown_STAR_.cljs$lang$maxFixedArity = 2;
dropdown_STAR_.cljs$lang$applyTo = (function (arglist__23338){
var data__13624__auto__ = cljs.core.first(arglist__23338);
arglist__23338 = cljs.core.next(arglist__23338);
var owner23294 = cljs.core.first(arglist__23338);
var p__23296 = cljs.core.rest(arglist__23338);
return dropdown_STAR___delegate(data__13624__auto__,owner23294,p__23296);
});
dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = dropdown_STAR___delegate;
return dropdown_STAR_;
})()
;
om_bootstrap.button.__GT_dropdown_STAR_ = (function() {
var __GT_dropdown_STAR_ = null;
var __GT_dropdown_STAR___1 = (function (cursor__13593__auto__){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__13593__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});
var __GT_dropdown_STAR___2 = (function (cursor__13593__auto__,m23295){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__13593__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m23295));
});
__GT_dropdown_STAR_ = function(cursor__13593__auto__,m23295){
switch(arguments.length){
case 1:
return __GT_dropdown_STAR___1.call(this,cursor__13593__auto__);
case 2:
return __GT_dropdown_STAR___2.call(this,cursor__13593__auto__,m23295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_dropdown_STAR___1;
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_dropdown_STAR___2;
return __GT_dropdown_STAR_;
})()
;
var ufv___23345 = schema.utils.use_fn_validation;var output_schema23339_23346 = om_bootstrap.types.Component;var input_schema23340_23347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker23341_23348 = schema.core.checker.call(null,input_schema23340_23347);var output_checker23342_23349 = schema.core.checker.call(null,output_schema23339_23346);/**
* Inputs: [opts :- DropdownButton & children]
* Returns: t/Component
* 
* Returns a dropdown button component. The component manages its own
* dropdown state.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown = ((function (ufv___23345,output_schema23339_23346,input_schema23340_23347,input_checker23341_23348,output_checker23342_23349){
return (function() { 
var dropdown__delegate = function (G__23343,rest23344){var validate__11825__auto__ = ufv___23345.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23350 = cljs.core.list_STAR_.call(null,G__23343,rest23344);var temp__4222__auto___23351 = input_checker23341_23348.call(null,args__11826__auto___23350);if(cljs.core.truth_(temp__4222__auto___23351))
{var error__11827__auto___23352 = temp__4222__auto___23351;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__11827__auto___23352)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23340_23347,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23350,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23352], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__23343;var children = rest23344;while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23353 = output_checker23342_23349.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23353))
{var error__11827__auto___23354 = temp__4222__auto___23353;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__11827__auto___23354)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23339_23346,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23354], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var dropdown = function (G__23343,var_args){
var rest23344 = null;if (arguments.length > 1) {
  rest23344 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown__delegate.call(this,G__23343,rest23344);};
dropdown.cljs$lang$maxFixedArity = 1;
dropdown.cljs$lang$applyTo = (function (arglist__23355){
var G__23343 = cljs.core.first(arglist__23355);
var rest23344 = cljs.core.rest(arglist__23355);
return dropdown__delegate(G__23343,rest23344);
});
dropdown.cljs$core$IFn$_invoke$arity$variadic = dropdown__delegate;
return dropdown;
})()
;})(ufv___23345,output_schema23339_23346,input_schema23340_23347,input_checker23341_23348,output_checker23342_23349))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema23339_23346,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23340_23347], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__13595__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));(descriptor__13595__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);
return descriptor__13595__auto__;
})();
/**
* Generates a split button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.split_STAR_ = (function() { 
var split_STAR___delegate = function (data__13624__auto__,owner23356,p__23358){var vec__23377 = p__23358;var opts__13625__auto__ = cljs.core.nth.call(null,vec__23377,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema23380 = schema.core.Any;var input_schema23381 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map23378","map23378",1994818572,null))], null);var input_checker23382 = schema.core.checker.call(null,input_schema23381);var output_checker23383 = schema.core.checker.call(null,output_schema23380);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__){
return (function fnk23379(G__23384){var validate__11825__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23384], null);var temp__4222__auto___23396 = input_checker23382.call(null,args__11826__auto___23395);if(cljs.core.truth_(temp__4222__auto___23396))
{var error__11827__auto___23397 = temp__4222__auto___23396;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk23379","fnk23379",1601144345,null),cljs.core.pr_str.call(null,error__11827__auto___23397)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23381,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23395,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23397], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var map23378 = G__23384;while(true){
if(cljs.core.map_QMARK_.call(null,map23378))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map23378)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map23378,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map23378,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t23390 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t23390 = (function (split_STAR_,owner,input_schema23381,data__13624__auto__,output_checker23383,owner23356,output_schema23380,map23378,opts__13625__auto__,vec__23377,input_checker23382,state,fnk23379,G__23384,validate__11825__auto__,ufv__,p__23358,meta23391){
this.split_STAR_ = split_STAR_;
this.owner = owner;
this.input_schema23381 = input_schema23381;
this.data__13624__auto__ = data__13624__auto__;
this.output_checker23383 = output_checker23383;
this.owner23356 = owner23356;
this.output_schema23380 = output_schema23380;
this.map23378 = map23378;
this.opts__13625__auto__ = opts__13625__auto__;
this.vec__23377 = vec__23377;
this.input_checker23382 = input_checker23382;
this.state = state;
this.fnk23379 = fnk23379;
this.G__23384 = G__23384;
this.validate__11825__auto__ = validate__11825__auto__;
this.ufv__ = ufv__;
this.p__23358 = p__23358;
this.meta23391 = meta23391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t23390.cljs$lang$type = true;
om_bootstrap.button.t23390.cljs$lang$ctorStr = "om-bootstrap.button/t23390";
om_bootstrap.button.t23390.cljs$lang$ctorPrWriter = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"om-bootstrap.button/t23390");
});})(state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__))
;
om_bootstrap.button.t23390.prototype.om$core$IRender$ = true;
om_bootstrap.button.t23390.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__23393 = om.core.get_props.call(null,self__.owner);var map__23393__$1 = ((cljs.core.seq_QMARK_.call(null,map__23393))?cljs.core.apply.call(null,cljs.core.hash_map,map__23393):map__23393);var children = cljs.core.get.call(null,map__23393__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__23393__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__23394 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));var bs = cljs.core.nth.call(null,vec__23394,(0),null);var props = cljs.core.nth.call(null,vec__23394,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__23393,map__23393__$1,children,opts,vec__23394,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__){
return (function (e){if(cljs.core.truth_(open_QMARK_))
{set_dropdown.call(null,false);
} else
{}
var temp__4222__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4222__auto__))
{var f = temp__4222__auto__;return f.call(null,e);
} else
{return null;
}
});})(open_QMARK_,map__23393,map__23393__$1,children,opts,vec__23394,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__23393,map__23393__$1,children,opts,vec__23394,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__23393,map__23393__$1,children,opts,vec__23394,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__23393,map__23393__$1,children,opts,vec__23394,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__){
return (function (k){var temp__4222__auto___23398 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4222__auto___23398))
{var f_23399 = temp__4222__auto___23398;f_23399.call(null,k);
} else
{}
return set_dropdown.call(null,false);
});})(open_QMARK_,map__23393,map__23393__$1,children,opts,vec__23394,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__))
], null),children);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__))
;
om_bootstrap.button.t23390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__){
return (function (_23392){var self__ = this;
var _23392__$1 = this;return self__.meta23391;
});})(state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__))
;
om_bootstrap.button.t23390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__){
return (function (_23392,meta23391__$1){var self__ = this;
var _23392__$1 = this;return (new om_bootstrap.button.t23390(self__.split_STAR_,self__.owner,self__.input_schema23381,self__.data__13624__auto__,self__.output_checker23383,self__.owner23356,self__.output_schema23380,self__.map23378,self__.opts__13625__auto__,self__.vec__23377,self__.input_checker23382,self__.state,self__.fnk23379,self__.G__23384,self__.validate__11825__auto__,self__.ufv__,self__.p__23358,meta23391__$1));
});})(state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__))
;
om_bootstrap.button.__GT_t23390 = ((function (state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__){
return (function __GT_t23390(split_STAR___$1,owner__$1,input_schema23381__$1,data__13624__auto____$1,output_checker23383__$1,owner23356__$1,output_schema23380__$1,map23378__$1,opts__13625__auto____$1,vec__23377__$1,input_checker23382__$1,state__$1,fnk23379__$1,G__23384__$1,validate__11825__auto____$1,ufv____$1,p__23358__$1,meta23391){return (new om_bootstrap.button.t23390(split_STAR___$1,owner__$1,input_schema23381__$1,data__13624__auto____$1,output_checker23383__$1,owner23356__$1,output_schema23380__$1,map23378__$1,opts__13625__auto____$1,vec__23377__$1,input_checker23382__$1,state__$1,fnk23379__$1,G__23384__$1,validate__11825__auto____$1,ufv____$1,p__23358__$1,meta23391));
});})(state,owner,validate__11825__auto__,ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__))
;
}
return (new om_bootstrap.button.t23390(split_STAR_,owner,input_schema23381,data__13624__auto__,output_checker23383,owner23356,output_schema23380,map23378,opts__13625__auto__,vec__23377,input_checker23382,state,fnk23379,G__23384,validate__11825__auto__,ufv__,p__23358,null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23400 = output_checker23383.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23400))
{var error__11827__auto___23401 = temp__4222__auto___23400;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk23379","fnk23379",1601144345,null),cljs.core.pr_str.call(null,error__11827__auto___23401)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23380,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23401], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv__,output_schema23380,input_schema23381,input_checker23382,output_checker23383,vec__23377,opts__13625__auto__))
,schema.core.make_fn_schema.call(null,output_schema23380,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23381], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner23356),new cljs.core.Keyword(null,"opts","opts",155075701),opts__13625__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner23356,new cljs.core.Keyword(null,"data","data",-232669377),data__13624__auto__], null));
};
var split_STAR_ = function (data__13624__auto__,owner23356,var_args){
var p__23358 = null;if (arguments.length > 2) {
  p__23358 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return split_STAR___delegate.call(this,data__13624__auto__,owner23356,p__23358);};
split_STAR_.cljs$lang$maxFixedArity = 2;
split_STAR_.cljs$lang$applyTo = (function (arglist__23402){
var data__13624__auto__ = cljs.core.first(arglist__23402);
arglist__23402 = cljs.core.next(arglist__23402);
var owner23356 = cljs.core.first(arglist__23402);
var p__23358 = cljs.core.rest(arglist__23402);
return split_STAR___delegate(data__13624__auto__,owner23356,p__23358);
});
split_STAR_.cljs$core$IFn$_invoke$arity$variadic = split_STAR___delegate;
return split_STAR_;
})()
;
om_bootstrap.button.__GT_split_STAR_ = (function() {
var __GT_split_STAR_ = null;
var __GT_split_STAR___1 = (function (cursor__13593__auto__){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__13593__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});
var __GT_split_STAR___2 = (function (cursor__13593__auto__,m23357){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__13593__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m23357));
});
__GT_split_STAR_ = function(cursor__13593__auto__,m23357){
switch(arguments.length){
case 1:
return __GT_split_STAR___1.call(this,cursor__13593__auto__);
case 2:
return __GT_split_STAR___2.call(this,cursor__13593__auto__,m23357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_split_STAR___1;
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_split_STAR___2;
return __GT_split_STAR_;
})()
;
var ufv___23409 = schema.utils.use_fn_validation;var output_schema23403_23410 = schema.core.Any;var input_schema23404_23411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker23405_23412 = schema.core.checker.call(null,input_schema23404_23411);var output_checker23406_23413 = schema.core.checker.call(null,output_schema23403_23410);/**
* Inputs: [opts :- SplitButton & children]
* @param {...*} var_args
*/
om_bootstrap.button.split = ((function (ufv___23409,output_schema23403_23410,input_schema23404_23411,input_checker23405_23412,output_checker23406_23413){
return (function() { 
var split__delegate = function (G__23407,rest23408){var validate__11825__auto__ = ufv___23409.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23414 = cljs.core.list_STAR_.call(null,G__23407,rest23408);var temp__4222__auto___23415 = input_checker23405_23412.call(null,args__11826__auto___23414);if(cljs.core.truth_(temp__4222__auto___23415))
{var error__11827__auto___23416 = temp__4222__auto___23415;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__11827__auto___23416)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23404_23411,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23414,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23416], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__23407;var children = rest23408;while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23417 = output_checker23406_23413.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23417))
{var error__11827__auto___23418 = temp__4222__auto___23417;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__11827__auto___23418)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23403_23410,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23418], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var split = function (G__23407,var_args){
var rest23408 = null;if (arguments.length > 1) {
  rest23408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return split__delegate.call(this,G__23407,rest23408);};
split.cljs$lang$maxFixedArity = 1;
split.cljs$lang$applyTo = (function (arglist__23419){
var G__23407 = cljs.core.first(arglist__23419);
var rest23408 = cljs.core.rest(arglist__23419);
return split__delegate(G__23407,rest23408);
});
split.cljs$core$IFn$_invoke$arity$variadic = split__delegate;
return split;
})()
;})(ufv___23409,output_schema23403_23410,input_schema23404_23411,input_checker23405_23412,output_checker23406_23413))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema23403_23410,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23404_23411], null)));
