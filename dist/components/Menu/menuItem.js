import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
var MenuItem = function (props) {
    var context = useContext(MenuContext);
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var classes = classNames("menu-item", className, {
        "menu-disabled": disabled,
        "menu-active": context.index === index && !disabled,
    });
    function handleClick() {
        if (context.onSelected && !disabled) {
            context.onSelected(index || '0');
        }
    }
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.defaultProps = {
    disabled: false,
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
