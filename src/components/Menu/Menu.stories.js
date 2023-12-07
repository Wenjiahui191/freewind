"use strict";
// Menu.stories.ts|tsx
exports.__esModule = true;
exports.VerticalMenuHasSub = exports.VerticalMenuNoSub = exports.HorizontalMenuHasSub = exports.HorizontalMenuNoSub = void 0;
var menu_1 = require("./menu");
var menuItem_1 = require("./menuItem");
var subMenu_1 = require("./subMenu");
var block_1 = require("../block/block");
var meta = {
    component: menu_1["default"],
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
exports.HorizontalMenuNoSub = {
    name: "横向menu不带子列表",
    render: function (args) { return (<menu_1["default"] {...args}>
      <menuItem_1["default"]>item1</menuItem_1["default"]>
      <menuItem_1["default"]>item2</menuItem_1["default"]>
      <menuItem_1["default"]>item3</menuItem_1["default"]>
    </menu_1["default"]>); }
};
exports.HorizontalMenuHasSub = {
    name: "横向menu带子列表",
    render: function (args) { return (<menu_1["default"] {...args}>
      <menuItem_1["default"]>item1</menuItem_1["default"]>
      <menuItem_1["default"]>item2</menuItem_1["default"]>
      <subMenu_1["default"] title="item3">
        <menuItem_1["default"]>sub item1</menuItem_1["default"]>
        <menuItem_1["default"]>sub item2</menuItem_1["default"]>
        <menuItem_1["default"]>sub item3</menuItem_1["default"]>
      </subMenu_1["default"]>
    </menu_1["default"]>); }
};
exports.VerticalMenuNoSub = {
    name: "横向menu不带子列表",
    render: function (args) { return (<menu_1["default"] {...args} mode="vertical">
      <menuItem_1["default"]>item1</menuItem_1["default"]>
      <menuItem_1["default"]>item2</menuItem_1["default"]>
      <menuItem_1["default"]>item3</menuItem_1["default"]>
    </menu_1["default"]>); }
};
exports.VerticalMenuHasSub = {
    name: "横向menu带子列表",
    render: function (args) { return (<menu_1["default"] {...args} mode="vertical">
      <menuItem_1["default"]>item1</menuItem_1["default"]>
      <menuItem_1["default"]>item2</menuItem_1["default"]>
      <subMenu_1["default"] title="item3">
        <menuItem_1["default"]>sub item1</menuItem_1["default"]>
        <menuItem_1["default"]>sub item2</menuItem_1["default"]>
        <menuItem_1["default"]>sub item3</menuItem_1["default"]>
      </subMenu_1["default"]>
    </menu_1["default"]>); }
};
