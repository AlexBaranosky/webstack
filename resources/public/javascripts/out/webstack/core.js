// Compiled by ClojureScript 0.0-2322
goog.provide('webstack.core');
goog.require('cljs.core');
goog.require('weasel.repl');
goog.require('weasel.repl');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
webstack.core.widget = (function widget(data){if(typeof webstack.core.t10425 !== 'undefined')
{} else
{
/**
* @constructor
*/
webstack.core.t10425 = (function (data,widget,meta10426){
this.data = data;
this.widget = widget;
this.meta10426 = meta10426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
webstack.core.t10425.cljs$lang$type = true;
webstack.core.t10425.cljs$lang$ctorStr = "webstack.core/t10425";
webstack.core.t10425.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"webstack.core/t10425");
});
webstack.core.t10425.prototype.om$core$IRender$ = true;
webstack.core.t10425.prototype.om$core$IRender$render$arity$1 = (function (this__9693__auto__){var self__ = this;
var this__9693__auto____$1 = this;return React.DOM.div(null,"Hello world!");
});
webstack.core.t10425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10427){var self__ = this;
var _10427__$1 = this;return self__.meta10426;
});
webstack.core.t10425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10427,meta10426__$1){var self__ = this;
var _10427__$1 = this;return (new webstack.core.t10425(self__.data,self__.widget,meta10426__$1));
});
webstack.core.__GT_t10425 = (function __GT_t10425(data__$1,widget__$1,meta10426){return (new webstack.core.t10425(data__$1,widget__$1,meta10426));
});
}
return (new webstack.core.t10425(data,widget,null));
});
om.core.root.call(null,webstack.core.widget,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
