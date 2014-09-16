// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_bootstrap.util');
goog.require('om_bootstrap.util');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.types');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fluid?","fluid?",-742121890),schema.core.Bool], null));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,om_bootstrap.grid.col_keys,cljs.core.repeat.call(null,schema.core.Int)));
var ufv___19182 = schema.utils.use_fn_validation;var output_schema19174_19183 = om_bootstrap.types.Component;var input_schema19175_19184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19176_19185 = schema.core.checker.call(null,input_schema19175_19184);var output_checker19177_19186 = schema.core.checker.call(null,output_schema19174_19183);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___19182,output_schema19174_19183,input_schema19175_19184,input_checker19176_19185,output_checker19177_19186){
return (function() { 
var grid__delegate = function (G__19178,rest19179){var validate__11825__auto__ = ufv___19182.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19187 = cljs.core.list_STAR_.call(null,G__19178,rest19179);var temp__4222__auto___19188 = input_checker19176_19185.call(null,args__11826__auto___19187);if(cljs.core.truth_(temp__4222__auto___19188))
{var error__11827__auto___19189 = temp__4222__auto___19188;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__11827__auto___19189)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19175_19184,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19187,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19189], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19178;var children = rest19179;while(true){
var vec__19181 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.call(null,vec__19181,(0),null);var props = cljs.core.nth.call(null,vec__19181,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19190 = output_checker19177_19186.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19190))
{var error__11827__auto___19191 = temp__4222__auto___19190;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__11827__auto___19191)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19174_19183,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19191], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var grid = function (G__19178,var_args){
var rest19179 = null;if (arguments.length > 1) {
  rest19179 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__19178,rest19179);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__19192){
var G__19178 = cljs.core.first(arglist__19192);
var rest19179 = cljs.core.rest(arglist__19192);
return grid__delegate(G__19178,rest19179);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___19182,output_schema19174_19183,input_schema19175_19184,input_checker19176_19185,output_checker19177_19186))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema19174_19183,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19175_19184], null)));
var ufv___19199 = schema.utils.use_fn_validation;var output_schema19193_19200 = om_bootstrap.types.Component;var input_schema19194_19201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19195_19202 = schema.core.checker.call(null,input_schema19194_19201);var output_checker19196_19203 = schema.core.checker.call(null,output_schema19193_19200);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___19199,output_schema19193_19200,input_schema19194_19201,input_checker19195_19202,output_checker19196_19203){
return (function() { 
var row__delegate = function (G__19197,rest19198){var validate__11825__auto__ = ufv___19199.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19204 = cljs.core.list_STAR_.call(null,G__19197,rest19198);var temp__4222__auto___19205 = input_checker19195_19202.call(null,args__11826__auto___19204);if(cljs.core.truth_(temp__4222__auto___19205))
{var error__11827__auto___19206 = temp__4222__auto___19205;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__11827__auto___19206)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19194_19201,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19204,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19206], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19197;var children = rest19198;while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19207 = output_checker19196_19203.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19207))
{var error__11827__auto___19208 = temp__4222__auto___19207;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__11827__auto___19208)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19193_19200,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19208], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var row = function (G__19197,var_args){
var rest19198 = null;if (arguments.length > 1) {
  rest19198 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__19197,rest19198);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__19209){
var G__19197 = cljs.core.first(arglist__19209);
var rest19198 = cljs.core.rest(arglist__19209);
return row__delegate(G__19197,rest19198);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___19199,output_schema19193_19200,input_schema19194_19201,input_checker19195_19202,output_checker19196_19203))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema19193_19200,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19194_19201], null)));
var ufv___19222 = schema.utils.use_fn_validation;var output_schema19210_19223 = om_bootstrap.types.Component;var input_schema19211_19224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker19212_19225 = schema.core.checker.call(null,input_schema19211_19224);var output_checker19213_19226 = schema.core.checker.call(null,output_schema19210_19223);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___19222,output_schema19210_19223,input_schema19211_19224,input_checker19212_19225,output_checker19213_19226){
return (function() { 
var col__delegate = function (G__19214,rest19215){var validate__11825__auto__ = ufv___19222.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19227 = cljs.core.list_STAR_.call(null,G__19214,rest19215);var temp__4222__auto___19228 = input_checker19212_19225.call(null,args__11826__auto___19227);if(cljs.core.truth_(temp__4222__auto___19228))
{var error__11827__auto___19229 = temp__4222__auto___19228;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__11827__auto___19229)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19211_19224,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19227,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19229], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__19214;var children = rest19215;while(true){
var vec__19219 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.call(null,vec__19219,(0),null);var props = cljs.core.nth.call(null,vec__19219,(1),null);var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__19219,bs,props,validate__11825__auto__,ufv___19222,output_schema19210_19223,input_schema19211_19224,input_checker19212_19225,output_checker19213_19226){
return (function (p__19220){var vec__19221 = p__19220;var k = cljs.core.nth.call(null,vec__19221,(0),null);var v = cljs.core.nth.call(null,vec__19221,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__19219,bs,props,validate__11825__auto__,ufv___19222,output_schema19210_19223,input_schema19211_19224,input_checker19212_19225,output_checker19213_19226))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19230 = output_checker19213_19226.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19230))
{var error__11827__auto___19231 = temp__4222__auto___19230;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__11827__auto___19231)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19210_19223,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19231], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var col = function (G__19214,var_args){
var rest19215 = null;if (arguments.length > 1) {
  rest19215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__19214,rest19215);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__19232){
var G__19214 = cljs.core.first(arglist__19232);
var rest19215 = cljs.core.rest(arglist__19232);
return col__delegate(G__19214,rest19215);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___19222,output_schema19210_19223,input_schema19211_19224,input_checker19212_19225,output_checker19213_19226))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema19210_19223,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19211_19224], null)));
