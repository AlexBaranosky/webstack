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
goog.require('weasel.repl');
goog.require('om_tools.dom');
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
webstack.core.products = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),"Sporting Goods",new cljs.core.Keyword(null,"price","price",22129180),"$49.99",new cljs.core.Keyword(null,"stocked","stocked",1461175281),true,new cljs.core.Keyword(null,"name","name",1843675177),"Football"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),"Sporting Goods",new cljs.core.Keyword(null,"price","price",22129180),"$9.99",new cljs.core.Keyword(null,"stocked","stocked",1461175281),true,new cljs.core.Keyword(null,"name","name",1843675177),"Baseball"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),"Sporting Goods",new cljs.core.Keyword(null,"price","price",22129180),"$29.99",new cljs.core.Keyword(null,"stocked","stocked",1461175281),false,new cljs.core.Keyword(null,"name","name",1843675177),"Basketball"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),"Electronics",new cljs.core.Keyword(null,"price","price",22129180),"$99.99",new cljs.core.Keyword(null,"stocked","stocked",1461175281),true,new cljs.core.Keyword(null,"name","name",1843675177),"iPod Touch"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),"Electronics",new cljs.core.Keyword(null,"price","price",22129180),"$399.99",new cljs.core.Keyword(null,"stocked","stocked",1461175281),false,new cljs.core.Keyword(null,"name","name",1843675177),"iPhone 5"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),"Electronics",new cljs.core.Keyword(null,"price","price",22129180),"$199.99",new cljs.core.Keyword(null,"stocked","stocked",1461175281),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nexus 7"], null)], null);
webstack.core.product_category_row = (function product_category_row(category){return React.DOM.tr(cljs.core.PersistentArrayMap.EMPTY,React.DOM.th(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null),category));
});
webstack.core.product_row = (function product_row(p__20191){var map__20193 = p__20191;var map__20193__$1 = ((cljs.core.seq_QMARK_.call(null,map__20193))?cljs.core.apply.call(null,cljs.core.hash_map,map__20193):map__20193);var stocked = cljs.core.get.call(null,map__20193__$1,new cljs.core.Keyword(null,"stocked","stocked",1461175281));var price = cljs.core.get.call(null,map__20193__$1,new cljs.core.Keyword(null,"price","price",22129180));var name = cljs.core.get.call(null,map__20193__$1,new cljs.core.Keyword(null,"name","name",1843675177));var name__$1 = (cljs.core.truth_(stocked)?name:React.DOM.span(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color:\"red\""], null),name));return React.DOM.tr(cljs.core.PersistentArrayMap.EMPTY,React.DOM.tr(cljs.core.PersistentArrayMap.EMPTY,name__$1),React.DOM.tr(cljs.core.PersistentArrayMap.EMPTY,price));
});
webstack.core.product_table = (function product_table(products){return React.DOM.table(cljs.core.PersistentArrayMap.EMPTY,React.DOM.thead(cljs.core.PersistentArrayMap.EMPTY,React.DOM.tr(cljs.core.PersistentArrayMap.EMPTY,React.DOM.th(cljs.core.PersistentArrayMap.EMPTY,"Name"),React.DOM.th(cljs.core.PersistentArrayMap.EMPTY,"Price"))),cljs.core.apply.call(null,om.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (prod){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webstack.core.product_row.call(null,prod)], null);
}),products))));
});
webstack.core.search_bar = (function search_bar(){return React.DOM.form(cljs.core.PersistentArrayMap.EMPTY,om.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"place-holder","place-holder",-718244967),"Search..."], null),React.DOM.p(null,om.dom.input.call(null,{"type": "checkbox"},"Only show products in stock?"))));
});
webstack.core.filterable_product_table = (function filterable_product_table(props){if(typeof webstack.core.t20197 !== 'undefined')
{} else
{
/**
* @constructor
*/
webstack.core.t20197 = (function (props,filterable_product_table,meta20198){
this.props = props;
this.filterable_product_table = filterable_product_table;
this.meta20198 = meta20198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
webstack.core.t20197.cljs$lang$type = true;
webstack.core.t20197.cljs$lang$ctorStr = "webstack.core/t20197";
webstack.core.t20197.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"webstack.core/t20197");
});
webstack.core.t20197.prototype.om$core$IRender$ = true;
webstack.core.t20197.prototype.om$core$IRender$render$arity$1 = (function (this__10979__auto__){var self__ = this;
var this__10979__auto____$1 = this;return React.DOM.div(cljs.core.PersistentArrayMap.EMPTY,webstack.core.product_table.call(null,new cljs.core.Keyword(null,"products","products",1876973544).cljs$core$IFn$_invoke$arity$1(self__.props)),webstack.core.search_bar.call(null));
});
webstack.core.t20197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20199){var self__ = this;
var _20199__$1 = this;return self__.meta20198;
});
webstack.core.t20197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20199,meta20198__$1){var self__ = this;
var _20199__$1 = this;return (new webstack.core.t20197(self__.props,self__.filterable_product_table,meta20198__$1));
});
webstack.core.__GT_t20197 = (function __GT_t20197(props__$1,filterable_product_table__$1,meta20198){return (new webstack.core.t20197(props__$1,filterable_product_table__$1,meta20198));
});
}
return (new webstack.core.t20197(props,filterable_product_table,null));
});
om.core.root.call(null,webstack.core.filterable_product_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"products","products",1876973544),webstack.core.products], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
