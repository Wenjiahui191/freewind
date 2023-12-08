import React from "react";
export type TabStyle = "default" | "card";
export interface TabProps {
    defaultIndex?: string;
    type?: TabStyle;
    className?: string;
    style?: React.CSSProperties;
    children: JSX.Element | JSX.Element[];
    onSelect?: (selectedIndex: string) => void;
}
export interface ITabContextProps {
    type?: string;
    index: string;
    onSelect?: (selectedIndex: string) => void;
}
export declare const TabContext: React.Context<ITabContextProps>;
/**
 * Tab组件
 */
export declare const Tab: React.FC<TabProps>;
export default Tab;
