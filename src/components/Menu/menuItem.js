"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var menu_1 = require("./menu");
var MenuItem = function (props) {
    var context = (0, react_1.useContext)(menu_1.MenuContext);
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var classes = (0, classnames_1["default"])("menu-item", className, {
        "menu-disabled": disabled,
        "menu-active": context.index === index && !disabled
    });
    function handleClick() {
        if (context.onSelected && !disabled) {
            context.onSelected(index || '0');
        }
    }
    return (<li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>);
};
MenuItem.defaultProps = {
    disabled: false
};
MenuItem.displayName = "MenuItem";
exports["default"] = MenuItem;
