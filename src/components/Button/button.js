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
exports.Button = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
/**
 * 默认按钮组件
 */
var Button = function (props) {
    var _a;
    var btnType = props.btnType, size = props.size, href = props.href, disabled = props.disabled, className = props.className, children = props.children, restProps = __rest(props, ["btnType", "size", "href", "disabled", "className", "children"]);
    var classes = (0, classnames_1["default"])("btn", className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        _a.disabled = btnType === "link" && disabled,
        _a));
    if (btnType === "link" && href) {
        return (<a className={classes} href={href} {...restProps}>
        {children}
      </a>);
    }
    else {
        return (<button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>);
    }
};
exports.Button = Button;
exports.Button.defaultProps = {
    btnType: "default",
    disabled: false
};
exports["default"] = exports.Button;
