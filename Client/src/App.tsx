import * as React from "react";
import "./App.css";
// import { Link } from "react-router-dom";
import { HeaderContainer } from "./containers/Header/HeaderContainer";
// const logo = require("./logo.svg");

// tslint:disable-next-line:no-any
class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <HeaderContainer />
        <div id="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
