import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  RenderResult,
} from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem, { MenuItemProps } from "./menuItem";

const testMenuProps: MenuProps = {
  defaultIndex: 0,
  className: "default",
  onSelected: jest.fn(),
};

const testVerProps: MenuProps = {
  mode: "vertical",
  className: "test-vertical",
};

function generateMenu(props: MenuProps) {
  return (
    <Menu {...props}>
      <MenuItem>default menu item</MenuItem>
      <MenuItem disabled>disabled menu item</MenuItem>
      <MenuItem>menu item3</MenuItem>
    </Menu>
  );
}

let menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test menu and menuItem", () => {
  beforeEach(() => {
    render(generateMenu(testMenuProps));
    menuElement = screen.getByTestId("test-menu");
    activeElement = screen.getByText("default menu item");
    disabledElement = screen.getByText("disabled menu item");
  });
  it("should render menu and menuItem whit default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("wind-menu default");
    expect(menuElement.getElementsByTagName("li").length).toEqual(3);
    expect(activeElement).toHaveClass("menu-item menu-active");
    expect(disabledElement).toHaveClass("menu-item menu-disabled");
  });
  it("click items should change active and call the right callback", () => {
    const thirdItem = screen.getByText("menu item3");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("menu-active");
    expect(activeElement).not.toHaveClass("menu-active");
    expect(testMenuProps.onSelected).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("menu-active");
    expect(testMenuProps.onSelected).not.toHaveBeenCalledWith(1);
  });
  it("should render menu and menuItems with vertical props", () => {
    cleanup();
    render(generateMenu(testVerProps));
    const menu = screen.getByTestId("test-menu");
    expect(menu).toHaveClass("wind-menu menu-vertical");
  });
});
