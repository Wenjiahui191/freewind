"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var tab_1 = require("./tab");
var TableItem = function (props) {
    var index = props.index, label = props.label, disabled = props.disabled;
    var context = (0, react_1.useContext)(tab_1.TabContext);
    var classes = (0, classnames_1["default"])("tab-item", {
        "is-active": context.index === index,
        "is-disable": disabled,
        "tab-card-item": context.type === "card"
    });
    function handelClick() {
        if (context.onSelect) {
            context.onSelect(index || "0");
        }
    }
    return (<div className={classes} onClick={handelClick}>
      {label}
    </div>);
};
TableItem.displayName = "TabItem";
exports["default"] = TableItem;
