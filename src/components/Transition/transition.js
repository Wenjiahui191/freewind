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
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var Transition = function (props) {
    var animation = props.animation, classNames = props.classNames, children = props.children, restProps = __rest(props, ["animation", "classNames", "children"]);
    return (<react_transition_group_1.CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {children}
    </react_transition_group_1.CSSTransition>);
};
Transition.defaultProps = {
    unmountOnExit: true,
    appear: true
};
exports["default"] = Transition;