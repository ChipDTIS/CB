import * as React from "react";
import "./App.css";
// import { Link } from "react-router-dom";
import { HeaderContainer } from "./containers/Header/HeaderContainer";
// import { Route, Switch } from "react-router";
// const logo = require("./logo.svg");

// tslint:disable-next-line:no-any
class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <HeaderContainer />
        <div id="wrapper">
          {this.props.children}
          {/* <Switch>
            <Route exact={true} path="/"render={() => (<h1>Home page</h1>)} />
            <Route exact={true} path="/user"render={() => (<h1>Home page-user</h1>)} />
            <Route path="/user/:id"render={() => (<h1>Home page-user-id</h1>)} />
            <Route path="/user2"render={() => (<h1>Home page-user2</h1>)} />
          </Switch> */}
         
        </div>
        <HeaderContainer/>
      </div>
    );
  }
}

export default App;
