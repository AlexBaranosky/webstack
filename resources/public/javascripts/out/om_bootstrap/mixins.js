// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.mixin');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
var ufv___20492 = schema.utils.use_fn_validation;var output_schema20485_20493 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema20486_20494 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker20487_20495 = schema.core.checker.call(null,input_schema20486_20494);var output_checker20488_20496 = schema.core.checker.call(null,output_schema20485_20493);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___20492,output_schema20485_20493,input_schema20486_20494,input_checker20487_20495,output_checker20488_20496){
return (function event_listener(G__20489,G__20490,G__20491){var validate__11825__auto__ = ufv___20492.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___20497 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20489,G__20490,G__20491], null);var temp__4222__auto___20498 = input_checker20487_20495.call(null,args__11826__auto___20497);if(cljs.core.truth_(temp__4222__auto___20498))
{var error__11827__auto___20499 = temp__4222__auto___20498;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__11827__auto___20499)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20486_20494,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___20497,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20499], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var target = G__20489;var event_type = G__20490;var callback = G__20491;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__11825__auto__,ufv___20492,output_schema20485_20493,input_schema20486_20494,input_checker20487_20495,output_checker20488_20496){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__11825__auto__,ufv___20492,output_schema20485_20493,input_schema20486_20494,input_checker20487_20495,output_checker20488_20496))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__11825__auto__,ufv___20492,output_schema20485_20493,input_schema20486_20494,input_checker20487_20495,output_checker20488_20496){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__11825__auto__,ufv___20492,output_schema20485_20493,input_schema20486_20494,input_checker20487_20495,output_checker20488_20496))
} else
{return ((function (validate__11825__auto__,ufv___20492,output_schema20485_20493,input_schema20486_20494,input_checker20487_20495,output_checker20488_20496){
return (function (){return null;
});
;})(validate__11825__auto__,ufv___20492,output_schema20485_20493,input_schema20486_20494,input_checker20487_20495,output_checker20488_20496))

}
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___20500 = output_checker20488_20496.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___20500))
{var error__11827__auto___20501 = temp__4222__auto___20500;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__11827__auto___20501)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20485_20493,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___20501], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___20492,output_schema20485_20493,input_schema20486_20494,input_checker20487_20495,output_checker20488_20496))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema20485_20493,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20486_20494], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target20506,event_type20507,callback20508){var this20505 = this;return ((function (this20505){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this20505))
.call(null,this20505,target20506,event_type20507,callback20508);
}), "componentWillUnmount": (function (){var this20504 = this;return ((function (this20504){
return (function (owner){return owner.listeners.map(((function (this20504){
return (function (p1__20502_SHARP_){return p1__20502_SHARP_.call(null);
});})(this20504))
);
});})(this20504))
.call(null,this20504);
}), "componentWillMount": (function (){var this20503 = this;return ((function (this20503){
return (function (owner){return owner.listeners = [];
});})(this20503))
.call(null,this20503);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f20513,timeout20514){var this20512 = this;return ((function (this20512){
return (function (owner,f,timeout){var timeout__$1 = setTimeout(f,timeout);return owner.timeouts.push(timeout__$1);
});})(this20512))
.call(null,this20512,f20513,timeout20514);
}), "componentWillUnmount": (function (){var this20511 = this;return ((function (this20511){
return (function (owner){return owner.timeouts.map(((function (this20511){
return (function (p1__20509_SHARP_){return clearTimeout(p1__20509_SHARP_);
});})(this20511))
);
});})(this20511))
.call(null,this20511);
}), "componentWillMount": (function (){var this20510 = this;return ((function (this20510){
return (function (owner){return owner.timeouts = [];
});})(this20510))
.call(null,this20510);
})};
/**
* Accepts two DOM elements; returns true if the supplied node is
* nested inside the supplied root, false otherwise.
*/
om_bootstrap.mixins.in_root_QMARK_ = (function in_root_QMARK_(node,root){var node__$1 = node;while(true){
if((node__$1 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,root,node__$1))
{return true;
} else
{{
var G__20515 = node__$1.parentNode;
node__$1 = G__20515;
continue;
}

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
* For dropdowns, binds a handler for that sets the dropdown-mixin's
* `:open?` state to false if the user clicks outside the owning
* component OR hits the escape key.
*/
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function bind_root_close_handlers_BANG_(owner){var set_state = (owner["setDropdownState"]);return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){if(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))
{return null;
} else
{return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{return set_state.call(null,false);
} else
{return null;
}
});})(set_state))
)];
});
/**
* If they're present on the owning object, removes the listeners
* registered by the dropdown mixin.
*/
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function unbind_root_close_handlers_BANG_(owner){var temp__4222__auto__ = owner.dropdownListeners;if(cljs.core.truth_(temp__4222__auto__))
{var listeners = temp__4222__auto__;cljs.core.map.call(null,((function (listeners,temp__4222__auto__){
return (function (p1__20516_SHARP_){return p1__20516_SHARP_.call(null);
});})(listeners,temp__4222__auto__))
,listeners);
return owner.dropdownListeners = null;
} else
{return null;
}
});
/**
* Mixin that manages a single piece of state - :open?. If a user
* clicks outside the component's owning dom element OR hits the escape
* key, the state will jump back to false.
* 
* Down the road this may need to register a callback when the state
* changes.
*/
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_20521){var this20520 = this;return ((function (this20520){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}
return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this20520))
.call(null,this20520,open_QMARK_20521);
}), "isDropdownOpen": (function (){var this20519 = this;return ((function (this20519){
return (function (owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this20519))
.call(null,this20519);
}), "componentWillUnmount": (function (){var this20518 = this;return ((function (this20518){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this20518))
.call(null,this20518);
}), "getInitialState": (function (){var this20517 = this;return ((function (this20517){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this20517))
.call(null,this20517);
})};
