"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var menu_1 = require("./menu");
var icon_1 = require("../Icon/icon");
var transition_1 = require("../Transition/transition");
var SubMenu = function (_a) {
    var _b;
    var index = _a.index, title = _a.title, className = _a.className, children = _a.children;
    var context = (0, react_1.useContext)(menu_1.MenuContext);
    var isOpen = index &&
        context.mode === "vertical" &&
        ((_b = context.defaultOpenMenus) === null || _b === void 0 ? void 0 : _b.includes(index))
        ? true
        : false;
    var _c = (0, react_1.useState)(isOpen), isOpenSubMenu = _c[0], setIsOpenSubMenu = _c[1];
    var classes = (0, classnames_1["default"])("menu-item submenu-item", className, {
        "menu-active": index && context.index.startsWith(index),
        "is-vertical": context.mode === "vertical",
        "is-opened": isOpenSubMenu
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
            onClick: handelClick
        }
        : {};
    var mouseEvents = context.mode !== "vertical"
        ? {
            onMouseEnter: function (e) { return handelMouse(e, true); },
            onMouseLeave: function (e) { return handelMouse(e, false); }
        }
        : {};
    var renderChildren = function () {
        var childElement = react_1["default"].Children.map(children, function (child, i) {
            if (child.type.displayName === "MenuItem") {
                return react_1["default"].cloneElement(child, {
                    index: "".concat(index, "-").concat(i)
                });
            }
            else {
                console.error("Menu get a child not the type of MenuItem");
            }
        });
        return (<transition_1["default"] timeout={300} in={isOpenSubMenu} animation="zoom-in-top">
        <ul className={(0, classnames_1["default"])("wind-submenu", {
                "submenu-opened": isOpenSubMenu
            })}>
          {childElement}
        </ul>
      </transition_1["default"]>);
    };
    return (<li className={classes} {...mouseEvents}>
      <div className={"submenu-title"} {...clickEvents}>
        {title}
        <icon_1["default"] icon={"angle-down"} className="arrow-icon"/>
      </div>
      {renderChildren()}
    </li>);
};
SubMenu.displayName = "SubMenu";
exports["default"] = SubMenu;
