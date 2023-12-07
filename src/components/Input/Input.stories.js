"use strict";
// Button.stories.ts|tsx
exports.__esModule = true;
exports.InputWithPreAndEnd = exports.SmallInput = exports.BigInput = exports.DisabledInput = exports.InputWithIcon = exports.DefaultInput = void 0;
var input_1 = require("./input");
var meta = {
    component: input_1["default"],
    tags: ["autodocs"]
};
exports["default"] = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
exports.DefaultInput = {
    name: "默认输入框",
    args: {
        placeholder: "请输入..."
    }
};
exports.InputWithIcon = {
    name: "输入框带图标",
    args: {
        icon: "search",
        placeholder: "请输入..."
    }
};
exports.DisabledInput = {
    name: "禁用输入框",
    args: {
        disabled: true,
        placeholder: "请输入..."
    }
};
exports.BigInput = {
    name: "大号输入框",
    args: {
        size: 'lg',
        placeholder: "请输入..."
    }
};
exports.SmallInput = {
    name: "小号输入框",
    args: {
        size: 'sm',
        placeholder: "请输入..."
    }
};
exports.InputWithPreAndEnd = {
    name: "前置与后置内容",
    args: {
        preposition: "https://",
        placeholder: "请输入...",
        postposition: ".com"
    }
};
