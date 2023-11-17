import React, { createContext, useState } from "react";
import classNames from "classnames";

export type MenuMode = "horizontal" | "vertical";
export type MenuClickCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  children: JSX.Element | JSX.Element[];
  onSelected?: MenuClickCallback;
}

export interface IMenuContextProps {
  index: number;
  onSelected?: MenuClickCallback;
}

export const MenuContext = createContext<IMenuContextProps>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, children, onSelected } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const classes = classNames("wind-menu", className, {
    "menu-vertical": mode === "vertical",
  });

  function handleClick(selectedIndex:number){
    setActiveIndex(selectedIndex)
    if(onSelected){
        onSelected(selectedIndex)
    }
  }

  const passContext:IMenuContextProps={
    index:activeIndex?activeIndex:0,
    onSelected:handleClick
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passContext}>{children}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
