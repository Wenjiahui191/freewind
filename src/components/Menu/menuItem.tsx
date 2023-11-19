import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: number;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode | JSX.Element | JSX.Element[];
  onSelected?: (selectedIndex: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const context = useContext(MenuContext);
  const { index, disabled, className, style, children } = props;
  const classes = classNames("menu-item", className, {
    "menu-disabled": disabled,
    "menu-active": context.index === index && !disabled,
  });

  function handleClick() {
    if (context.onSelected && !disabled) {
      context.onSelected(index);
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  disabled: false,
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
