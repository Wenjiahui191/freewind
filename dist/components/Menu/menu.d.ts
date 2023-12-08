import React from "react";
import { MenuItemProps } from "./menuItem";
export type MenuMode = "horizontal" | "vertical";
export type MenuClickCallback = (selectedIndex: string) => void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    /** 子组件 */
    children?: React.FunctionComponentElement<MenuItemProps> | React.FunctionComponentElement<MenuItemProps>[];
    defaultOpenMenus?: string[];
    /** 选择的回调 */
    onSelected?: (selectedIndex: string) => void;
}
export interface IMenuContextProps {
    index: string;
    mode?: MenuMode;
    defaultOpenMenus?: string[];
    onSelected?: MenuClickCallback;
}
export declare const MenuContext: React.Context<IMenuContextProps>;
/**
 * 菜单组件支持纵向与横向两种显示方式
 */
export declare const Menu: React.FC<MenuProps>;
export default Menu;
