// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20525 = (function (f,fn_handler,meta20526){
this.f = f;
this.fn_handler = fn_handler;
this.meta20526 = meta20526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20525.cljs$lang$type = true;
cljs.core.async.t20525.cljs$lang$ctorStr = "cljs.core.async/t20525";
cljs.core.async.t20525.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t20525");
});
cljs.core.async.t20525.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20527){var self__ = this;
var _20527__$1 = this;return self__.meta20526;
});
cljs.core.async.t20525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20527,meta20526__$1){var self__ = this;
var _20527__$1 = this;return (new cljs.core.async.t20525(self__.f,self__.fn_handler,meta20526__$1));
});
cljs.core.async.__GT_t20525 = (function __GT_t20525(f__$1,fn_handler__$1,meta20526){return (new cljs.core.async.t20525(f__$1,fn_handler__$1,meta20526));
});
}
return (new cljs.core.async.t20525(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20529 = buff;if(G__20529)
{var bit__8760__auto__ = null;if(cljs.core.truth_((function (){var or__8110__auto__ = bit__8760__auto__;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return G__20529.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20529.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20529);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20529);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_20530 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_20530);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_20530,ret){
return (function (){return fn1.call(null,val_20530);
});})(val_20530,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8098__auto__ = ret;if(cljs.core.truth_(and__8098__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8098__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8966__auto___20531 = n;var x_20532 = (0);while(true){
if((x_20532 < n__8966__auto___20531))
{(a[x_20532] = (0));
{
var G__20533 = (x_20532 + (1));
x_20532 = G__20533;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__20534 = (i + (1));
i = G__20534;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t20538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20538 = (function (flag,alt_flag,meta20539){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20539 = meta20539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20538.cljs$lang$type = true;
cljs.core.async.t20538.cljs$lang$ctorStr = "cljs.core.async/t20538";
cljs.core.async.t20538.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t20538");
});})(flag))
;
cljs.core.async.t20538.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t20538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t20538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20540){var self__ = this;
var _20540__$1 = this;return self__.meta20539;
});})(flag))
;
cljs.core.async.t20538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20540,meta20539__$1){var self__ = this;
var _20540__$1 = this;return (new cljs.core.async.t20538(self__.flag,self__.alt_flag,meta20539__$1));
});})(flag))
;
cljs.core.async.__GT_t20538 = ((function (flag){
return (function __GT_t20538(flag__$1,alt_flag__$1,meta20539){return (new cljs.core.async.t20538(flag__$1,alt_flag__$1,meta20539));
});})(flag))
;
}
return (new cljs.core.async.t20538(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20544 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20544 = (function (cb,flag,alt_handler,meta20545){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20545 = meta20545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20544.cljs$lang$type = true;
cljs.core.async.t20544.cljs$lang$ctorStr = "cljs.core.async/t20544";
cljs.core.async.t20544.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t20544");
});
cljs.core.async.t20544.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t20544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t20544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20546){var self__ = this;
var _20546__$1 = this;return self__.meta20545;
});
cljs.core.async.t20544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20546,meta20545__$1){var self__ = this;
var _20546__$1 = this;return (new cljs.core.async.t20544(self__.cb,self__.flag,self__.alt_handler,meta20545__$1));
});
cljs.core.async.__GT_t20544 = (function __GT_t20544(cb__$1,flag__$1,alt_handler__$1,meta20545){return (new cljs.core.async.t20544(cb__$1,flag__$1,alt_handler__$1,meta20545));
});
}
return (new cljs.core.async.t20544(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20547_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20547_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8110__auto__ = wport;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__20548 = (i + (1));
i = G__20548;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8110__auto__ = ret;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4222__auto__ = (function (){var and__8098__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8098__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8098__auto__;
}
})();if(cljs.core.truth_(temp__4222__auto__))
{var got = temp__4222__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__20549){var map__20551 = p__20549;var map__20551__$1 = ((cljs.core.seq_QMARK_.call(null,map__20551))?cljs.core.apply.call(null,cljs.core.hash_map,map__20551):map__20551);var opts = map__20551__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__20549 = null;if (arguments.length > 1) {
  p__20549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20549);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20552){
var ports = cljs.core.first(arglist__20552);
var p__20549 = cljs.core.rest(arglist__20552);
return alts_BANG___delegate(ports,p__20549);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20560 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20560 = (function (ch,f,map_LT_,meta20561){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20561 = meta20561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20560.cljs$lang$type = true;
cljs.core.async.t20560.cljs$lang$ctorStr = "cljs.core.async/t20560";
cljs.core.async.t20560.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t20560");
});
cljs.core.async.t20560.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t20560.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t20563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20563 = (function (fn1,_,meta20561,ch,f,map_LT_,meta20564){
this.fn1 = fn1;
this._ = _;
this.meta20561 = meta20561;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20564 = meta20564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20563.cljs$lang$type = true;
cljs.core.async.t20563.cljs$lang$ctorStr = "cljs.core.async/t20563";
cljs.core.async.t20563.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t20563");
});})(___$1))
;
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__20553_SHARP_){return f1.call(null,(((p1__20553_SHARP_ == null))?null:self__.f.call(null,p1__20553_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t20563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20565){var self__ = this;
var _20565__$1 = this;return self__.meta20564;
});})(___$1))
;
cljs.core.async.t20563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20565,meta20564__$1){var self__ = this;
var _20565__$1 = this;return (new cljs.core.async.t20563(self__.fn1,self__._,self__.meta20561,self__.ch,self__.f,self__.map_LT_,meta20564__$1));
});})(___$1))
;
cljs.core.async.__GT_t20563 = ((function (___$1){
return (function __GT_t20563(fn1__$1,___$2,meta20561__$1,ch__$2,f__$2,map_LT___$2,meta20564){return (new cljs.core.async.t20563(fn1__$1,___$2,meta20561__$1,ch__$2,f__$2,map_LT___$2,meta20564));
});})(___$1))
;
}
return (new cljs.core.async.t20563(fn1,___$1,self__.meta20561,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8098__auto__ = ret;if(cljs.core.truth_(and__8098__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8098__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t20560.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20562){var self__ = this;
var _20562__$1 = this;return self__.meta20561;
});
cljs.core.async.t20560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20562,meta20561__$1){var self__ = this;
var _20562__$1 = this;return (new cljs.core.async.t20560(self__.ch,self__.f,self__.map_LT_,meta20561__$1));
});
cljs.core.async.__GT_t20560 = (function __GT_t20560(ch__$1,f__$1,map_LT___$1,meta20561){return (new cljs.core.async.t20560(ch__$1,f__$1,map_LT___$1,meta20561));
});
}
return (new cljs.core.async.t20560(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20569 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20569 = (function (ch,f,map_GT_,meta20570){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20570 = meta20570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20569.cljs$lang$type = true;
cljs.core.async.t20569.cljs$lang$ctorStr = "cljs.core.async/t20569";
cljs.core.async.t20569.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t20569");
});
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20571){var self__ = this;
var _20571__$1 = this;return self__.meta20570;
});
cljs.core.async.t20569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20571,meta20570__$1){var self__ = this;
var _20571__$1 = this;return (new cljs.core.async.t20569(self__.ch,self__.f,self__.map_GT_,meta20570__$1));
});
cljs.core.async.__GT_t20569 = (function __GT_t20569(ch__$1,f__$1,map_GT___$1,meta20570){return (new cljs.core.async.t20569(ch__$1,f__$1,map_GT___$1,meta20570));
});
}
return (new cljs.core.async.t20569(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20575 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20575 = (function (ch,p,filter_GT_,meta20576){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20576 = meta20576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20575.cljs$lang$type = true;
cljs.core.async.t20575.cljs$lang$ctorStr = "cljs.core.async/t20575";
cljs.core.async.t20575.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t20575");
});
cljs.core.async.t20575.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t20575.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20575.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20577){var self__ = this;
var _20577__$1 = this;return self__.meta20576;
});
cljs.core.async.t20575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20577,meta20576__$1){var self__ = this;
var _20577__$1 = this;return (new cljs.core.async.t20575(self__.ch,self__.p,self__.filter_GT_,meta20576__$1));
});
cljs.core.async.__GT_t20575 = (function __GT_t20575(ch__$1,p__$1,filter_GT___$1,meta20576){return (new cljs.core.async.t20575(ch__$1,p__$1,filter_GT___$1,meta20576));
});
}
return (new cljs.core.async.t20575(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16260__auto___20660 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___20660,out){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___20660,out){
return (function (state_20639){var state_val_20640 = (state_20639[(1)]);if((state_val_20640 === (7)))
{var inst_20635 = (state_20639[(2)]);var state_20639__$1 = state_20639;var statearr_20641_20661 = state_20639__$1;(statearr_20641_20661[(2)] = inst_20635);
(statearr_20641_20661[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20640 === (1)))
{var state_20639__$1 = state_20639;var statearr_20642_20662 = state_20639__$1;(statearr_20642_20662[(2)] = null);
(statearr_20642_20662[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20640 === (4)))
{var inst_20621 = (state_20639[(7)]);var inst_20621__$1 = (state_20639[(2)]);var inst_20622 = (inst_20621__$1 == null);var state_20639__$1 = (function (){var statearr_20643 = state_20639;(statearr_20643[(7)] = inst_20621__$1);
return statearr_20643;
})();if(cljs.core.truth_(inst_20622))
{var statearr_20644_20663 = state_20639__$1;(statearr_20644_20663[(1)] = (5));
} else
{var statearr_20645_20664 = state_20639__$1;(statearr_20645_20664[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20640 === (6)))
{var inst_20621 = (state_20639[(7)]);var inst_20626 = p.call(null,inst_20621);var state_20639__$1 = state_20639;if(cljs.core.truth_(inst_20626))
{var statearr_20646_20665 = state_20639__$1;(statearr_20646_20665[(1)] = (8));
} else
{var statearr_20647_20666 = state_20639__$1;(statearr_20647_20666[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20640 === (3)))
{var inst_20637 = (state_20639[(2)]);var state_20639__$1 = state_20639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20639__$1,inst_20637);
} else
{if((state_val_20640 === (2)))
{var state_20639__$1 = state_20639;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20639__$1,(4),ch);
} else
{if((state_val_20640 === (11)))
{var inst_20629 = (state_20639[(2)]);var state_20639__$1 = state_20639;var statearr_20648_20667 = state_20639__$1;(statearr_20648_20667[(2)] = inst_20629);
(statearr_20648_20667[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20640 === (9)))
{var state_20639__$1 = state_20639;var statearr_20649_20668 = state_20639__$1;(statearr_20649_20668[(2)] = null);
(statearr_20649_20668[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20640 === (5)))
{var inst_20624 = cljs.core.async.close_BANG_.call(null,out);var state_20639__$1 = state_20639;var statearr_20650_20669 = state_20639__$1;(statearr_20650_20669[(2)] = inst_20624);
(statearr_20650_20669[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20640 === (10)))
{var inst_20632 = (state_20639[(2)]);var state_20639__$1 = (function (){var statearr_20651 = state_20639;(statearr_20651[(8)] = inst_20632);
return statearr_20651;
})();var statearr_20652_20670 = state_20639__$1;(statearr_20652_20670[(2)] = null);
(statearr_20652_20670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20640 === (8)))
{var inst_20621 = (state_20639[(7)]);var state_20639__$1 = state_20639;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20639__$1,(11),out,inst_20621);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___20660,out))
;return ((function (switch__16195__auto__,c__16260__auto___20660,out){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_20656 = [null,null,null,null,null,null,null,null,null];(statearr_20656[(0)] = state_machine__16196__auto__);
(statearr_20656[(1)] = (1));
return statearr_20656;
});
var state_machine__16196__auto____1 = (function (state_20639){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_20639);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e20657){if((e20657 instanceof Object))
{var ex__16199__auto__ = e20657;var statearr_20658_20671 = state_20639;(statearr_20658_20671[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20639);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20657;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20672 = state_20639;
state_20639 = G__20672;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_20639){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_20639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___20660,out))
})();var state__16262__auto__ = (function (){var statearr_20659 = f__16261__auto__.call(null);(statearr_20659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___20660);
return statearr_20659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___20660,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__16260__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto__){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto__){
return (function (state_20824){var state_val_20825 = (state_20824[(1)]);if((state_val_20825 === (7)))
{var inst_20820 = (state_20824[(2)]);var state_20824__$1 = state_20824;var statearr_20826_20863 = state_20824__$1;(statearr_20826_20863[(2)] = inst_20820);
(statearr_20826_20863[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (20)))
{var inst_20795 = (state_20824[(7)]);var inst_20806 = (state_20824[(2)]);var inst_20807 = cljs.core.next.call(null,inst_20795);var inst_20781 = inst_20807;var inst_20782 = null;var inst_20783 = (0);var inst_20784 = (0);var state_20824__$1 = (function (){var statearr_20827 = state_20824;(statearr_20827[(8)] = inst_20781);
(statearr_20827[(9)] = inst_20806);
(statearr_20827[(10)] = inst_20783);
(statearr_20827[(11)] = inst_20784);
(statearr_20827[(12)] = inst_20782);
return statearr_20827;
})();var statearr_20828_20864 = state_20824__$1;(statearr_20828_20864[(2)] = null);
(statearr_20828_20864[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (1)))
{var state_20824__$1 = state_20824;var statearr_20829_20865 = state_20824__$1;(statearr_20829_20865[(2)] = null);
(statearr_20829_20865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (4)))
{var inst_20770 = (state_20824[(13)]);var inst_20770__$1 = (state_20824[(2)]);var inst_20771 = (inst_20770__$1 == null);var state_20824__$1 = (function (){var statearr_20833 = state_20824;(statearr_20833[(13)] = inst_20770__$1);
return statearr_20833;
})();if(cljs.core.truth_(inst_20771))
{var statearr_20834_20866 = state_20824__$1;(statearr_20834_20866[(1)] = (5));
} else
{var statearr_20835_20867 = state_20824__$1;(statearr_20835_20867[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (15)))
{var state_20824__$1 = state_20824;var statearr_20836_20868 = state_20824__$1;(statearr_20836_20868[(2)] = null);
(statearr_20836_20868[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (13)))
{var inst_20781 = (state_20824[(8)]);var inst_20783 = (state_20824[(10)]);var inst_20784 = (state_20824[(11)]);var inst_20782 = (state_20824[(12)]);var inst_20791 = (state_20824[(2)]);var inst_20792 = (inst_20784 + (1));var tmp20830 = inst_20781;var tmp20831 = inst_20783;var tmp20832 = inst_20782;var inst_20781__$1 = tmp20830;var inst_20782__$1 = tmp20832;var inst_20783__$1 = tmp20831;var inst_20784__$1 = inst_20792;var state_20824__$1 = (function (){var statearr_20837 = state_20824;(statearr_20837[(8)] = inst_20781__$1);
(statearr_20837[(10)] = inst_20783__$1);
(statearr_20837[(11)] = inst_20784__$1);
(statearr_20837[(14)] = inst_20791);
(statearr_20837[(12)] = inst_20782__$1);
return statearr_20837;
})();var statearr_20838_20869 = state_20824__$1;(statearr_20838_20869[(2)] = null);
(statearr_20838_20869[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (6)))
{var inst_20770 = (state_20824[(13)]);var inst_20775 = f.call(null,inst_20770);var inst_20780 = cljs.core.seq.call(null,inst_20775);var inst_20781 = inst_20780;var inst_20782 = null;var inst_20783 = (0);var inst_20784 = (0);var state_20824__$1 = (function (){var statearr_20839 = state_20824;(statearr_20839[(8)] = inst_20781);
(statearr_20839[(10)] = inst_20783);
(statearr_20839[(11)] = inst_20784);
(statearr_20839[(12)] = inst_20782);
return statearr_20839;
})();var statearr_20840_20870 = state_20824__$1;(statearr_20840_20870[(2)] = null);
(statearr_20840_20870[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (17)))
{var inst_20795 = (state_20824[(7)]);var inst_20799 = cljs.core.chunk_first.call(null,inst_20795);var inst_20800 = cljs.core.chunk_rest.call(null,inst_20795);var inst_20801 = cljs.core.count.call(null,inst_20799);var inst_20781 = inst_20800;var inst_20782 = inst_20799;var inst_20783 = inst_20801;var inst_20784 = (0);var state_20824__$1 = (function (){var statearr_20841 = state_20824;(statearr_20841[(8)] = inst_20781);
(statearr_20841[(10)] = inst_20783);
(statearr_20841[(11)] = inst_20784);
(statearr_20841[(12)] = inst_20782);
return statearr_20841;
})();var statearr_20842_20871 = state_20824__$1;(statearr_20842_20871[(2)] = null);
(statearr_20842_20871[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (3)))
{var inst_20822 = (state_20824[(2)]);var state_20824__$1 = state_20824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20824__$1,inst_20822);
} else
{if((state_val_20825 === (12)))
{var inst_20815 = (state_20824[(2)]);var state_20824__$1 = state_20824;var statearr_20843_20872 = state_20824__$1;(statearr_20843_20872[(2)] = inst_20815);
(statearr_20843_20872[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (2)))
{var state_20824__$1 = state_20824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20824__$1,(4),in$);
} else
{if((state_val_20825 === (19)))
{var inst_20810 = (state_20824[(2)]);var state_20824__$1 = state_20824;var statearr_20844_20873 = state_20824__$1;(statearr_20844_20873[(2)] = inst_20810);
(statearr_20844_20873[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (11)))
{var inst_20781 = (state_20824[(8)]);var inst_20795 = (state_20824[(7)]);var inst_20795__$1 = cljs.core.seq.call(null,inst_20781);var state_20824__$1 = (function (){var statearr_20845 = state_20824;(statearr_20845[(7)] = inst_20795__$1);
return statearr_20845;
})();if(inst_20795__$1)
{var statearr_20846_20874 = state_20824__$1;(statearr_20846_20874[(1)] = (14));
} else
{var statearr_20847_20875 = state_20824__$1;(statearr_20847_20875[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (9)))
{var inst_20817 = (state_20824[(2)]);var state_20824__$1 = (function (){var statearr_20848 = state_20824;(statearr_20848[(15)] = inst_20817);
return statearr_20848;
})();var statearr_20849_20876 = state_20824__$1;(statearr_20849_20876[(2)] = null);
(statearr_20849_20876[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (5)))
{var inst_20773 = cljs.core.async.close_BANG_.call(null,out);var state_20824__$1 = state_20824;var statearr_20850_20877 = state_20824__$1;(statearr_20850_20877[(2)] = inst_20773);
(statearr_20850_20877[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (14)))
{var inst_20795 = (state_20824[(7)]);var inst_20797 = cljs.core.chunked_seq_QMARK_.call(null,inst_20795);var state_20824__$1 = state_20824;if(inst_20797)
{var statearr_20851_20878 = state_20824__$1;(statearr_20851_20878[(1)] = (17));
} else
{var statearr_20852_20879 = state_20824__$1;(statearr_20852_20879[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (16)))
{var inst_20813 = (state_20824[(2)]);var state_20824__$1 = state_20824;var statearr_20853_20880 = state_20824__$1;(statearr_20853_20880[(2)] = inst_20813);
(statearr_20853_20880[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20825 === (10)))
{var inst_20784 = (state_20824[(11)]);var inst_20782 = (state_20824[(12)]);var inst_20789 = cljs.core._nth.call(null,inst_20782,inst_20784);var state_20824__$1 = state_20824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20824__$1,(13),out,inst_20789);
} else
{if((state_val_20825 === (18)))
{var inst_20795 = (state_20824[(7)]);var inst_20804 = cljs.core.first.call(null,inst_20795);var state_20824__$1 = state_20824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20824__$1,(20),out,inst_20804);
} else
{if((state_val_20825 === (8)))
{var inst_20783 = (state_20824[(10)]);var inst_20784 = (state_20824[(11)]);var inst_20786 = (inst_20784 < inst_20783);var inst_20787 = inst_20786;var state_20824__$1 = state_20824;if(cljs.core.truth_(inst_20787))
{var statearr_20854_20881 = state_20824__$1;(statearr_20854_20881[(1)] = (10));
} else
{var statearr_20855_20882 = state_20824__$1;(statearr_20855_20882[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto__))
;return ((function (switch__16195__auto__,c__16260__auto__){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_20859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20859[(0)] = state_machine__16196__auto__);
(statearr_20859[(1)] = (1));
return statearr_20859;
});
var state_machine__16196__auto____1 = (function (state_20824){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_20824);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e20860){if((e20860 instanceof Object))
{var ex__16199__auto__ = e20860;var statearr_20861_20883 = state_20824;(statearr_20861_20883[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20860;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20884 = state_20824;
state_20824 = G__20884;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_20824){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_20824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto__))
})();var state__16262__auto__ = (function (){var statearr_20862 = f__16261__auto__.call(null);(statearr_20862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto__);
return statearr_20862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto__))
);
return c__16260__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__16260__auto___20965 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___20965){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___20965){
return (function (state_20944){var state_val_20945 = (state_20944[(1)]);if((state_val_20945 === (7)))
{var inst_20940 = (state_20944[(2)]);var state_20944__$1 = state_20944;var statearr_20946_20966 = state_20944__$1;(statearr_20946_20966[(2)] = inst_20940);
(statearr_20946_20966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20945 === (1)))
{var state_20944__$1 = state_20944;var statearr_20947_20967 = state_20944__$1;(statearr_20947_20967[(2)] = null);
(statearr_20947_20967[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20945 === (4)))
{var inst_20927 = (state_20944[(7)]);var inst_20927__$1 = (state_20944[(2)]);var inst_20928 = (inst_20927__$1 == null);var state_20944__$1 = (function (){var statearr_20948 = state_20944;(statearr_20948[(7)] = inst_20927__$1);
return statearr_20948;
})();if(cljs.core.truth_(inst_20928))
{var statearr_20949_20968 = state_20944__$1;(statearr_20949_20968[(1)] = (5));
} else
{var statearr_20950_20969 = state_20944__$1;(statearr_20950_20969[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20945 === (6)))
{var inst_20927 = (state_20944[(7)]);var state_20944__$1 = state_20944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20944__$1,(11),to,inst_20927);
} else
{if((state_val_20945 === (3)))
{var inst_20942 = (state_20944[(2)]);var state_20944__$1 = state_20944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20944__$1,inst_20942);
} else
{if((state_val_20945 === (2)))
{var state_20944__$1 = state_20944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20944__$1,(4),from);
} else
{if((state_val_20945 === (11)))
{var inst_20937 = (state_20944[(2)]);var state_20944__$1 = (function (){var statearr_20951 = state_20944;(statearr_20951[(8)] = inst_20937);
return statearr_20951;
})();var statearr_20952_20970 = state_20944__$1;(statearr_20952_20970[(2)] = null);
(statearr_20952_20970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20945 === (9)))
{var state_20944__$1 = state_20944;var statearr_20953_20971 = state_20944__$1;(statearr_20953_20971[(2)] = null);
(statearr_20953_20971[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20945 === (5)))
{var state_20944__$1 = state_20944;if(cljs.core.truth_(close_QMARK_))
{var statearr_20954_20972 = state_20944__$1;(statearr_20954_20972[(1)] = (8));
} else
{var statearr_20955_20973 = state_20944__$1;(statearr_20955_20973[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20945 === (10)))
{var inst_20934 = (state_20944[(2)]);var state_20944__$1 = state_20944;var statearr_20956_20974 = state_20944__$1;(statearr_20956_20974[(2)] = inst_20934);
(statearr_20956_20974[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20945 === (8)))
{var inst_20931 = cljs.core.async.close_BANG_.call(null,to);var state_20944__$1 = state_20944;var statearr_20957_20975 = state_20944__$1;(statearr_20957_20975[(2)] = inst_20931);
(statearr_20957_20975[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___20965))
;return ((function (switch__16195__auto__,c__16260__auto___20965){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_20961 = [null,null,null,null,null,null,null,null,null];(statearr_20961[(0)] = state_machine__16196__auto__);
(statearr_20961[(1)] = (1));
return statearr_20961;
});
var state_machine__16196__auto____1 = (function (state_20944){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_20944);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e20962){if((e20962 instanceof Object))
{var ex__16199__auto__ = e20962;var statearr_20963_20976 = state_20944;(statearr_20963_20976[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20962;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20977 = state_20944;
state_20944 = G__20977;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_20944){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_20944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___20965))
})();var state__16262__auto__ = (function (){var statearr_20964 = f__16261__auto__.call(null);(statearr_20964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___20965);
return statearr_20964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___20965))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__16260__auto___21064 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___21064,tc,fc){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___21064,tc,fc){
return (function (state_21042){var state_val_21043 = (state_21042[(1)]);if((state_val_21043 === (7)))
{var inst_21038 = (state_21042[(2)]);var state_21042__$1 = state_21042;var statearr_21044_21065 = state_21042__$1;(statearr_21044_21065[(2)] = inst_21038);
(statearr_21044_21065[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21043 === (1)))
{var state_21042__$1 = state_21042;var statearr_21045_21066 = state_21042__$1;(statearr_21045_21066[(2)] = null);
(statearr_21045_21066[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21043 === (4)))
{var inst_21023 = (state_21042[(7)]);var inst_21023__$1 = (state_21042[(2)]);var inst_21024 = (inst_21023__$1 == null);var state_21042__$1 = (function (){var statearr_21046 = state_21042;(statearr_21046[(7)] = inst_21023__$1);
return statearr_21046;
})();if(cljs.core.truth_(inst_21024))
{var statearr_21047_21067 = state_21042__$1;(statearr_21047_21067[(1)] = (5));
} else
{var statearr_21048_21068 = state_21042__$1;(statearr_21048_21068[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21043 === (6)))
{var inst_21023 = (state_21042[(7)]);var inst_21029 = p.call(null,inst_21023);var state_21042__$1 = state_21042;if(cljs.core.truth_(inst_21029))
{var statearr_21049_21069 = state_21042__$1;(statearr_21049_21069[(1)] = (9));
} else
{var statearr_21050_21070 = state_21042__$1;(statearr_21050_21070[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21043 === (3)))
{var inst_21040 = (state_21042[(2)]);var state_21042__$1 = state_21042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21042__$1,inst_21040);
} else
{if((state_val_21043 === (2)))
{var state_21042__$1 = state_21042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21042__$1,(4),ch);
} else
{if((state_val_21043 === (11)))
{var inst_21023 = (state_21042[(7)]);var inst_21033 = (state_21042[(2)]);var state_21042__$1 = state_21042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21042__$1,(8),inst_21033,inst_21023);
} else
{if((state_val_21043 === (9)))
{var state_21042__$1 = state_21042;var statearr_21051_21071 = state_21042__$1;(statearr_21051_21071[(2)] = tc);
(statearr_21051_21071[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21043 === (5)))
{var inst_21026 = cljs.core.async.close_BANG_.call(null,tc);var inst_21027 = cljs.core.async.close_BANG_.call(null,fc);var state_21042__$1 = (function (){var statearr_21052 = state_21042;(statearr_21052[(8)] = inst_21026);
return statearr_21052;
})();var statearr_21053_21072 = state_21042__$1;(statearr_21053_21072[(2)] = inst_21027);
(statearr_21053_21072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21043 === (10)))
{var state_21042__$1 = state_21042;var statearr_21054_21073 = state_21042__$1;(statearr_21054_21073[(2)] = fc);
(statearr_21054_21073[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21043 === (8)))
{var inst_21035 = (state_21042[(2)]);var state_21042__$1 = (function (){var statearr_21055 = state_21042;(statearr_21055[(9)] = inst_21035);
return statearr_21055;
})();var statearr_21056_21074 = state_21042__$1;(statearr_21056_21074[(2)] = null);
(statearr_21056_21074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___21064,tc,fc))
;return ((function (switch__16195__auto__,c__16260__auto___21064,tc,fc){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_21060 = [null,null,null,null,null,null,null,null,null,null];(statearr_21060[(0)] = state_machine__16196__auto__);
(statearr_21060[(1)] = (1));
return statearr_21060;
});
var state_machine__16196__auto____1 = (function (state_21042){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_21042);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e21061){if((e21061 instanceof Object))
{var ex__16199__auto__ = e21061;var statearr_21062_21075 = state_21042;(statearr_21062_21075[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21061;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21076 = state_21042;
state_21042 = G__21076;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_21042){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_21042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___21064,tc,fc))
})();var state__16262__auto__ = (function (){var statearr_21063 = f__16261__auto__.call(null);(statearr_21063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___21064);
return statearr_21063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___21064,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__16260__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto__){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto__){
return (function (state_21123){var state_val_21124 = (state_21123[(1)]);if((state_val_21124 === (7)))
{var inst_21119 = (state_21123[(2)]);var state_21123__$1 = state_21123;var statearr_21125_21141 = state_21123__$1;(statearr_21125_21141[(2)] = inst_21119);
(statearr_21125_21141[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21124 === (6)))
{var inst_21109 = (state_21123[(7)]);var inst_21112 = (state_21123[(8)]);var inst_21116 = f.call(null,inst_21109,inst_21112);var inst_21109__$1 = inst_21116;var state_21123__$1 = (function (){var statearr_21126 = state_21123;(statearr_21126[(7)] = inst_21109__$1);
return statearr_21126;
})();var statearr_21127_21142 = state_21123__$1;(statearr_21127_21142[(2)] = null);
(statearr_21127_21142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21124 === (5)))
{var inst_21109 = (state_21123[(7)]);var state_21123__$1 = state_21123;var statearr_21128_21143 = state_21123__$1;(statearr_21128_21143[(2)] = inst_21109);
(statearr_21128_21143[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21124 === (4)))
{var inst_21112 = (state_21123[(8)]);var inst_21112__$1 = (state_21123[(2)]);var inst_21113 = (inst_21112__$1 == null);var state_21123__$1 = (function (){var statearr_21129 = state_21123;(statearr_21129[(8)] = inst_21112__$1);
return statearr_21129;
})();if(cljs.core.truth_(inst_21113))
{var statearr_21130_21144 = state_21123__$1;(statearr_21130_21144[(1)] = (5));
} else
{var statearr_21131_21145 = state_21123__$1;(statearr_21131_21145[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21124 === (3)))
{var inst_21121 = (state_21123[(2)]);var state_21123__$1 = state_21123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21123__$1,inst_21121);
} else
{if((state_val_21124 === (2)))
{var state_21123__$1 = state_21123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21123__$1,(4),ch);
} else
{if((state_val_21124 === (1)))
{var inst_21109 = init;var state_21123__$1 = (function (){var statearr_21132 = state_21123;(statearr_21132[(7)] = inst_21109);
return statearr_21132;
})();var statearr_21133_21146 = state_21123__$1;(statearr_21133_21146[(2)] = null);
(statearr_21133_21146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__16260__auto__))
;return ((function (switch__16195__auto__,c__16260__auto__){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_21137 = [null,null,null,null,null,null,null,null,null];(statearr_21137[(0)] = state_machine__16196__auto__);
(statearr_21137[(1)] = (1));
return statearr_21137;
});
var state_machine__16196__auto____1 = (function (state_21123){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_21123);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e21138){if((e21138 instanceof Object))
{var ex__16199__auto__ = e21138;var statearr_21139_21147 = state_21123;(statearr_21139_21147[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21138;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21148 = state_21123;
state_21123 = G__21148;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_21123){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_21123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto__))
})();var state__16262__auto__ = (function (){var statearr_21140 = f__16261__auto__.call(null);(statearr_21140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto__);
return statearr_21140;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto__))
);
return c__16260__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__16260__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto__){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto__){
return (function (state_21210){var state_val_21211 = (state_21210[(1)]);if((state_val_21211 === (7)))
{var inst_21191 = (state_21210[(7)]);var inst_21196 = (state_21210[(2)]);var inst_21197 = cljs.core.next.call(null,inst_21191);var inst_21191__$1 = inst_21197;var state_21210__$1 = (function (){var statearr_21212 = state_21210;(statearr_21212[(8)] = inst_21196);
(statearr_21212[(7)] = inst_21191__$1);
return statearr_21212;
})();var statearr_21213_21231 = state_21210__$1;(statearr_21213_21231[(2)] = null);
(statearr_21213_21231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (1)))
{var inst_21190 = cljs.core.seq.call(null,coll);var inst_21191 = inst_21190;var state_21210__$1 = (function (){var statearr_21214 = state_21210;(statearr_21214[(7)] = inst_21191);
return statearr_21214;
})();var statearr_21215_21232 = state_21210__$1;(statearr_21215_21232[(2)] = null);
(statearr_21215_21232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (4)))
{var inst_21191 = (state_21210[(7)]);var inst_21194 = cljs.core.first.call(null,inst_21191);var state_21210__$1 = state_21210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21210__$1,(7),ch,inst_21194);
} else
{if((state_val_21211 === (6)))
{var inst_21206 = (state_21210[(2)]);var state_21210__$1 = state_21210;var statearr_21216_21233 = state_21210__$1;(statearr_21216_21233[(2)] = inst_21206);
(statearr_21216_21233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (3)))
{var inst_21208 = (state_21210[(2)]);var state_21210__$1 = state_21210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21210__$1,inst_21208);
} else
{if((state_val_21211 === (2)))
{var inst_21191 = (state_21210[(7)]);var state_21210__$1 = state_21210;if(cljs.core.truth_(inst_21191))
{var statearr_21217_21234 = state_21210__$1;(statearr_21217_21234[(1)] = (4));
} else
{var statearr_21218_21235 = state_21210__$1;(statearr_21218_21235[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (9)))
{var state_21210__$1 = state_21210;var statearr_21219_21236 = state_21210__$1;(statearr_21219_21236[(2)] = null);
(statearr_21219_21236[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (5)))
{var state_21210__$1 = state_21210;if(cljs.core.truth_(close_QMARK_))
{var statearr_21220_21237 = state_21210__$1;(statearr_21220_21237[(1)] = (8));
} else
{var statearr_21221_21238 = state_21210__$1;(statearr_21221_21238[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (10)))
{var inst_21204 = (state_21210[(2)]);var state_21210__$1 = state_21210;var statearr_21222_21239 = state_21210__$1;(statearr_21222_21239[(2)] = inst_21204);
(statearr_21222_21239[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21211 === (8)))
{var inst_21201 = cljs.core.async.close_BANG_.call(null,ch);var state_21210__$1 = state_21210;var statearr_21223_21240 = state_21210__$1;(statearr_21223_21240[(2)] = inst_21201);
(statearr_21223_21240[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto__))
;return ((function (switch__16195__auto__,c__16260__auto__){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_21227 = [null,null,null,null,null,null,null,null,null];(statearr_21227[(0)] = state_machine__16196__auto__);
(statearr_21227[(1)] = (1));
return statearr_21227;
});
var state_machine__16196__auto____1 = (function (state_21210){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_21210);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e21228){if((e21228 instanceof Object))
{var ex__16199__auto__ = e21228;var statearr_21229_21241 = state_21210;(statearr_21229_21241[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21210);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21228;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21242 = state_21210;
state_21210 = G__21242;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_21210){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_21210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto__))
})();var state__16262__auto__ = (function (){var statearr_21230 = f__16261__auto__.call(null);(statearr_21230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto__);
return statearr_21230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto__))
);
return c__16260__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj21244 = {};return obj21244;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8098__auto__ = _;if(and__8098__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8098__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8737__auto__ = (((_ == null))?null:_);return (function (){var or__8110__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21246 = {};return obj21246;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8098__auto__ = m;if(and__8098__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8098__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8737__auto__ = (((m == null))?null:m);return (function (){var or__8110__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8098__auto__ = m;if(and__8098__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8098__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8737__auto__ = (((m == null))?null:m);return (function (){var or__8110__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8098__auto__ = m;if(and__8098__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8098__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8737__auto__ = (((m == null))?null:m);return (function (){var or__8110__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21470 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21470 = (function (cs,ch,mult,meta21471){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21471 = meta21471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21470.cljs$lang$type = true;
cljs.core.async.t21470.cljs$lang$ctorStr = "cljs.core.async/t21470";
cljs.core.async.t21470.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t21470");
});})(cs))
;
cljs.core.async.t21470.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21470.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21470.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21470.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21470.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21472){var self__ = this;
var _21472__$1 = this;return self__.meta21471;
});})(cs))
;
cljs.core.async.t21470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21472,meta21471__$1){var self__ = this;
var _21472__$1 = this;return (new cljs.core.async.t21470(self__.cs,self__.ch,self__.mult,meta21471__$1));
});})(cs))
;
cljs.core.async.__GT_t21470 = ((function (cs){
return (function __GT_t21470(cs__$1,ch__$1,mult__$1,meta21471){return (new cljs.core.async.t21470(cs__$1,ch__$1,mult__$1,meta21471));
});})(cs))
;
}
return (new cljs.core.async.t21470(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__16260__auto___21693 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___21693,cs,m,dchan,dctr,done){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___21693,cs,m,dchan,dctr,done){
return (function (state_21607){var state_val_21608 = (state_21607[(1)]);if((state_val_21608 === (7)))
{var inst_21603 = (state_21607[(2)]);var state_21607__$1 = state_21607;var statearr_21609_21694 = state_21607__$1;(statearr_21609_21694[(2)] = inst_21603);
(statearr_21609_21694[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (20)))
{var inst_21504 = (state_21607[(7)]);var inst_21514 = cljs.core.first.call(null,inst_21504);var inst_21515 = cljs.core.nth.call(null,inst_21514,(0),null);var inst_21516 = cljs.core.nth.call(null,inst_21514,(1),null);var state_21607__$1 = (function (){var statearr_21610 = state_21607;(statearr_21610[(8)] = inst_21515);
return statearr_21610;
})();if(cljs.core.truth_(inst_21516))
{var statearr_21611_21695 = state_21607__$1;(statearr_21611_21695[(1)] = (22));
} else
{var statearr_21612_21696 = state_21607__$1;(statearr_21612_21696[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (27)))
{var inst_21546 = (state_21607[(9)]);var inst_21544 = (state_21607[(10)]);var inst_21551 = cljs.core._nth.call(null,inst_21544,inst_21546);var state_21607__$1 = (function (){var statearr_21613 = state_21607;(statearr_21613[(11)] = inst_21551);
return statearr_21613;
})();var statearr_21614_21697 = state_21607__$1;(statearr_21614_21697[(2)] = null);
(statearr_21614_21697[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (1)))
{var state_21607__$1 = state_21607;var statearr_21615_21698 = state_21607__$1;(statearr_21615_21698[(2)] = null);
(statearr_21615_21698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (24)))
{var inst_21504 = (state_21607[(7)]);var inst_21521 = (state_21607[(2)]);var inst_21522 = cljs.core.next.call(null,inst_21504);var inst_21484 = inst_21522;var inst_21485 = null;var inst_21486 = (0);var inst_21487 = (0);var state_21607__$1 = (function (){var statearr_21616 = state_21607;(statearr_21616[(12)] = inst_21487);
(statearr_21616[(13)] = inst_21484);
(statearr_21616[(14)] = inst_21521);
(statearr_21616[(15)] = inst_21486);
(statearr_21616[(16)] = inst_21485);
return statearr_21616;
})();var statearr_21617_21699 = state_21607__$1;(statearr_21617_21699[(2)] = null);
(statearr_21617_21699[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (39)))
{var inst_21564 = (state_21607[(17)]);var inst_21582 = (state_21607[(2)]);var inst_21583 = cljs.core.next.call(null,inst_21564);var inst_21543 = inst_21583;var inst_21544 = null;var inst_21545 = (0);var inst_21546 = (0);var state_21607__$1 = (function (){var statearr_21621 = state_21607;(statearr_21621[(18)] = inst_21543);
(statearr_21621[(9)] = inst_21546);
(statearr_21621[(19)] = inst_21545);
(statearr_21621[(20)] = inst_21582);
(statearr_21621[(10)] = inst_21544);
return statearr_21621;
})();var statearr_21622_21700 = state_21607__$1;(statearr_21622_21700[(2)] = null);
(statearr_21622_21700[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (4)))
{var inst_21475 = (state_21607[(21)]);var inst_21475__$1 = (state_21607[(2)]);var inst_21476 = (inst_21475__$1 == null);var state_21607__$1 = (function (){var statearr_21623 = state_21607;(statearr_21623[(21)] = inst_21475__$1);
return statearr_21623;
})();if(cljs.core.truth_(inst_21476))
{var statearr_21624_21701 = state_21607__$1;(statearr_21624_21701[(1)] = (5));
} else
{var statearr_21625_21702 = state_21607__$1;(statearr_21625_21702[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (15)))
{var inst_21487 = (state_21607[(12)]);var inst_21484 = (state_21607[(13)]);var inst_21486 = (state_21607[(15)]);var inst_21485 = (state_21607[(16)]);var inst_21500 = (state_21607[(2)]);var inst_21501 = (inst_21487 + (1));var tmp21618 = inst_21484;var tmp21619 = inst_21486;var tmp21620 = inst_21485;var inst_21484__$1 = tmp21618;var inst_21485__$1 = tmp21620;var inst_21486__$1 = tmp21619;var inst_21487__$1 = inst_21501;var state_21607__$1 = (function (){var statearr_21626 = state_21607;(statearr_21626[(12)] = inst_21487__$1);
(statearr_21626[(13)] = inst_21484__$1);
(statearr_21626[(22)] = inst_21500);
(statearr_21626[(15)] = inst_21486__$1);
(statearr_21626[(16)] = inst_21485__$1);
return statearr_21626;
})();var statearr_21627_21703 = state_21607__$1;(statearr_21627_21703[(2)] = null);
(statearr_21627_21703[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (21)))
{var inst_21525 = (state_21607[(2)]);var state_21607__$1 = state_21607;var statearr_21628_21704 = state_21607__$1;(statearr_21628_21704[(2)] = inst_21525);
(statearr_21628_21704[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (31)))
{var inst_21551 = (state_21607[(11)]);var inst_21552 = (state_21607[(2)]);var inst_21553 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_21554 = cljs.core.async.untap_STAR_.call(null,m,inst_21551);var state_21607__$1 = (function (){var statearr_21629 = state_21607;(statearr_21629[(23)] = inst_21552);
(statearr_21629[(24)] = inst_21553);
return statearr_21629;
})();var statearr_21630_21705 = state_21607__$1;(statearr_21630_21705[(2)] = inst_21554);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21607__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (32)))
{var inst_21475 = (state_21607[(21)]);var inst_21551 = (state_21607[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21607,(31),Object,null,(30));var inst_21558 = cljs.core.async.put_BANG_.call(null,inst_21551,inst_21475,done);var state_21607__$1 = state_21607;var statearr_21631_21706 = state_21607__$1;(statearr_21631_21706[(2)] = inst_21558);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21607__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (40)))
{var inst_21573 = (state_21607[(25)]);var inst_21574 = (state_21607[(2)]);var inst_21575 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_21576 = cljs.core.async.untap_STAR_.call(null,m,inst_21573);var state_21607__$1 = (function (){var statearr_21632 = state_21607;(statearr_21632[(26)] = inst_21574);
(statearr_21632[(27)] = inst_21575);
return statearr_21632;
})();var statearr_21633_21707 = state_21607__$1;(statearr_21633_21707[(2)] = inst_21576);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21607__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (33)))
{var inst_21564 = (state_21607[(17)]);var inst_21566 = cljs.core.chunked_seq_QMARK_.call(null,inst_21564);var state_21607__$1 = state_21607;if(inst_21566)
{var statearr_21634_21708 = state_21607__$1;(statearr_21634_21708[(1)] = (36));
} else
{var statearr_21635_21709 = state_21607__$1;(statearr_21635_21709[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (13)))
{var inst_21494 = (state_21607[(28)]);var inst_21497 = cljs.core.async.close_BANG_.call(null,inst_21494);var state_21607__$1 = state_21607;var statearr_21636_21710 = state_21607__$1;(statearr_21636_21710[(2)] = inst_21497);
(statearr_21636_21710[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (22)))
{var inst_21515 = (state_21607[(8)]);var inst_21518 = cljs.core.async.close_BANG_.call(null,inst_21515);var state_21607__$1 = state_21607;var statearr_21637_21711 = state_21607__$1;(statearr_21637_21711[(2)] = inst_21518);
(statearr_21637_21711[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (36)))
{var inst_21564 = (state_21607[(17)]);var inst_21568 = cljs.core.chunk_first.call(null,inst_21564);var inst_21569 = cljs.core.chunk_rest.call(null,inst_21564);var inst_21570 = cljs.core.count.call(null,inst_21568);var inst_21543 = inst_21569;var inst_21544 = inst_21568;var inst_21545 = inst_21570;var inst_21546 = (0);var state_21607__$1 = (function (){var statearr_21638 = state_21607;(statearr_21638[(18)] = inst_21543);
(statearr_21638[(9)] = inst_21546);
(statearr_21638[(19)] = inst_21545);
(statearr_21638[(10)] = inst_21544);
return statearr_21638;
})();var statearr_21639_21712 = state_21607__$1;(statearr_21639_21712[(2)] = null);
(statearr_21639_21712[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (41)))
{var inst_21475 = (state_21607[(21)]);var inst_21573 = (state_21607[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21607,(40),Object,null,(39));var inst_21580 = cljs.core.async.put_BANG_.call(null,inst_21573,inst_21475,done);var state_21607__$1 = state_21607;var statearr_21640_21713 = state_21607__$1;(statearr_21640_21713[(2)] = inst_21580);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21607__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (43)))
{var state_21607__$1 = state_21607;var statearr_21641_21714 = state_21607__$1;(statearr_21641_21714[(2)] = null);
(statearr_21641_21714[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (29)))
{var inst_21591 = (state_21607[(2)]);var state_21607__$1 = state_21607;var statearr_21642_21715 = state_21607__$1;(statearr_21642_21715[(2)] = inst_21591);
(statearr_21642_21715[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (44)))
{var inst_21600 = (state_21607[(2)]);var state_21607__$1 = (function (){var statearr_21643 = state_21607;(statearr_21643[(29)] = inst_21600);
return statearr_21643;
})();var statearr_21644_21716 = state_21607__$1;(statearr_21644_21716[(2)] = null);
(statearr_21644_21716[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (6)))
{var inst_21535 = (state_21607[(30)]);var inst_21534 = cljs.core.deref.call(null,cs);var inst_21535__$1 = cljs.core.keys.call(null,inst_21534);var inst_21536 = cljs.core.count.call(null,inst_21535__$1);var inst_21537 = cljs.core.reset_BANG_.call(null,dctr,inst_21536);var inst_21542 = cljs.core.seq.call(null,inst_21535__$1);var inst_21543 = inst_21542;var inst_21544 = null;var inst_21545 = (0);var inst_21546 = (0);var state_21607__$1 = (function (){var statearr_21645 = state_21607;(statearr_21645[(31)] = inst_21537);
(statearr_21645[(18)] = inst_21543);
(statearr_21645[(9)] = inst_21546);
(statearr_21645[(19)] = inst_21545);
(statearr_21645[(30)] = inst_21535__$1);
(statearr_21645[(10)] = inst_21544);
return statearr_21645;
})();var statearr_21646_21717 = state_21607__$1;(statearr_21646_21717[(2)] = null);
(statearr_21646_21717[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (28)))
{var inst_21543 = (state_21607[(18)]);var inst_21564 = (state_21607[(17)]);var inst_21564__$1 = cljs.core.seq.call(null,inst_21543);var state_21607__$1 = (function (){var statearr_21647 = state_21607;(statearr_21647[(17)] = inst_21564__$1);
return statearr_21647;
})();if(inst_21564__$1)
{var statearr_21648_21718 = state_21607__$1;(statearr_21648_21718[(1)] = (33));
} else
{var statearr_21649_21719 = state_21607__$1;(statearr_21649_21719[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (25)))
{var inst_21546 = (state_21607[(9)]);var inst_21545 = (state_21607[(19)]);var inst_21548 = (inst_21546 < inst_21545);var inst_21549 = inst_21548;var state_21607__$1 = state_21607;if(cljs.core.truth_(inst_21549))
{var statearr_21650_21720 = state_21607__$1;(statearr_21650_21720[(1)] = (27));
} else
{var statearr_21651_21721 = state_21607__$1;(statearr_21651_21721[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (34)))
{var state_21607__$1 = state_21607;var statearr_21652_21722 = state_21607__$1;(statearr_21652_21722[(2)] = null);
(statearr_21652_21722[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (17)))
{var state_21607__$1 = state_21607;var statearr_21653_21723 = state_21607__$1;(statearr_21653_21723[(2)] = null);
(statearr_21653_21723[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (3)))
{var inst_21605 = (state_21607[(2)]);var state_21607__$1 = state_21607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21607__$1,inst_21605);
} else
{if((state_val_21608 === (12)))
{var inst_21530 = (state_21607[(2)]);var state_21607__$1 = state_21607;var statearr_21654_21724 = state_21607__$1;(statearr_21654_21724[(2)] = inst_21530);
(statearr_21654_21724[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (2)))
{var state_21607__$1 = state_21607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21607__$1,(4),ch);
} else
{if((state_val_21608 === (23)))
{var state_21607__$1 = state_21607;var statearr_21655_21725 = state_21607__$1;(statearr_21655_21725[(2)] = null);
(statearr_21655_21725[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (35)))
{var inst_21589 = (state_21607[(2)]);var state_21607__$1 = state_21607;var statearr_21656_21726 = state_21607__$1;(statearr_21656_21726[(2)] = inst_21589);
(statearr_21656_21726[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (19)))
{var inst_21504 = (state_21607[(7)]);var inst_21508 = cljs.core.chunk_first.call(null,inst_21504);var inst_21509 = cljs.core.chunk_rest.call(null,inst_21504);var inst_21510 = cljs.core.count.call(null,inst_21508);var inst_21484 = inst_21509;var inst_21485 = inst_21508;var inst_21486 = inst_21510;var inst_21487 = (0);var state_21607__$1 = (function (){var statearr_21657 = state_21607;(statearr_21657[(12)] = inst_21487);
(statearr_21657[(13)] = inst_21484);
(statearr_21657[(15)] = inst_21486);
(statearr_21657[(16)] = inst_21485);
return statearr_21657;
})();var statearr_21658_21727 = state_21607__$1;(statearr_21658_21727[(2)] = null);
(statearr_21658_21727[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (11)))
{var inst_21484 = (state_21607[(13)]);var inst_21504 = (state_21607[(7)]);var inst_21504__$1 = cljs.core.seq.call(null,inst_21484);var state_21607__$1 = (function (){var statearr_21659 = state_21607;(statearr_21659[(7)] = inst_21504__$1);
return statearr_21659;
})();if(inst_21504__$1)
{var statearr_21660_21728 = state_21607__$1;(statearr_21660_21728[(1)] = (16));
} else
{var statearr_21661_21729 = state_21607__$1;(statearr_21661_21729[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (9)))
{var inst_21532 = (state_21607[(2)]);var state_21607__$1 = state_21607;var statearr_21662_21730 = state_21607__$1;(statearr_21662_21730[(2)] = inst_21532);
(statearr_21662_21730[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (5)))
{var inst_21482 = cljs.core.deref.call(null,cs);var inst_21483 = cljs.core.seq.call(null,inst_21482);var inst_21484 = inst_21483;var inst_21485 = null;var inst_21486 = (0);var inst_21487 = (0);var state_21607__$1 = (function (){var statearr_21663 = state_21607;(statearr_21663[(12)] = inst_21487);
(statearr_21663[(13)] = inst_21484);
(statearr_21663[(15)] = inst_21486);
(statearr_21663[(16)] = inst_21485);
return statearr_21663;
})();var statearr_21664_21731 = state_21607__$1;(statearr_21664_21731[(2)] = null);
(statearr_21664_21731[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (14)))
{var state_21607__$1 = state_21607;var statearr_21665_21732 = state_21607__$1;(statearr_21665_21732[(2)] = null);
(statearr_21665_21732[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (45)))
{var inst_21597 = (state_21607[(2)]);var state_21607__$1 = state_21607;var statearr_21666_21733 = state_21607__$1;(statearr_21666_21733[(2)] = inst_21597);
(statearr_21666_21733[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (26)))
{var inst_21535 = (state_21607[(30)]);var inst_21593 = (state_21607[(2)]);var inst_21594 = cljs.core.seq.call(null,inst_21535);var state_21607__$1 = (function (){var statearr_21667 = state_21607;(statearr_21667[(32)] = inst_21593);
return statearr_21667;
})();if(inst_21594)
{var statearr_21668_21734 = state_21607__$1;(statearr_21668_21734[(1)] = (42));
} else
{var statearr_21669_21735 = state_21607__$1;(statearr_21669_21735[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (16)))
{var inst_21504 = (state_21607[(7)]);var inst_21506 = cljs.core.chunked_seq_QMARK_.call(null,inst_21504);var state_21607__$1 = state_21607;if(inst_21506)
{var statearr_21673_21736 = state_21607__$1;(statearr_21673_21736[(1)] = (19));
} else
{var statearr_21674_21737 = state_21607__$1;(statearr_21674_21737[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (38)))
{var inst_21586 = (state_21607[(2)]);var state_21607__$1 = state_21607;var statearr_21675_21738 = state_21607__$1;(statearr_21675_21738[(2)] = inst_21586);
(statearr_21675_21738[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (30)))
{var inst_21543 = (state_21607[(18)]);var inst_21546 = (state_21607[(9)]);var inst_21545 = (state_21607[(19)]);var inst_21544 = (state_21607[(10)]);var inst_21560 = (state_21607[(2)]);var inst_21561 = (inst_21546 + (1));var tmp21670 = inst_21543;var tmp21671 = inst_21545;var tmp21672 = inst_21544;var inst_21543__$1 = tmp21670;var inst_21544__$1 = tmp21672;var inst_21545__$1 = tmp21671;var inst_21546__$1 = inst_21561;var state_21607__$1 = (function (){var statearr_21676 = state_21607;(statearr_21676[(33)] = inst_21560);
(statearr_21676[(18)] = inst_21543__$1);
(statearr_21676[(9)] = inst_21546__$1);
(statearr_21676[(19)] = inst_21545__$1);
(statearr_21676[(10)] = inst_21544__$1);
return statearr_21676;
})();var statearr_21677_21739 = state_21607__$1;(statearr_21677_21739[(2)] = null);
(statearr_21677_21739[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (10)))
{var inst_21487 = (state_21607[(12)]);var inst_21485 = (state_21607[(16)]);var inst_21493 = cljs.core._nth.call(null,inst_21485,inst_21487);var inst_21494 = cljs.core.nth.call(null,inst_21493,(0),null);var inst_21495 = cljs.core.nth.call(null,inst_21493,(1),null);var state_21607__$1 = (function (){var statearr_21678 = state_21607;(statearr_21678[(28)] = inst_21494);
return statearr_21678;
})();if(cljs.core.truth_(inst_21495))
{var statearr_21679_21740 = state_21607__$1;(statearr_21679_21740[(1)] = (13));
} else
{var statearr_21680_21741 = state_21607__$1;(statearr_21680_21741[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (18)))
{var inst_21528 = (state_21607[(2)]);var state_21607__$1 = state_21607;var statearr_21681_21742 = state_21607__$1;(statearr_21681_21742[(2)] = inst_21528);
(statearr_21681_21742[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (42)))
{var state_21607__$1 = state_21607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21607__$1,(45),dchan);
} else
{if((state_val_21608 === (37)))
{var inst_21564 = (state_21607[(17)]);var inst_21573 = cljs.core.first.call(null,inst_21564);var state_21607__$1 = (function (){var statearr_21682 = state_21607;(statearr_21682[(25)] = inst_21573);
return statearr_21682;
})();var statearr_21683_21743 = state_21607__$1;(statearr_21683_21743[(2)] = null);
(statearr_21683_21743[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21608 === (8)))
{var inst_21487 = (state_21607[(12)]);var inst_21486 = (state_21607[(15)]);var inst_21489 = (inst_21487 < inst_21486);var inst_21490 = inst_21489;var state_21607__$1 = state_21607;if(cljs.core.truth_(inst_21490))
{var statearr_21684_21744 = state_21607__$1;(statearr_21684_21744[(1)] = (10));
} else
{var statearr_21685_21745 = state_21607__$1;(statearr_21685_21745[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___21693,cs,m,dchan,dctr,done))
;return ((function (switch__16195__auto__,c__16260__auto___21693,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_21689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21689[(0)] = state_machine__16196__auto__);
(statearr_21689[(1)] = (1));
return statearr_21689;
});
var state_machine__16196__auto____1 = (function (state_21607){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_21607);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e21690){if((e21690 instanceof Object))
{var ex__16199__auto__ = e21690;var statearr_21691_21746 = state_21607;(statearr_21691_21746[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21607);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21690;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21747 = state_21607;
state_21607 = G__21747;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_21607){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_21607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___21693,cs,m,dchan,dctr,done))
})();var state__16262__auto__ = (function (){var statearr_21692 = f__16261__auto__.call(null);(statearr_21692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___21693);
return statearr_21692;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___21693,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj21749 = {};return obj21749;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8098__auto__ = m;if(and__8098__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8098__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8737__auto__ = (((m == null))?null:m);return (function (){var or__8110__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8098__auto__ = m;if(and__8098__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8098__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8737__auto__ = (((m == null))?null:m);return (function (){var or__8110__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8098__auto__ = m;if(and__8098__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8098__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8737__auto__ = (((m == null))?null:m);return (function (){var or__8110__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8098__auto__ = m;if(and__8098__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8098__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8737__auto__ = (((m == null))?null:m);return (function (){var or__8110__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8098__auto__ = m;if(and__8098__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8098__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8737__auto__ = (((m == null))?null:m);return (function (){var or__8110__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t21859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21859 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21860){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21860 = meta21860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21859.cljs$lang$type = true;
cljs.core.async.t21859.cljs$lang$ctorStr = "cljs.core.async/t21859";
cljs.core.async.t21859.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t21859");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21859.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21859.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21859.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21859.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21859.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21859.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21859.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21861){var self__ = this;
var _21861__$1 = this;return self__.meta21860;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21861,meta21860__$1){var self__ = this;
var _21861__$1 = this;return (new cljs.core.async.t21859(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21860__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21859 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21859(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21860){return (new cljs.core.async.t21859(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21860));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21859(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__16260__auto___21968 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___21968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___21968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21926){var state_val_21927 = (state_21926[(1)]);if((state_val_21927 === (7)))
{var inst_21875 = (state_21926[(7)]);var inst_21880 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21875);var state_21926__$1 = state_21926;var statearr_21928_21969 = state_21926__$1;(statearr_21928_21969[(2)] = inst_21880);
(statearr_21928_21969[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (20)))
{var inst_21890 = (state_21926[(8)]);var state_21926__$1 = state_21926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21926__$1,(23),out,inst_21890);
} else
{if((state_val_21927 === (1)))
{var inst_21865 = (state_21926[(9)]);var inst_21865__$1 = calc_state.call(null);var inst_21866 = cljs.core.seq_QMARK_.call(null,inst_21865__$1);var state_21926__$1 = (function (){var statearr_21929 = state_21926;(statearr_21929[(9)] = inst_21865__$1);
return statearr_21929;
})();if(inst_21866)
{var statearr_21930_21970 = state_21926__$1;(statearr_21930_21970[(1)] = (2));
} else
{var statearr_21931_21971 = state_21926__$1;(statearr_21931_21971[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (4)))
{var inst_21865 = (state_21926[(9)]);var inst_21871 = (state_21926[(2)]);var inst_21872 = cljs.core.get.call(null,inst_21871,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_21873 = cljs.core.get.call(null,inst_21871,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_21874 = cljs.core.get.call(null,inst_21871,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_21875 = inst_21865;var state_21926__$1 = (function (){var statearr_21932 = state_21926;(statearr_21932[(10)] = inst_21873);
(statearr_21932[(7)] = inst_21875);
(statearr_21932[(11)] = inst_21874);
(statearr_21932[(12)] = inst_21872);
return statearr_21932;
})();var statearr_21933_21972 = state_21926__$1;(statearr_21933_21972[(2)] = null);
(statearr_21933_21972[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (15)))
{var state_21926__$1 = state_21926;var statearr_21934_21973 = state_21926__$1;(statearr_21934_21973[(2)] = null);
(statearr_21934_21973[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (21)))
{var state_21926__$1 = state_21926;var statearr_21935_21974 = state_21926__$1;(statearr_21935_21974[(2)] = null);
(statearr_21935_21974[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (13)))
{var inst_21922 = (state_21926[(2)]);var state_21926__$1 = state_21926;var statearr_21936_21975 = state_21926__$1;(statearr_21936_21975[(2)] = inst_21922);
(statearr_21936_21975[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (22)))
{var inst_21883 = (state_21926[(13)]);var inst_21919 = (state_21926[(2)]);var inst_21875 = inst_21883;var state_21926__$1 = (function (){var statearr_21937 = state_21926;(statearr_21937[(7)] = inst_21875);
(statearr_21937[(14)] = inst_21919);
return statearr_21937;
})();var statearr_21938_21976 = state_21926__$1;(statearr_21938_21976[(2)] = null);
(statearr_21938_21976[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (6)))
{var inst_21924 = (state_21926[(2)]);var state_21926__$1 = state_21926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21926__$1,inst_21924);
} else
{if((state_val_21927 === (17)))
{var inst_21905 = (state_21926[(15)]);var state_21926__$1 = state_21926;var statearr_21939_21977 = state_21926__$1;(statearr_21939_21977[(2)] = inst_21905);
(statearr_21939_21977[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (3)))
{var inst_21865 = (state_21926[(9)]);var state_21926__$1 = state_21926;var statearr_21940_21978 = state_21926__$1;(statearr_21940_21978[(2)] = inst_21865);
(statearr_21940_21978[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (12)))
{var inst_21886 = (state_21926[(16)]);var inst_21891 = (state_21926[(17)]);var inst_21905 = (state_21926[(15)]);var inst_21905__$1 = inst_21886.call(null,inst_21891);var state_21926__$1 = (function (){var statearr_21941 = state_21926;(statearr_21941[(15)] = inst_21905__$1);
return statearr_21941;
})();if(cljs.core.truth_(inst_21905__$1))
{var statearr_21942_21979 = state_21926__$1;(statearr_21942_21979[(1)] = (17));
} else
{var statearr_21943_21980 = state_21926__$1;(statearr_21943_21980[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (2)))
{var inst_21865 = (state_21926[(9)]);var inst_21868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21865);var state_21926__$1 = state_21926;var statearr_21944_21981 = state_21926__$1;(statearr_21944_21981[(2)] = inst_21868);
(statearr_21944_21981[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (23)))
{var inst_21916 = (state_21926[(2)]);var state_21926__$1 = state_21926;var statearr_21945_21982 = state_21926__$1;(statearr_21945_21982[(2)] = inst_21916);
(statearr_21945_21982[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (19)))
{var inst_21913 = (state_21926[(2)]);var state_21926__$1 = state_21926;if(cljs.core.truth_(inst_21913))
{var statearr_21946_21983 = state_21926__$1;(statearr_21946_21983[(1)] = (20));
} else
{var statearr_21947_21984 = state_21926__$1;(statearr_21947_21984[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (11)))
{var inst_21890 = (state_21926[(8)]);var inst_21896 = (inst_21890 == null);var state_21926__$1 = state_21926;if(cljs.core.truth_(inst_21896))
{var statearr_21948_21985 = state_21926__$1;(statearr_21948_21985[(1)] = (14));
} else
{var statearr_21949_21986 = state_21926__$1;(statearr_21949_21986[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (9)))
{var inst_21883 = (state_21926[(13)]);var inst_21883__$1 = (state_21926[(2)]);var inst_21884 = cljs.core.get.call(null,inst_21883__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_21885 = cljs.core.get.call(null,inst_21883__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_21886 = cljs.core.get.call(null,inst_21883__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_21926__$1 = (function (){var statearr_21950 = state_21926;(statearr_21950[(16)] = inst_21886);
(statearr_21950[(13)] = inst_21883__$1);
(statearr_21950[(18)] = inst_21885);
return statearr_21950;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21926__$1,(10),inst_21884);
} else
{if((state_val_21927 === (5)))
{var inst_21875 = (state_21926[(7)]);var inst_21878 = cljs.core.seq_QMARK_.call(null,inst_21875);var state_21926__$1 = state_21926;if(inst_21878)
{var statearr_21951_21987 = state_21926__$1;(statearr_21951_21987[(1)] = (7));
} else
{var statearr_21952_21988 = state_21926__$1;(statearr_21952_21988[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (14)))
{var inst_21891 = (state_21926[(17)]);var inst_21898 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21891);var state_21926__$1 = state_21926;var statearr_21953_21989 = state_21926__$1;(statearr_21953_21989[(2)] = inst_21898);
(statearr_21953_21989[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (16)))
{var inst_21901 = (state_21926[(2)]);var inst_21902 = calc_state.call(null);var inst_21875 = inst_21902;var state_21926__$1 = (function (){var statearr_21954 = state_21926;(statearr_21954[(7)] = inst_21875);
(statearr_21954[(19)] = inst_21901);
return statearr_21954;
})();var statearr_21955_21990 = state_21926__$1;(statearr_21955_21990[(2)] = null);
(statearr_21955_21990[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (10)))
{var inst_21891 = (state_21926[(17)]);var inst_21890 = (state_21926[(8)]);var inst_21889 = (state_21926[(2)]);var inst_21890__$1 = cljs.core.nth.call(null,inst_21889,(0),null);var inst_21891__$1 = cljs.core.nth.call(null,inst_21889,(1),null);var inst_21892 = (inst_21890__$1 == null);var inst_21893 = cljs.core._EQ_.call(null,inst_21891__$1,change);var inst_21894 = (inst_21892) || (inst_21893);var state_21926__$1 = (function (){var statearr_21956 = state_21926;(statearr_21956[(17)] = inst_21891__$1);
(statearr_21956[(8)] = inst_21890__$1);
return statearr_21956;
})();if(cljs.core.truth_(inst_21894))
{var statearr_21957_21991 = state_21926__$1;(statearr_21957_21991[(1)] = (11));
} else
{var statearr_21958_21992 = state_21926__$1;(statearr_21958_21992[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (18)))
{var inst_21886 = (state_21926[(16)]);var inst_21891 = (state_21926[(17)]);var inst_21885 = (state_21926[(18)]);var inst_21908 = cljs.core.empty_QMARK_.call(null,inst_21886);var inst_21909 = inst_21885.call(null,inst_21891);var inst_21910 = cljs.core.not.call(null,inst_21909);var inst_21911 = (inst_21908) && (inst_21910);var state_21926__$1 = state_21926;var statearr_21959_21993 = state_21926__$1;(statearr_21959_21993[(2)] = inst_21911);
(statearr_21959_21993[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21927 === (8)))
{var inst_21875 = (state_21926[(7)]);var state_21926__$1 = state_21926;var statearr_21960_21994 = state_21926__$1;(statearr_21960_21994[(2)] = inst_21875);
(statearr_21960_21994[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___21968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__16195__auto__,c__16260__auto___21968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_21964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21964[(0)] = state_machine__16196__auto__);
(statearr_21964[(1)] = (1));
return statearr_21964;
});
var state_machine__16196__auto____1 = (function (state_21926){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_21926);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e21965){if((e21965 instanceof Object))
{var ex__16199__auto__ = e21965;var statearr_21966_21995 = state_21926;(statearr_21966_21995[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21926);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21965;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21996 = state_21926;
state_21926 = G__21996;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_21926){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_21926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___21968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__16262__auto__ = (function (){var statearr_21967 = f__16261__auto__.call(null);(statearr_21967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___21968);
return statearr_21967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___21968,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj21998 = {};return obj21998;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8098__auto__ = p;if(and__8098__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8098__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8737__auto__ = (((p == null))?null:p);return (function (){var or__8110__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8098__auto__ = p;if(and__8098__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8098__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8737__auto__ = (((p == null))?null:p);return (function (){var or__8110__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8098__auto__ = p;if(and__8098__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8098__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8737__auto__ = (((p == null))?null:p);return (function (){var or__8110__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8098__auto__ = p;if(and__8098__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8098__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8737__auto__ = (((p == null))?null:p);return (function (){var or__8110__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8737__auto__)]);if(or__8110__auto__)
{return or__8110__auto__;
} else
{var or__8110__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8110__auto____$1)
{return or__8110__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__8110__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8110__auto__,mults){
return (function (p1__21999_SHARP_){if(cljs.core.truth_(p1__21999_SHARP_.call(null,topic)))
{return p1__21999_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21999_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8110__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22124 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22125){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22125 = meta22125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22124.cljs$lang$type = true;
cljs.core.async.t22124.cljs$lang$ctorStr = "cljs.core.async/t22124";
cljs.core.async.t22124.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t22124");
});})(mults,ensure_mult))
;
cljs.core.async.t22124.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22124.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22124.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4222__auto__))
{var m = temp__4222__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22124.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22124.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22124.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22126){var self__ = this;
var _22126__$1 = this;return self__.meta22125;
});})(mults,ensure_mult))
;
cljs.core.async.t22124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22126,meta22125__$1){var self__ = this;
var _22126__$1 = this;return (new cljs.core.async.t22124(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22125__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22124 = ((function (mults,ensure_mult){
return (function __GT_t22124(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22125){return (new cljs.core.async.t22124(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22125));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22124(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__16260__auto___22248 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___22248,mults,ensure_mult,p){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___22248,mults,ensure_mult,p){
return (function (state_22200){var state_val_22201 = (state_22200[(1)]);if((state_val_22201 === (7)))
{var inst_22196 = (state_22200[(2)]);var state_22200__$1 = state_22200;var statearr_22202_22249 = state_22200__$1;(statearr_22202_22249[(2)] = inst_22196);
(statearr_22202_22249[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (20)))
{var state_22200__$1 = state_22200;var statearr_22203_22250 = state_22200__$1;(statearr_22203_22250[(2)] = null);
(statearr_22203_22250[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (1)))
{var state_22200__$1 = state_22200;var statearr_22204_22251 = state_22200__$1;(statearr_22204_22251[(2)] = null);
(statearr_22204_22251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (24)))
{var inst_22129 = (state_22200[(7)]);var inst_22179 = (state_22200[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22200,(23),Object,null,(22));var inst_22186 = cljs.core.async.muxch_STAR_.call(null,inst_22179);var state_22200__$1 = state_22200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22200__$1,(25),inst_22186,inst_22129);
} else
{if((state_val_22201 === (4)))
{var inst_22129 = (state_22200[(7)]);var inst_22129__$1 = (state_22200[(2)]);var inst_22130 = (inst_22129__$1 == null);var state_22200__$1 = (function (){var statearr_22205 = state_22200;(statearr_22205[(7)] = inst_22129__$1);
return statearr_22205;
})();if(cljs.core.truth_(inst_22130))
{var statearr_22206_22252 = state_22200__$1;(statearr_22206_22252[(1)] = (5));
} else
{var statearr_22207_22253 = state_22200__$1;(statearr_22207_22253[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (15)))
{var inst_22171 = (state_22200[(2)]);var state_22200__$1 = state_22200;var statearr_22208_22254 = state_22200__$1;(statearr_22208_22254[(2)] = inst_22171);
(statearr_22208_22254[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (21)))
{var inst_22193 = (state_22200[(2)]);var state_22200__$1 = (function (){var statearr_22209 = state_22200;(statearr_22209[(9)] = inst_22193);
return statearr_22209;
})();var statearr_22210_22255 = state_22200__$1;(statearr_22210_22255[(2)] = null);
(statearr_22210_22255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (13)))
{var inst_22153 = (state_22200[(10)]);var inst_22155 = cljs.core.chunked_seq_QMARK_.call(null,inst_22153);var state_22200__$1 = state_22200;if(inst_22155)
{var statearr_22211_22256 = state_22200__$1;(statearr_22211_22256[(1)] = (16));
} else
{var statearr_22212_22257 = state_22200__$1;(statearr_22212_22257[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (22)))
{var inst_22190 = (state_22200[(2)]);var state_22200__$1 = state_22200;var statearr_22213_22258 = state_22200__$1;(statearr_22213_22258[(2)] = inst_22190);
(statearr_22213_22258[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (6)))
{var inst_22129 = (state_22200[(7)]);var inst_22179 = (state_22200[(8)]);var inst_22177 = (state_22200[(11)]);var inst_22177__$1 = topic_fn.call(null,inst_22129);var inst_22178 = cljs.core.deref.call(null,mults);var inst_22179__$1 = cljs.core.get.call(null,inst_22178,inst_22177__$1);var state_22200__$1 = (function (){var statearr_22214 = state_22200;(statearr_22214[(8)] = inst_22179__$1);
(statearr_22214[(11)] = inst_22177__$1);
return statearr_22214;
})();if(cljs.core.truth_(inst_22179__$1))
{var statearr_22215_22259 = state_22200__$1;(statearr_22215_22259[(1)] = (19));
} else
{var statearr_22216_22260 = state_22200__$1;(statearr_22216_22260[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (25)))
{var inst_22188 = (state_22200[(2)]);var state_22200__$1 = state_22200;var statearr_22217_22261 = state_22200__$1;(statearr_22217_22261[(2)] = inst_22188);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22200__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (17)))
{var inst_22153 = (state_22200[(10)]);var inst_22162 = cljs.core.first.call(null,inst_22153);var inst_22163 = cljs.core.async.muxch_STAR_.call(null,inst_22162);var inst_22164 = cljs.core.async.close_BANG_.call(null,inst_22163);var inst_22165 = cljs.core.next.call(null,inst_22153);var inst_22139 = inst_22165;var inst_22140 = null;var inst_22141 = (0);var inst_22142 = (0);var state_22200__$1 = (function (){var statearr_22218 = state_22200;(statearr_22218[(12)] = inst_22164);
(statearr_22218[(13)] = inst_22140);
(statearr_22218[(14)] = inst_22142);
(statearr_22218[(15)] = inst_22139);
(statearr_22218[(16)] = inst_22141);
return statearr_22218;
})();var statearr_22219_22262 = state_22200__$1;(statearr_22219_22262[(2)] = null);
(statearr_22219_22262[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (3)))
{var inst_22198 = (state_22200[(2)]);var state_22200__$1 = state_22200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22200__$1,inst_22198);
} else
{if((state_val_22201 === (12)))
{var inst_22173 = (state_22200[(2)]);var state_22200__$1 = state_22200;var statearr_22220_22263 = state_22200__$1;(statearr_22220_22263[(2)] = inst_22173);
(statearr_22220_22263[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (2)))
{var state_22200__$1 = state_22200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22200__$1,(4),ch);
} else
{if((state_val_22201 === (23)))
{var inst_22177 = (state_22200[(11)]);var inst_22181 = (state_22200[(2)]);var inst_22182 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22177);var state_22200__$1 = (function (){var statearr_22221 = state_22200;(statearr_22221[(17)] = inst_22181);
return statearr_22221;
})();var statearr_22222_22264 = state_22200__$1;(statearr_22222_22264[(2)] = inst_22182);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22200__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (19)))
{var state_22200__$1 = state_22200;var statearr_22223_22265 = state_22200__$1;(statearr_22223_22265[(2)] = null);
(statearr_22223_22265[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (11)))
{var inst_22139 = (state_22200[(15)]);var inst_22153 = (state_22200[(10)]);var inst_22153__$1 = cljs.core.seq.call(null,inst_22139);var state_22200__$1 = (function (){var statearr_22224 = state_22200;(statearr_22224[(10)] = inst_22153__$1);
return statearr_22224;
})();if(inst_22153__$1)
{var statearr_22225_22266 = state_22200__$1;(statearr_22225_22266[(1)] = (13));
} else
{var statearr_22226_22267 = state_22200__$1;(statearr_22226_22267[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (9)))
{var inst_22175 = (state_22200[(2)]);var state_22200__$1 = state_22200;var statearr_22227_22268 = state_22200__$1;(statearr_22227_22268[(2)] = inst_22175);
(statearr_22227_22268[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (5)))
{var inst_22136 = cljs.core.deref.call(null,mults);var inst_22137 = cljs.core.vals.call(null,inst_22136);var inst_22138 = cljs.core.seq.call(null,inst_22137);var inst_22139 = inst_22138;var inst_22140 = null;var inst_22141 = (0);var inst_22142 = (0);var state_22200__$1 = (function (){var statearr_22228 = state_22200;(statearr_22228[(13)] = inst_22140);
(statearr_22228[(14)] = inst_22142);
(statearr_22228[(15)] = inst_22139);
(statearr_22228[(16)] = inst_22141);
return statearr_22228;
})();var statearr_22229_22269 = state_22200__$1;(statearr_22229_22269[(2)] = null);
(statearr_22229_22269[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (14)))
{var state_22200__$1 = state_22200;var statearr_22233_22270 = state_22200__$1;(statearr_22233_22270[(2)] = null);
(statearr_22233_22270[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (16)))
{var inst_22153 = (state_22200[(10)]);var inst_22157 = cljs.core.chunk_first.call(null,inst_22153);var inst_22158 = cljs.core.chunk_rest.call(null,inst_22153);var inst_22159 = cljs.core.count.call(null,inst_22157);var inst_22139 = inst_22158;var inst_22140 = inst_22157;var inst_22141 = inst_22159;var inst_22142 = (0);var state_22200__$1 = (function (){var statearr_22234 = state_22200;(statearr_22234[(13)] = inst_22140);
(statearr_22234[(14)] = inst_22142);
(statearr_22234[(15)] = inst_22139);
(statearr_22234[(16)] = inst_22141);
return statearr_22234;
})();var statearr_22235_22271 = state_22200__$1;(statearr_22235_22271[(2)] = null);
(statearr_22235_22271[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (10)))
{var inst_22140 = (state_22200[(13)]);var inst_22142 = (state_22200[(14)]);var inst_22139 = (state_22200[(15)]);var inst_22141 = (state_22200[(16)]);var inst_22147 = cljs.core._nth.call(null,inst_22140,inst_22142);var inst_22148 = cljs.core.async.muxch_STAR_.call(null,inst_22147);var inst_22149 = cljs.core.async.close_BANG_.call(null,inst_22148);var inst_22150 = (inst_22142 + (1));var tmp22230 = inst_22140;var tmp22231 = inst_22139;var tmp22232 = inst_22141;var inst_22139__$1 = tmp22231;var inst_22140__$1 = tmp22230;var inst_22141__$1 = tmp22232;var inst_22142__$1 = inst_22150;var state_22200__$1 = (function (){var statearr_22236 = state_22200;(statearr_22236[(13)] = inst_22140__$1);
(statearr_22236[(14)] = inst_22142__$1);
(statearr_22236[(15)] = inst_22139__$1);
(statearr_22236[(18)] = inst_22149);
(statearr_22236[(16)] = inst_22141__$1);
return statearr_22236;
})();var statearr_22237_22272 = state_22200__$1;(statearr_22237_22272[(2)] = null);
(statearr_22237_22272[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (18)))
{var inst_22168 = (state_22200[(2)]);var state_22200__$1 = state_22200;var statearr_22238_22273 = state_22200__$1;(statearr_22238_22273[(2)] = inst_22168);
(statearr_22238_22273[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22201 === (8)))
{var inst_22142 = (state_22200[(14)]);var inst_22141 = (state_22200[(16)]);var inst_22144 = (inst_22142 < inst_22141);var inst_22145 = inst_22144;var state_22200__$1 = state_22200;if(cljs.core.truth_(inst_22145))
{var statearr_22239_22274 = state_22200__$1;(statearr_22239_22274[(1)] = (10));
} else
{var statearr_22240_22275 = state_22200__$1;(statearr_22240_22275[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___22248,mults,ensure_mult,p))
;return ((function (switch__16195__auto__,c__16260__auto___22248,mults,ensure_mult,p){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_22244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22244[(0)] = state_machine__16196__auto__);
(statearr_22244[(1)] = (1));
return statearr_22244;
});
var state_machine__16196__auto____1 = (function (state_22200){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_22200);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e22245){if((e22245 instanceof Object))
{var ex__16199__auto__ = e22245;var statearr_22246_22276 = state_22200;(statearr_22246_22276[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22200);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22245;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22277 = state_22200;
state_22200 = G__22277;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_22200){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_22200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___22248,mults,ensure_mult,p))
})();var state__16262__auto__ = (function (){var statearr_22247 = f__16261__auto__.call(null);(statearr_22247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___22248);
return statearr_22247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___22248,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__16260__auto___22414 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___22414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___22414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22384){var state_val_22385 = (state_22384[(1)]);if((state_val_22385 === (7)))
{var state_22384__$1 = state_22384;var statearr_22386_22415 = state_22384__$1;(statearr_22386_22415[(2)] = null);
(statearr_22386_22415[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (1)))
{var state_22384__$1 = state_22384;var statearr_22387_22416 = state_22384__$1;(statearr_22387_22416[(2)] = null);
(statearr_22387_22416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (4)))
{var inst_22348 = (state_22384[(7)]);var inst_22350 = (inst_22348 < cnt);var state_22384__$1 = state_22384;if(cljs.core.truth_(inst_22350))
{var statearr_22388_22417 = state_22384__$1;(statearr_22388_22417[(1)] = (6));
} else
{var statearr_22389_22418 = state_22384__$1;(statearr_22389_22418[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (15)))
{var inst_22380 = (state_22384[(2)]);var state_22384__$1 = state_22384;var statearr_22390_22419 = state_22384__$1;(statearr_22390_22419[(2)] = inst_22380);
(statearr_22390_22419[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (13)))
{var inst_22373 = cljs.core.async.close_BANG_.call(null,out);var state_22384__$1 = state_22384;var statearr_22391_22420 = state_22384__$1;(statearr_22391_22420[(2)] = inst_22373);
(statearr_22391_22420[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (6)))
{var state_22384__$1 = state_22384;var statearr_22392_22421 = state_22384__$1;(statearr_22392_22421[(2)] = null);
(statearr_22392_22421[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (3)))
{var inst_22382 = (state_22384[(2)]);var state_22384__$1 = state_22384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22384__$1,inst_22382);
} else
{if((state_val_22385 === (12)))
{var inst_22370 = (state_22384[(8)]);var inst_22370__$1 = (state_22384[(2)]);var inst_22371 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22370__$1);var state_22384__$1 = (function (){var statearr_22393 = state_22384;(statearr_22393[(8)] = inst_22370__$1);
return statearr_22393;
})();if(cljs.core.truth_(inst_22371))
{var statearr_22394_22422 = state_22384__$1;(statearr_22394_22422[(1)] = (13));
} else
{var statearr_22395_22423 = state_22384__$1;(statearr_22395_22423[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (2)))
{var inst_22347 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22348 = (0);var state_22384__$1 = (function (){var statearr_22396 = state_22384;(statearr_22396[(9)] = inst_22347);
(statearr_22396[(7)] = inst_22348);
return statearr_22396;
})();var statearr_22397_22424 = state_22384__$1;(statearr_22397_22424[(2)] = null);
(statearr_22397_22424[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (11)))
{var inst_22348 = (state_22384[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22384,(10),Object,null,(9));var inst_22357 = chs__$1.call(null,inst_22348);var inst_22358 = done.call(null,inst_22348);var inst_22359 = cljs.core.async.take_BANG_.call(null,inst_22357,inst_22358);var state_22384__$1 = state_22384;var statearr_22398_22425 = state_22384__$1;(statearr_22398_22425[(2)] = inst_22359);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22384__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (9)))
{var inst_22348 = (state_22384[(7)]);var inst_22361 = (state_22384[(2)]);var inst_22362 = (inst_22348 + (1));var inst_22348__$1 = inst_22362;var state_22384__$1 = (function (){var statearr_22399 = state_22384;(statearr_22399[(10)] = inst_22361);
(statearr_22399[(7)] = inst_22348__$1);
return statearr_22399;
})();var statearr_22400_22426 = state_22384__$1;(statearr_22400_22426[(2)] = null);
(statearr_22400_22426[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (5)))
{var inst_22368 = (state_22384[(2)]);var state_22384__$1 = (function (){var statearr_22401 = state_22384;(statearr_22401[(11)] = inst_22368);
return statearr_22401;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22384__$1,(12),dchan);
} else
{if((state_val_22385 === (14)))
{var inst_22370 = (state_22384[(8)]);var inst_22375 = cljs.core.apply.call(null,f,inst_22370);var state_22384__$1 = state_22384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22384__$1,(16),out,inst_22375);
} else
{if((state_val_22385 === (16)))
{var inst_22377 = (state_22384[(2)]);var state_22384__$1 = (function (){var statearr_22402 = state_22384;(statearr_22402[(12)] = inst_22377);
return statearr_22402;
})();var statearr_22403_22427 = state_22384__$1;(statearr_22403_22427[(2)] = null);
(statearr_22403_22427[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (10)))
{var inst_22352 = (state_22384[(2)]);var inst_22353 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22384__$1 = (function (){var statearr_22404 = state_22384;(statearr_22404[(13)] = inst_22352);
return statearr_22404;
})();var statearr_22405_22428 = state_22384__$1;(statearr_22405_22428[(2)] = inst_22353);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22384__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22385 === (8)))
{var inst_22366 = (state_22384[(2)]);var state_22384__$1 = state_22384;var statearr_22406_22429 = state_22384__$1;(statearr_22406_22429[(2)] = inst_22366);
(statearr_22406_22429[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___22414,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__16195__auto__,c__16260__auto___22414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_22410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22410[(0)] = state_machine__16196__auto__);
(statearr_22410[(1)] = (1));
return statearr_22410;
});
var state_machine__16196__auto____1 = (function (state_22384){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_22384);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e22411){if((e22411 instanceof Object))
{var ex__16199__auto__ = e22411;var statearr_22412_22430 = state_22384;(statearr_22412_22430[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22384);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22411;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22431 = state_22384;
state_22384 = G__22431;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_22384){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_22384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___22414,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__16262__auto__ = (function (){var statearr_22413 = f__16261__auto__.call(null);(statearr_22413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___22414);
return statearr_22413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___22414,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16260__auto___22539 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___22539,out){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___22539,out){
return (function (state_22515){var state_val_22516 = (state_22515[(1)]);if((state_val_22516 === (7)))
{var inst_22495 = (state_22515[(7)]);var inst_22494 = (state_22515[(8)]);var inst_22494__$1 = (state_22515[(2)]);var inst_22495__$1 = cljs.core.nth.call(null,inst_22494__$1,(0),null);var inst_22496 = cljs.core.nth.call(null,inst_22494__$1,(1),null);var inst_22497 = (inst_22495__$1 == null);var state_22515__$1 = (function (){var statearr_22517 = state_22515;(statearr_22517[(9)] = inst_22496);
(statearr_22517[(7)] = inst_22495__$1);
(statearr_22517[(8)] = inst_22494__$1);
return statearr_22517;
})();if(cljs.core.truth_(inst_22497))
{var statearr_22518_22540 = state_22515__$1;(statearr_22518_22540[(1)] = (8));
} else
{var statearr_22519_22541 = state_22515__$1;(statearr_22519_22541[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22516 === (1)))
{var inst_22486 = cljs.core.vec.call(null,chs);var inst_22487 = inst_22486;var state_22515__$1 = (function (){var statearr_22520 = state_22515;(statearr_22520[(10)] = inst_22487);
return statearr_22520;
})();var statearr_22521_22542 = state_22515__$1;(statearr_22521_22542[(2)] = null);
(statearr_22521_22542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22516 === (4)))
{var inst_22487 = (state_22515[(10)]);var state_22515__$1 = state_22515;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22515__$1,(7),inst_22487);
} else
{if((state_val_22516 === (6)))
{var inst_22511 = (state_22515[(2)]);var state_22515__$1 = state_22515;var statearr_22522_22543 = state_22515__$1;(statearr_22522_22543[(2)] = inst_22511);
(statearr_22522_22543[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22516 === (3)))
{var inst_22513 = (state_22515[(2)]);var state_22515__$1 = state_22515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22515__$1,inst_22513);
} else
{if((state_val_22516 === (2)))
{var inst_22487 = (state_22515[(10)]);var inst_22489 = cljs.core.count.call(null,inst_22487);var inst_22490 = (inst_22489 > (0));var state_22515__$1 = state_22515;if(cljs.core.truth_(inst_22490))
{var statearr_22524_22544 = state_22515__$1;(statearr_22524_22544[(1)] = (4));
} else
{var statearr_22525_22545 = state_22515__$1;(statearr_22525_22545[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22516 === (11)))
{var inst_22487 = (state_22515[(10)]);var inst_22504 = (state_22515[(2)]);var tmp22523 = inst_22487;var inst_22487__$1 = tmp22523;var state_22515__$1 = (function (){var statearr_22526 = state_22515;(statearr_22526[(11)] = inst_22504);
(statearr_22526[(10)] = inst_22487__$1);
return statearr_22526;
})();var statearr_22527_22546 = state_22515__$1;(statearr_22527_22546[(2)] = null);
(statearr_22527_22546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22516 === (9)))
{var inst_22495 = (state_22515[(7)]);var state_22515__$1 = state_22515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22515__$1,(11),out,inst_22495);
} else
{if((state_val_22516 === (5)))
{var inst_22509 = cljs.core.async.close_BANG_.call(null,out);var state_22515__$1 = state_22515;var statearr_22528_22547 = state_22515__$1;(statearr_22528_22547[(2)] = inst_22509);
(statearr_22528_22547[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22516 === (10)))
{var inst_22507 = (state_22515[(2)]);var state_22515__$1 = state_22515;var statearr_22529_22548 = state_22515__$1;(statearr_22529_22548[(2)] = inst_22507);
(statearr_22529_22548[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22516 === (8)))
{var inst_22496 = (state_22515[(9)]);var inst_22487 = (state_22515[(10)]);var inst_22495 = (state_22515[(7)]);var inst_22494 = (state_22515[(8)]);var inst_22499 = (function (){var c = inst_22496;var v = inst_22495;var vec__22492 = inst_22494;var cs = inst_22487;return ((function (c,v,vec__22492,cs,inst_22496,inst_22487,inst_22495,inst_22494,state_val_22516,c__16260__auto___22539,out){
return (function (p1__22432_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22432_SHARP_);
});
;})(c,v,vec__22492,cs,inst_22496,inst_22487,inst_22495,inst_22494,state_val_22516,c__16260__auto___22539,out))
})();var inst_22500 = cljs.core.filterv.call(null,inst_22499,inst_22487);var inst_22487__$1 = inst_22500;var state_22515__$1 = (function (){var statearr_22530 = state_22515;(statearr_22530[(10)] = inst_22487__$1);
return statearr_22530;
})();var statearr_22531_22549 = state_22515__$1;(statearr_22531_22549[(2)] = null);
(statearr_22531_22549[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___22539,out))
;return ((function (switch__16195__auto__,c__16260__auto___22539,out){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_22535 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22535[(0)] = state_machine__16196__auto__);
(statearr_22535[(1)] = (1));
return statearr_22535;
});
var state_machine__16196__auto____1 = (function (state_22515){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_22515);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e22536){if((e22536 instanceof Object))
{var ex__16199__auto__ = e22536;var statearr_22537_22550 = state_22515;(statearr_22537_22550[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22515);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22536;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22551 = state_22515;
state_22515 = G__22551;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_22515){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_22515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___22539,out))
})();var state__16262__auto__ = (function (){var statearr_22538 = f__16261__auto__.call(null);(statearr_22538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___22539);
return statearr_22538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___22539,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16260__auto___22644 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___22644,out){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___22644,out){
return (function (state_22621){var state_val_22622 = (state_22621[(1)]);if((state_val_22622 === (7)))
{var inst_22603 = (state_22621[(7)]);var inst_22603__$1 = (state_22621[(2)]);var inst_22604 = (inst_22603__$1 == null);var inst_22605 = cljs.core.not.call(null,inst_22604);var state_22621__$1 = (function (){var statearr_22623 = state_22621;(statearr_22623[(7)] = inst_22603__$1);
return statearr_22623;
})();if(inst_22605)
{var statearr_22624_22645 = state_22621__$1;(statearr_22624_22645[(1)] = (8));
} else
{var statearr_22625_22646 = state_22621__$1;(statearr_22625_22646[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22622 === (1)))
{var inst_22598 = (0);var state_22621__$1 = (function (){var statearr_22626 = state_22621;(statearr_22626[(8)] = inst_22598);
return statearr_22626;
})();var statearr_22627_22647 = state_22621__$1;(statearr_22627_22647[(2)] = null);
(statearr_22627_22647[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22622 === (4)))
{var state_22621__$1 = state_22621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22621__$1,(7),ch);
} else
{if((state_val_22622 === (6)))
{var inst_22616 = (state_22621[(2)]);var state_22621__$1 = state_22621;var statearr_22628_22648 = state_22621__$1;(statearr_22628_22648[(2)] = inst_22616);
(statearr_22628_22648[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22622 === (3)))
{var inst_22618 = (state_22621[(2)]);var inst_22619 = cljs.core.async.close_BANG_.call(null,out);var state_22621__$1 = (function (){var statearr_22629 = state_22621;(statearr_22629[(9)] = inst_22618);
return statearr_22629;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22621__$1,inst_22619);
} else
{if((state_val_22622 === (2)))
{var inst_22598 = (state_22621[(8)]);var inst_22600 = (inst_22598 < n);var state_22621__$1 = state_22621;if(cljs.core.truth_(inst_22600))
{var statearr_22630_22649 = state_22621__$1;(statearr_22630_22649[(1)] = (4));
} else
{var statearr_22631_22650 = state_22621__$1;(statearr_22631_22650[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22622 === (11)))
{var inst_22598 = (state_22621[(8)]);var inst_22608 = (state_22621[(2)]);var inst_22609 = (inst_22598 + (1));var inst_22598__$1 = inst_22609;var state_22621__$1 = (function (){var statearr_22632 = state_22621;(statearr_22632[(10)] = inst_22608);
(statearr_22632[(8)] = inst_22598__$1);
return statearr_22632;
})();var statearr_22633_22651 = state_22621__$1;(statearr_22633_22651[(2)] = null);
(statearr_22633_22651[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22622 === (9)))
{var state_22621__$1 = state_22621;var statearr_22634_22652 = state_22621__$1;(statearr_22634_22652[(2)] = null);
(statearr_22634_22652[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22622 === (5)))
{var state_22621__$1 = state_22621;var statearr_22635_22653 = state_22621__$1;(statearr_22635_22653[(2)] = null);
(statearr_22635_22653[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22622 === (10)))
{var inst_22613 = (state_22621[(2)]);var state_22621__$1 = state_22621;var statearr_22636_22654 = state_22621__$1;(statearr_22636_22654[(2)] = inst_22613);
(statearr_22636_22654[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22622 === (8)))
{var inst_22603 = (state_22621[(7)]);var state_22621__$1 = state_22621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22621__$1,(11),out,inst_22603);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___22644,out))
;return ((function (switch__16195__auto__,c__16260__auto___22644,out){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_22640 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22640[(0)] = state_machine__16196__auto__);
(statearr_22640[(1)] = (1));
return statearr_22640;
});
var state_machine__16196__auto____1 = (function (state_22621){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_22621);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e22641){if((e22641 instanceof Object))
{var ex__16199__auto__ = e22641;var statearr_22642_22655 = state_22621;(statearr_22642_22655[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22621);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22641;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22656 = state_22621;
state_22621 = G__22656;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_22621){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_22621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___22644,out))
})();var state__16262__auto__ = (function (){var statearr_22643 = f__16261__auto__.call(null);(statearr_22643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___22644);
return statearr_22643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___22644,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16260__auto___22753 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___22753,out){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___22753,out){
return (function (state_22728){var state_val_22729 = (state_22728[(1)]);if((state_val_22729 === (7)))
{var inst_22723 = (state_22728[(2)]);var state_22728__$1 = state_22728;var statearr_22730_22754 = state_22728__$1;(statearr_22730_22754[(2)] = inst_22723);
(statearr_22730_22754[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (1)))
{var inst_22705 = null;var state_22728__$1 = (function (){var statearr_22731 = state_22728;(statearr_22731[(7)] = inst_22705);
return statearr_22731;
})();var statearr_22732_22755 = state_22728__$1;(statearr_22732_22755[(2)] = null);
(statearr_22732_22755[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (4)))
{var inst_22708 = (state_22728[(8)]);var inst_22708__$1 = (state_22728[(2)]);var inst_22709 = (inst_22708__$1 == null);var inst_22710 = cljs.core.not.call(null,inst_22709);var state_22728__$1 = (function (){var statearr_22733 = state_22728;(statearr_22733[(8)] = inst_22708__$1);
return statearr_22733;
})();if(inst_22710)
{var statearr_22734_22756 = state_22728__$1;(statearr_22734_22756[(1)] = (5));
} else
{var statearr_22735_22757 = state_22728__$1;(statearr_22735_22757[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (6)))
{var state_22728__$1 = state_22728;var statearr_22736_22758 = state_22728__$1;(statearr_22736_22758[(2)] = null);
(statearr_22736_22758[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (3)))
{var inst_22725 = (state_22728[(2)]);var inst_22726 = cljs.core.async.close_BANG_.call(null,out);var state_22728__$1 = (function (){var statearr_22737 = state_22728;(statearr_22737[(9)] = inst_22725);
return statearr_22737;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22728__$1,inst_22726);
} else
{if((state_val_22729 === (2)))
{var state_22728__$1 = state_22728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22728__$1,(4),ch);
} else
{if((state_val_22729 === (11)))
{var inst_22708 = (state_22728[(8)]);var inst_22717 = (state_22728[(2)]);var inst_22705 = inst_22708;var state_22728__$1 = (function (){var statearr_22738 = state_22728;(statearr_22738[(10)] = inst_22717);
(statearr_22738[(7)] = inst_22705);
return statearr_22738;
})();var statearr_22739_22759 = state_22728__$1;(statearr_22739_22759[(2)] = null);
(statearr_22739_22759[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (9)))
{var inst_22708 = (state_22728[(8)]);var state_22728__$1 = state_22728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22728__$1,(11),out,inst_22708);
} else
{if((state_val_22729 === (5)))
{var inst_22705 = (state_22728[(7)]);var inst_22708 = (state_22728[(8)]);var inst_22712 = cljs.core._EQ_.call(null,inst_22708,inst_22705);var state_22728__$1 = state_22728;if(inst_22712)
{var statearr_22741_22760 = state_22728__$1;(statearr_22741_22760[(1)] = (8));
} else
{var statearr_22742_22761 = state_22728__$1;(statearr_22742_22761[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (10)))
{var inst_22720 = (state_22728[(2)]);var state_22728__$1 = state_22728;var statearr_22743_22762 = state_22728__$1;(statearr_22743_22762[(2)] = inst_22720);
(statearr_22743_22762[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22729 === (8)))
{var inst_22705 = (state_22728[(7)]);var tmp22740 = inst_22705;var inst_22705__$1 = tmp22740;var state_22728__$1 = (function (){var statearr_22744 = state_22728;(statearr_22744[(7)] = inst_22705__$1);
return statearr_22744;
})();var statearr_22745_22763 = state_22728__$1;(statearr_22745_22763[(2)] = null);
(statearr_22745_22763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___22753,out))
;return ((function (switch__16195__auto__,c__16260__auto___22753,out){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_22749 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22749[(0)] = state_machine__16196__auto__);
(statearr_22749[(1)] = (1));
return statearr_22749;
});
var state_machine__16196__auto____1 = (function (state_22728){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_22728);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e22750){if((e22750 instanceof Object))
{var ex__16199__auto__ = e22750;var statearr_22751_22764 = state_22728;(statearr_22751_22764[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22750;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22765 = state_22728;
state_22728 = G__22765;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_22728){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_22728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___22753,out))
})();var state__16262__auto__ = (function (){var statearr_22752 = f__16261__auto__.call(null);(statearr_22752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___22753);
return statearr_22752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___22753,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16260__auto___22900 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___22900,out){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___22900,out){
return (function (state_22870){var state_val_22871 = (state_22870[(1)]);if((state_val_22871 === (7)))
{var inst_22866 = (state_22870[(2)]);var state_22870__$1 = state_22870;var statearr_22872_22901 = state_22870__$1;(statearr_22872_22901[(2)] = inst_22866);
(statearr_22872_22901[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (1)))
{var inst_22833 = (new Array(n));var inst_22834 = inst_22833;var inst_22835 = (0);var state_22870__$1 = (function (){var statearr_22873 = state_22870;(statearr_22873[(7)] = inst_22834);
(statearr_22873[(8)] = inst_22835);
return statearr_22873;
})();var statearr_22874_22902 = state_22870__$1;(statearr_22874_22902[(2)] = null);
(statearr_22874_22902[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (4)))
{var inst_22838 = (state_22870[(9)]);var inst_22838__$1 = (state_22870[(2)]);var inst_22839 = (inst_22838__$1 == null);var inst_22840 = cljs.core.not.call(null,inst_22839);var state_22870__$1 = (function (){var statearr_22875 = state_22870;(statearr_22875[(9)] = inst_22838__$1);
return statearr_22875;
})();if(inst_22840)
{var statearr_22876_22903 = state_22870__$1;(statearr_22876_22903[(1)] = (5));
} else
{var statearr_22877_22904 = state_22870__$1;(statearr_22877_22904[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (15)))
{var inst_22860 = (state_22870[(2)]);var state_22870__$1 = state_22870;var statearr_22878_22905 = state_22870__$1;(statearr_22878_22905[(2)] = inst_22860);
(statearr_22878_22905[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (13)))
{var state_22870__$1 = state_22870;var statearr_22879_22906 = state_22870__$1;(statearr_22879_22906[(2)] = null);
(statearr_22879_22906[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (6)))
{var inst_22835 = (state_22870[(8)]);var inst_22856 = (inst_22835 > (0));var state_22870__$1 = state_22870;if(cljs.core.truth_(inst_22856))
{var statearr_22880_22907 = state_22870__$1;(statearr_22880_22907[(1)] = (12));
} else
{var statearr_22881_22908 = state_22870__$1;(statearr_22881_22908[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (3)))
{var inst_22868 = (state_22870[(2)]);var state_22870__$1 = state_22870;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22870__$1,inst_22868);
} else
{if((state_val_22871 === (12)))
{var inst_22834 = (state_22870[(7)]);var inst_22858 = cljs.core.vec.call(null,inst_22834);var state_22870__$1 = state_22870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22870__$1,(15),out,inst_22858);
} else
{if((state_val_22871 === (2)))
{var state_22870__$1 = state_22870;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22870__$1,(4),ch);
} else
{if((state_val_22871 === (11)))
{var inst_22850 = (state_22870[(2)]);var inst_22851 = (new Array(n));var inst_22834 = inst_22851;var inst_22835 = (0);var state_22870__$1 = (function (){var statearr_22882 = state_22870;(statearr_22882[(10)] = inst_22850);
(statearr_22882[(7)] = inst_22834);
(statearr_22882[(8)] = inst_22835);
return statearr_22882;
})();var statearr_22883_22909 = state_22870__$1;(statearr_22883_22909[(2)] = null);
(statearr_22883_22909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (9)))
{var inst_22834 = (state_22870[(7)]);var inst_22848 = cljs.core.vec.call(null,inst_22834);var state_22870__$1 = state_22870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22870__$1,(11),out,inst_22848);
} else
{if((state_val_22871 === (5)))
{var inst_22838 = (state_22870[(9)]);var inst_22843 = (state_22870[(11)]);var inst_22834 = (state_22870[(7)]);var inst_22835 = (state_22870[(8)]);var inst_22842 = (inst_22834[inst_22835] = inst_22838);var inst_22843__$1 = (inst_22835 + (1));var inst_22844 = (inst_22843__$1 < n);var state_22870__$1 = (function (){var statearr_22884 = state_22870;(statearr_22884[(11)] = inst_22843__$1);
(statearr_22884[(12)] = inst_22842);
return statearr_22884;
})();if(cljs.core.truth_(inst_22844))
{var statearr_22885_22910 = state_22870__$1;(statearr_22885_22910[(1)] = (8));
} else
{var statearr_22886_22911 = state_22870__$1;(statearr_22886_22911[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (14)))
{var inst_22863 = (state_22870[(2)]);var inst_22864 = cljs.core.async.close_BANG_.call(null,out);var state_22870__$1 = (function (){var statearr_22888 = state_22870;(statearr_22888[(13)] = inst_22863);
return statearr_22888;
})();var statearr_22889_22912 = state_22870__$1;(statearr_22889_22912[(2)] = inst_22864);
(statearr_22889_22912[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (10)))
{var inst_22854 = (state_22870[(2)]);var state_22870__$1 = state_22870;var statearr_22890_22913 = state_22870__$1;(statearr_22890_22913[(2)] = inst_22854);
(statearr_22890_22913[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22871 === (8)))
{var inst_22843 = (state_22870[(11)]);var inst_22834 = (state_22870[(7)]);var tmp22887 = inst_22834;var inst_22834__$1 = tmp22887;var inst_22835 = inst_22843;var state_22870__$1 = (function (){var statearr_22891 = state_22870;(statearr_22891[(7)] = inst_22834__$1);
(statearr_22891[(8)] = inst_22835);
return statearr_22891;
})();var statearr_22892_22914 = state_22870__$1;(statearr_22892_22914[(2)] = null);
(statearr_22892_22914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___22900,out))
;return ((function (switch__16195__auto__,c__16260__auto___22900,out){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_22896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22896[(0)] = state_machine__16196__auto__);
(statearr_22896[(1)] = (1));
return statearr_22896;
});
var state_machine__16196__auto____1 = (function (state_22870){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_22870);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e22897){if((e22897 instanceof Object))
{var ex__16199__auto__ = e22897;var statearr_22898_22915 = state_22870;(statearr_22898_22915[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22870);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22897;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22916 = state_22870;
state_22870 = G__22916;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_22870){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_22870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___22900,out))
})();var state__16262__auto__ = (function (){var statearr_22899 = f__16261__auto__.call(null);(statearr_22899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___22900);
return statearr_22899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___22900,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16260__auto___23059 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16260__auto___23059,out){
return (function (){var f__16261__auto__ = (function (){var switch__16195__auto__ = ((function (c__16260__auto___23059,out){
return (function (state_23029){var state_val_23030 = (state_23029[(1)]);if((state_val_23030 === (7)))
{var inst_23025 = (state_23029[(2)]);var state_23029__$1 = state_23029;var statearr_23031_23060 = state_23029__$1;(statearr_23031_23060[(2)] = inst_23025);
(statearr_23031_23060[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (1)))
{var inst_22988 = [];var inst_22989 = inst_22988;var inst_22990 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_23029__$1 = (function (){var statearr_23032 = state_23029;(statearr_23032[(7)] = inst_22990);
(statearr_23032[(8)] = inst_22989);
return statearr_23032;
})();var statearr_23033_23061 = state_23029__$1;(statearr_23033_23061[(2)] = null);
(statearr_23033_23061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (4)))
{var inst_22993 = (state_23029[(9)]);var inst_22993__$1 = (state_23029[(2)]);var inst_22994 = (inst_22993__$1 == null);var inst_22995 = cljs.core.not.call(null,inst_22994);var state_23029__$1 = (function (){var statearr_23034 = state_23029;(statearr_23034[(9)] = inst_22993__$1);
return statearr_23034;
})();if(inst_22995)
{var statearr_23035_23062 = state_23029__$1;(statearr_23035_23062[(1)] = (5));
} else
{var statearr_23036_23063 = state_23029__$1;(statearr_23036_23063[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (15)))
{var inst_23019 = (state_23029[(2)]);var state_23029__$1 = state_23029;var statearr_23037_23064 = state_23029__$1;(statearr_23037_23064[(2)] = inst_23019);
(statearr_23037_23064[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (13)))
{var state_23029__$1 = state_23029;var statearr_23038_23065 = state_23029__$1;(statearr_23038_23065[(2)] = null);
(statearr_23038_23065[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (6)))
{var inst_22989 = (state_23029[(8)]);var inst_23014 = inst_22989.length;var inst_23015 = (inst_23014 > (0));var state_23029__$1 = state_23029;if(cljs.core.truth_(inst_23015))
{var statearr_23039_23066 = state_23029__$1;(statearr_23039_23066[(1)] = (12));
} else
{var statearr_23040_23067 = state_23029__$1;(statearr_23040_23067[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (3)))
{var inst_23027 = (state_23029[(2)]);var state_23029__$1 = state_23029;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23029__$1,inst_23027);
} else
{if((state_val_23030 === (12)))
{var inst_22989 = (state_23029[(8)]);var inst_23017 = cljs.core.vec.call(null,inst_22989);var state_23029__$1 = state_23029;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23029__$1,(15),out,inst_23017);
} else
{if((state_val_23030 === (2)))
{var state_23029__$1 = state_23029;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23029__$1,(4),ch);
} else
{if((state_val_23030 === (11)))
{var inst_22997 = (state_23029[(10)]);var inst_22993 = (state_23029[(9)]);var inst_23007 = (state_23029[(2)]);var inst_23008 = [];var inst_23009 = inst_23008.push(inst_22993);var inst_22989 = inst_23008;var inst_22990 = inst_22997;var state_23029__$1 = (function (){var statearr_23041 = state_23029;(statearr_23041[(11)] = inst_23007);
(statearr_23041[(12)] = inst_23009);
(statearr_23041[(7)] = inst_22990);
(statearr_23041[(8)] = inst_22989);
return statearr_23041;
})();var statearr_23042_23068 = state_23029__$1;(statearr_23042_23068[(2)] = null);
(statearr_23042_23068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (9)))
{var inst_22989 = (state_23029[(8)]);var inst_23005 = cljs.core.vec.call(null,inst_22989);var state_23029__$1 = state_23029;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23029__$1,(11),out,inst_23005);
} else
{if((state_val_23030 === (5)))
{var inst_22997 = (state_23029[(10)]);var inst_22990 = (state_23029[(7)]);var inst_22993 = (state_23029[(9)]);var inst_22997__$1 = f.call(null,inst_22993);var inst_22998 = cljs.core._EQ_.call(null,inst_22997__$1,inst_22990);var inst_22999 = cljs.core.keyword_identical_QMARK_.call(null,inst_22990,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_23000 = (inst_22998) || (inst_22999);var state_23029__$1 = (function (){var statearr_23043 = state_23029;(statearr_23043[(10)] = inst_22997__$1);
return statearr_23043;
})();if(cljs.core.truth_(inst_23000))
{var statearr_23044_23069 = state_23029__$1;(statearr_23044_23069[(1)] = (8));
} else
{var statearr_23045_23070 = state_23029__$1;(statearr_23045_23070[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (14)))
{var inst_23022 = (state_23029[(2)]);var inst_23023 = cljs.core.async.close_BANG_.call(null,out);var state_23029__$1 = (function (){var statearr_23047 = state_23029;(statearr_23047[(13)] = inst_23022);
return statearr_23047;
})();var statearr_23048_23071 = state_23029__$1;(statearr_23048_23071[(2)] = inst_23023);
(statearr_23048_23071[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (10)))
{var inst_23012 = (state_23029[(2)]);var state_23029__$1 = state_23029;var statearr_23049_23072 = state_23029__$1;(statearr_23049_23072[(2)] = inst_23012);
(statearr_23049_23072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23030 === (8)))
{var inst_22997 = (state_23029[(10)]);var inst_22993 = (state_23029[(9)]);var inst_22989 = (state_23029[(8)]);var inst_23002 = inst_22989.push(inst_22993);var tmp23046 = inst_22989;var inst_22989__$1 = tmp23046;var inst_22990 = inst_22997;var state_23029__$1 = (function (){var statearr_23050 = state_23029;(statearr_23050[(14)] = inst_23002);
(statearr_23050[(7)] = inst_22990);
(statearr_23050[(8)] = inst_22989__$1);
return statearr_23050;
})();var statearr_23051_23073 = state_23029__$1;(statearr_23051_23073[(2)] = null);
(statearr_23051_23073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16260__auto___23059,out))
;return ((function (switch__16195__auto__,c__16260__auto___23059,out){
return (function() {
var state_machine__16196__auto__ = null;
var state_machine__16196__auto____0 = (function (){var statearr_23055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23055[(0)] = state_machine__16196__auto__);
(statearr_23055[(1)] = (1));
return statearr_23055;
});
var state_machine__16196__auto____1 = (function (state_23029){while(true){
var ret_value__16197__auto__ = (function (){try{while(true){
var result__16198__auto__ = switch__16195__auto__.call(null,state_23029);if(cljs.core.keyword_identical_QMARK_.call(null,result__16198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16198__auto__;
}
break;
}
}catch (e23056){if((e23056 instanceof Object))
{var ex__16199__auto__ = e23056;var statearr_23057_23074 = state_23029;(statearr_23057_23074[(5)] = ex__16199__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23029);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23056;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23075 = state_23029;
state_23029 = G__23075;
continue;
}
} else
{return ret_value__16197__auto__;
}
break;
}
});
state_machine__16196__auto__ = function(state_23029){
switch(arguments.length){
case 0:
return state_machine__16196__auto____0.call(this);
case 1:
return state_machine__16196__auto____1.call(this,state_23029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16196__auto____0;
state_machine__16196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16196__auto____1;
return state_machine__16196__auto__;
})()
;})(switch__16195__auto__,c__16260__auto___23059,out))
})();var state__16262__auto__ = (function (){var statearr_23058 = f__16261__auto__.call(null);(statearr_23058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16260__auto___23059);
return statearr_23058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16262__auto__);
});})(c__16260__auto___23059,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
