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
webstack.core.product_category_row = (function product_category_row(category){return React.DOM.tr(null,React.DOM.th(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null),category));
});
webstack.core.product_row = (function product_row(p__19219){var map__19221 = p__19219;var map__19221__$1 = ((cljs.core.seq_QMARK_.call(null,map__19221))?cljs.core.apply.call(null,cljs.core.hash_map,map__19221):map__19221);var stocked = cljs.core.get.call(null,map__19221__$1,new cljs.core.Keyword(null,"stocked","stocked",1461175281));var price = cljs.core.get.call(null,map__19221__$1,new cljs.core.Keyword(null,"price","price",22129180));var name = cljs.core.get.call(null,map__19221__$1,new cljs.core.Keyword(null,"name","name",1843675177));var name__$1 = (cljs.core.truth_(stocked)?name:React.DOM.span(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color:\"red\""], null),name));return React.DOM.tr(null,React.DOM.tr(null,name__$1),React.DOM.tr(null,price));
});
webstack.core.product_table = (function product_table(products,filter_text,in_stock_only_QMARK_){return React.DOM.table(null,React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Price"))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,webstack.core.product_row,products)));
});
webstack.core.search_bar = (function search_bar(owner,filter_text,in_stock_only_QMARK_){return React.DOM.form(null,om.dom.input.call(null,{"value": filter_text, "place-holder": "Search...", "type": "text"},React.DOM.p(null,om.dom.input.call(null,{"onChange": (function (event){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),event.target.value);
}), "value": in_stock_only_QMARK_, "type": "checkbox"},"Only show products in stock?"))));
});
webstack.core.filterable_product_table = (function filterable_product_table(props,owner){if(typeof webstack.core.t19227 !== 'undefined')
{} else
{
/**
* @constructor
*/
webstack.core.t19227 = (function (owner,props,filterable_product_table,meta19228){
this.owner = owner;
this.props = props;
this.filterable_product_table = filterable_product_table;
this.meta19228 = meta19228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
webstack.core.t19227.cljs$lang$type = true;
webstack.core.t19227.cljs$lang$ctorStr = "webstack.core/t19227";
webstack.core.t19227.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"webstack.core/t19227");
});
webstack.core.t19227.prototype.om$core$IRenderState$ = true;
webstack.core.t19227.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__19230){var self__ = this;
var map__19231 = p__19230;var map__19231__$1 = ((cljs.core.seq_QMARK_.call(null,map__19231))?cljs.core.apply.call(null,cljs.core.hash_map,map__19231):map__19231);var in_stock_only_QMARK_ = cljs.core.get.call(null,map__19231__$1,new cljs.core.Keyword(null,"in-stock-only?","in-stock-only?",716514585));var filter_text = cljs.core.get.call(null,map__19231__$1,new cljs.core.Keyword(null,"filter-text","filter-text",-381699202));var ___$1 = this;return React.DOM.div(null,webstack.core.search_bar.call(null,self__.owner,filter_text,in_stock_only_QMARK_),webstack.core.product_table.call(null,new cljs.core.Keyword(null,"products","products",1876973544).cljs$core$IFn$_invoke$arity$1(self__.props),filter_text,in_stock_only_QMARK_));
});
webstack.core.t19227.prototype.om$core$IInitState$ = true;
webstack.core.t19227.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in-stock-only?","in-stock-only?",716514585),false,new cljs.core.Keyword(null,"filter-text","filter-text",-381699202),""], null);
});
webstack.core.t19227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19229){var self__ = this;
var _19229__$1 = this;return self__.meta19228;
});
webstack.core.t19227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19229,meta19228__$1){var self__ = this;
var _19229__$1 = this;return (new webstack.core.t19227(self__.owner,self__.props,self__.filterable_product_table,meta19228__$1));
});
webstack.core.__GT_t19227 = (function __GT_t19227(owner__$1,props__$1,filterable_product_table__$1,meta19228){return (new webstack.core.t19227(owner__$1,props__$1,filterable_product_table__$1,meta19228));
});
}
return (new webstack.core.t19227(owner,props,filterable_product_table,null));
});
om.core.root.call(null,webstack.core.filterable_product_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"products","products",1876973544),webstack.core.products], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
