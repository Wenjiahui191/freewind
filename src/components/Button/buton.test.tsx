import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonPropsType } from "./button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps:ButtonPropsType={
  btnType:'primary',
  size:'lg',
  className:'kiss',
  onClick:jest.fn()
}

const disabledProps:ButtonPropsType={
  disabled:true,
  btnType:'primary',
  size:'lg',
  className:'kiss',
  onClick:jest.fn()
}

describe("test button", () => {
  it("should render base button with default type", () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const element = screen.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component base on different props", () => {
    render(<Button {...testProps}>Nice</Button>);
    const element = screen.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass('btn-primary btn-lg kiss')
    fireEvent.click(element);
    expect(testProps.onClick).toHaveBeenCalled();
  });
  it("should render a lint when btnType equals link and href is provided", () => {
    render(<Button btnType="link" href="http://testurl">Link</Button>);
    const element = screen.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass('btn btn-link')
  });
  it("show render a disabled button", () => {
    render(<Button {...disabledProps}>Nice</Button>);
    const element = screen.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass('btn-primary btn-lg kiss')
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
