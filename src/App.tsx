import React from "react";
import Button from "./components/Button/button";
import Alert from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Tabs from "./components/Tab/tab";
import TabItem from "./components/Tab/tabItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./components/Icon/icon";
import "./App.scss";

library.add(fas);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Icon them="danger" size="10x" icon={"angle-right"} /> */}

        <Menu style={{ marginBottom: "200px" }}>
          <MenuItem>list 1</MenuItem>
          <MenuItem disabled>list 2</MenuItem>
          <SubMenu title="drop-down">
            <MenuItem>list 3</MenuItem>
            <MenuItem>list 4</MenuItem>
            <MenuItem>list 5</MenuItem>
          </SubMenu>
        </Menu>
        <Menu mode="vertical" defaultOpenMenus={["2"]}>
          <MenuItem>list 2</MenuItem>
          <MenuItem>list</MenuItem>
          <SubMenu title="drop-down">
            <MenuItem>list 3</MenuItem>
            <MenuItem>list 4</MenuItem>
            <MenuItem>list 5</MenuItem>
          </SubMenu>
        </Menu>
        {/* <Tabs>
          <TabItem label="item1">item1 content</TabItem>
          <TabItem label="item2" disabled>
            item2 content
          </TabItem>
          <TabItem label="item2">item3 content</TabItem>
        </Tabs>

        <Tabs type="card">
          <TabItem label="item1">item1 content</TabItem>
          <TabItem label="item2">item2 content</TabItem>
          <TabItem label="item2" disabled>
            item3 content
          </TabItem>
        </Tabs> */}

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
