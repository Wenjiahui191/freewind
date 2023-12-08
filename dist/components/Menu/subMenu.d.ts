import React from "react";
import { MenuItemProps } from "./menuItem";
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    children: React.FunctionComponentElement<MenuItemProps> | React.FunctionComponentElement<MenuItemProps>[];
}
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
