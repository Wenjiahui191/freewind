"use strict";
// Button.stories.ts|tsx
exports.__esModule = true;
exports.Lg = exports.Danger = exports.Primary = void 0;
var button_1 = require("./button");
var meta = {
    component: button_1["default"],
    tags: ["autodocs"],
    argTypes: {
        onClick: {
            action: "clicked",
            description: "回调函数",
            control: "function"
        }
    }
};
exports["default"] = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
exports.Primary = {
    name: "默认按钮",
    args: {
        btnType: "primary",
        children: "primary button"
    }
};
exports.Danger = {
    name: "不同类型的按钮",
    args: {
        btnType: "danger",
        children: "danger button"
    }
};
exports.Lg = {
    name: "不同大小的按钮",
    args: {
        btnType: "primary",
        children: "different size button",
        size: "lg"
    }
};
