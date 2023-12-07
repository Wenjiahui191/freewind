"use strict";
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
exports.__esModule = true;
exports.Alert = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var icon_1 = require("../Icon/icon");
var transition_1 = require("../Transition/transition");
/**
 * 弹窗组件，支持自定义类型
 */
var Alert = function (props) {
    var _a;
    var _b = (0, react_1.useState)(true), isOpen = _b[0], setIsOpen = _b[1];
    var message = props.message, type = props.type, showIcon = props.showIcon, className = props.className, description = props.description, onClose = props.onClose, restProps = __rest(props, ["message", "type", "showIcon", "className", "description", "onClose"]);
    var classes = (0, classnames_1["default"])("alert", className, (_a = {},
        _a["alert-".concat(type)] = type,
        _a.big = description,
        _a));
    function handleClose(e) {
        typeof onClose === "function" && onClose(e);
        setIsOpen(false);
    }
    return (<transition_1["default"] timeout={300} in={isOpen} animation={"zoom-in-top"}>
      <div className={classes} 
    // style={{ display: isOpen ? undefined : "none" }}
    {...restProps}>
        <div className="alert-content">
          <div className="alert-msg">{message}</div>
          {description && <div className="alert-desc">{description}</div>}
        </div>
        {showIcon && (<div className="alert-close-btn" onClick={handleClose}>
            <icon_1["default"] icon={"times"}/>
          </div>)}
      </div>
    </transition_1["default"]>);
};
exports.Alert = Alert;
exports.Alert.defaultProps = {
    message: "标题",
    type: 'default',
    showIcon: true
};
exports["default"] = exports.Alert;
