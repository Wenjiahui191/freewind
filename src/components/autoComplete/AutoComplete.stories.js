"use strict";
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
exports.__esModule = true;
exports.DefaultAutoComplete = void 0;
var autoComplete_1 = require("./autoComplete");
var meta = {
    component: autoComplete_1["default"],
    tags: ["autodocs"]
};
exports["default"] = meta;
// const NAB_Star = [
//   "Curry",
//   "Irving",
//   "James",
//   "Jim",
//   "Harden",
//   "Kobe",
//   "Allen",
//   "Anthony",
// ];
var NAB_Star = [
    { name: "Curry", number: 30 },
    { name: "Irving", number: 11 },
    { name: "James", number: 23 },
    { name: "Jim", number: 23 },
    { name: "Harden", number: 1 },
    { name: "Kobe", number: 24 },
    { name: "Allen", number: 33 },
];
// const handelSuggest = (value:string) => {
//   return NAB_Star.filter((s) => s.name.includes(value)).map(i=>({value:i.name,...i}));
// };
var handelSuggest = function (value) {
    return fetch("https://api.github.com/search/users?q=".concat(value)).then(function (res) { return res.json(); }).then(function (_a) {
        var _b = _a.items, items = _b === void 0 ? [] : _b;
        return items.slice(0, 10).map(function (i) { return (__assign({ value: i.login }, i)); });
    });
};
var handelRender = function (item) {
    return <>
    <h5>{item.value}</h5>
  </>;
};
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
exports.DefaultAutoComplete = {
    name: "默认",
    args: {
        placeholder: "请输入...",
        fetchSuggest: handelSuggest,
        renderOption: handelRender
    }
};
