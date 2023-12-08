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
import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
/**
 * 弹窗组件，支持自定义类型
 */
export var Alert = function (props) {
    var _a;
    var _b = useState(true), isOpen = _b[0], setIsOpen = _b[1];
    var message = props.message, type = props.type, showIcon = props.showIcon, className = props.className, description = props.description, onClose = props.onClose, restProps = __rest(props, ["message", "type", "showIcon", "className", "description", "onClose"]);
    var classes = classNames("alert", className, (_a = {},
        _a["alert-".concat(type)] = type,
        _a.big = description,
        _a));
    function handleClose(e) {
        typeof onClose === "function" && onClose(e);
        setIsOpen(false);
    }
    return (React.createElement(Transition, { timeout: 300, in: isOpen, animation: "zoom-in-top" },
        React.createElement("div", __assign({ className: classes }, restProps),
            React.createElement("div", { className: "alert-content" },
                React.createElement("div", { className: "alert-msg" }, message),
                description && React.createElement("div", { className: "alert-desc" }, description)),
            showIcon && (React.createElement("div", { className: "alert-close-btn", onClick: handleClose },
                React.createElement(Icon, { icon: "times" }))))));
};
Alert.defaultProps = {
    message: "标题",
    type: 'default',
    showIcon: true,
};
export default Alert;
