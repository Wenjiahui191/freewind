var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
export var Input = function (props) {
    var _a;
    var size = props.size, disabled = props.disabled, placeholder = props.placeholder, icon = props.icon, className = props.className, preposition = props.preposition, postposition = props.postposition, onChange = props.onChange, restProps = __rest(props, ["size", "disabled", "placeholder", "icon", "className", "preposition", "postposition", "onChange"]);
    var classes = classNames("wind-group-input", className, (_a = {
            "is-disabled": disabled
        },
        _a["input-".concat(size)] = size,
        _a["input-group-pre"] = !!preposition,
        _a["input-group-end"] = !!postposition,
        _a));
    if ("value" in props) {
        if (!props.value) {
            restProps.value = "";
        }
        delete restProps.defaultValue;
    }
    return (React.createElement("div", { className: classes },
        preposition && React.createElement("span", { className: "input-preposition" }, preposition),
        React.createElement("div", { className: "input-wrapper" },
            icon ? React.createElement(Icon, { className: "input-icon", icon: icon }) : "",
            React.createElement("input", __assign({ type: "text", disabled: disabled, className: "input-inner", placeholder: placeholder, onChange: onChange }, restProps))),
        postposition && (React.createElement("span", { className: "input-postposition" }, postposition))));
};
export default Input;
