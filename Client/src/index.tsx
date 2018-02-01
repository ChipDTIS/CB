import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
// import { Route } from "react-router";
// import { RouterPath } from "./commons/constant";
// import { createBrowserHistory } from "history";
// import { ConnectedRouter } from "react-router-redux";
// import { Provider } from "react-redux";
// import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { FooterContainer } from "./containers/Footer/FooterContainer";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <App exact={true} path="/" render={() => (<h2>home</h2>)} />
        <App path="/about/:id" render={() => (<h2>about 2</h2>)} />
        <App path="/about" render={() => (<h2>about</h2>)} />
        <App path="/topics" component={FooterContainer} />
        <Route path="*" render={() => (<h2>not found</h2>)} />
      </Switch>
  </BrowserRouter>, 
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
