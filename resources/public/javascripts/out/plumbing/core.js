// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__19992__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__19992 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__19992__delegate.call(this,m,k,f,x1,x2,xs);};
G__19992.cljs$lang$maxFixedArity = 5;
G__19992.cljs$lang$applyTo = (function (arglist__19993){
var m = cljs.core.first(arglist__19993);
arglist__19993 = cljs.core.next(arglist__19993);
var k = cljs.core.first(arglist__19993);
arglist__19993 = cljs.core.next(arglist__19993);
var f = cljs.core.first(arglist__19993);
arglist__19993 = cljs.core.next(arglist__19993);
var x1 = cljs.core.first(arglist__19993);
arglist__19993 = cljs.core.next(arglist__19993);
var x2 = cljs.core.first(arglist__19993);
var xs = cljs.core.rest(arglist__19993);
return G__19992__delegate(m,k,f,x1,x2,xs);
});
G__19992.cljs$core$IFn$_invoke$arity$variadic = G__19992__delegate;
return G__19992;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__13326__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20002_20008 = cljs.core.seq.call(null,m);var chunk__20003_20009 = null;var count__20004_20010 = (0);var i__20005_20011 = (0);while(true){
if((i__20005_20011 < count__20004_20010))
{var vec__20006_20012 = cljs.core._nth.call(null,chunk__20003_20009,i__20005_20011);var k_20013 = cljs.core.nth.call(null,vec__20006_20012,(0),null);var v_20014 = cljs.core.nth.call(null,vec__20006_20012,(1),null);var m20001_20015 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20001_20015,k_20013,f.call(null,v_20014)));
{
var G__20016 = seq__20002_20008;
var G__20017 = chunk__20003_20009;
var G__20018 = count__20004_20010;
var G__20019 = (i__20005_20011 + (1));
seq__20002_20008 = G__20016;
chunk__20003_20009 = G__20017;
count__20004_20010 = G__20018;
i__20005_20011 = G__20019;
continue;
}
} else
{var temp__4222__auto___20020 = cljs.core.seq.call(null,seq__20002_20008);if(temp__4222__auto___20020)
{var seq__20002_20021__$1 = temp__4222__auto___20020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20002_20021__$1))
{var c__8866__auto___20022 = cljs.core.chunk_first.call(null,seq__20002_20021__$1);{
var G__20023 = cljs.core.chunk_rest.call(null,seq__20002_20021__$1);
var G__20024 = c__8866__auto___20022;
var G__20025 = cljs.core.count.call(null,c__8866__auto___20022);
var G__20026 = (0);
seq__20002_20008 = G__20023;
chunk__20003_20009 = G__20024;
count__20004_20010 = G__20025;
i__20005_20011 = G__20026;
continue;
}
} else
{var vec__20007_20027 = cljs.core.first.call(null,seq__20002_20021__$1);var k_20028 = cljs.core.nth.call(null,vec__20007_20027,(0),null);var v_20029 = cljs.core.nth.call(null,vec__20007_20027,(1),null);var m20001_20030 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20001_20030,k_20028,f.call(null,v_20029)));
{
var G__20031 = cljs.core.next.call(null,seq__20002_20021__$1);
var G__20032 = null;
var G__20033 = (0);
var G__20034 = (0);
seq__20002_20008 = G__20031;
chunk__20003_20009 = G__20032;
count__20004_20010 = G__20033;
i__20005_20011 = G__20034;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13326__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__13326__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20043_20049 = cljs.core.seq.call(null,m);var chunk__20044_20050 = null;var count__20045_20051 = (0);var i__20046_20052 = (0);while(true){
if((i__20046_20052 < count__20045_20051))
{var vec__20047_20053 = cljs.core._nth.call(null,chunk__20044_20050,i__20046_20052);var k_20054 = cljs.core.nth.call(null,vec__20047_20053,(0),null);var v_20055 = cljs.core.nth.call(null,vec__20047_20053,(1),null);var m20042_20056 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20042_20056,f.call(null,k_20054),v_20055));
{
var G__20057 = seq__20043_20049;
var G__20058 = chunk__20044_20050;
var G__20059 = count__20045_20051;
var G__20060 = (i__20046_20052 + (1));
seq__20043_20049 = G__20057;
chunk__20044_20050 = G__20058;
count__20045_20051 = G__20059;
i__20046_20052 = G__20060;
continue;
}
} else
{var temp__4222__auto___20061 = cljs.core.seq.call(null,seq__20043_20049);if(temp__4222__auto___20061)
{var seq__20043_20062__$1 = temp__4222__auto___20061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20043_20062__$1))
{var c__8866__auto___20063 = cljs.core.chunk_first.call(null,seq__20043_20062__$1);{
var G__20064 = cljs.core.chunk_rest.call(null,seq__20043_20062__$1);
var G__20065 = c__8866__auto___20063;
var G__20066 = cljs.core.count.call(null,c__8866__auto___20063);
var G__20067 = (0);
seq__20043_20049 = G__20064;
chunk__20044_20050 = G__20065;
count__20045_20051 = G__20066;
i__20046_20052 = G__20067;
continue;
}
} else
{var vec__20048_20068 = cljs.core.first.call(null,seq__20043_20062__$1);var k_20069 = cljs.core.nth.call(null,vec__20048_20068,(0),null);var v_20070 = cljs.core.nth.call(null,vec__20048_20068,(1),null);var m20042_20071 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20042_20071,f.call(null,k_20069),v_20070));
{
var G__20072 = cljs.core.next.call(null,seq__20043_20062__$1);
var G__20073 = null;
var G__20074 = (0);
var G__20075 = (0);
seq__20043_20049 = G__20072;
chunk__20044_20050 = G__20073;
count__20045_20051 = G__20074;
i__20046_20052 = G__20075;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13326__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__13326__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20082_20086 = cljs.core.seq.call(null,ks);var chunk__20083_20087 = null;var count__20084_20088 = (0);var i__20085_20089 = (0);while(true){
if((i__20085_20089 < count__20084_20088))
{var k_20090 = cljs.core._nth.call(null,chunk__20083_20087,i__20085_20089);var m20081_20091 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20081_20091,k_20090,f.call(null,k_20090)));
{
var G__20092 = seq__20082_20086;
var G__20093 = chunk__20083_20087;
var G__20094 = count__20084_20088;
var G__20095 = (i__20085_20089 + (1));
seq__20082_20086 = G__20092;
chunk__20083_20087 = G__20093;
count__20084_20088 = G__20094;
i__20085_20089 = G__20095;
continue;
}
} else
{var temp__4222__auto___20096 = cljs.core.seq.call(null,seq__20082_20086);if(temp__4222__auto___20096)
{var seq__20082_20097__$1 = temp__4222__auto___20096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20082_20097__$1))
{var c__8866__auto___20098 = cljs.core.chunk_first.call(null,seq__20082_20097__$1);{
var G__20099 = cljs.core.chunk_rest.call(null,seq__20082_20097__$1);
var G__20100 = c__8866__auto___20098;
var G__20101 = cljs.core.count.call(null,c__8866__auto___20098);
var G__20102 = (0);
seq__20082_20086 = G__20099;
chunk__20083_20087 = G__20100;
count__20084_20088 = G__20101;
i__20085_20089 = G__20102;
continue;
}
} else
{var k_20103 = cljs.core.first.call(null,seq__20082_20097__$1);var m20081_20104 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20081_20104,k_20103,f.call(null,k_20103)));
{
var G__20105 = cljs.core.next.call(null,seq__20082_20097__$1);
var G__20106 = null;
var G__20107 = (0);
var G__20108 = (0);
seq__20082_20086 = G__20105;
chunk__20083_20087 = G__20106;
count__20084_20088 = G__20107;
i__20085_20089 = G__20108;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13326__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__13326__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20115_20119 = cljs.core.seq.call(null,vs);var chunk__20116_20120 = null;var count__20117_20121 = (0);var i__20118_20122 = (0);while(true){
if((i__20118_20122 < count__20117_20121))
{var v_20123 = cljs.core._nth.call(null,chunk__20116_20120,i__20118_20122);var m20114_20124 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20114_20124,f.call(null,v_20123),v_20123));
{
var G__20125 = seq__20115_20119;
var G__20126 = chunk__20116_20120;
var G__20127 = count__20117_20121;
var G__20128 = (i__20118_20122 + (1));
seq__20115_20119 = G__20125;
chunk__20116_20120 = G__20126;
count__20117_20121 = G__20127;
i__20118_20122 = G__20128;
continue;
}
} else
{var temp__4222__auto___20129 = cljs.core.seq.call(null,seq__20115_20119);if(temp__4222__auto___20129)
{var seq__20115_20130__$1 = temp__4222__auto___20129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20115_20130__$1))
{var c__8866__auto___20131 = cljs.core.chunk_first.call(null,seq__20115_20130__$1);{
var G__20132 = cljs.core.chunk_rest.call(null,seq__20115_20130__$1);
var G__20133 = c__8866__auto___20131;
var G__20134 = cljs.core.count.call(null,c__8866__auto___20131);
var G__20135 = (0);
seq__20115_20119 = G__20132;
chunk__20116_20120 = G__20133;
count__20117_20121 = G__20134;
i__20118_20122 = G__20135;
continue;
}
} else
{var v_20136 = cljs.core.first.call(null,seq__20115_20130__$1);var m20114_20137 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20114_20137,f.call(null,v_20136),v_20136));
{
var G__20138 = cljs.core.next.call(null,seq__20115_20130__$1);
var G__20139 = null;
var G__20140 = (0);
var G__20141 = (0);
seq__20115_20119 = G__20138;
chunk__20116_20120 = G__20139;
count__20117_20121 = G__20140;
i__20118_20122 = G__20141;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13326__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__20142){var vec__20144 = p__20142;var k = cljs.core.nth.call(null,vec__20144,(0),null);var ks = cljs.core.nthnext.call(null,vec__20144,(1));if(cljs.core.truth_(m))
{var temp__4220__auto__ = (function (){var and__8098__auto__ = ks;if(and__8098__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__8098__auto__;
}
})();if(cljs.core.truth_(temp__4220__auto__))
{var res = temp__4220__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__13326__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__20153_20159 = cljs.core.seq.call(null,x);var chunk__20154_20160 = null;var count__20155_20161 = (0);var i__20156_20162 = (0);while(true){
if((i__20156_20162 < count__20155_20161))
{var vec__20157_20163 = cljs.core._nth.call(null,chunk__20154_20160,i__20156_20162);var k_20164 = cljs.core.nth.call(null,vec__20157_20163,(0),null);var v_20165 = cljs.core.nth.call(null,vec__20157_20163,(1),null);var m20152_20166 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20152_20166,((typeof k_20164 === 'string')?cljs.core.keyword.call(null,k_20164):k_20164),keywordize_map.call(null,v_20165)));
{
var G__20167 = seq__20153_20159;
var G__20168 = chunk__20154_20160;
var G__20169 = count__20155_20161;
var G__20170 = (i__20156_20162 + (1));
seq__20153_20159 = G__20167;
chunk__20154_20160 = G__20168;
count__20155_20161 = G__20169;
i__20156_20162 = G__20170;
continue;
}
} else
{var temp__4222__auto___20171 = cljs.core.seq.call(null,seq__20153_20159);if(temp__4222__auto___20171)
{var seq__20153_20172__$1 = temp__4222__auto___20171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20153_20172__$1))
{var c__8866__auto___20173 = cljs.core.chunk_first.call(null,seq__20153_20172__$1);{
var G__20174 = cljs.core.chunk_rest.call(null,seq__20153_20172__$1);
var G__20175 = c__8866__auto___20173;
var G__20176 = cljs.core.count.call(null,c__8866__auto___20173);
var G__20177 = (0);
seq__20153_20159 = G__20174;
chunk__20154_20160 = G__20175;
count__20155_20161 = G__20176;
i__20156_20162 = G__20177;
continue;
}
} else
{var vec__20158_20178 = cljs.core.first.call(null,seq__20153_20172__$1);var k_20179 = cljs.core.nth.call(null,vec__20158_20178,(0),null);var v_20180 = cljs.core.nth.call(null,vec__20158_20178,(1),null);var m20152_20181 = cljs.core.deref.call(null,m_atom__13326__auto__);cljs.core.reset_BANG_.call(null,m_atom__13326__auto__,cljs.core.assoc_BANG_.call(null,m20152_20181,((typeof k_20179 === 'string')?cljs.core.keyword.call(null,k_20179):k_20179),keywordize_map.call(null,v_20180)));
{
var G__20182 = cljs.core.next.call(null,seq__20153_20172__$1);
var G__20183 = null;
var G__20184 = (0);
var G__20185 = (0);
seq__20153_20159 = G__20182;
chunk__20154_20160 = G__20183;
count__20155_20161 = G__20184;
i__20156_20162 = G__20185;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__13326__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4220__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4220__auto__))
{var pair__13395__auto__ = temp__4220__auto__;return cljs.core.val.call(null,pair__13395__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__20186 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__20187 = cljs.core.next.call(null,ks);
m = G__20186;
ks = G__20187;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__8110__auto__ = m;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__8835__auto__ = (function iter__20196(s__20197){return (new cljs.core.LazySeq(null,(function (){var s__20197__$1 = s__20197;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__20197__$1);if(temp__4222__auto__)
{var s__20197__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20197__$2))
{var c__8833__auto__ = cljs.core.chunk_first.call(null,s__20197__$2);var size__8834__auto__ = cljs.core.count.call(null,c__8833__auto__);var b__20199 = cljs.core.chunk_buffer.call(null,size__8834__auto__);if((function (){var i__20198 = (0);while(true){
if((i__20198 < size__8834__auto__))
{var vec__20202 = cljs.core._nth.call(null,c__8833__auto__,i__20198);var k = cljs.core.nth.call(null,vec__20202,(0),null);var v = cljs.core.nth.call(null,vec__20202,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__20199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20204 = (i__20198 + (1));
i__20198 = G__20204;
continue;
}
} else
{{
var G__20205 = (i__20198 + (1));
i__20198 = G__20205;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20199),iter__20196.call(null,cljs.core.chunk_rest.call(null,s__20197__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20199),null);
}
} else
{var vec__20203 = cljs.core.first.call(null,s__20197__$2);var k = cljs.core.nth.call(null,vec__20203,(0),null);var v = cljs.core.nth.call(null,vec__20203,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20196.call(null,cljs.core.rest.call(null,s__20197__$2)));
} else
{{
var G__20206 = cljs.core.rest.call(null,s__20197__$2);
s__20197__$1 = G__20206;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8835__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__20207){
var m = cljs.core.first(arglist__20207);
var kvs = cljs.core.rest(arglist__20207);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__20208){
var m = cljs.core.first(arglist__20208);
arglist__20208 = cljs.core.next(arglist__20208);
var key_seq = cljs.core.first(arglist__20208);
arglist__20208 = cljs.core.next(arglist__20208);
var f = cljs.core.first(arglist__20208);
var args = cljs.core.rest(arglist__20208);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4222__auto__ = cljs.core.next.call(null,s);if(temp__4222__auto__)
{var n = temp__4222__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4222__auto__ = cljs.core.seq.call(null,xs);if(temp__4222__auto__)
{var xs__$1 = temp__4222__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__8835__auto__ = ((function (s){
return (function iter__20213(s__20214){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__20214__$1 = s__20214;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__20214__$1);if(temp__4222__auto__)
{var s__20214__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20214__$2))
{var c__8833__auto__ = cljs.core.chunk_first.call(null,s__20214__$2);var size__8834__auto__ = cljs.core.count.call(null,c__8833__auto__);var b__20216 = cljs.core.chunk_buffer.call(null,size__8834__auto__);if((function (){var i__20215 = (0);while(true){
if((i__20215 < size__8834__auto__))
{var x = cljs.core._nth.call(null,c__8833__auto__,i__20215);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__20216,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__20217 = (i__20215 + (1));
i__20215 = G__20217;
continue;
}
} else
{{
var G__20218 = (i__20215 + (1));
i__20215 = G__20218;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20216),iter__20213.call(null,cljs.core.chunk_rest.call(null,s__20214__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20216),null);
}
} else
{var x = cljs.core.first.call(null,s__20214__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__20213.call(null,cljs.core.rest.call(null,s__20214__$2)));
} else
{{
var G__20219 = cljs.core.rest.call(null,s__20214__$2);
s__20214__$1 = G__20219;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__8835__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__20220){
var colls = cljs.core.seq(arglist__20220);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__20221__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__20222 = conj_when.call(null,coll,x);
var G__20223 = cljs.core.first.call(null,xs);
var G__20224 = cljs.core.next.call(null,xs);
coll = G__20222;
x = G__20223;
xs = G__20224;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__20221 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20221__delegate.call(this,coll,x,xs);};
G__20221.cljs$lang$maxFixedArity = 2;
G__20221.cljs$lang$applyTo = (function (arglist__20225){
var coll = cljs.core.first(arglist__20225);
arglist__20225 = cljs.core.next(arglist__20225);
var x = cljs.core.first(arglist__20225);
var xs = cljs.core.rest(arglist__20225);
return G__20221__delegate(coll,x,xs);
});
G__20221.cljs$core$IFn$_invoke$arity$variadic = G__20221__delegate;
return G__20221;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__20227__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__20226_SHARP_){return cljs.core.apply.call(null,f,p1__20226_SHARP_,args);
}));
};
var G__20227 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20227__delegate.call(this,a,f,args);};
G__20227.cljs$lang$maxFixedArity = 2;
G__20227.cljs$lang$applyTo = (function (arglist__20228){
var a = cljs.core.first(arglist__20228);
arglist__20228 = cljs.core.next(arglist__20228);
var f = cljs.core.first(arglist__20228);
var args = cljs.core.rest(arglist__20228);
return G__20227__delegate(a,f,args);
});
G__20227.cljs$core$IFn$_invoke$arity$variadic = G__20227__delegate;
return G__20227;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__20229__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__20229 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20229__delegate.call(this,f,arg,args);};
G__20229.cljs$lang$maxFixedArity = 2;
G__20229.cljs$lang$applyTo = (function (arglist__20230){
var f = cljs.core.first(arglist__20230);
arglist__20230 = cljs.core.next(arglist__20230);
var arg = cljs.core.first(arglist__20230);
var args = cljs.core.rest(arglist__20230);
return G__20229__delegate(f,arg,args);
});
G__20229.cljs$core$IFn$_invoke$arity$variadic = G__20229__delegate;
return G__20229;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
