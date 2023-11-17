import React from "react";
import Button from "./components/Button/button";
import Alert from "./components/Alert/alert";
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="my-btn">default button</Button>
        <Button btnType={"primary"}>Primary button</Button>
        <Button btnType={"primary"} size={"sm"}>
          primary button
        </Button>
        <Button btnType={"primary"} disabled={true}>
          primary button
        </Button>
        <Button btnType={"danger"} size={"lg"}>
          Danger button
        </Button>
        <Button btnType={"link"} href="https://www.baidu.com">
          link button
        </Button>
        <Button btnType={"link"} disabled={true} href="https://www.baidu.com">
          link button
        </Button>
        <hr />
        <div className="alert-area" style={{ width: "400px" }}>
          <Alert
            onClose={(e) => {
              console.log(e);
            }}
            message="This is a alert info"
            description="this is a desc"
          />
          <Alert
            onClose={(e) => {
              console.log(e);
            }}
            message="This is a alert info"
          />
          <Alert message="This is a alert info" type="success"  showIcon={false}/>
          <Alert message="This is a alert info" type="danger" />
          <Alert message="This is a alert info" type="warning" />
        </div>
        <Menu defaultIndex={0} onSelected={(index)=>alert(index)}>
          <MenuItem index={0} disabled>
            list 1
          </MenuItem>
          <MenuItem index={1}>
            list 2
          </MenuItem>
          <MenuItem index={3}>
            list 3
          </MenuItem>
        </Menu>
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
