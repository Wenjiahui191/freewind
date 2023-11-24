import React, { createContext, useState } from "react";
import classNames from "classnames";
import TabItem, { TabItemProps } from "./tabItem";

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

export const TabContext = createContext<ITabContextProps>({
  type: "default",
  index: "0",
});
const Tabs: React.FC<TabProps> = (props) => {
  const { defaultIndex, type, className, style, children, onSelect } = props;
  const classes = classNames("wind-tabs", className,{
    "wind-card-tabs":type==='card'
  });

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  function handelClick(selectedIndex: string) {
    setActiveIndex(selectedIndex);
    if (onSelect) {
      onSelect(selectedIndex);
    }
  }

  const passContext: ITabContextProps = {
    type,
    index: activeIndex ? activeIndex : "0",
    onSelect: handelClick,
  };

  const renderTabChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElem = child as React.FunctionComponentElement<TabItemProps>;

      return React.cloneElement(childElem,{
        index:index.toString()
      });
    });
  };

  const renderTabContent = () => {
    return React.Children.map(children, (child, index) => {
      const childElem = child as React.FunctionComponentElement<TabItemProps>;
      const { children: TabContent } = childElem.props;

      return (
        <div
          className="tab-content-item"
          style={{
            display:
              activeIndex && activeIndex === index.toString()
                ? "block"
                : "none",
          }}
        >
          {TabContent}
        </div>
      );
    });
  };

  return (
    <div className={classes} style={style}>
      <TabContext.Provider value={passContext}>
        <div className="tabs-header">{renderTabChildren()}</div>
        <div className="tabs-content">{renderTabContent()}</div>
      </TabContext.Provider>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: "0",
  type: "default",
};

export default Tabs;
