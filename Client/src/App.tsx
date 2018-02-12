import * as React from "react";
import "./App.css";
// import { Link } from "react-router-dom";
import { HeaderContainer } from "./containers/Header/HeaderContainer";
import { FooterComponent } from "./components/Footer/FooterComponent";
import { MenuNavComponent } from "./components/Navigation/NavMenuComponent";
// import { Route, Switch } from "react-router";
// const logo = require("./logo.svg");

// tslint:disable-next-line:no-any
class App extends React.Component<any, any> {

  componentDidMount() {
    // tslint:disable-next-line:no-string-literal
    window["reInitApp"]();
    // tslint:disable-next-line:no-console
    // console.log("FSDFDF");
    
  }
  render() {
    console.log("ROOT");
    return (
      <div>
        <HeaderContainer />
        <MenuNavComponent />
        <div id="main" role="main">
          <div id="ribbon">

          </div>
          <div id="content">
            {this.props.children}
          </div>
         
          {/* <Switch>
            <Route exact={true} path="/"render={() => (<h1>Home page</h1>)} />
            <Route exact={true} path="/user"render={() => (<h1>Home page-user</h1>)} />
            <Route path="/user/:id"render={() => (<h1>Home page-user-id</h1>)} />
            <Route path="/user2"render={() => (<h1>Home page-user2</h1>)} />
          </Switch> */}
         
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
