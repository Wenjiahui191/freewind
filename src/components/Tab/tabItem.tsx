import React, { ReactNode, useContext, useState } from "react";
import classNames from "classnames";
import { TabContext } from "./tab";

export interface TabItemProps {
  index?: string;
  label: ReactNode;
  children?: ReactNode;
}

const TableItem: React.FC<TabItemProps> = (props) => {
  const { index, label } = props;

  const context = useContext(TabContext);
  const classes = classNames("tab-item", {
    "is-active": context.index === index,
    "tab-card-item": context.type === "card",
  });

  function handelClick(){
    if(context.onSelect){
        context.onSelect(index || '0')
    }
  }

  return <div className={classes} onClick={handelClick}>{label}</div>;
};

TableItem.displayName = "TabItem";

export default TableItem;
