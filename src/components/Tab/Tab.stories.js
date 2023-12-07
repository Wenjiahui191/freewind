"use strict";
// Menu.stories.ts|tsx
exports.__esModule = true;
exports.CardTabs = exports.DefaultTabs = void 0;
var tab_1 = require("./tab");
var tabItem_1 = require("./tabItem");
var block_1 = require("../block/block");
var meta = {
    component: tab_1["default"],
    parameters: {
        layout: "top"
    },
    decorators: [
        function (Story) { return (<block_1["default"]>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </block_1["default"]>); },
    ],
    tags: ["autodocs"]
};
exports["default"] = meta;
exports.DefaultTabs = {
    name: "默认Tab",
    render: function (args) { return (<tab_1["default"] {...args}>
      <tabItem_1["default"] label="item1">content1</tabItem_1["default"]>
      <tabItem_1["default"] label="item2">content2</tabItem_1["default"]>
    </tab_1["default"]>); }
};
exports.CardTabs = {
    name: "卡片Tab",
    render: function (args) { return (<tab_1["default"] {...args} type="card">
        <tabItem_1["default"] label="item1">content1</tabItem_1["default"]>
        <tabItem_1["default"] label="item2">content2</tabItem_1["default"]>
      </tab_1["default"]>); }
};
