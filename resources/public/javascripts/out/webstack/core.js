// Compiled by ClojureScript 0.0-2322
goog.provide('webstack.core');
goog.require('cljs.core');
goog.require('om_bootstrap.input');
goog.require('om_bootstrap.panel');
goog.require('om.dom');
goog.require('weasel.repl');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('om_tools.core');
goog.require('om_bootstrap.panel');
goog.require('om.dom');
goog.require('om_bootstrap.nav');
goog.require('om_bootstrap.nav');
goog.require('om_bootstrap.mixins');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.grid');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.input');
goog.require('weasel.repl');
goog.require('om_tools.dom');
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
webstack.core.sidebar = (function sidebar(){return cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-3"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"role": "complementary", "className": "bs-docs-sidebar hidden-print"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bs-docs-sidenav"], null),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#buttons"], null),"Buttons"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#panels"], null),"Panels"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#modals"], null),"Modals"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#tooltips"], null),"Tooltips"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#popovers"], null),"Popovers"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#progress"], null),"Progress bars"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#navs"], null),"Navs"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#navbars"], null),"Navbars"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#tabs"], null),"Toggleable Tabs"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#pager"], null),"Pager"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#alerts"], null),"Alerts"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#carousels"], null),"Carousels"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#grids"], null),"Grids"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#listgroup"], null),"List group"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#labels"], null),"Labels"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#badges"], null),"Badges"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#jumbotron"], null),"Jumbotron"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#page-header"], null),"Page header"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#wells"], null),"Wells"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#glyphicons"], null),"Glyphicons"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#tables"], null),"Tables"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#input"], null),"Input")),React.DOM.a({"href": "#top", "className": "back-to-top"},"Back to top")],null))))],null))));
});
/**
* This is the top level component that renders the entire example
* docs page.
* @param {...*} var_args
*/
webstack.core.app = (function() { 
var app__delegate = function (data__13624__auto__,owner19114,p__19116){var vec__19131 = p__19116;var opts__13625__auto__ = cljs.core.nth.call(null,vec__19131,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema19134 = schema.core.Any;var input_schema19135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"_","_",1453416199),schema.core.Any], true, false),new cljs.core.Symbol(null,"map19132","map19132",976969891,null))], null);var input_checker19136 = schema.core.checker.call(null,input_schema19135);var output_checker19137 = schema.core.checker.call(null,output_schema19134);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__){
return (function fnk19133(G__19138){var validate__11825__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___19145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19138], null);var temp__4222__auto___19146 = input_checker19136.call(null,args__11826__auto___19145);if(cljs.core.truth_(temp__4222__auto___19146))
{var error__11827__auto___19147 = temp__4222__auto___19146;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19133","fnk19133",326638077,null),cljs.core.pr_str.call(null,error__11827__auto___19147)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19135,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___19145,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19147], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var map19132 = G__19138;while(true){
if(cljs.core.map_QMARK_.call(null,map19132))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map19132)));
}
var _ = plumbing.fnk.schema.safe_get.call(null,map19132,new cljs.core.Keyword(null,"_","_",1453416199),cljs.core.PersistentVector.EMPTY);if(typeof webstack.core.t19142 !== 'undefined')
{} else
{
/**
* @constructor
*/
webstack.core.t19142 = (function (map19132,output_schema19134,output_checker19137,G__19138,input_checker19136,data__13624__auto__,_,p__19116,opts__13625__auto__,owner19114,vec__19131,validate__11825__auto__,app,fnk19133,ufv__,input_schema19135,meta19143){
this.map19132 = map19132;
this.output_schema19134 = output_schema19134;
this.output_checker19137 = output_checker19137;
this.G__19138 = G__19138;
this.input_checker19136 = input_checker19136;
this.data__13624__auto__ = data__13624__auto__;
this._ = _;
this.p__19116 = p__19116;
this.opts__13625__auto__ = opts__13625__auto__;
this.owner19114 = owner19114;
this.vec__19131 = vec__19131;
this.validate__11825__auto__ = validate__11825__auto__;
this.app = app;
this.fnk19133 = fnk19133;
this.ufv__ = ufv__;
this.input_schema19135 = input_schema19135;
this.meta19143 = meta19143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
webstack.core.t19142.cljs$lang$type = true;
webstack.core.t19142.cljs$lang$ctorStr = "webstack.core/t19142";
webstack.core.t19142.cljs$lang$ctorPrWriter = ((function (_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"webstack.core/t19142");
});})(_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__))
;
webstack.core.t19142.prototype.om$core$IRender$ = true;
webstack.core.t19142.prototype.om$core$IRender$render$arity$1 = ((function (_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__){
return (function (___$2){var self__ = this;
var ___$3 = this;return webstack.core.sidebar.call(null);
});})(_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__))
;
webstack.core.t19142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__){
return (function (_19144){var self__ = this;
var _19144__$1 = this;return self__.meta19143;
});})(_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__))
;
webstack.core.t19142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__){
return (function (_19144,meta19143__$1){var self__ = this;
var _19144__$1 = this;return (new webstack.core.t19142(self__.map19132,self__.output_schema19134,self__.output_checker19137,self__.G__19138,self__.input_checker19136,self__.data__13624__auto__,self__._,self__.p__19116,self__.opts__13625__auto__,self__.owner19114,self__.vec__19131,self__.validate__11825__auto__,self__.app,self__.fnk19133,self__.ufv__,self__.input_schema19135,meta19143__$1));
});})(_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__))
;
webstack.core.__GT_t19142 = ((function (_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__){
return (function __GT_t19142(map19132__$1,output_schema19134__$1,output_checker19137__$1,G__19138__$1,input_checker19136__$1,data__13624__auto____$1,___$1,p__19116__$1,opts__13625__auto____$1,owner19114__$1,vec__19131__$1,validate__11825__auto____$1,app__$1,fnk19133__$1,ufv____$1,input_schema19135__$1,meta19143){return (new webstack.core.t19142(map19132__$1,output_schema19134__$1,output_checker19137__$1,G__19138__$1,input_checker19136__$1,data__13624__auto____$1,___$1,p__19116__$1,opts__13625__auto____$1,owner19114__$1,vec__19131__$1,validate__11825__auto____$1,app__$1,fnk19133__$1,ufv____$1,input_schema19135__$1,meta19143));
});})(_,validate__11825__auto__,ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__))
;
}
return (new webstack.core.t19142(map19132,output_schema19134,output_checker19137,G__19138,input_checker19136,data__13624__auto__,_,p__19116,opts__13625__auto__,owner19114,vec__19131,validate__11825__auto__,app,fnk19133,ufv__,input_schema19135,null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___19148 = output_checker19137.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___19148))
{var error__11827__auto___19149 = temp__4222__auto___19148;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk19133","fnk19133",326638077,null),cljs.core.pr_str.call(null,error__11827__auto___19149)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19134,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___19149], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv__,output_schema19134,input_schema19135,input_checker19136,output_checker19137,vec__19131,opts__13625__auto__))
,schema.core.make_fn_schema.call(null,output_schema19134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19135], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__13625__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner19114,new cljs.core.Keyword(null,"data","data",-232669377),data__13624__auto__], null));
};
var app = function (data__13624__auto__,owner19114,var_args){
var p__19116 = null;if (arguments.length > 2) {
  p__19116 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app__delegate.call(this,data__13624__auto__,owner19114,p__19116);};
app.cljs$lang$maxFixedArity = 2;
app.cljs$lang$applyTo = (function (arglist__19150){
var data__13624__auto__ = cljs.core.first(arglist__19150);
arglist__19150 = cljs.core.next(arglist__19150);
var owner19114 = cljs.core.first(arglist__19150);
var p__19116 = cljs.core.rest(arglist__19150);
return app__delegate(data__13624__auto__,owner19114,p__19116);
});
app.cljs$core$IFn$_invoke$arity$variadic = app__delegate;
return app;
})()
;
webstack.core.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__13593__auto__){return om.core.build.call(null,webstack.core.app,cursor__13593__auto__);
});
var __GT_app__2 = (function (cursor__13593__auto__,m19115){return om.core.build.call(null,webstack.core.app,cursor__13593__auto__,m19115);
});
__GT_app = function(cursor__13593__auto__,m19115){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__13593__auto__);
case 2:
return __GT_app__2.call(this,cursor__13593__auto__,m19115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app.cljs$core$IFn$_invoke$arity$1 = __GT_app__1;
__GT_app.cljs$core$IFn$_invoke$arity$2 = __GT_app__2;
return __GT_app;
})()
;
webstack.core.widget = (function widget(data){return React.DOM.div({"className": "a"},"ALEX");
});
alert("123");
om.core.root.call(null,webstack.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
