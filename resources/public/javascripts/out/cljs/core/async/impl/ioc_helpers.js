// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t23103 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t23103 = (function (f,fn_handler,meta23104){
this.f = f;
this.fn_handler = fn_handler;
this.meta23104 = meta23104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t23103.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t23103.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t23103";
cljs.core.async.impl.ioc_helpers.t23103.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async.impl.ioc-helpers/t23103");
});
cljs.core.async.impl.ioc_helpers.t23103.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t23103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t23103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t23103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23105){var self__ = this;
var _23105__$1 = this;return self__.meta23104;
});
cljs.core.async.impl.ioc_helpers.t23103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23105,meta23104__$1){var self__ = this;
var _23105__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t23103(self__.f,self__.fn_handler,meta23104__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t23103 = (function __GT_t23103(f__$1,fn_handler__$1,meta23104){return (new cljs.core.async.impl.ioc_helpers.t23103(f__$1,fn_handler__$1,meta23104));
});
}
return (new cljs.core.async.impl.ioc_helpers.t23103(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e23107){if((e23107 instanceof Object))
{var ex = e23107;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{throw e23107;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4220__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_23110_23112 = state;(statearr_23110_23112[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_23110_23112[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4220__auto__))
{var cb = temp__4220__auto__;var statearr_23111_23113 = state;(statearr_23111_23113[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_23111_23113[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_23116_23118 = state;(statearr_23116_23118[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_23116_23118[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4220__auto__))
{var cb = temp__4220__auto__;var statearr_23117_23119 = state;(statearr_23117_23119[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_23117_23119[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23120){var map__23125 = p__23120;var map__23125__$1 = ((cljs.core.seq_QMARK_.call(null,map__23125))?cljs.core.apply.call(null,cljs.core.hash_map,map__23125):map__23125);var opts = map__23125__$1;var statearr_23126_23129 = state;(statearr_23126_23129[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4222__auto__ = cljs.core.async.do_alts.call(null,((function (map__23125,map__23125__$1,opts){
return (function (val){var statearr_23127_23130 = state;(statearr_23127_23130[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23125,map__23125__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4222__auto__))
{var cb = temp__4222__auto__;var statearr_23128_23131 = state;(statearr_23128_23131[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23120 = null;if (arguments.length > 3) {
  p__23120 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23120);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23132){
var state = cljs.core.first(arglist__23132);
arglist__23132 = cljs.core.next(arglist__23132);
var cont_block = cljs.core.first(arglist__23132);
arglist__23132 = cljs.core.next(arglist__23132);
var ports = cljs.core.first(arglist__23132);
var p__23120 = cljs.core.rest(arglist__23132);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23120);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8696__auto__,k__8697__auto__){var self__ = this;
var this__8696__auto____$1 = this;return cljs.core._lookup.call(null,this__8696__auto____$1,k__8697__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8698__auto__,k23134,else__8699__auto__){var self__ = this;
var this__8698__auto____$1 = this;var G__23136 = (((k23134 instanceof cljs.core.Keyword))?k23134.fqn:null);switch (G__23136) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23134,else__8699__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8710__auto__,writer__8711__auto__,opts__8712__auto__){var self__ = this;
var this__8710__auto____$1 = this;var pr_pair__8713__auto__ = ((function (this__8710__auto____$1){
return (function (keyval__8714__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8711__auto__,cljs.core.pr_writer,""," ","",opts__8712__auto__,keyval__8714__auto__);
});})(this__8710__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8711__auto__,pr_pair__8713__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__8712__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8694__auto__){var self__ = this;
var this__8694__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8690__auto__){var self__ = this;
var this__8690__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8700__auto__){var self__ = this;
var this__8700__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8691__auto__){var self__ = this;
var this__8691__auto____$1 = this;var h__8521__auto__ = self__.__hash;if(!((h__8521__auto__ == null)))
{return h__8521__auto__;
} else
{var h__8521__auto____$1 = cljs.core.hash_imap.call(null,this__8691__auto____$1);self__.__hash = h__8521__auto____$1;
return h__8521__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8692__auto__,other__8693__auto__){var self__ = this;
var this__8692__auto____$1 = this;if(cljs.core.truth_((function (){var and__8098__auto__ = other__8693__auto__;if(cljs.core.truth_(and__8098__auto__))
{return ((this__8692__auto____$1.constructor === other__8693__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8692__auto____$1,other__8693__auto__));
} else
{return and__8098__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8705__auto__,k__8706__auto__){var self__ = this;
var this__8705__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__8706__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8705__auto____$1),self__.__meta),k__8706__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8706__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8703__auto__,k__8704__auto__,G__23133){var self__ = this;
var this__8703__auto____$1 = this;var pred__23137 = cljs.core.keyword_identical_QMARK_;var expr__23138 = k__8704__auto__;if(cljs.core.truth_(pred__23137.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),expr__23138)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__23133,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23137.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),expr__23138)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__23133,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23137.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),expr__23138)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__23133,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23137.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),expr__23138)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__23133,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23137.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226),expr__23138)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__23133,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8704__auto__,G__23133),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8708__auto__){var self__ = this;
var this__8708__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8695__auto__,G__23133){var self__ = this;
var this__8695__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__23133,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8701__auto__,entry__8702__auto__){var self__ = this;
var this__8701__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8702__auto__))
{return cljs.core._assoc.call(null,this__8701__auto____$1,cljs.core._nth.call(null,entry__8702__auto__,(0)),cljs.core._nth.call(null,entry__8702__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8701__auto____$1,entry__8702__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__8730__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__8730__auto__,writer__8731__auto__){return cljs.core._write.call(null,writer__8731__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__23135){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__23135),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__23135),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__23135),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__23135),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__23135),null,cljs.core.dissoc.call(null,G__23135,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_23142 = state;(statearr_23142[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_23142;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__8098__auto__ = exception;if(cljs.core.truth_(and__8098__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__8098__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__8098__auto__ = exception;if(cljs.core.truth_(and__8098__auto__))
{var and__8098__auto____$1 = catch_block;if(cljs.core.truth_(and__8098__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__8098__auto____$1;
}
} else
{return and__8098__auto__;
}
})()))
{var statearr_23148 = state;(statearr_23148[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_23148[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_23148[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_23148[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null));
return statearr_23148;
} else
{if(cljs.core.truth_((function (){var and__8098__auto__ = exception;if(cljs.core.truth_(and__8098__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__8098__auto__;
}
})()))
{var statearr_23149_23153 = state;(statearr_23149_23153[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__23154 = state;
state = G__23154;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__8098__auto__ = exception;if(cljs.core.truth_(and__8098__auto__))
{var and__8098__auto____$1 = cljs.core.not.call(null,catch_block);if(and__8098__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__8098__auto____$1;
}
} else
{return and__8098__auto__;
}
})()))
{var statearr_23150 = state;(statearr_23150[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_23150[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_23150;
} else
{if(cljs.core.truth_((function (){var and__8098__auto__ = cljs.core.not.call(null,exception);if(and__8098__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__8098__auto__;
}
})()))
{var statearr_23151 = state;(statearr_23151[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_23151[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_23151;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_23152 = state;(statearr_23152[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_23152[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_23152;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));


}
}
}
}
}
}
break;
}
});
