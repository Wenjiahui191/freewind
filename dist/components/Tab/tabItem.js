import React, { useContext } from "react";
import classNames from "classnames";
import { TabContext } from "./tab";
var TableItem = function (props) {
    var index = props.index, label = props.label, disabled = props.disabled;
    var context = useContext(TabContext);
    var classes = classNames("tab-item", {
        "is-active": context.index === index,
        "is-disable": disabled,
        "tab-card-item": context.type === "card",
    });
    function handelClick() {
        if (context.onSelect) {
            context.onSelect(index || "0");
        }
    }
    return (React.createElement("div", { className: classes, onClick: handelClick }, label));
};
TableItem.displayName = "TabItem";
export default TableItem;
