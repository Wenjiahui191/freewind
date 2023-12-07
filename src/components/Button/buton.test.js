"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var button_1 = require("./button");
var defaultProps = {
    onClick: jest.fn()
};
var testProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'kiss',
    onClick: jest.fn()
};
var disabledProps = {
    disabled: true,
    btnType: 'primary',
    size: 'lg',
    className: 'kiss',
    onClick: jest.fn()
};
describe("test button", function () {
    it("should render base button with default type", function () {
        (0, react_2.render)(<button_1["default"] {...defaultProps}>Nice</button_1["default"]>);
        var element = react_2.screen.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("BUTTON");
        expect(element).toHaveClass("btn btn-default");
        react_2.fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });
    it("should render the correct component base on different props", function () {
        (0, react_2.render)(<button_1["default"] {...testProps}>Nice</button_1["default"]>);
        var element = react_2.screen.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("BUTTON");
        expect(element).toHaveClass('btn-primary btn-lg kiss');
        react_2.fireEvent.click(element);
        expect(testProps.onClick).toHaveBeenCalled();
    });
    it("should render a lint when btnType equals link and href is provided", function () {
        (0, react_2.render)(<button_1["default"] btnType="link" href="http://testurl">Link</button_1["default"]>);
        var element = react_2.screen.getByText("Link");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("A");
        expect(element).toHaveClass('btn btn-link');
    });
    it("show render a disabled button", function () {
        (0, react_2.render)(<button_1["default"] {...disabledProps}>Nice</button_1["default"]>);
        var element = react_2.screen.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("BUTTON");
        expect(element).toHaveClass('btn-primary btn-lg kiss');
        react_2.fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    });
});
