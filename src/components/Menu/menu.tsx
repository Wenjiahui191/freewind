import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

export type MenuMode = "horizontal" | "vertical";
export type MenuClickCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[];
  onSelected?: MenuClickCallback;
}

export interface IMenuContextProps {
  index: number;
  onSelected?: MenuClickCallback;
}

export const MenuContext = createContext<IMenuContextProps>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, children, onSelected } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const classes = classNames("wind-menu", className, {
    "menu-vertical": mode === "vertical",
  });

  function handleClick(selectedIndex: number) {
    setActiveIndex(selectedIndex);
    if (onSelected) {
      onSelected(selectedIndex);
    }
  }

  const passContext: IMenuContextProps = {
    index: activeIndex ? activeIndex : 0,
    onSelected: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index,
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
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
