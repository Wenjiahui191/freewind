import React, { ReactNode } from "react";
export interface TabItemProps {
    index?: string;
    label: ReactNode;
    disabled?: boolean;
    children?: ReactNode;
}
declare const TableItem: React.FC<TabItemProps>;
export default TableItem;
