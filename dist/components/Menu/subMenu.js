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
import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
var SubMenu = function (_a) {
    var _b;
    var index = _a.index, title = _a.title, className = _a.className, children = _a.children;
    var context = useContext(MenuContext);
    var isOpen = index &&
        context.mode === "vertical" &&
        ((_b = context.defaultOpenMenus) === null || _b === void 0 ? void 0 : _b.includes(index))
        ? true
        : false;
    var _c = useState(isOpen), isOpenSubMenu = _c[0], setIsOpenSubMenu = _c[1];
    var classes = classNames("menu-item submenu-item", className, {
        "menu-active": index && context.index.startsWith(index),
        "is-vertical": context.mode === "vertical",
        "is-opened": isOpenSubMenu,
    });
    var handelClick = function (e) {
        e.stopPropagation();
        setIsOpenSubMenu(!isOpenSubMenu);
    };
    var timer;
    var handelMouse = function (e, trigger) {
        e.preventDefault();
        clearTimeout(timer);
        timer = setTimeout(function () {
            setIsOpenSubMenu(trigger);
        }, 300);
    };
    var clickEvents = context.mode === "vertical"
        ? {
            onClick: handelClick,
        }
        : {};
    var mouseEvents = context.mode !== "vertical"
        ? {
            onMouseEnter: function (e) { return handelMouse(e, true); },
            onMouseLeave: function (e) { return handelMouse(e, false); },
        }
        : {};
    var renderChildren = function () {
        var childElement = React.Children.map(children, function (child, i) {
            if (child.type.displayName === "MenuItem") {
                return React.cloneElement(child, {
                    index: "".concat(index, "-").concat(i),
                });
            }
            else {
                console.error("Menu get a child not the type of MenuItem");
            }
        });
        return (React.createElement(Transition, { timeout: 300, in: isOpenSubMenu, animation: "zoom-in-top" },
            React.createElement("ul", { className: classNames("wind-submenu", {
                    "submenu-opened": isOpenSubMenu,
                }) }, childElement)));
    };
    return (React.createElement("li", __assign({ className: classes }, mouseEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
