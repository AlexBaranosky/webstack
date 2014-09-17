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
goog.require('om_bootstrap.random');
goog.require('om_bootstrap.panel');
goog.require('cljs_http.client');
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
goog.require('om_bootstrap.random');
goog.require('om_bootstrap.input');
goog.require('cljs_http.client');
goog.require('weasel.repl');
goog.require('om_tools.dom');
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
webstack.core.checkbox_comp = (function checkbox_comp(cursor,owner){if(typeof webstack.core.t19977 !== 'undefined')
{} else
{
/**
* @constructor
*/
webstack.core.t19977 = (function (owner,cursor,checkbox_comp,meta19978){
this.owner = owner;
this.cursor = cursor;
this.checkbox_comp = checkbox_comp;
this.meta19978 = meta19978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
webstack.core.t19977.cljs$lang$type = true;
webstack.core.t19977.cljs$lang$ctorStr = "webstack.core/t19977";
webstack.core.t19977.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"webstack.core/t19977");
});
webstack.core.t19977.prototype.om$core$IRender$ = true;
webstack.core.t19977.prototype.om$core$IRender$render$arity$1 = (function (this__10979__auto__){var self__ = this;
var this__10979__auto____$1 = this;return om.dom.input.call(null,{"onChange": ((function (this__10979__auto____$1){
return (function (event){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"checked?","checked?",2024809091))));
});})(this__10979__auto____$1))
, "type": "checkbox"},"Check to make red!");
});
webstack.core.t19977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19979){var self__ = this;
var _19979__$1 = this;return self__.meta19978;
});
webstack.core.t19977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19979,meta19978__$1){var self__ = this;
var _19979__$1 = this;return (new webstack.core.t19977(self__.owner,self__.cursor,self__.checkbox_comp,meta19978__$1));
});
webstack.core.__GT_t19977 = (function __GT_t19977(owner__$1,cursor__$1,checkbox_comp__$1,meta19978){return (new webstack.core.t19977(owner__$1,cursor__$1,checkbox_comp__$1,meta19978));
});
}
return (new webstack.core.t19977(owner,cursor,checkbox_comp,null));
});
webstack.core.checkbox_wrapper = (function checkbox_wrapper(app,owner){if(typeof webstack.core.t19985 !== 'undefined')
{} else
{
/**
* @constructor
*/
webstack.core.t19985 = (function (owner,app,checkbox_wrapper,meta19986){
this.owner = owner;
this.app = app;
this.checkbox_wrapper = checkbox_wrapper;
this.meta19986 = meta19986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
webstack.core.t19985.cljs$lang$type = true;
webstack.core.t19985.cljs$lang$ctorStr = "webstack.core/t19985";
webstack.core.t19985.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"webstack.core/t19985");
});
webstack.core.t19985.prototype.om$core$IRenderState$ = true;
webstack.core.t19985.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19988){var self__ = this;
var map__19989 = p__19988;var map__19989__$1 = ((cljs.core.seq_QMARK_.call(null,map__19989))?cljs.core.apply.call(null,cljs.core.hash_map,map__19989):map__19989);var checked_QMARK_ = cljs.core.get.call(null,map__19989__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var this$__$1 = this;return React.DOM.div((cljs.core.truth_(checked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"font-size:99"], null):cljs.core.PersistentArrayMap.EMPTY),om.core.build.call(null,webstack.core.checkbox_comp,self__.owner));
});
webstack.core.t19985.prototype.om$core$IInitState$ = true;
webstack.core.t19985.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked?","checked?",2024809091),false], null);
});
webstack.core.t19985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19987){var self__ = this;
var _19987__$1 = this;return self__.meta19986;
});
webstack.core.t19985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19987,meta19986__$1){var self__ = this;
var _19987__$1 = this;return (new webstack.core.t19985(self__.owner,self__.app,self__.checkbox_wrapper,meta19986__$1));
});
webstack.core.__GT_t19985 = (function __GT_t19985(owner__$1,app__$1,checkbox_wrapper__$1,meta19986){return (new webstack.core.t19985(owner__$1,app__$1,checkbox_wrapper__$1,meta19986));
});
}
return (new webstack.core.t19985(owner,app,checkbox_wrapper,null));
});
cljs_http.client.get.call(null,"http:/localhost:9444/resources/comment&id=1");
om.core.root.call(null,webstack.core.checkbox_wrapper,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
