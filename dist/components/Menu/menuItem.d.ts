import React from "react";
export interface MenuItemProps {
    index?: string;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode | JSX.Element | JSX.Element[];
    onSelected?: (selectedIndex: number) => void;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
