"use strict";
exports.__esModule = true;
exports.Menu = exports.MenuContext = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
exports.MenuContext = (0, react_1.createContext)({ index: "0" });
/**
 * 菜单组件支持纵向与横向两种显示方式
 */
var Menu = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, style = props.style, children = props.children, defaultOpenMenus = props.defaultOpenMenus, onSelected = props.onSelected;
    var _a = (0, react_1.useState)(defaultIndex), activeIndex = _a[0], setActiveIndex = _a[1];
    var classes = (0, classnames_1["default"])("wind-menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical"
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
        onSelected: handleClick
    };
    var renderChildren = function () {
        return react_1["default"].Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return react_1["default"].cloneElement(childElement, {
                    index: index.toString()
                });
            }
            else {
                console.error("Menu get a child not the type of MenuItem");
            }
        });
    };
    return (<ul className={classes} style={style} data-testid="test-menu">
      <exports.MenuContext.Provider value={passContext}>
        {renderChildren()}
      </exports.MenuContext.Provider>
    </ul>);
};
exports.Menu = Menu;
exports.Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenMenus: []
};
exports["default"] = exports.Menu;
