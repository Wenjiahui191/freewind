import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
import { wait } from "@testing-library/user-event/dist/utils";

const testMenuProps: MenuProps = {
  defaultIndex: "0",
  className: "default",
  onSelected: jest.fn(),
};

const testVerProps: MenuProps = {
  mode: "vertical",
  defaultIndex: "0",
  defaultOpenMenus: ["3"],
  className: "test-vertical",
};

function generateMenu(props: MenuProps) {
  return (
    <Menu {...props}>
      <MenuItem>default menu item</MenuItem>
      <MenuItem disabled>disabled menu item</MenuItem>
      <MenuItem>menu item3</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
    </Menu>
  );
}

function createStyleFile() {
  const cssFile: string = `
    .wind-submenu {
      display: none;
    }
    .wind-menu .submenu-opened {
      display:block;
    }
    `;
  const style = document.createElement("style");
  style.innerHTML = cssFile;
  style.type = "text/css";
  return style;
}

let menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test menu and menuItem", () => {
  beforeEach(() => {
    document.head.appendChild(createStyleFile());
    render(generateMenu(testMenuProps));
    menuElement = screen.getByTestId("test-menu");
    activeElement = screen.getByText("default menu item");
    disabledElement = screen.getByText("disabled menu item");
  });
  it("should render menu and menuItem whit default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("wind-menu default");
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4);
    expect(activeElement).toHaveClass("menu-item menu-active");
    expect(disabledElement).toHaveClass("menu-item menu-disabled");
  });
  it("click items should change active and call the right callback", () => {
    const thirdItem = screen.getByText("menu item3");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("menu-active");
    expect(activeElement).not.toHaveClass("menu-active");
    expect(testMenuProps.onSelected).toHaveBeenCalledWith("2");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("menu-active");
    expect(testMenuProps.onSelected).not.toHaveBeenCalledWith("1");
  });
  it("should render menu and menuItems with vertical props", () => {
    cleanup();
    render(generateMenu(testVerProps));
    const menu = screen.getByTestId("test-menu");
    expect(menu).toHaveClass("wind-menu menu-vertical");
  });
  it("should render submenu when mouse enter", async () => {
    expect(screen.queryByText("drop1", { ignore: false })).not.toBeVisible();
    const dropdownElem = screen.getByText("dropdown");
    fireEvent.mouseEnter(dropdownElem);
    await waitFor(() => {
      expect(screen.queryByText("drop1", { ignore: false })).toBeVisible();
    });
    fireEvent.click(screen.getByText("drop1"));
    expect(testMenuProps.onSelected).toHaveBeenCalledWith("3-0");
    fireEvent.mouseLeave(dropdownElem);
    await waitFor(() => {
      expect(screen.queryByText("drop1", { ignore: false })).not.toBeVisible();
    });
  });
});

describe("test Menu and MenuItem base on vertical mode", () => {
  beforeEach(() => {
    render(generateMenu(testVerProps));
  });
  it("should render vertical menu when props is vertical", () => {
    expect(screen.getByTestId("test-menu")).toHaveClass(
      "wind-menu menu-vertical"
    );
  });
  it("should open subMenu with defaultOpenMenus props", () => {
    expect(screen.queryByText("drop1", { ignore: false })).toBeVisible();
    fireEvent.click(screen.getByText("dropdown"));
    expect(screen.queryByText("drop1", { ignore: false })).not.toBeVisible();
  });
});
