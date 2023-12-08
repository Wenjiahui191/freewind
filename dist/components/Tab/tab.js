import React, { createContext, useState } from "react";
import classNames from "classnames";
export var TabContext = createContext({
    type: "default",
    index: "0",
});
/**
 * Tab组件
 */
export var Tab = function (props) {
    var defaultIndex = props.defaultIndex, type = props.type, className = props.className, style = props.style, children = props.children, onSelect = props.onSelect;
    var classes = classNames("wind-tabs", className, {
        "wind-card-tabs": type === 'card'
    });
    var _a = useState(defaultIndex), activeIndex = _a[0], setActiveIndex = _a[1];
    function handelClick(selectedIndex) {
        setActiveIndex(selectedIndex);
        if (onSelect) {
            onSelect(selectedIndex);
        }
    }
    var passContext = {
        type: type,
        index: activeIndex ? activeIndex : "0",
        onSelect: handelClick,
    };
    var renderTabChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElem = child;
            return React.cloneElement(childElem, {
                index: index.toString()
            });
        });
    };
    var renderTabContent = function () {
        return React.Children.map(children, function (child, index) {
            var childElem = child;
            var TabContent = childElem.props.children;
            return (React.createElement("div", { className: "tab-content-item", style: {
                    display: activeIndex && activeIndex === index.toString()
                        ? "block"
                        : "none",
                } }, TabContent));
        });
    };
    return (React.createElement("div", { className: classes, style: style },
        React.createElement(TabContext.Provider, { value: passContext },
            React.createElement("div", { className: "tabs-header" }, renderTabChildren()),
            React.createElement("div", { className: "tabs-content" }, renderTabContent()))));
};
Tab.defaultProps = {
    defaultIndex: "0",
    type: "default",
};
export default Tab;
