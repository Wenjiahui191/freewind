import React, { ReactNode, useContext, useState } from "react";
import classNames from "classnames";
import { TabContext } from "./tab";

export interface TabItemProps {
  index?: string;
  label: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}

const TableItem: React.FC<TabItemProps> = (props) => {
  const { index, label, disabled } = props;

  const context = useContext(TabContext);
  const classes = classNames("tab-item", {
    "is-active": context.index === index,
    "is-disable": disabled,
    "tab-card-item": context.type === "card",
  });

  function handelClick() {
    if (context.onSelect) {
      context.onSelect(index || "0");
    }
  }

  return (
    <div className={classes} onClick={handelClick}>
      {label}
    </div>
  );
};

TableItem.displayName = "TabItem";

export default TableItem;
