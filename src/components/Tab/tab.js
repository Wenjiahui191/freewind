"use strict";
exports.__esModule = true;
exports.Tab = exports.TabContext = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
exports.TabContext = (0, react_1.createContext)({
    type: "default",
    index: "0"
});
/**
 * Tab组件
 */
var Tab = function (props) {
    var defaultIndex = props.defaultIndex, type = props.type, className = props.className, style = props.style, children = props.children, onSelect = props.onSelect;
    var classes = (0, classnames_1["default"])("wind-tabs", className, {
        "wind-card-tabs": type === 'card'
    });
    var _a = (0, react_1.useState)(defaultIndex), activeIndex = _a[0], setActiveIndex = _a[1];
    function handelClick(selectedIndex) {
        setActiveIndex(selectedIndex);
        if (onSelect) {
            onSelect(selectedIndex);
        }
    }
    var passContext = {
        type: type,
        index: activeIndex ? activeIndex : "0",
        onSelect: handelClick
    };
    var renderTabChildren = function () {
        return react_1["default"].Children.map(children, function (child, index) {
            var childElem = child;
            return react_1["default"].cloneElement(childElem, {
                index: index.toString()
            });
        });
    };
    var renderTabContent = function () {
        return react_1["default"].Children.map(children, function (child, index) {
            var childElem = child;
            var TabContent = childElem.props.children;
            return (<div className="tab-content-item" style={{
                    display: activeIndex && activeIndex === index.toString()
                        ? "block"
                        : "none"
                }}>
          {TabContent}
        </div>);
        });
    };
    return (<div className={classes} style={style}>
      <exports.TabContext.Provider value={passContext}>
        <div className="tabs-header">{renderTabChildren()}</div>
        <div className="tabs-content">{renderTabContent()}</div>
      </exports.TabContext.Provider>
    </div>);
};
exports.Tab = Tab;
exports.Tab.defaultProps = {
    defaultIndex: "0",
    type: "default"
};
exports["default"] = exports.Tab;
