import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children:
    | React.FunctionComponentElement<MenuItemProps>
    | React.FunctionComponentElement<MenuItemProps>[];
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children,
}) => {
  const context = useContext(MenuContext);
  const isOpen =
    index &&
    context.mode === "vertical" &&
    context.defaultOpenMenus?.includes(index)
      ? true
      : false;
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(isOpen);

  const classes = classNames("menu-item submenu-item", className, {
    "menu-active": index && context.index.startsWith(index),
    "is-vertical": context.mode === "vertical",
    "is-opened": isOpenSubMenu,
  });

  const handelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenSubMenu(!isOpenSubMenu);
  };

  let timer: any;
  const handelMouse = (e: React.MouseEvent, trigger: boolean) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = setTimeout(() => {
      setIsOpenSubMenu(trigger);
    }, 300);
  };

  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handelClick,
        }
      : {};

  const mouseEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => handelMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handelMouse(e, false),
        }
      : {};

  const renderChildren = () => {
    const childElement = React.Children.map(children, (child, i) => {
      if (child.type.displayName === "MenuItem") {
        return React.cloneElement(child, {
          index: `${index}-${i}`,
        });
      } else {
        console.error("Menu get a child not the type of MenuItem");
      }
    });

    return (
      <Transition timeout={300} in={isOpenSubMenu} animation="zoom-in-top">
        <ul
          className={classNames("wind-submenu", {
            "submenu-opened": isOpenSubMenu,
          })}
        >
          {childElement}
        </ul>
      </Transition>
    );
  };

  return (
    <li className={classes} {...mouseEvents}>
      <div className={"submenu-title"} {...clickEvents}>
        {title}
        <Icon icon={"angle-down"} className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
