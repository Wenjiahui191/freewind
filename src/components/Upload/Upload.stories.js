"use strict";
// Upload.stories.ts|tsx
exports.__esModule = true;
exports.DragFileUpload = exports.DefaultUpload = void 0;
var upload_1 = require("./upload");
var icon_1 = require("../Icon/icon");
var button_1 = require("../Button/button");
var defaultFileList = [
    { uid: "1", name: "文件1", size: 2567, status: 'uploading', percentage: 0 },
    { uid: "2", name: "文件2", size: 2567, status: 'success', percentage: 0 },
    { uid: "3", name: "文件3", size: 2567, status: 'error', percentage: 0 },
];
var meta = {
    component: upload_1["default"],
    tags: ["autodocs"]
};
exports["default"] = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
exports.DefaultUpload = {
    name: "点击上传",
    args: {
        action: "https://mock.apifox.com/m1/3423089-0-default/upload",
        accept: '.jpg',
        headers: { 'X-PowerBy-www': 'wind-free' },
        multiple: true,
        name: 'fileName',
        children: <button_1["default"] btnType="primary">上传文件</button_1["default"]>
    }
};
exports.DragFileUpload = {
    name: "拖拽上传",
    args: {
        action: "https://mock.apifox.com/m1/3423089-0-default/upload",
        multiple: true,
        drag: true,
        children: <>
      <icon_1["default"] icon={"upload"}/>
      <div>拖拽文件上传</div>
    </>
    }
};
