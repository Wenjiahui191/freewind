"use strict";
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
exports.__esModule = true;
exports.AutoComplete = void 0;
var react_1 = require("react");
var input_1 = require("../Input/input");
var useDebounce_1 = require("../../hooks/useDebounce");
var icon_1 = require("../Icon/icon");
var useClickOutSide_1 = require("../../hooks/useClickOutSide");
var classnames_1 = require("classnames");
var transition_1 = require("../Transition/transition");
/**
 * 自动完成组件
 */
var AutoComplete = function (props) {
    var fetchSuggest = props.fetchSuggest, onSelect = props.onSelect, renderOption = props.renderOption, value = props.value, resetProps = __rest(props, ["fetchSuggest", "onSelect", "renderOption", "value"]);
    var _a = (0, react_1.useState)(value), inputVal = _a[0], setInputVal = _a[1];
    var _b = (0, react_1.useState)([]), suggestList = _b[0], setSuggestList = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)(-1), selectedIndex = _d[0], setSelectedIndex = _d[1];
    var _e = (0, react_1.useState)(false), showDropDown = _e[0], setShowDropDown = _e[1];
    var suggestRef = (0, react_1.useRef)(false);
    var suggestComponent = (0, react_1.useRef)(null);
    var debounceValue = (0, useDebounce_1["default"])(inputVal, 500);
    (0, useClickOutSide_1["default"])(suggestComponent, function () { return setSuggestList([]); });
    (0, react_1.useEffect)(function () {
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
        return (<transition_1["default"] in={showDropDown || loading} timeout={300} animation="zoom-in-top">
        <div>
          {loading ? (<ul className="suggest-dropdown"><icon_1["default"] icon={"spinner"} spin/></ul>) : (suggestList.length > 0 && (<ul className="suggest-dropdown">
                {suggestList.map(function (suggest, index) {
                    var cnames = (0, classnames_1["default"])("suggest-item", {
                        "is-active": index === selectedIndex
                    });
                    return (<li className={cnames} key={index} onClick={function () { return handelSelect(suggest); }}>
                      {renderSuggest(suggest)}
                    </li>);
                })}
              </ul>))}
        </div>
      </transition_1["default"]>);
    };
    return (<div className="wind-auto-complete" ref={suggestComponent}>
      <input_1["default"] value={inputVal} {...resetProps} onChange={handelChange} onKeyDown={handelKeyDown}/>
      {renderSuggestList()}
    </div>);
};
exports.AutoComplete = AutoComplete;
exports["default"] = exports.AutoComplete;
