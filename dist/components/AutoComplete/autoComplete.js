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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useRef, useState, } from "react";
import Input from "../Input/input";
import useDebounce from "../../hooks/useDebounce";
import Icon from "../Icon/icon";
import useClickOutSide from "../../hooks/useClickOutSide";
import classNames from "classnames";
import Transition from "../Transition/transition";
/**
 * 自动完成组件
 */
export var AutoComplete = function (props) {
    var fetchSuggest = props.fetchSuggest, onSelect = props.onSelect, renderOption = props.renderOption, value = props.value, resetProps = __rest(props, ["fetchSuggest", "onSelect", "renderOption", "value"]);
    var _a = useState(value), inputVal = _a[0], setInputVal = _a[1];
    var _b = useState([]), suggestList = _b[0], setSuggestList = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(-1), selectedIndex = _d[0], setSelectedIndex = _d[1];
    var _e = useState(false), showDropDown = _e[0], setShowDropDown = _e[1];
    var suggestRef = useRef(false);
    var suggestComponent = useRef(null);
    var debounceValue = useDebounce(inputVal, 500);
    useClickOutSide(suggestComponent, function () { return setSuggestList([]); });
    useEffect(function () {
        if (debounceValue && suggestRef.current) {
            var result = fetchSuggest(debounceValue);
            if (result instanceof Promise) {
                setLoading(true);
                result.then(function (res) {
                    setLoading(false);
                    setSuggestList(res);
                });
            }
            else {
                setSuggestList(result);
            }
            setShowDropDown(true);
        }
        else {
            setShowDropDown(false);
            setSuggestList([]);
        }
    }, [debounceValue]);
    var handelChange = function (e) {
        suggestRef.current = true;
        var val = e.target.value.trim();
        setInputVal(val);
    };
    var handelSelect = function (suggest) {
        suggestRef.current = false;
        onSelect(suggest);
        setInputVal(suggest.value);
        setSuggestList([]);
    };
    var handelHighlight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestList.length) {
            index = suggestList.length - 1;
        }
        setSelectedIndex(index);
    };
    var handelKeyDown = function (e) {
        var keyCode = e.keyCode;
        switch (keyCode) {
            case 13:
                if (suggestList[selectedIndex]) {
                    handelSelect(suggestList[selectedIndex]);
                }
                break;
            case 27:
                setSelectedIndex(-1);
                setSuggestList([]);
                break;
            case 38:
                handelHighlight(selectedIndex - 1);
                break;
            case 40:
                handelHighlight(selectedIndex + 1);
                break;
            default:
                break;
        }
    };
    var renderSuggest = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var renderSuggestList = function () {
        return (React.createElement(Transition, { in: showDropDown || loading, timeout: 300, animation: "zoom-in-top" },
            React.createElement("div", null, loading ? (React.createElement("ul", { className: "suggest-dropdown" },
                React.createElement(Icon, { icon: "spinner", spin: true }))) : (suggestList.length > 0 && (React.createElement("ul", { className: "suggest-dropdown" }, suggestList.map(function (suggest, index) {
                var cnames = classNames("suggest-item", {
                    "is-active": index === selectedIndex,
                });
                return (React.createElement("li", { className: cnames, key: index, onClick: function () { return handelSelect(suggest); } }, renderSuggest(suggest)));
            })))))));
    };
    return (React.createElement("div", { className: "wind-auto-complete", ref: suggestComponent },
        React.createElement(Input, __assign({ value: inputVal }, resetProps, { onChange: handelChange, onKeyDown: handelKeyDown })),
        renderSuggestList()));
};
export default AutoComplete;
