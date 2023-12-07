"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var menu_1 = require("./menu");
var menuItem_1 = require("./menuItem");
var subMenu_1 = require("./subMenu");
var testMenuProps = {
    defaultIndex: "0",
    className: "default",
    onSelected: jest.fn()
};
var testVerProps = {
    mode: "vertical",
    defaultIndex: "0",
    defaultOpenMenus: ["3"],
    className: "test-vertical"
};
function generateMenu(props) {
    return (<menu_1["default"] {...props}>
      <menuItem_1["default"]>default menu item</menuItem_1["default"]>
      <menuItem_1["default"] disabled>disabled menu item</menuItem_1["default"]>
      <menuItem_1["default"]>menu item3</menuItem_1["default"]>
      <subMenu_1["default"] title="dropdown">
        <menuItem_1["default"]>drop1</menuItem_1["default"]>
      </subMenu_1["default"]>
    </menu_1["default"]>);
}
function createStyleFile() {
    var cssFile = "\n    .wind-submenu {\n      display: none;\n    }\n    .wind-menu .submenu-opened {\n      display:block;\n    }\n    ";
    var style = document.createElement("style");
    style.innerHTML = cssFile;
    style.type = "text/css";
    return style;
}
var menuElement, activeElement, disabledElement;
describe("test menu and menuItem", function () {
    beforeEach(function () {
        document.head.appendChild(createStyleFile());
        (0, react_2.render)(generateMenu(testMenuProps));
        menuElement = react_2.screen.getByTestId("test-menu");
        activeElement = react_2.screen.getByText("default menu item");
        disabledElement = react_2.screen.getByText("disabled menu item");
    });
    it("should render menu and menuItem whit default props", function () {
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass("wind-menu default");
        expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4);
        expect(activeElement).toHaveClass("menu-item menu-active");
        expect(disabledElement).toHaveClass("menu-item menu-disabled");
    });
    it("click items should change active and call the right callback", function () {
        var thirdItem = react_2.screen.getByText("menu item3");
        react_2.fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass("menu-active");
        expect(activeElement).not.toHaveClass("menu-active");
        expect(testMenuProps.onSelected).toHaveBeenCalledWith("2");
        react_2.fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass("menu-active");
        expect(testMenuProps.onSelected).not.toHaveBeenCalledWith("1");
    });
    it("should render menu and menuItems with vertical props", function () {
        (0, react_2.cleanup)();
        (0, react_2.render)(generateMenu(testVerProps));
        var menu = react_2.screen.getByTestId("test-menu");
        expect(menu).toHaveClass("wind-menu menu-vertical");
    });
    it("should render submenu when mouse enter", function () { return __awaiter(void 0, void 0, void 0, function () {
        var dropdownElem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expect(react_2.screen.queryByText("drop1", { ignore: false })).not.toBeVisible();
                    dropdownElem = react_2.screen.getByText("dropdown");
                    react_2.fireEvent.mouseEnter(dropdownElem);
                    return [4 /*yield*/, (0, react_2.waitFor)(function () {
                            expect(react_2.screen.queryByText("drop1", { ignore: false })).toBeVisible();
                        })];
                case 1:
                    _a.sent();
                    react_2.fireEvent.click(react_2.screen.getByText("drop1"));
                    expect(testMenuProps.onSelected).toHaveBeenCalledWith("3-0");
                    react_2.fireEvent.mouseLeave(dropdownElem);
                    return [4 /*yield*/, (0, react_2.waitFor)(function () {
                            expect(react_2.screen.queryByText("drop1", { ignore: false })).not.toBeVisible();
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("test Menu and MenuItem base on vertical mode", function () {
    beforeEach(function () {
        (0, react_2.render)(generateMenu(testVerProps));
    });
    it("should render vertical menu when props is vertical", function () {
        expect(react_2.screen.getByTestId("test-menu")).toHaveClass("wind-menu menu-vertical");
    });
    it("should open subMenu with defaultOpenMenus props", function () {
        expect(react_2.screen.queryByText("drop1", { ignore: false })).toBeVisible();
        react_2.fireEvent.click(react_2.screen.getByText("dropdown"));
        expect(react_2.screen.queryByText("drop1", { ignore: false })).not.toBeVisible();
    });
});
