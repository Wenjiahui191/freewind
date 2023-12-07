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
exports.Input = void 0;
var classnames_1 = require("classnames");
var icon_1 = require("../Icon/icon");
var Input = function (props) {
    var _a;
    var size = props.size, disabled = props.disabled, placeholder = props.placeholder, icon = props.icon, className = props.className, preposition = props.preposition, postposition = props.postposition, onChange = props.onChange, restProps = __rest(props, ["size", "disabled", "placeholder", "icon", "className", "preposition", "postposition", "onChange"]);
    var classes = (0, classnames_1["default"])("wind-group-input", className, (_a = {
            "is-disabled": disabled
        },
        _a["input-".concat(size)] = size,
        _a["input-group-pre"] = !!preposition,
        _a["input-group-end"] = !!postposition,
        _a));
    if ("value" in props) {
        if (!props.value) {
            restProps.value = "";
        }
        delete restProps.defaultValue;
    }
    return (<div className={classes}>
      {preposition && <span className="input-preposition">{preposition}</span>}
      <div className="input-wrapper">
        {icon ? <icon_1["default"] className="input-icon" icon={icon}/> : ""}
        <input type="text" disabled={disabled} className="input-inner" placeholder={placeholder} onChange={onChange} {...restProps}/>
      </div>
      {postposition && (<span className="input-postposition">{postposition}</span>)}
    </div>);
};
exports.Input = Input;
exports["default"] = exports.Input;
