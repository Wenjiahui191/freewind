import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

export type MenuMode = "horizontal" | "vertical";
export type MenuClickCallback = (selectedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[];
  defaultOpenMenus?: string[];
  onSelected?: MenuClickCallback;
}

export interface IMenuContextProps {
  index: string;
  mode?: MenuMode;
  defaultOpenMenus?: string[];
  onSelected?: MenuClickCallback;
}

export const MenuContext = createContext<IMenuContextProps>({ index: "0" });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children,
    defaultOpenMenus,
    onSelected,
  } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const classes = classNames("wind-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  function handleClick(selectedIndex: string) {
    setActiveIndex(selectedIndex);
    if (onSelected) {
      onSelected(selectedIndex);
    }
  }

  const passContext: IMenuContextProps = {
    index: activeIndex ? activeIndex : "0",
    mode,
    defaultOpenMenus,
    onSelected: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error("Menu get a child not the type of MenuItem");
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenMenus: [],
};

export default Menu;
