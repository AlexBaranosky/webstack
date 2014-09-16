// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.nav');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.nav.NavItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str], true, false));
/**
* Generates a nav item for use inside of a nav element.
* @param {...*} var_args
*/
om_bootstrap.nav.nav_item_STAR_ = (function() { 
var nav_item_STAR___delegate = function (data__13624__auto__,owner20250,p__20252){var vec__20271 = p__20252;var opts__13625__auto__ = cljs.core.nth.call(null,vec__20271,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema20274 = schema.core.Any;var input_schema20275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map20272","map20272",2076054267,null))], null);var input_checker20276 = schema.core.checker.call(null,input_schema20275);var output_checker20277 = schema.core.checker.call(null,output_schema20274);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__){
return (function fnk20273(G__20278){var validate__11825__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20278], null);var temp__4222__auto___20290 = input_checker20276.call(null,args__11826__auto___20289);if(cljs.core.truth_(temp__4222__auto___20290))
{var error__11827__auto___20291 = temp__4222__auto___20290;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20273","fnk20273",-561649045,null),cljs.core.pr_str.call(null,error__11827__auto___20291)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20275,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20289,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20291], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var map20272 = G__20278;while(true){
if(cljs.core.map_QMARK_.call(null,map20272))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20272)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map20272,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t20284 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t20284 = (function (owner,p__20252,data__13624__auto__,input_checker20276,fnk20273,opts__13625__auto__,vec__20271,output_schema20274,output_checker20277,owner20250,input_schema20275,map20272,validate__11825__auto__,nav_item_STAR_,G__20278,ufv__,meta20285){
this.owner = owner;
this.p__20252 = p__20252;
this.data__13624__auto__ = data__13624__auto__;
this.input_checker20276 = input_checker20276;
this.fnk20273 = fnk20273;
this.opts__13625__auto__ = opts__13625__auto__;
this.vec__20271 = vec__20271;
this.output_schema20274 = output_schema20274;
this.output_checker20277 = output_checker20277;
this.owner20250 = owner20250;
this.input_schema20275 = input_schema20275;
this.map20272 = map20272;
this.validate__11825__auto__ = validate__11825__auto__;
this.nav_item_STAR_ = nav_item_STAR_;
this.G__20278 = G__20278;
this.ufv__ = ufv__;
this.meta20285 = meta20285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t20284.cljs$lang$type = true;
om_bootstrap.nav.t20284.cljs$lang$ctorStr = "om-bootstrap.nav/t20284";
om_bootstrap.nav.t20284.cljs$lang$ctorPrWriter = ((function (owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"om-bootstrap.nav/t20284");
});})(owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__))
;
om_bootstrap.nav.t20284.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t20284.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__20287 = om.core.get_props.call(null,self__.owner);var map__20287__$1 = ((cljs.core.seq_QMARK_.call(null,map__20287))?cljs.core.apply.call(null,cljs.core.hash_map,map__20287):map__20287);var children = cljs.core.get.call(null,map__20287__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__20287__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__20288 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__20288,(0),null);var props = cljs.core.nth.call(null,vec__20288,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (map__20287,map__20287__$1,children,opts,vec__20288,bs,props,classes,___$1,owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__){
return (function (e){var temp__4222__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4222__auto__))
{var f = temp__4222__auto__;e.preventDefault();
if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)))
{return null;
} else
{return f.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs));
}
} else
{return null;
}
});})(map__20287,map__20287__$1,children,opts,vec__20288,bs,props,classes,___$1,owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__))
;return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__))
;
om_bootstrap.nav.t20284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__){
return (function (_20286){var self__ = this;
var _20286__$1 = this;return self__.meta20285;
});})(owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__))
;
om_bootstrap.nav.t20284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__){
return (function (_20286,meta20285__$1){var self__ = this;
var _20286__$1 = this;return (new om_bootstrap.nav.t20284(self__.owner,self__.p__20252,self__.data__13624__auto__,self__.input_checker20276,self__.fnk20273,self__.opts__13625__auto__,self__.vec__20271,self__.output_schema20274,self__.output_checker20277,self__.owner20250,self__.input_schema20275,self__.map20272,self__.validate__11825__auto__,self__.nav_item_STAR_,self__.G__20278,self__.ufv__,meta20285__$1));
});})(owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__))
;
om_bootstrap.nav.__GT_t20284 = ((function (owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__){
return (function __GT_t20284(owner__$1,p__20252__$1,data__13624__auto____$1,input_checker20276__$1,fnk20273__$1,opts__13625__auto____$1,vec__20271__$1,output_schema20274__$1,output_checker20277__$1,owner20250__$1,input_schema20275__$1,map20272__$1,validate__11825__auto____$1,nav_item_STAR___$1,G__20278__$1,ufv____$1,meta20285){return (new om_bootstrap.nav.t20284(owner__$1,p__20252__$1,data__13624__auto____$1,input_checker20276__$1,fnk20273__$1,opts__13625__auto____$1,vec__20271__$1,output_schema20274__$1,output_checker20277__$1,owner20250__$1,input_schema20275__$1,map20272__$1,validate__11825__auto____$1,nav_item_STAR___$1,G__20278__$1,ufv____$1,meta20285));
});})(owner,validate__11825__auto__,ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__))
;
}
return (new om_bootstrap.nav.t20284(owner,p__20252,data__13624__auto__,input_checker20276,fnk20273,opts__13625__auto__,vec__20271,output_schema20274,output_checker20277,owner20250,input_schema20275,map20272,validate__11825__auto__,nav_item_STAR_,G__20278,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20292 = output_checker20277.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20292))
{var error__11827__auto___20293 = temp__4222__auto___20292;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20273","fnk20273",-561649045,null),cljs.core.pr_str.call(null,error__11827__auto___20293)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20274,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20293], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv__,output_schema20274,input_schema20275,input_checker20276,output_checker20277,vec__20271,opts__13625__auto__))
,schema.core.make_fn_schema.call(null,output_schema20274,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20275], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__13625__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20250,new cljs.core.Keyword(null,"data","data",-232669377),data__13624__auto__], null));
};
var nav_item_STAR_ = function (data__13624__auto__,owner20250,var_args){
var p__20252 = null;if (arguments.length > 2) {
  p__20252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_item_STAR___delegate.call(this,data__13624__auto__,owner20250,p__20252);};
nav_item_STAR_.cljs$lang$maxFixedArity = 2;
nav_item_STAR_.cljs$lang$applyTo = (function (arglist__20294){
var data__13624__auto__ = cljs.core.first(arglist__20294);
arglist__20294 = cljs.core.next(arglist__20294);
var owner20250 = cljs.core.first(arglist__20294);
var p__20252 = cljs.core.rest(arglist__20294);
return nav_item_STAR___delegate(data__13624__auto__,owner20250,p__20252);
});
nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_item_STAR___delegate;
return nav_item_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_item_STAR_ = (function() {
var __GT_nav_item_STAR_ = null;
var __GT_nav_item_STAR___1 = (function (cursor__13593__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__13593__auto__);
});
var __GT_nav_item_STAR___2 = (function (cursor__13593__auto__,m20251){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__13593__auto__,m20251);
});
__GT_nav_item_STAR_ = function(cursor__13593__auto__,m20251){
switch(arguments.length){
case 1:
return __GT_nav_item_STAR___1.call(this,cursor__13593__auto__);
case 2:
return __GT_nav_item_STAR___2.call(this,cursor__13593__auto__,m20251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_item_STAR___1;
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_item_STAR___2;
return __GT_nav_item_STAR_;
})()
;
var ufv___20301 = schema.utils.use_fn_validation;var output_schema20295_20302 = om_bootstrap.types.Component;var input_schema20296_20303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker20297_20304 = schema.core.checker.call(null,input_schema20296_20303);var output_checker20298_20305 = schema.core.checker.call(null,output_schema20295_20302);/**
* Inputs: [opts :- NavItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav_item = ((function (ufv___20301,output_schema20295_20302,input_schema20296_20303,input_checker20297_20304,output_checker20298_20305){
return (function() { 
var nav_item__delegate = function (G__20299,rest20300){var validate__11825__auto__ = ufv___20301.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20306 = cljs.core.list_STAR_.call(null,G__20299,rest20300);var temp__4222__auto___20307 = input_checker20297_20304.call(null,args__11826__auto___20306);if(cljs.core.truth_(temp__4222__auto___20307))
{var error__11827__auto___20308 = temp__4222__auto___20307;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__11827__auto___20308)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20296_20303,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20306,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20308], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__20299;var children = rest20300;while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20309 = output_checker20298_20305.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20309))
{var error__11827__auto___20310 = temp__4222__auto___20309;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__11827__auto___20310)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20295_20302,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20310], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var nav_item = function (G__20299,var_args){
var rest20300 = null;if (arguments.length > 1) {
  rest20300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav_item__delegate.call(this,G__20299,rest20300);};
nav_item.cljs$lang$maxFixedArity = 1;
nav_item.cljs$lang$applyTo = (function (arglist__20311){
var G__20299 = cljs.core.first(arglist__20311);
var rest20300 = cljs.core.rest(arglist__20311);
return nav_item__delegate(G__20299,rest20300);
});
nav_item.cljs$core$IFn$_invoke$arity$variadic = nav_item__delegate;
return nav_item;
})()
;})(ufv___20301,output_schema20295_20302,input_schema20296_20303,input_checker20297_20304,output_checker20298_20305))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema20295_20302,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20296_20303], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___20318 = schema.utils.use_fn_validation;var output_schema20312_20319 = schema.core.Bool;var input_schema20313_20320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child-props","child-props",1099812184,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20314_20321 = schema.core.checker.call(null,input_schema20313_20320);var output_checker20315_20322 = schema.core.checker.call(null,output_schema20312_20319);/**
* Inputs: [child-props opts]
* Returns: s/Bool
* 
* Accepts a NavItem's child props and the current options provided to
* the Nav bar; returns true if the child component should be active,
* false otherwise.
*/
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___20318,output_schema20312_20319,input_schema20313_20320,input_checker20314_20321,output_checker20315_20322){
return (function child_active_QMARK_(G__20316,G__20317){var validate__11825__auto__ = ufv___20318.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20316,G__20317], null);var temp__4222__auto___20324 = input_checker20314_20321.call(null,args__11826__auto___20323);if(cljs.core.truth_(temp__4222__auto___20324))
{var error__11827__auto___20325 = temp__4222__auto___20324;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__11827__auto___20325)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20313_20320,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20323,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20325], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var child_props = G__20316;var opts = G__20317;while(true){
return cljs.core.boolean$.call(null,(function (){var or__8110__auto__ = new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(child_props);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (function (){var temp__4222__auto__ = new cljs.core.Keyword(null,"active-key","active-key",-2039404654).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(temp__4222__auto__))
{var ak = temp__4222__auto__;return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child_props));
} else
{return null;
}
})();if(cljs.core.truth_(or__8110__auto____$1))
{return or__8110__auto____$1;
} else
{var temp__4222__auto__ = new cljs.core.Keyword(null,"active-href","active-href",-1458344709).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(temp__4222__auto__))
{var ak = temp__4222__auto__;return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(child_props));
} else
{return null;
}
}
}
})());
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20326 = output_checker20315_20322.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20326))
{var error__11827__auto___20327 = temp__4222__auto___20326;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__11827__auto___20327)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20312_20319,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20327], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___20318,output_schema20312_20319,input_schema20313_20320,input_checker20314_20321,output_checker20315_20322))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema20312_20319,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20313_20320], null)));
var ufv___20333 = schema.utils.use_fn_validation;var output_schema20328_20334 = schema.core.Any;var input_schema20329_20335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20330_20336 = schema.core.checker.call(null,input_schema20329_20335);var output_checker20331_20337 = schema.core.checker.call(null,output_schema20328_20334);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___20333,output_schema20328_20334,input_schema20329_20335,input_checker20330_20336,output_checker20331_20337){
return (function clone_nav_item(G__20332){var validate__11825__auto__ = ufv___20333.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20332], null);var temp__4222__auto___20339 = input_checker20330_20336.call(null,args__11826__auto___20338);if(cljs.core.truth_(temp__4222__auto___20339))
{var error__11827__auto___20340 = temp__4222__auto___20339;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11827__auto___20340)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20329_20335,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20338,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20340], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__20332;while(true){
var prop_fn = ((function (validate__11825__auto__,ufv___20333,output_schema20328_20334,input_schema20329_20335,input_checker20330_20336,output_checker20331_20337){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__11825__auto__,ufv___20333,output_schema20328_20334,input_schema20329_20335,input_checker20330_20336,output_checker20331_20337))
;
return ((function (validate__11825__auto__,ufv___20333,output_schema20328_20334,input_schema20329_20335,input_checker20330_20336,output_checker20331_20337){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__11825__auto__,ufv___20333,output_schema20328_20334,input_schema20329_20335,input_checker20330_20336,output_checker20331_20337))
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20341 = output_checker20331_20337.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20341))
{var error__11827__auto___20342 = temp__4222__auto___20341;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11827__auto___20342)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20328_20334,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20342], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___20333,output_schema20328_20334,input_schema20329_20335,input_checker20330_20336,output_checker20331_20337))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema20328_20334,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20329_20335], null)));
/**
* @param {...*} var_args
*/
om_bootstrap.nav.nav_STAR_ = (function() { 
var nav_STAR___delegate = function (data__13624__auto__,owner20343,p__20345){var vec__20364 = p__20345;var opts__13625__auto__ = cljs.core.nth.call(null,vec__20364,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema20367 = schema.core.Any;var input_schema20368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map20365","map20365",1019486018,null))], null);var input_checker20369 = schema.core.checker.call(null,input_schema20368);var output_checker20370 = schema.core.checker.call(null,output_schema20367);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__){
return (function fnk20366(G__20371){var validate__11825__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20371], null);var temp__4222__auto___20383 = input_checker20369.call(null,args__11826__auto___20382);if(cljs.core.truth_(temp__4222__auto___20383))
{var error__11827__auto___20384 = temp__4222__auto___20383;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20366","fnk20366",-720358555,null),cljs.core.pr_str.call(null,error__11827__auto___20384)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20368,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20382,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20384], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var map20365 = G__20371;while(true){
if(cljs.core.map_QMARK_.call(null,map20365))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20365)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map20365,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t20377 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t20377 = (function (map20365,owner,fnk20366,data__13624__auto__,owner20343,vec__20364,nav_STAR_,input_schema20368,output_schema20367,output_checker20370,opts__13625__auto__,p__20345,input_checker20369,validate__11825__auto__,G__20371,ufv__,meta20378){
this.map20365 = map20365;
this.owner = owner;
this.fnk20366 = fnk20366;
this.data__13624__auto__ = data__13624__auto__;
this.owner20343 = owner20343;
this.vec__20364 = vec__20364;
this.nav_STAR_ = nav_STAR_;
this.input_schema20368 = input_schema20368;
this.output_schema20367 = output_schema20367;
this.output_checker20370 = output_checker20370;
this.opts__13625__auto__ = opts__13625__auto__;
this.p__20345 = p__20345;
this.input_checker20369 = input_checker20369;
this.validate__11825__auto__ = validate__11825__auto__;
this.G__20371 = G__20371;
this.ufv__ = ufv__;
this.meta20378 = meta20378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t20377.cljs$lang$type = true;
om_bootstrap.nav.t20377.cljs$lang$ctorStr = "om-bootstrap.nav/t20377";
om_bootstrap.nav.t20377.cljs$lang$ctorPrWriter = ((function (owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"om-bootstrap.nav/t20377");
});})(owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__))
;
om_bootstrap.nav.t20377.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t20377.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__20380 = om.core.get_props.call(null,self__.owner);var map__20380__$1 = ((cljs.core.seq_QMARK_.call(null,map__20380))?cljs.core.apply.call(null,cljs.core.hash_map,map__20380):map__20380);var children = cljs.core.get.call(null,map__20380__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__20380__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__20381 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));var bs = cljs.core.nth.call(null,vec__20381,(0),null);var props = cljs.core.nth.call(null,vec__20381,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);if(cljs.core.truth_((function (){var and__8098__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(and__8098__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return and__8098__auto__;
}
})()))
{return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else
{return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__))
;
om_bootstrap.nav.t20377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__){
return (function (_20379){var self__ = this;
var _20379__$1 = this;return self__.meta20378;
});})(owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__))
;
om_bootstrap.nav.t20377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__){
return (function (_20379,meta20378__$1){var self__ = this;
var _20379__$1 = this;return (new om_bootstrap.nav.t20377(self__.map20365,self__.owner,self__.fnk20366,self__.data__13624__auto__,self__.owner20343,self__.vec__20364,self__.nav_STAR_,self__.input_schema20368,self__.output_schema20367,self__.output_checker20370,self__.opts__13625__auto__,self__.p__20345,self__.input_checker20369,self__.validate__11825__auto__,self__.G__20371,self__.ufv__,meta20378__$1));
});})(owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__))
;
om_bootstrap.nav.__GT_t20377 = ((function (owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__){
return (function __GT_t20377(map20365__$1,owner__$1,fnk20366__$1,data__13624__auto____$1,owner20343__$1,vec__20364__$1,nav_STAR___$1,input_schema20368__$1,output_schema20367__$1,output_checker20370__$1,opts__13625__auto____$1,p__20345__$1,input_checker20369__$1,validate__11825__auto____$1,G__20371__$1,ufv____$1,meta20378){return (new om_bootstrap.nav.t20377(map20365__$1,owner__$1,fnk20366__$1,data__13624__auto____$1,owner20343__$1,vec__20364__$1,nav_STAR___$1,input_schema20368__$1,output_schema20367__$1,output_checker20370__$1,opts__13625__auto____$1,p__20345__$1,input_checker20369__$1,validate__11825__auto____$1,G__20371__$1,ufv____$1,meta20378));
});})(owner,validate__11825__auto__,ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__))
;
}
return (new om_bootstrap.nav.t20377(map20365,owner,fnk20366,data__13624__auto__,owner20343,vec__20364,nav_STAR_,input_schema20368,output_schema20367,output_checker20370,opts__13625__auto__,p__20345,input_checker20369,validate__11825__auto__,G__20371,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20385 = output_checker20370.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20385))
{var error__11827__auto___20386 = temp__4222__auto___20385;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20366","fnk20366",-720358555,null),cljs.core.pr_str.call(null,error__11827__auto___20386)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20367,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20386], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv__,output_schema20367,input_schema20368,input_checker20369,output_checker20370,vec__20364,opts__13625__auto__))
,schema.core.make_fn_schema.call(null,output_schema20367,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20368], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__13625__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20343,new cljs.core.Keyword(null,"data","data",-232669377),data__13624__auto__], null));
};
var nav_STAR_ = function (data__13624__auto__,owner20343,var_args){
var p__20345 = null;if (arguments.length > 2) {
  p__20345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_STAR___delegate.call(this,data__13624__auto__,owner20343,p__20345);};
nav_STAR_.cljs$lang$maxFixedArity = 2;
nav_STAR_.cljs$lang$applyTo = (function (arglist__20387){
var data__13624__auto__ = cljs.core.first(arglist__20387);
arglist__20387 = cljs.core.next(arglist__20387);
var owner20343 = cljs.core.first(arglist__20387);
var p__20345 = cljs.core.rest(arglist__20387);
return nav_STAR___delegate(data__13624__auto__,owner20343,p__20345);
});
nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_STAR___delegate;
return nav_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_STAR_ = (function() {
var __GT_nav_STAR_ = null;
var __GT_nav_STAR___1 = (function (cursor__13593__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__13593__auto__);
});
var __GT_nav_STAR___2 = (function (cursor__13593__auto__,m20344){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__13593__auto__,m20344);
});
__GT_nav_STAR_ = function(cursor__13593__auto__,m20344){
switch(arguments.length){
case 1:
return __GT_nav_STAR___1.call(this,cursor__13593__auto__);
case 2:
return __GT_nav_STAR___2.call(this,cursor__13593__auto__,m20344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_STAR___1;
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_STAR___2;
return __GT_nav_STAR_;
})()
;
var ufv___20394 = schema.utils.use_fn_validation;var output_schema20388_20395 = om_bootstrap.types.Component;var input_schema20389_20396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker20390_20397 = schema.core.checker.call(null,input_schema20389_20396);var output_checker20391_20398 = schema.core.checker.call(null,output_schema20388_20395);/**
* Inputs: [opts :- Nav & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav = ((function (ufv___20394,output_schema20388_20395,input_schema20389_20396,input_checker20390_20397,output_checker20391_20398){
return (function() { 
var nav__delegate = function (G__20392,rest20393){var validate__11825__auto__ = ufv___20394.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20399 = cljs.core.list_STAR_.call(null,G__20392,rest20393);var temp__4222__auto___20400 = input_checker20390_20397.call(null,args__11826__auto___20399);if(cljs.core.truth_(temp__4222__auto___20400))
{var error__11827__auto___20401 = temp__4222__auto___20400;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__11827__auto___20401)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20389_20396,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20399,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20401], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__20392;var children = rest20393;while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20402 = output_checker20391_20398.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20402))
{var error__11827__auto___20403 = temp__4222__auto___20402;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__11827__auto___20403)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20388_20395,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20403], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var nav = function (G__20392,var_args){
var rest20393 = null;if (arguments.length > 1) {
  rest20393 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav__delegate.call(this,G__20392,rest20393);};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = (function (arglist__20404){
var G__20392 = cljs.core.first(arglist__20404);
var rest20393 = cljs.core.rest(arglist__20404);
return nav__delegate(G__20392,rest20393);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;})(ufv___20394,output_schema20388_20395,input_schema20389_20396,input_checker20390_20397,output_checker20391_20398))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema20388_20395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20389_20396], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function render_toggle_button(owner,bs){var handle_toggle = (function (){var temp__4222__auto___20405 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4222__auto___20405))
{var f_20406 = temp__4222__auto___20405;om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);
f_20406.call(null);
om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),false);
} else
{}
return om.core.update_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),cljs.core.not);
});var tb = om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_toggle], null));return cljs.core.apply.call(null,React.DOM.button,{"onClick": om_tools.dom.format_opts.call(null,handle_toggle), "type": "button", "className": "navbar-toggle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__8110__auto__ = tb;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"key": (0), "className": "sr-only"},"Toggle navigation"),React.DOM.span({"key": (1), "className": "icon-bar"}),React.DOM.span({"key": (2), "className": "icon-bar"}),React.DOM.span({"key": (3), "className": "icon-bar"})], null);
}
})()],null))));
});
om_bootstrap.nav.render_header = (function render_header(owner,bs){return cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.util.strict_valid_component_QMARK_.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)))?om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null)):cljs.core.apply.call(null,React.DOM.span,{"className": "navbar-brand"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)],null))))),(cljs.core.truth_((function (){var or__8110__auto__ = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?om_bootstrap.nav.render_toggle_button.call(null,owner,bs):null)],null))));
});
var ufv___20412 = schema.utils.use_fn_validation;var output_schema20407_20413 = schema.core.Any;var input_schema20408_20414 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20409_20415 = schema.core.checker.call(null,input_schema20408_20414);var output_checker20410_20416 = schema.core.checker.call(null,output_schema20407_20413);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___20412,output_schema20407_20413,input_schema20408_20414,input_checker20409_20415,output_checker20410_20416){
return (function clone_nav_item(G__20411){var validate__11825__auto__ = ufv___20412.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20411], null);var temp__4222__auto___20418 = input_checker20409_20415.call(null,args__11826__auto___20417);if(cljs.core.truth_(temp__4222__auto___20418))
{var error__11827__auto___20419 = temp__4222__auto___20418;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11827__auto___20419)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20408_20414,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20417,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20419], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__20411;while(true){
var prop_fn = ((function (validate__11825__auto__,ufv___20412,output_schema20407_20413,input_schema20408_20414,input_checker20409_20415,output_checker20410_20416){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__11825__auto__,ufv___20412,output_schema20407_20413,input_schema20408_20414,input_checker20409_20415,output_checker20410_20416))
;
return ((function (validate__11825__auto__,ufv___20412,output_schema20407_20413,input_schema20408_20414,input_checker20409_20415,output_checker20410_20416){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__11825__auto__,ufv___20412,output_schema20407_20413,input_schema20408_20414,input_checker20409_20415,output_checker20410_20416))
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20420 = output_checker20410_20416.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20420))
{var error__11827__auto___20421 = temp__4222__auto___20420;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__11827__auto___20421)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20407_20413,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20421], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___20412,output_schema20407_20413,input_schema20408_20414,input_checker20409_20415,output_checker20410_20416))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema20407_20413,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20408_20414], null)));
om_bootstrap.nav.render_navbar_child = (function render_navbar_child(owner,child,bs){var f = (function (props){var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props);var collapsible_QMARK_ = (cljs.core.truth_(new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs)):null);var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),collapsible_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),(function (){var and__8098__auto__ = collapsible_QMARK_;if(cljs.core.truth_(and__8098__auto__))
{var or__8110__auto__ = new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582));
}
} else
{return and__8098__auto__;
}
})()], null);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});return om_bootstrap.util.clone_with_props.call(null,child,f);
});
/**
* @param {...*} var_args
*/
om_bootstrap.nav.navbar_STAR_ = (function() { 
var navbar_STAR___delegate = function (data__13624__auto__,owner20423,p__20425){var vec__20443 = p__20425;var opts__13625__auto__ = cljs.core.nth.call(null,vec__20443,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema20447 = schema.core.Any;var input_schema20448 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map20444","map20444",-1729145975,null))], null);var input_checker20449 = schema.core.checker.call(null,input_schema20448);var output_checker20450 = schema.core.checker.call(null,output_schema20447);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function fnk20446(G__20451){var validate__11825__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20451], null);var temp__4222__auto___20461 = input_checker20449.call(null,args__11826__auto___20460);if(cljs.core.truth_(temp__4222__auto___20461))
{var error__11827__auto___20462 = temp__4222__auto___20461;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20446","fnk20446",1504149875,null),cljs.core.pr_str.call(null,error__11827__auto___20462)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20448,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20460,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20462], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var map20444 = G__20451;while(true){
if(cljs.core.map_QMARK_.call(null,map20444))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map20444)));
}
var map20445 = plumbing.fnk.schema.safe_get.call(null,map20444,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var opts = plumbing.fnk.schema.safe_get.call(null,map20445,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get.call(null,map20445,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map20444,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t20456 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t20456 = (function (owner20423,navbar_STAR_,owner,input_schema20448,data__13624__auto__,output_schema20447,children,map20444,G__20451,map20445,opts__13625__auto__,output_checker20450,fnk20446,input_checker20449,p__20425,validate__11825__auto__,opts,ufv__,vec__20443,meta20457){
this.owner20423 = owner20423;
this.navbar_STAR_ = navbar_STAR_;
this.owner = owner;
this.input_schema20448 = input_schema20448;
this.data__13624__auto__ = data__13624__auto__;
this.output_schema20447 = output_schema20447;
this.children = children;
this.map20444 = map20444;
this.G__20451 = G__20451;
this.map20445 = map20445;
this.opts__13625__auto__ = opts__13625__auto__;
this.output_checker20450 = output_checker20450;
this.fnk20446 = fnk20446;
this.input_checker20449 = input_checker20449;
this.p__20425 = p__20425;
this.validate__11825__auto__ = validate__11825__auto__;
this.opts = opts;
this.ufv__ = ufv__;
this.vec__20443 = vec__20443;
this.meta20457 = meta20457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t20456.cljs$lang$type = true;
om_bootstrap.nav.t20456.cljs$lang$ctorStr = "om-bootstrap.nav/t20456";
om_bootstrap.nav.t20456.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"om-bootstrap.nav/t20456");
});})(owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
;
om_bootstrap.nav.t20456.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t20456.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var vec__20459 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function() { 
var G__20463__delegate = function (opts__$2,c){return om_tools.dom.element.call(null,React.DOM.nav,opts__$2,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__20463 = function (opts__$2,var_args){
var c = null;if (arguments.length > 1) {
  c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__20463__delegate.call(this,opts__$2,c);};
G__20463.cljs$lang$maxFixedArity = 1;
G__20463.cljs$lang$applyTo = (function (arglist__20464){
var opts__$2 = cljs.core.first(arglist__20464);
var c = cljs.core.rest(arglist__20464);
return G__20463__delegate(opts__$2,c);
});
G__20463.cljs$core$IFn$_invoke$arity$variadic = G__20463__delegate;
return G__20463;
})()
;})(___$1,owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
], null));var bs = cljs.core.nth.call(null,vec__20459,(0),null);var props = cljs.core.nth.call(null,vec__20459,(1),null);var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_((function (){var or__8110__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__8110__auto____$1))
{return or__8110__auto____$1;
} else
{return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})())?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__20459,bs,props,classes,___$1,owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function (p1__20422_SHARP_){return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__20422_SHARP_,bs);
});})(vec__20459,bs,props,classes,___$1,owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
,self__.children)],null)))));
});})(owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
;
om_bootstrap.nav.t20456.prototype.om$core$IShouldUpdate$ = true;
om_bootstrap.nav.t20456.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function (_,___$1,next_state){var self__ = this;
var ___$2 = this;return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
;
om_bootstrap.nav.t20456.prototype.om$core$IInitState$ = true;
om_bootstrap.nav.t20456.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
;
om_bootstrap.nav.t20456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function (_20458){var self__ = this;
var _20458__$1 = this;return self__.meta20457;
});})(owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
;
om_bootstrap.nav.t20456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function (_20458,meta20457__$1){var self__ = this;
var _20458__$1 = this;return (new om_bootstrap.nav.t20456(self__.owner20423,self__.navbar_STAR_,self__.owner,self__.input_schema20448,self__.data__13624__auto__,self__.output_schema20447,self__.children,self__.map20444,self__.G__20451,self__.map20445,self__.opts__13625__auto__,self__.output_checker20450,self__.fnk20446,self__.input_checker20449,self__.p__20425,self__.validate__11825__auto__,self__.opts,self__.ufv__,self__.vec__20443,meta20457__$1));
});})(owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
;
om_bootstrap.nav.__GT_t20456 = ((function (owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__){
return (function __GT_t20456(owner20423__$1,navbar_STAR___$1,owner__$1,input_schema20448__$1,data__13624__auto____$1,output_schema20447__$1,children__$1,map20444__$1,G__20451__$1,map20445__$1,opts__13625__auto____$1,output_checker20450__$1,fnk20446__$1,input_checker20449__$1,p__20425__$1,validate__11825__auto____$1,opts__$1,ufv____$1,vec__20443__$1,meta20457){return (new om_bootstrap.nav.t20456(owner20423__$1,navbar_STAR___$1,owner__$1,input_schema20448__$1,data__13624__auto____$1,output_schema20447__$1,children__$1,map20444__$1,G__20451__$1,map20445__$1,opts__13625__auto____$1,output_checker20450__$1,fnk20446__$1,input_checker20449__$1,p__20425__$1,validate__11825__auto____$1,opts__$1,ufv____$1,vec__20443__$1,meta20457));
});})(owner,children,opts,map20445,validate__11825__auto__,ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
;
}
return (new om_bootstrap.nav.t20456(owner20423,navbar_STAR_,owner,input_schema20448,data__13624__auto__,output_schema20447,children,map20444,G__20451,map20445,opts__13625__auto__,output_checker20450,fnk20446,input_checker20449,p__20425,validate__11825__auto__,opts,ufv__,vec__20443,null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20465 = output_checker20450.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20465))
{var error__11827__auto___20466 = temp__4222__auto___20465;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk20446","fnk20446",1504149875,null),cljs.core.pr_str.call(null,error__11827__auto___20466)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20447,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20466], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv__,output_schema20447,input_schema20448,input_checker20449,output_checker20450,vec__20443,opts__13625__auto__))
,schema.core.make_fn_schema.call(null,output_schema20447,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20448], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__13625__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20423,new cljs.core.Keyword(null,"data","data",-232669377),data__13624__auto__], null));
};
var navbar_STAR_ = function (data__13624__auto__,owner20423,var_args){
var p__20425 = null;if (arguments.length > 2) {
  p__20425 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return navbar_STAR___delegate.call(this,data__13624__auto__,owner20423,p__20425);};
navbar_STAR_.cljs$lang$maxFixedArity = 2;
navbar_STAR_.cljs$lang$applyTo = (function (arglist__20467){
var data__13624__auto__ = cljs.core.first(arglist__20467);
arglist__20467 = cljs.core.next(arglist__20467);
var owner20423 = cljs.core.first(arglist__20467);
var p__20425 = cljs.core.rest(arglist__20467);
return navbar_STAR___delegate(data__13624__auto__,owner20423,p__20425);
});
navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = navbar_STAR___delegate;
return navbar_STAR_;
})()
;
om_bootstrap.nav.__GT_navbar_STAR_ = (function() {
var __GT_navbar_STAR_ = null;
var __GT_navbar_STAR___1 = (function (cursor__13593__auto__){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__13593__auto__);
});
var __GT_navbar_STAR___2 = (function (cursor__13593__auto__,m20424){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__13593__auto__,m20424);
});
__GT_navbar_STAR_ = function(cursor__13593__auto__,m20424){
switch(arguments.length){
case 1:
return __GT_navbar_STAR___1.call(this,cursor__13593__auto__);
case 2:
return __GT_navbar_STAR___2.call(this,cursor__13593__auto__,m20424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_navbar_STAR___1;
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_navbar_STAR___2;
return __GT_navbar_STAR_;
})()
;
var ufv___20474 = schema.utils.use_fn_validation;var output_schema20468_20475 = schema.core.Any;var input_schema20469_20476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker20470_20477 = schema.core.checker.call(null,input_schema20469_20476);var output_checker20471_20478 = schema.core.checker.call(null,output_schema20468_20475);/**
* Inputs: [opts :- NavBar & children]
* @param {...*} var_args
*/
om_bootstrap.nav.navbar = ((function (ufv___20474,output_schema20468_20475,input_schema20469_20476,input_checker20470_20477,output_checker20471_20478){
return (function() { 
var navbar__delegate = function (G__20472,rest20473){var validate__11825__auto__ = ufv___20474.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20479 = cljs.core.list_STAR_.call(null,G__20472,rest20473);var temp__4222__auto___20480 = input_checker20470_20477.call(null,args__11826__auto___20479);if(cljs.core.truth_(temp__4222__auto___20480))
{var error__11827__auto___20481 = temp__4222__auto___20480;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__11827__auto___20481)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20469_20476,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20479,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20481], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__20472;var children = rest20473;while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20482 = output_checker20471_20478.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20482))
{var error__11827__auto___20483 = temp__4222__auto___20482;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__11827__auto___20483)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20468_20475,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20483], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var navbar = function (G__20472,var_args){
var rest20473 = null;if (arguments.length > 1) {
  rest20473 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return navbar__delegate.call(this,G__20472,rest20473);};
navbar.cljs$lang$maxFixedArity = 1;
navbar.cljs$lang$applyTo = (function (arglist__20484){
var G__20472 = cljs.core.first(arglist__20484);
var rest20473 = cljs.core.rest(arglist__20484);
return navbar__delegate(G__20472,rest20473);
});
navbar.cljs$core$IFn$_invoke$arity$variadic = navbar__delegate;
return navbar;
})()
;})(ufv___20474,output_schema20468_20475,input_schema20469_20476,input_checker20470_20477,output_checker20471_20478))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema20468_20475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20469_20476], null)));
