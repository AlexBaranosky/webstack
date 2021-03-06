// Compiled by ClojureScript 0.0-2322
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__8098__auto__ = v;if(cljs.core.truth_(and__8098__auto__))
{return (v > (0));
} else
{return and__8098__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__19580_SHARP_,p2__19579_SHARP_){var vec__19582 = clojure.string.split.call(null,p2__19579_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__19582,(0),null);var v = cljs.core.nth.call(null,vec__19582,(1),null);return cljs.core.assoc.call(null,p1__19580_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__19583_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__19583_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__19584){var vec__19586 = p__19584;var k = cljs.core.nth.call(null,vec__19586,(0),null);var v = cljs.core.nth.call(null,vec__19586,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__19587_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19587_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__8098__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__8098__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__8098__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4220__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4220__auto__))
{var params = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__16275__auto___19624 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16275__auto___19624,channel){
return (function (){var f__16276__auto__ = (function (){var switch__16210__auto__ = ((function (c__16275__auto___19624,channel){
return (function (state_19614){var state_val_19615 = (state_19614[(1)]);if((state_val_19615 === (2)))
{var inst_19608 = (state_19614[(2)]);var inst_19609 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_19610 = cljs_http.client.decode_body.call(null,inst_19608,cljs.reader.read_string,"application/edn",inst_19609);var inst_19611 = cljs.core.async.put_BANG_.call(null,channel,inst_19610);var inst_19612 = cljs.core.async.close_BANG_.call(null,channel);var state_19614__$1 = (function (){var statearr_19616 = state_19614;(statearr_19616[(7)] = inst_19611);
return statearr_19616;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19614__$1,inst_19612);
} else
{if((state_val_19615 === (1)))
{var inst_19606 = client.call(null,request);var state_19614__$1 = state_19614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19614__$1,(2),inst_19606);
} else
{return null;
}
}
});})(c__16275__auto___19624,channel))
;return ((function (switch__16210__auto__,c__16275__auto___19624,channel){
return (function() {
var state_machine__16211__auto__ = null;
var state_machine__16211__auto____0 = (function (){var statearr_19620 = [null,null,null,null,null,null,null,null];(statearr_19620[(0)] = state_machine__16211__auto__);
(statearr_19620[(1)] = (1));
return statearr_19620;
});
var state_machine__16211__auto____1 = (function (state_19614){while(true){
var ret_value__16212__auto__ = (function (){try{while(true){
var result__16213__auto__ = switch__16210__auto__.call(null,state_19614);if(cljs.core.keyword_identical_QMARK_.call(null,result__16213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16213__auto__;
}
break;
}
}catch (e19621){if((e19621 instanceof Object))
{var ex__16214__auto__ = e19621;var statearr_19622_19625 = state_19614;(statearr_19622_19625[(5)] = ex__16214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19614);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19621;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19626 = state_19614;
state_19614 = G__19626;
continue;
}
} else
{return ret_value__16212__auto__;
}
break;
}
});
state_machine__16211__auto__ = function(state_19614){
switch(arguments.length){
case 0:
return state_machine__16211__auto____0.call(this);
case 1:
return state_machine__16211__auto____1.call(this,state_19614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16211__auto____0;
state_machine__16211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16211__auto____1;
return state_machine__16211__auto__;
})()
;})(switch__16210__auto__,c__16275__auto___19624,channel))
})();var state__16277__auto__ = (function (){var statearr_19623 = f__16276__auto__.call(null);(statearr_19623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16275__auto___19624);
return statearr_19623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16277__auto__);
});})(c__16275__auto___19624,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__19627){var vec__19629 = p__19627;var accept = cljs.core.nth.call(null,vec__19629,(0),null);return ((function (vec__19629,accept){
return (function (request){var temp__4220__auto__ = (function (){var or__8110__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4220__auto__))
{var accept__$1 = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__19629,accept))
};
var wrap_accept = function (client,var_args){
var p__19627 = null;if (arguments.length > 1) {
  p__19627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__19627);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__19630){
var client = cljs.core.first(arglist__19630);
var p__19627 = cljs.core.rest(arglist__19630);
return wrap_accept__delegate(client,p__19627);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__19631){var vec__19633 = p__19631;var content_type = cljs.core.nth.call(null,vec__19633,(0),null);return ((function (vec__19633,content_type){
return (function (request){var temp__4220__auto__ = (function (){var or__8110__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4220__auto__))
{var content_type__$1 = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__19633,content_type))
};
var wrap_content_type = function (client,var_args){
var p__19631 = null;if (arguments.length > 1) {
  p__19631 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__19631);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__19634){
var client = cljs.core.first(arglist__19634);
var p__19631 = cljs.core.rest(arglist__19634);
return wrap_content_type__delegate(client,p__19631);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4220__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4220__auto__))
{var params = temp__4220__auto__;var map__19636 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__19636__$1 = ((cljs.core.seq_QMARK_.call(null,map__19636))?cljs.core.apply.call(null,cljs.core.hash_map,map__19636):map__19636);var encoding_opts = cljs.core.get.call(null,map__19636__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__19636__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__19658 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__19658__$1 = ((cljs.core.seq_QMARK_.call(null,map__19658))?cljs.core.apply.call(null,cljs.core.hash_map,map__19658):map__19658);var decoding_opts = cljs.core.get.call(null,map__19658__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__19658__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__16275__auto___19678 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16275__auto___19678,channel,map__19658,map__19658__$1,decoding_opts,decoding){
return (function (){var f__16276__auto__ = (function (){var switch__16210__auto__ = ((function (c__16275__auto___19678,channel,map__19658,map__19658__$1,decoding_opts,decoding){
return (function (state_19668){var state_val_19669 = (state_19668[(1)]);if((state_val_19669 === (2)))
{var inst_19661 = (state_19668[(2)]);var inst_19662 = (function (){var response = inst_19661;return ((function (response,inst_19661,state_val_19669,c__16275__auto___19678,channel,map__19658,map__19658__$1,decoding_opts,decoding){
return (function (p1__19637_SHARP_){return cljs_http.util.transit_decode.call(null,p1__19637_SHARP_,decoding,decoding_opts);
});
;})(response,inst_19661,state_val_19669,c__16275__auto___19678,channel,map__19658,map__19658__$1,decoding_opts,decoding))
})();var inst_19663 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_19664 = cljs_http.client.decode_body.call(null,inst_19661,inst_19662,"application/transit+json",inst_19663);var inst_19665 = cljs.core.async.put_BANG_.call(null,channel,inst_19664);var inst_19666 = cljs.core.async.close_BANG_.call(null,channel);var state_19668__$1 = (function (){var statearr_19670 = state_19668;(statearr_19670[(7)] = inst_19665);
return statearr_19670;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19668__$1,inst_19666);
} else
{if((state_val_19669 === (1)))
{var inst_19659 = client.call(null,request);var state_19668__$1 = state_19668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19668__$1,(2),inst_19659);
} else
{return null;
}
}
});})(c__16275__auto___19678,channel,map__19658,map__19658__$1,decoding_opts,decoding))
;return ((function (switch__16210__auto__,c__16275__auto___19678,channel,map__19658,map__19658__$1,decoding_opts,decoding){
return (function() {
var state_machine__16211__auto__ = null;
var state_machine__16211__auto____0 = (function (){var statearr_19674 = [null,null,null,null,null,null,null,null];(statearr_19674[(0)] = state_machine__16211__auto__);
(statearr_19674[(1)] = (1));
return statearr_19674;
});
var state_machine__16211__auto____1 = (function (state_19668){while(true){
var ret_value__16212__auto__ = (function (){try{while(true){
var result__16213__auto__ = switch__16210__auto__.call(null,state_19668);if(cljs.core.keyword_identical_QMARK_.call(null,result__16213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16213__auto__;
}
break;
}
}catch (e19675){if((e19675 instanceof Object))
{var ex__16214__auto__ = e19675;var statearr_19676_19679 = state_19668;(statearr_19676_19679[(5)] = ex__16214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19675;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19680 = state_19668;
state_19668 = G__19680;
continue;
}
} else
{return ret_value__16212__auto__;
}
break;
}
});
state_machine__16211__auto__ = function(state_19668){
switch(arguments.length){
case 0:
return state_machine__16211__auto____0.call(this);
case 1:
return state_machine__16211__auto____1.call(this,state_19668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16211__auto____0;
state_machine__16211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16211__auto____1;
return state_machine__16211__auto__;
})()
;})(switch__16210__auto__,c__16275__auto___19678,channel,map__19658,map__19658__$1,decoding_opts,decoding))
})();var state__16277__auto__ = (function (){var statearr_19677 = f__16276__auto__.call(null);(statearr_19677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16275__auto___19678);
return statearr_19677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16277__auto__);
});})(c__16275__auto___19678,channel,map__19658,map__19658__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4220__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4220__auto__))
{var params = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__16275__auto___19717 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16275__auto___19717,channel){
return (function (){var f__16276__auto__ = (function (){var switch__16210__auto__ = ((function (c__16275__auto___19717,channel){
return (function (state_19707){var state_val_19708 = (state_19707[(1)]);if((state_val_19708 === (2)))
{var inst_19701 = (state_19707[(2)]);var inst_19702 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_19703 = cljs_http.client.decode_body.call(null,inst_19701,cljs_http.util.json_decode,"application/json",inst_19702);var inst_19704 = cljs.core.async.put_BANG_.call(null,channel,inst_19703);var inst_19705 = cljs.core.async.close_BANG_.call(null,channel);var state_19707__$1 = (function (){var statearr_19709 = state_19707;(statearr_19709[(7)] = inst_19704);
return statearr_19709;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19707__$1,inst_19705);
} else
{if((state_val_19708 === (1)))
{var inst_19699 = client.call(null,request);var state_19707__$1 = state_19707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19707__$1,(2),inst_19699);
} else
{return null;
}
}
});})(c__16275__auto___19717,channel))
;return ((function (switch__16210__auto__,c__16275__auto___19717,channel){
return (function() {
var state_machine__16211__auto__ = null;
var state_machine__16211__auto____0 = (function (){var statearr_19713 = [null,null,null,null,null,null,null,null];(statearr_19713[(0)] = state_machine__16211__auto__);
(statearr_19713[(1)] = (1));
return statearr_19713;
});
var state_machine__16211__auto____1 = (function (state_19707){while(true){
var ret_value__16212__auto__ = (function (){try{while(true){
var result__16213__auto__ = switch__16210__auto__.call(null,state_19707);if(cljs.core.keyword_identical_QMARK_.call(null,result__16213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16213__auto__;
}
break;
}
}catch (e19714){if((e19714 instanceof Object))
{var ex__16214__auto__ = e19714;var statearr_19715_19718 = state_19707;(statearr_19715_19718[(5)] = ex__16214__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19707);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19714;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19719 = state_19707;
state_19707 = G__19719;
continue;
}
} else
{return ret_value__16212__auto__;
}
break;
}
});
state_machine__16211__auto__ = function(state_19707){
switch(arguments.length){
case 0:
return state_machine__16211__auto____0.call(this);
case 1:
return state_machine__16211__auto____1.call(this,state_19707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16211__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16211__auto____0;
state_machine__16211__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16211__auto____1;
return state_machine__16211__auto__;
})()
;})(switch__16210__auto__,c__16275__auto___19717,channel))
})();var state__16277__auto__ = (function (){var statearr_19716 = f__16276__auto__.call(null);(statearr_19716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16275__auto___19717);
return statearr_19716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16277__auto__);
});})(c__16275__auto___19717,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__19722){var map__19723 = p__19722;var map__19723__$1 = ((cljs.core.seq_QMARK_.call(null,map__19723))?cljs.core.apply.call(null,cljs.core.hash_map,map__19723):map__19723);var req = map__19723__$1;var query_params = cljs.core.get.call(null,map__19723__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__19726){var map__19727 = p__19726;var map__19727__$1 = ((cljs.core.seq_QMARK_.call(null,map__19727))?cljs.core.apply.call(null,cljs.core.hash_map,map__19727):map__19727);var request = map__19727__$1;var request_method = cljs.core.get.call(null,map__19727__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__19727__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__8098__auto__ = form_params;if(cljs.core.truth_(and__8098__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__8098__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4220__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4220__auto__))
{var m = temp__4220__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__19728_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__19728_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__19732){var map__19733 = p__19732;var map__19733__$1 = ((cljs.core.seq_QMARK_.call(null,map__19733))?cljs.core.apply.call(null,cljs.core.hash_map,map__19733):map__19733);var req = map__19733__$1;var query_params = cljs.core.get.call(null,map__19733__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4220__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4220__auto__))
{var spec = temp__4220__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4220__auto__,map__19733,map__19733__$1,req,query_params){
return (function (p1__19729_SHARP_){return cljs.core.merge.call(null,p1__19729_SHARP_,query_params);
});})(spec,temp__4220__auto__,map__19733,map__19733__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__19734){var vec__19736 = p__19734;var credentials = cljs.core.nth.call(null,vec__19736,(0),null);return ((function (vec__19736,credentials){
return (function (req){var credentials__$1 = (function (){var or__8110__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__19736,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__19734 = null;if (arguments.length > 1) {
  p__19734 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__19734);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__19737){
var client = cljs.core.first(arglist__19737);
var p__19734 = cljs.core.rest(arglist__19737);
return wrap_basic_auth__delegate(client,p__19734);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4220__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4220__auto__))
{var oauth_token = temp__4220__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__19738){var vec__19740 = p__19738;var req = cljs.core.nth.call(null,vec__19740,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__19738 = null;if (arguments.length > 1) {
  p__19738 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__19738);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__19741){
var url = cljs.core.first(arglist__19741);
var p__19738 = cljs.core.rest(arglist__19741);
return delete$__delegate(url,p__19738);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__19742){var vec__19744 = p__19742;var req = cljs.core.nth.call(null,vec__19744,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__19742 = null;if (arguments.length > 1) {
  p__19742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__19742);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__19745){
var url = cljs.core.first(arglist__19745);
var p__19742 = cljs.core.rest(arglist__19745);
return get__delegate(url,p__19742);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__19746){var vec__19748 = p__19746;var req = cljs.core.nth.call(null,vec__19748,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__19746 = null;if (arguments.length > 1) {
  p__19746 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__19746);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__19749){
var url = cljs.core.first(arglist__19749);
var p__19746 = cljs.core.rest(arglist__19749);
return head__delegate(url,p__19746);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__19750){var vec__19752 = p__19750;var req = cljs.core.nth.call(null,vec__19752,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__19750 = null;if (arguments.length > 1) {
  p__19750 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__19750);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__19753){
var url = cljs.core.first(arglist__19753);
var p__19750 = cljs.core.rest(arglist__19753);
return move__delegate(url,p__19750);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__19754){var vec__19756 = p__19754;var req = cljs.core.nth.call(null,vec__19756,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__19754 = null;if (arguments.length > 1) {
  p__19754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__19754);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__19757){
var url = cljs.core.first(arglist__19757);
var p__19754 = cljs.core.rest(arglist__19757);
return options__delegate(url,p__19754);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__19758){var vec__19760 = p__19758;var req = cljs.core.nth.call(null,vec__19760,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__19758 = null;if (arguments.length > 1) {
  p__19758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__19758);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__19761){
var url = cljs.core.first(arglist__19761);
var p__19758 = cljs.core.rest(arglist__19761);
return patch__delegate(url,p__19758);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__19762){var vec__19764 = p__19762;var req = cljs.core.nth.call(null,vec__19764,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__19762 = null;if (arguments.length > 1) {
  p__19762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__19762);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__19765){
var url = cljs.core.first(arglist__19765);
var p__19762 = cljs.core.rest(arglist__19765);
return post__delegate(url,p__19762);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__19766){var vec__19768 = p__19766;var req = cljs.core.nth.call(null,vec__19768,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__19766 = null;if (arguments.length > 1) {
  p__19766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__19766);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__19769){
var url = cljs.core.first(arglist__19769);
var p__19766 = cljs.core.rest(arglist__19769);
return put__delegate(url,p__19766);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
