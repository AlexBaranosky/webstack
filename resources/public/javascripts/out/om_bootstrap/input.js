// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.input');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
goog.require('clojure.string');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.input.Addons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-after","addon-after",634985306)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component)], true, false);
/**
* Helps render feedback icons.
*/
om_bootstrap.input.FeedbackIcons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),schema.core.enum$.call(null,"success","warning","error"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821)),schema.core.Bool], true, false);
/**
* Input fields that match these bad dawgs:
* https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Input.jsx
*/
om_bootstrap.input.Input = cljs.core.merge.call(null,om_bootstrap.input.Addons,om_bootstrap.input.FeedbackIcons,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261)),schema.core.named.call(null,schema.core.Bool,"DON'T render a wrapping form group?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"help","help",-439233446)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212)),schema.core.Str], true, false));
om_bootstrap.input.Radio = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inline?","inline?",-1674483791)),schema.core.Bool], true, false));
var ufv___23429 = schema.utils.use_fn_validation;var output_schema23420_23430 = schema.core.Str;var input_schema23421_23431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker23422_23432 = schema.core.checker.call(null,input_schema23421_23431);var output_checker23423_23433 = schema.core.checker.call(null,output_schema23420_23430);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___23429,output_schema23420_23430,input_schema23421_23431,input_checker23422_23432,output_checker23423_23433){
return (function class_set(G__23424){var validate__11825__auto__ = ufv___23429.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23424], null);var temp__4222__auto___23435 = input_checker23422_23432.call(null,args__11826__auto___23434);if(cljs.core.truth_(temp__4222__auto___23435))
{var error__11827__auto___23436 = temp__4222__auto___23435;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__11827__auto___23436)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23421_23431,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23434,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23436], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var klasses = G__23424;while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__11825__auto__,ufv___23429,output_schema23420_23430,input_schema23421_23431,input_checker23422_23432,output_checker23423_23433){
return (function (p__23427){var vec__23428 = p__23427;var k = cljs.core.nth.call(null,vec__23428,(0),null);var keep_QMARK_ = cljs.core.nth.call(null,vec__23428,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else
{return null;
}
});})(validate__11825__auto__,ufv___23429,output_schema23420_23430,input_schema23421_23431,input_checker23422_23432,output_checker23423_23433))
,klasses));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23437 = output_checker23423_23433.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23437))
{var error__11827__auto___23438 = temp__4222__auto___23437;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__11827__auto___23438)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23420_23430,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23438], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23429,output_schema23420_23430,input_schema23421_23431,input_checker23422_23432,output_checker23423_23433))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema23420_23430,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23421_23431], null)));
var ufv___23444 = schema.utils.use_fn_validation;var output_schema23439_23445 = om_bootstrap.types.Component;var input_schema23440_23446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker23441_23447 = schema.core.checker.call(null,input_schema23440_23446);var output_checker23442_23448 = schema.core.checker.call(null,output_schema23439_23445);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___23444,output_schema23439_23445,input_schema23440_23446,input_checker23441_23447,output_checker23442_23448){
return (function glyph(G__23443){var validate__11825__auto__ = ufv___23444.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23443], null);var temp__4222__auto___23450 = input_checker23441_23447.call(null,args__11826__auto___23449);if(cljs.core.truth_(temp__4222__auto___23450))
{var error__11827__auto___23451 = temp__4222__auto___23450;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__11827__auto___23451)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23440_23446,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23449,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23451], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var glyph_name = G__23443;while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))});
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23452 = output_checker23442_23448.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23452))
{var error__11827__auto___23453 = temp__4222__auto___23452;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__11827__auto___23453)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23439_23445,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23453], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23444,output_schema23439_23445,input_schema23440_23446,input_checker23441_23447,output_checker23442_23448))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema23439_23445,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23440_23446], null)));
var ufv___23467 = schema.utils.use_fn_validation;var output_schema23454_23468 = om_bootstrap.types.Component;var input_schema23455_23469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker23456_23470 = schema.core.checker.call(null,input_schema23455_23469);var output_checker23457_23471 = schema.core.checker.call(null,output_schema23454_23468);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___23467,output_schema23454_23468,input_schema23455_23469,input_checker23456_23470,output_checker23457_23471){
return (function render_icon(G__23458){var validate__11825__auto__ = ufv___23467.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23458], null);var temp__4222__auto___23473 = input_checker23456_23470.call(null,args__11826__auto___23472);if(cljs.core.truth_(temp__4222__auto___23473))
{var error__11827__auto___23474 = temp__4222__auto___23473;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__11827__auto___23474)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23455_23469,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23472,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23474], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__23464 = G__23458;var map__23465 = G__23464;var map__23465__$1 = ((cljs.core.seq_QMARK_.call(null,map__23465))?cljs.core.apply.call(null,cljs.core.hash_map,map__23465):map__23465);var bs_style = cljs.core.get.call(null,map__23465__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.call(null,map__23465__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__23464__$1 = G__23464;while(true){
var map__23466 = G__23464__$1;var map__23466__$1 = ((cljs.core.seq_QMARK_.call(null,map__23466))?cljs.core.apply.call(null,cljs.core.hash_map,map__23466):map__23466);var bs_style__$1 = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23475 = output_checker23457_23471.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23475))
{var error__11827__auto___23476 = temp__4222__auto___23475;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__11827__auto___23476)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23454_23468,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23476], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23467,output_schema23454_23468,input_schema23455_23469,input_checker23456_23470,output_checker23457_23471))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema23454_23468,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23455_23469], null)));
var ufv___23482 = schema.utils.use_fn_validation;var output_schema23477_23483 = schema.core.Any;var input_schema23478_23484 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker23479_23485 = schema.core.checker.call(null,input_schema23478_23484);var output_checker23480_23486 = schema.core.checker.call(null,output_schema23477_23483);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___23482,output_schema23477_23483,input_schema23478_23484,input_checker23479_23485,output_checker23480_23486){
return (function render_help(G__23481){var validate__11825__auto__ = ufv___23482.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23487 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23481], null);var temp__4222__auto___23488 = input_checker23479_23485.call(null,args__11826__auto___23487);if(cljs.core.truth_(temp__4222__auto___23488))
{var error__11827__auto___23489 = temp__4222__auto___23488;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__11827__auto___23489)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23478_23484,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23487,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23489], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var help = G__23481;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23490 = output_checker23480_23486.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23490))
{var error__11827__auto___23491 = temp__4222__auto___23490;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__11827__auto___23491)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23477_23483,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23491], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23482,output_schema23477_23483,input_schema23478_23484,input_checker23479_23485,output_checker23480_23486))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema23477_23483,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23478_23484], null)));
var ufv___23506 = schema.utils.use_fn_validation;var output_schema23492_23507 = schema.core.Any;var input_schema23493_23508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker23494_23509 = schema.core.checker.call(null,input_schema23493_23508);var output_checker23495_23510 = schema.core.checker.call(null,output_schema23492_23507);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___23506,output_schema23492_23507,input_schema23493_23508,input_checker23494_23509,output_checker23495_23510){
return (function render_input_group(G__23496,G__23497){var validate__11825__auto__ = ufv___23506.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23496,G__23497], null);var temp__4222__auto___23512 = input_checker23494_23509.call(null,args__11826__auto___23511);if(cljs.core.truth_(temp__4222__auto___23512))
{var error__11827__auto___23513 = temp__4222__auto___23512;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__11827__auto___23513)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23493_23508,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23511,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23513], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__23503 = G__23496;var map__23504 = G__23503;var map__23504__$1 = ((cljs.core.seq_QMARK_.call(null,map__23504))?cljs.core.apply.call(null,cljs.core.hash_map,map__23504):map__23504);var addon_after = cljs.core.get.call(null,map__23504__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.call(null,map__23504__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__23497;var G__23503__$1 = G__23503;var items__$1 = items;while(true){
var map__23505 = G__23503__$1;var map__23505__$1 = ((cljs.core.seq_QMARK_.call(null,map__23505))?cljs.core.apply.call(null,cljs.core.hash_map,map__23505):map__23505);var addon_after__$1 = cljs.core.get.call(null,map__23505__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.call(null,map__23505__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__8110__auto__ = addon_before__$1;if(cljs.core.truth_(or__8110__auto__))
{return or__8110__auto__;
} else
{return addon_after__$1;
}
})()))
{return cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(addon_before__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_before__$1],null)))):null),items__$2,(cljs.core.truth_(addon_after__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_after__$1],null)))):null)],null))));
} else
{return items__$2;
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23514 = output_checker23495_23510.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23514))
{var error__11827__auto___23515 = temp__4222__auto___23514;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__11827__auto___23515)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23492_23507,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23515], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23506,output_schema23492_23507,input_schema23493_23508,input_checker23494_23509,output_checker23495_23510))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema23492_23507,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23493_23508], null)));
var ufv___23529 = schema.utils.use_fn_validation;var output_schema23516_23530 = schema.core.Bool;var input_schema23517_23531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker23518_23532 = schema.core.checker.call(null,input_schema23517_23531);var output_checker23519_23533 = schema.core.checker.call(null,output_schema23516_23530);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___23529,output_schema23516_23530,input_schema23517_23531,input_checker23518_23532,output_checker23519_23533){
return (function checkbox_or_radio_QMARK_(G__23520){var validate__11825__auto__ = ufv___23529.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23520], null);var temp__4222__auto___23535 = input_checker23518_23532.call(null,args__11826__auto___23534);if(cljs.core.truth_(temp__4222__auto___23535))
{var error__11827__auto___23536 = temp__4222__auto___23535;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__11827__auto___23536)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23517_23531,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23534,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23536], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__23526 = G__23520;var map__23527 = G__23526;var map__23527__$1 = ((cljs.core.seq_QMARK_.call(null,map__23527))?cljs.core.apply.call(null,cljs.core.hash_map,map__23527):map__23527);var type = cljs.core.get.call(null,map__23527__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__23526__$1 = G__23526;while(true){
var map__23528 = G__23526__$1;var map__23528__$1 = ((cljs.core.seq_QMARK_.call(null,map__23528))?cljs.core.apply.call(null,cljs.core.hash_map,map__23528):map__23528);var type__$1 = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23537 = output_checker23519_23533.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23537))
{var error__11827__auto___23538 = temp__4222__auto___23537;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__11827__auto___23538)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23516_23530,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23538], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23529,output_schema23516_23530,input_schema23517_23531,input_checker23518_23532,output_checker23519_23533))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema23516_23530,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23517_23531], null)));
var ufv___23553 = schema.utils.use_fn_validation;var output_schema23539_23554 = om_bootstrap.types.Component;var input_schema23540_23555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker23541_23556 = schema.core.checker.call(null,input_schema23540_23555);var output_checker23542_23557 = schema.core.checker.call(null,output_schema23539_23554);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___23553,output_schema23539_23554,input_schema23540_23555,input_checker23541_23556,output_checker23542_23557){
return (function checkbox_or_radio_wrapper(G__23543,G__23544){var validate__11825__auto__ = ufv___23553.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23543,G__23544], null);var temp__4222__auto___23559 = input_checker23541_23556.call(null,args__11826__auto___23558);if(cljs.core.truth_(temp__4222__auto___23559))
{var error__11827__auto___23560 = temp__4222__auto___23559;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__11827__auto___23560)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23540_23555,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23558,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23560], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__23550 = G__23543;var map__23551 = G__23550;var map__23551__$1 = ((cljs.core.seq_QMARK_.call(null,map__23551))?cljs.core.apply.call(null,cljs.core.hash_map,map__23551):map__23551);var type = cljs.core.get.call(null,map__23551__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__23544;var G__23550__$1 = G__23550;var children__$1 = children;while(true){
var map__23552 = G__23550__$1;var map__23552__$1 = ((cljs.core.seq_QMARK_.call(null,map__23552))?cljs.core.apply.call(null,cljs.core.hash_map,map__23552):map__23552);var type__$1 = cljs.core.get.call(null,map__23552__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23561 = output_checker23542_23557.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23561))
{var error__11827__auto___23562 = temp__4222__auto___23561;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__11827__auto___23562)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23539_23554,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23562], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23553,output_schema23539_23554,input_schema23540_23555,input_checker23541_23556,output_checker23542_23557))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema23539_23554,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23540_23555], null)));
var ufv___23581 = schema.utils.use_fn_validation;var output_schema23563_23582 = schema.core.Any;var input_schema23564_23583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema23568_23584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker23565_23585 = schema.core.checker.call(null,input_schema23564_23583);var output_checker23566_23586 = schema.core.checker.call(null,output_schema23563_23582);var input_checker23569_23587 = schema.core.checker.call(null,input_schema23568_23584);var output_checker23570_23588 = schema.core.checker.call(null,output_schema23563_23582);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___23581,output_schema23563_23582,input_schema23564_23583,input_schema23568_23584,input_checker23565_23585,output_checker23566_23586,input_checker23569_23587,output_checker23570_23588){
return (function() {
var render_label = null;
var render_label__1 = (function (G__23567){var validate__11825__auto__ = ufv___23581.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23567], null);var temp__4222__auto___23590 = input_checker23565_23585.call(null,args__11826__auto___23589);if(cljs.core.truth_(temp__4222__auto___23590))
{var error__11827__auto___23591 = temp__4222__auto___23590;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11827__auto___23591)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23564_23583,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23589,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23591], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var input = G__23567;while(true){
return render_label.call(null,input,null);
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23592 = output_checker23566_23586.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23592))
{var error__11827__auto___23593 = temp__4222__auto___23592;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11827__auto___23593)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23563_23582,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23593], null));
} else
{}
} else
{}
return o__11828__auto__;
});
var render_label__2 = (function (G__23571,G__23572){var validate__11825__auto__ = ufv___23581.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23571,G__23572], null);var temp__4222__auto___23595 = input_checker23569_23587.call(null,args__11826__auto___23594);if(cljs.core.truth_(temp__4222__auto___23595))
{var error__11827__auto___23596 = temp__4222__auto___23595;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11827__auto___23596)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23568_23584,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23594,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23596], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__23578 = G__23571;var map__23579 = G__23578;var map__23579__$1 = ((cljs.core.seq_QMARK_.call(null,map__23579))?cljs.core.apply.call(null,cljs.core.hash_map,map__23579):map__23579);var input = map__23579__$1;var lc = cljs.core.get.call(null,map__23579__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.call(null,map__23579__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__23572;var G__23578__$1 = G__23578;var child__$1 = child;while(true){
var map__23580 = G__23578__$1;var map__23580__$1 = ((cljs.core.seq_QMARK_.call(null,map__23580))?cljs.core.apply.call(null,cljs.core.hash_map,map__23580):map__23580);var input__$1 = map__23580__$1;var lc__$1 = cljs.core.get.call(null,map__23580__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.call(null,map__23580__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$.call(null,lc__$1)], true, false):null));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.call(null,React.DOM.label,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23597 = output_checker23570_23588.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23597))
{var error__11827__auto___23598 = temp__4222__auto___23597;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__11827__auto___23598)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23563_23582,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23598], null));
} else
{}
} else
{}
return o__11828__auto__;
});
render_label = function(G__23571,G__23572){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__23571);
case 2:
return render_label__2.call(this,G__23571,G__23572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___23581,output_schema23563_23582,input_schema23564_23583,input_schema23568_23584,input_checker23565_23585,output_checker23566_23586,input_checker23569_23587,output_checker23570_23588))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema23563_23582,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23564_23583,input_schema23568_23584], null)));
var ufv___23613 = schema.utils.use_fn_validation;var output_schema23599_23614 = schema.core.Any;var input_schema23600_23615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker23601_23616 = schema.core.checker.call(null,input_schema23600_23615);var output_checker23602_23617 = schema.core.checker.call(null,output_schema23599_23614);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___23613,output_schema23599_23614,input_schema23600_23615,input_checker23601_23616,output_checker23602_23617){
return (function render_wrapper(G__23603,G__23604){var validate__11825__auto__ = ufv___23613.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23603,G__23604], null);var temp__4222__auto___23619 = input_checker23601_23616.call(null,args__11826__auto___23618);if(cljs.core.truth_(temp__4222__auto___23619))
{var error__11827__auto___23620 = temp__4222__auto___23619;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__11827__auto___23620)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23600_23615,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23618,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23620], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__23610 = G__23603;var map__23611 = G__23610;var map__23611__$1 = ((cljs.core.seq_QMARK_.call(null,map__23611))?cljs.core.apply.call(null,cljs.core.hash_map,map__23611):map__23611);var wc = cljs.core.get.call(null,map__23611__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__23604;var G__23610__$1 = G__23610;var child__$1 = child;while(true){
var map__23612 = G__23610__$1;var map__23612__$1 = ((cljs.core.seq_QMARK_.call(null,map__23612))?cljs.core.apply.call(null,cljs.core.hash_map,map__23612):map__23612);var wc__$1 = cljs.core.get.call(null,map__23612__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23621 = output_checker23602_23617.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23621))
{var error__11827__auto___23622 = temp__4222__auto___23621;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__11827__auto___23622)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23599_23614,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23622], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23613,output_schema23599_23614,input_schema23600_23615,input_checker23601_23616,output_checker23602_23617))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema23599_23614,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23600_23615], null)));
var ufv___23637 = schema.utils.use_fn_validation;var output_schema23623_23638 = om_bootstrap.types.Component;var input_schema23624_23639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker23625_23640 = schema.core.checker.call(null,input_schema23624_23639);var output_checker23626_23641 = schema.core.checker.call(null,output_schema23623_23638);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___23637,output_schema23623_23638,input_schema23624_23639,input_checker23625_23640,output_checker23626_23641){
return (function render_form_group(G__23627,G__23628){var validate__11825__auto__ = ufv___23637.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23627,G__23628], null);var temp__4222__auto___23643 = input_checker23625_23640.call(null,args__11826__auto___23642);if(cljs.core.truth_(temp__4222__auto___23643))
{var error__11827__auto___23644 = temp__4222__auto___23643;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__11827__auto___23644)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23624_23639,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23642,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23644], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var G__23634 = G__23627;var map__23635 = G__23634;var map__23635__$1 = ((cljs.core.seq_QMARK_.call(null,map__23635))?cljs.core.apply.call(null,cljs.core.hash_map,map__23635):map__23635);var input = map__23635__$1;var bs_style = cljs.core.get.call(null,map__23635__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.call(null,map__23635__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__23628;var G__23634__$1 = G__23634;var children__$1 = children;while(true){
var map__23636 = G__23634__$1;var map__23636__$1 = ((cljs.core.seq_QMARK_.call(null,map__23636))?cljs.core.apply.call(null,cljs.core.hash_map,map__23636):map__23636);var input__$1 = map__23636__$1;var bs_style__$1 = cljs.core.get.call(null,map__23636__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.call(null,map__23636__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23645 = output_checker23626_23641.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23645))
{var error__11827__auto___23646 = temp__4222__auto___23645;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__11827__auto___23646)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23623_23638,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23646], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23637,output_schema23623_23638,input_schema23624_23639,input_checker23625_23640,output_checker23626_23641))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema23623_23638,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23624_23639], null)));
var ufv___23656 = schema.utils.use_fn_validation;var output_schema23647_23657 = om_bootstrap.types.Component;var input_schema23648_23658 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker23649_23659 = schema.core.checker.call(null,input_schema23648_23658);var output_checker23650_23660 = schema.core.checker.call(null,output_schema23647_23657);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___23656,output_schema23647_23657,input_schema23648_23658,input_checker23649_23659,output_checker23650_23660){
return (function render_input(G__23651,G__23652,G__23653){var validate__11825__auto__ = ufv___23656.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23651,G__23652,G__23653], null);var temp__4222__auto___23662 = input_checker23649_23659.call(null,args__11826__auto___23661);if(cljs.core.truth_(temp__4222__auto___23662))
{var error__11827__auto___23663 = temp__4222__auto___23662;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__11827__auto___23663)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23648_23658,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23661,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23663], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var input = G__23651;var attrs = G__23652;var children = G__23653;while(true){
var props = ((function (validate__11825__auto__,ufv___23656,output_schema23647_23657,input_schema23648_23658,input_checker23649_23659,output_checker23650_23660){
return (function (klass){return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__11825__auto__,ufv___23656,output_schema23647_23657,input_schema23648_23658,input_checker23649_23659,output_checker23650_23660))
;if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__23655 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__23655) {
case "select":
return om_tools.dom.element.call(null,React.DOM.select,props.call(null,"form-control"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

break;
case "textarea":
return om_tools.dom.element.call(null,om.dom.textarea,props.call(null,"form-control"),cljs.core.PersistentVector.EMPTY);

break;
case "static":
return om_tools.dom.element.call(null,React.DOM.p,props.call(null,"form-control-static"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs)],null)));

break;
default:
return om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props.call(null,((om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))?"":"form-control")),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23665 = output_checker23650_23660.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23665))
{var error__11827__auto___23666 = temp__4222__auto___23665;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__11827__auto___23666)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23647_23657,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23666], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23656,output_schema23647_23657,input_schema23648_23658,input_checker23649_23659,output_checker23650_23660))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema23647_23657,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23648_23658], null)));
var ufv___23675 = schema.utils.use_fn_validation;var output_schema23667_23676 = om_bootstrap.types.Component;var input_schema23668_23677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker23669_23678 = schema.core.checker.call(null,input_schema23668_23677);var output_checker23670_23679 = schema.core.checker.call(null,output_schema23667_23676);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___23675,output_schema23667_23676,input_schema23668_23677,input_checker23669_23678,output_checker23670_23679){
return (function() { 
var input__delegate = function (G__23671,rest23672){var validate__11825__auto__ = ufv___23675.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23680 = cljs.core.list_STAR_.call(null,G__23671,rest23672);var temp__4222__auto___23681 = input_checker23669_23678.call(null,args__11826__auto___23680);if(cljs.core.truth_(temp__4222__auto___23681))
{var error__11827__auto___23682 = temp__4222__auto___23681;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__11827__auto___23682)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23668_23677,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23680,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23682], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__23671;var children = rest23672;while(true){
var vec__23674 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.call(null,vec__23674,(0),null);var attrs = cljs.core.nth.call(null,vec__23674,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))
{return om_bootstrap.input.render_form_group.call(null,input__$1,om_bootstrap.input.render_wrapper.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input__$1,om_bootstrap.input.render_label.call(null,input__$1,om_bootstrap.input.render_input.call(null,input__$1,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input__$1),om_bootstrap.input.render_wrapper.call(null,input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input.call(null,input__$1,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23683 = output_checker23670_23679.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23683))
{var error__11827__auto___23684 = temp__4222__auto___23683;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__11827__auto___23684)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23667_23676,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23684], null));
} else
{}
} else
{}
return o__11828__auto__;
};
var input = function (G__23671,var_args){
var rest23672 = null;if (arguments.length > 1) {
  rest23672 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__23671,rest23672);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__23685){
var G__23671 = cljs.core.first(arglist__23685);
var rest23672 = cljs.core.rest(arglist__23685);
return input__delegate(G__23671,rest23672);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___23675,output_schema23667_23676,input_schema23668_23677,input_checker23669_23678,output_checker23670_23679))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema23667_23676,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23668_23677], null)));
var ufv___23695 = schema.utils.use_fn_validation;var output_schema23686_23696 = om_bootstrap.types.Component;var input_schema23687_23697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker23688_23698 = schema.core.checker.call(null,input_schema23687_23697);var output_checker23689_23699 = schema.core.checker.call(null,output_schema23686_23696);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___23695,output_schema23686_23696,input_schema23687_23697,input_checker23688_23698,output_checker23689_23699){
return (function radio_option(G__23690){var validate__11825__auto__ = ufv___23695.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23690], null);var temp__4222__auto___23701 = input_checker23688_23698.call(null,args__11826__auto___23700);if(cljs.core.truth_(temp__4222__auto___23701))
{var error__11827__auto___23702 = temp__4222__auto___23701;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__11827__auto___23702)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23687_23697,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23700,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23702], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var opts = G__23690;while(true){
var vec__23693 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.call(null,vec__23693,(0),null);var props = cljs.core.nth.call(null,vec__23693,(1),null);var map__23694 = bs;var map__23694__$1 = ((cljs.core.seq_QMARK_.call(null,map__23694))?cljs.core.apply.call(null,cljs.core.hash_map,map__23694):map__23694);var inline_QMARK_ = cljs.core.get.call(null,map__23694__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.call(null,map__23694__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.call(null,map__23694__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23703 = output_checker23689_23699.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23703))
{var error__11827__auto___23704 = temp__4222__auto___23703;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__11827__auto___23704)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23686_23696,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23704], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23695,output_schema23686_23696,input_schema23687_23697,input_checker23688_23698,output_checker23689_23699))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema23686_23696,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23687_23697], null)));
var ufv___23727 = schema.utils.use_fn_validation;var output_schema23705_23728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema23706_23729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker23707_23730 = schema.core.checker.call(null,input_schema23706_23729);var output_checker23708_23731 = schema.core.checker.call(null,output_schema23705_23728);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___23727,output_schema23705_23728,input_schema23706_23729,input_checker23707_23730,output_checker23708_23731){
return (function options(G__23709,G__23710){var validate__11825__auto__ = ufv___23727.get_cell();if(cljs.core.truth_(validate__11825__auto__))
{var args__11826__auto___23732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23709,G__23710], null);var temp__4222__auto___23733 = input_checker23707_23730.call(null,args__11826__auto___23732);if(cljs.core.truth_(temp__4222__auto___23733))
{var error__11827__auto___23734 = temp__4222__auto___23733;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__11827__auto___23734)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23706_23729,new cljs.core.Keyword(null,"value","value",305978217),args__11826__auto___23732,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23734], null));
} else
{}
} else
{}
var o__11828__auto__ = (function (){var header = G__23709;var opts = G__23710;while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__8835__auto__ = ((function (validate__11825__auto__,ufv___23727,output_schema23705_23728,input_schema23706_23729,input_checker23707_23730,output_checker23708_23731){
return (function iter__23719(s__23720){return (new cljs.core.LazySeq(null,((function (validate__11825__auto__,ufv___23727,output_schema23705_23728,input_schema23706_23729,input_checker23707_23730,output_checker23708_23731){
return (function (){var s__23720__$1 = s__23720;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__23720__$1);if(temp__4222__auto__)
{var s__23720__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23720__$2))
{var c__8833__auto__ = cljs.core.chunk_first.call(null,s__23720__$2);var size__8834__auto__ = cljs.core.count.call(null,c__8833__auto__);var b__23722 = cljs.core.chunk_buffer.call(null,size__8834__auto__);if((function (){var i__23721 = (0);while(true){
if((i__23721 < size__8834__auto__))
{var vec__23725 = cljs.core._nth.call(null,c__8833__auto__,i__23721);var v = cljs.core.nth.call(null,vec__23725,(0),null);var label = cljs.core.nth.call(null,vec__23725,(1),null);cljs.core.chunk_append.call(null,b__23722,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__23735 = (i__23721 + (1));
i__23721 = G__23735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23722),iter__23719.call(null,cljs.core.chunk_rest.call(null,s__23720__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23722),null);
}
} else
{var vec__23726 = cljs.core.first.call(null,s__23720__$2);var v = cljs.core.nth.call(null,vec__23726,(0),null);var label = cljs.core.nth.call(null,vec__23726,(1),null);return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__23719.call(null,cljs.core.rest.call(null,s__23720__$2)));
}
} else
{return null;
}
break;
}
});})(validate__11825__auto__,ufv___23727,output_schema23705_23728,input_schema23706_23729,input_checker23707_23730,output_checker23708_23731))
,null,null));
});})(validate__11825__auto__,ufv___23727,output_schema23705_23728,input_schema23706_23729,input_checker23707_23730,output_checker23708_23731))
;return iter__8835__auto__.call(null,opts);
})());
break;
}
})();if(cljs.core.truth_(validate__11825__auto__))
{var temp__4222__auto___23736 = output_checker23708_23731.call(null,o__11828__auto__);if(cljs.core.truth_(temp__4222__auto___23736))
{var error__11827__auto___23737 = temp__4222__auto___23736;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__11827__auto___23737)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23705_23728,new cljs.core.Keyword(null,"value","value",305978217),o__11828__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11827__auto___23737], null));
} else
{}
} else
{}
return o__11828__auto__;
});})(ufv___23727,output_schema23705_23728,input_schema23706_23729,input_checker23707_23730,output_checker23708_23731))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema23705_23728,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23706_23729], null)));
