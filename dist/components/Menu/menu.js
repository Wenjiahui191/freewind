import React, { createContext, useState } from "react";
import classNames from "classnames";
export var MenuContext = createContext({ index: "0" });
/**
 * 菜单组件支持纵向与横向两种显示方式
 */
export var Menu = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, style = props.style, children = props.children, defaultOpenMenus = props.defaultOpenMenus, onSelected = props.onSelected;
    var _a = useState(defaultIndex), activeIndex = _a[0], setActiveIndex = _a[1];
    var classes = classNames("wind-menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical",
    });
    function handleClick(selectedIndex) {
        setActiveIndex(selectedIndex);
        if (onSelected) {
            onSelected(selectedIndex);
        }
    }
    var passContext = {
        index: activeIndex ? activeIndex : "0",
        mode: mode,
        defaultOpenMenus: defaultOpenMenus,
        onSelected: handleClick,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, {
                    index: index.toString(),
                });
            }
            else {
                console.error("Menu get a child not the type of MenuItem");
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenMenus: [],
};
export default Menu;
