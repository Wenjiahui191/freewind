"use strict";
// Alert.stories.ts|tsx
exports.__esModule = true;
exports.AlertWhitDiffType = exports.AlertWhitDesc = exports.defaultAlert = void 0;
var alert_1 = require("./alert");
var meta = {
    component: alert_1["default"],
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs'],
    argTypes: {
        onClose: { action: "clicked", description: '点击关闭的回调' }
    }
};
exports["default"] = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
exports.defaultAlert = {
    name: '默认',
    args: {
        message: '标题',
        showIcon: true
    }
};
exports.AlertWhitDesc = {
    name: '有描述信息',
    args: {
        message: '标题',
        description: '这是一段描述文字嘻嘻嘻嘻嘻嘻嘻'
    }
};
exports.AlertWhitDiffType = {
    name: '不同状态',
    args: {
        type: 'success',
        message: '标题',
        description: '这是一段描述文字嘻嘻嘻嘻嘻嘻嘻'
    }
};
