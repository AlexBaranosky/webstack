// Compiled by ClojureScript 0.0-2322
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.enable_console_print_BANG_.call(null);
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__19785_19789 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__19786_19790 = null;var count__19787_19791 = (0);var i__19788_19792 = (0);while(true){
if((i__19788_19792 < count__19787_19791))
{var k_19793 = cljs.core._nth.call(null,chunk__19786_19790,i__19788_19792);var v_19794 = (b[k_19793]);(a[k_19793] = v_19794);
{
var G__19795 = seq__19785_19789;
var G__19796 = chunk__19786_19790;
var G__19797 = count__19787_19791;
var G__19798 = (i__19788_19792 + (1));
seq__19785_19789 = G__19795;
chunk__19786_19790 = G__19796;
count__19787_19791 = G__19797;
i__19788_19792 = G__19798;
continue;
}
} else
{var temp__4222__auto___19799 = cljs.core.seq.call(null,seq__19785_19789);if(temp__4222__auto___19799)
{var seq__19785_19800__$1 = temp__4222__auto___19799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19785_19800__$1))
{var c__8866__auto___19801 = cljs.core.chunk_first.call(null,seq__19785_19800__$1);{
var G__19802 = cljs.core.chunk_rest.call(null,seq__19785_19800__$1);
var G__19803 = c__8866__auto___19801;
var G__19804 = cljs.core.count.call(null,c__8866__auto___19801);
var G__19805 = (0);
seq__19785_19789 = G__19802;
chunk__19786_19790 = G__19803;
count__19787_19791 = G__19804;
i__19788_19792 = G__19805;
continue;
}
} else
{var k_19806 = cljs.core.first.call(null,seq__19785_19800__$1);var v_19807 = (b[k_19806]);(a[k_19806] = v_19807);
{
var G__19808 = cljs.core.next.call(null,seq__19785_19800__$1);
var G__19809 = null;
var G__19810 = (0);
var G__19811 = (0);
seq__19785_19789 = G__19808;
chunk__19786_19790 = G__19809;
count__19787_19791 = G__19810;
i__19788_19792 = G__19811;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": (function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__19812 = (i + (2));
var G__19813 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19812;
ret = G__19813;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}), "list": (function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}), "set": (function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}), ":": (function (v){return cljs.core.keyword.call(null,v);
}), "$": (function (v){return cljs.core.symbol.call(null,v);
})}},cljs.core.clj__GT_js.call(null,opts)));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__19814_19818 = cljs.core.seq.call(null,v);var chunk__19815_19819 = null;var count__19816_19820 = (0);var i__19817_19821 = (0);while(true){
if((i__19817_19821 < count__19816_19820))
{var x_19822 = cljs.core._nth.call(null,chunk__19815_19819,i__19817_19821);ret.push(x_19822);
{
var G__19823 = seq__19814_19818;
var G__19824 = chunk__19815_19819;
var G__19825 = count__19816_19820;
var G__19826 = (i__19817_19821 + (1));
seq__19814_19818 = G__19823;
chunk__19815_19819 = G__19824;
count__19816_19820 = G__19825;
i__19817_19821 = G__19826;
continue;
}
} else
{var temp__4222__auto___19827 = cljs.core.seq.call(null,seq__19814_19818);if(temp__4222__auto___19827)
{var seq__19814_19828__$1 = temp__4222__auto___19827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19814_19828__$1))
{var c__8866__auto___19829 = cljs.core.chunk_first.call(null,seq__19814_19828__$1);{
var G__19830 = cljs.core.chunk_rest.call(null,seq__19814_19828__$1);
var G__19831 = c__8866__auto___19829;
var G__19832 = cljs.core.count.call(null,c__8866__auto___19829);
var G__19833 = (0);
seq__19814_19818 = G__19830;
chunk__19815_19819 = G__19831;
count__19816_19820 = G__19832;
i__19817_19821 = G__19833;
continue;
}
} else
{var x_19834 = cljs.core.first.call(null,seq__19814_19828__$1);ret.push(x_19834);
{
var G__19835 = cljs.core.next.call(null,seq__19814_19828__$1);
var G__19836 = null;
var G__19837 = (0);
var G__19838 = (0);
seq__19814_19818 = G__19835;
chunk__19815_19819 = G__19836;
count__19816_19820 = G__19837;
i__19817_19821 = G__19838;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__19839_19843 = cljs.core.seq.call(null,v);var chunk__19840_19844 = null;var count__19841_19845 = (0);var i__19842_19846 = (0);while(true){
if((i__19842_19846 < count__19841_19845))
{var x_19847 = cljs.core._nth.call(null,chunk__19840_19844,i__19842_19846);ret.push(x_19847);
{
var G__19848 = seq__19839_19843;
var G__19849 = chunk__19840_19844;
var G__19850 = count__19841_19845;
var G__19851 = (i__19842_19846 + (1));
seq__19839_19843 = G__19848;
chunk__19840_19844 = G__19849;
count__19841_19845 = G__19850;
i__19842_19846 = G__19851;
continue;
}
} else
{var temp__4222__auto___19852 = cljs.core.seq.call(null,seq__19839_19843);if(temp__4222__auto___19852)
{var seq__19839_19853__$1 = temp__4222__auto___19852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19839_19853__$1))
{var c__8866__auto___19854 = cljs.core.chunk_first.call(null,seq__19839_19853__$1);{
var G__19855 = cljs.core.chunk_rest.call(null,seq__19839_19853__$1);
var G__19856 = c__8866__auto___19854;
var G__19857 = cljs.core.count.call(null,c__8866__auto___19854);
var G__19858 = (0);
seq__19839_19843 = G__19855;
chunk__19840_19844 = G__19856;
count__19841_19845 = G__19857;
i__19842_19846 = G__19858;
continue;
}
} else
{var x_19859 = cljs.core.first.call(null,seq__19839_19853__$1);ret.push(x_19859);
{
var G__19860 = cljs.core.next.call(null,seq__19839_19853__$1);
var G__19861 = null;
var G__19862 = (0);
var G__19863 = (0);
seq__19839_19843 = G__19860;
chunk__19840_19844 = G__19861;
count__19841_19845 = G__19862;
i__19842_19846 = G__19863;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__19864_19868 = cljs.core.seq.call(null,v);var chunk__19865_19869 = null;var count__19866_19870 = (0);var i__19867_19871 = (0);while(true){
if((i__19867_19871 < count__19866_19870))
{var x_19872 = cljs.core._nth.call(null,chunk__19865_19869,i__19867_19871);ret.push(x_19872);
{
var G__19873 = seq__19864_19868;
var G__19874 = chunk__19865_19869;
var G__19875 = count__19866_19870;
var G__19876 = (i__19867_19871 + (1));
seq__19864_19868 = G__19873;
chunk__19865_19869 = G__19874;
count__19866_19870 = G__19875;
i__19867_19871 = G__19876;
continue;
}
} else
{var temp__4222__auto___19877 = cljs.core.seq.call(null,seq__19864_19868);if(temp__4222__auto___19877)
{var seq__19864_19878__$1 = temp__4222__auto___19877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19864_19878__$1))
{var c__8866__auto___19879 = cljs.core.chunk_first.call(null,seq__19864_19878__$1);{
var G__19880 = cljs.core.chunk_rest.call(null,seq__19864_19878__$1);
var G__19881 = c__8866__auto___19879;
var G__19882 = cljs.core.count.call(null,c__8866__auto___19879);
var G__19883 = (0);
seq__19864_19868 = G__19880;
chunk__19865_19869 = G__19881;
count__19866_19870 = G__19882;
i__19867_19871 = G__19883;
continue;
}
} else
{var x_19884 = cljs.core.first.call(null,seq__19864_19878__$1);ret.push(x_19884);
{
var G__19885 = cljs.core.next.call(null,seq__19864_19878__$1);
var G__19886 = null;
var G__19887 = (0);
var G__19888 = (0);
seq__19864_19868 = G__19885;
chunk__19865_19869 = G__19886;
count__19866_19870 = G__19887;
i__19867_19871 = G__19888;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x19898 = cljs.core.clone.call(null,handlers);x19898.forEach = ((function (x19898,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__19899 = cljs.core.seq.call(null,coll);var chunk__19900 = null;var count__19901 = (0);var i__19902 = (0);while(true){
if((i__19902 < count__19901))
{var vec__19903 = cljs.core._nth.call(null,chunk__19900,i__19902);var k = cljs.core.nth.call(null,vec__19903,(0),null);var v = cljs.core.nth.call(null,vec__19903,(1),null);f.call(null,v,k);
{
var G__19905 = seq__19899;
var G__19906 = chunk__19900;
var G__19907 = count__19901;
var G__19908 = (i__19902 + (1));
seq__19899 = G__19905;
chunk__19900 = G__19906;
count__19901 = G__19907;
i__19902 = G__19908;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__19899);if(temp__4222__auto__)
{var seq__19899__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19899__$1))
{var c__8866__auto__ = cljs.core.chunk_first.call(null,seq__19899__$1);{
var G__19909 = cljs.core.chunk_rest.call(null,seq__19899__$1);
var G__19910 = c__8866__auto__;
var G__19911 = cljs.core.count.call(null,c__8866__auto__);
var G__19912 = (0);
seq__19899 = G__19909;
chunk__19900 = G__19910;
count__19901 = G__19911;
i__19902 = G__19912;
continue;
}
} else
{var vec__19904 = cljs.core.first.call(null,seq__19899__$1);var k = cljs.core.nth.call(null,vec__19904,(0),null);var v = cljs.core.nth.call(null,vec__19904,(1),null);f.call(null,v,k);
{
var G__19913 = cljs.core.next.call(null,seq__19899__$1);
var G__19914 = null;
var G__19915 = (0);
var G__19916 = (0);
seq__19899 = G__19913;
chunk__19900 = G__19914;
count__19901 = G__19915;
i__19902 = G__19916;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x19898,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x19898;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__19897 = obj;G__19897.push(kfn.call(null,k),vfn.call(null,v));
return G__19897;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t19920 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t19920 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta19921){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta19921 = meta19921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t19920.cljs$lang$type = true;
cognitect.transit.t19920.cljs$lang$ctorStr = "cognitect.transit/t19920";
cognitect.transit.t19920.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cognitect.transit/t19920");
});
cognitect.transit.t19920.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t19920.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t19920.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t19920.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t19920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19922){var self__ = this;
var _19922__$1 = this;return self__.meta19921;
});
cognitect.transit.t19920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19922,meta19921__$1){var self__ = this;
var _19922__$1 = this;return (new cognitect.transit.t19920(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta19921__$1));
});
cognitect.transit.__GT_t19920 = (function __GT_t19920(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta19921){return (new cognitect.transit.t19920(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta19921));
});
}
return (new cognitect.transit.t19920(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});
