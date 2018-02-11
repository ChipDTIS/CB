import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { LoginContainer } from "./containers/Login/LoginContainer";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
// import { Route } from "react-router";
// import { RouterPath } from "./commons/constant";
// import { createBrowserHistory } from "history";
// import { ConnectedRouter } from "react-router-redux";
// import { Provider } from "react-redux";
// import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, RouteProps, Redirect } from "react-router";
import { fakeAuth } from "src/commons/constant";

// import { FooterContainer } from "./containers/Footer/FooterContainer";
export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
}
export class ProtectedRoute extends Route<ProtectedRouteProps> {
  public render() {
    console.log("route:" + fakeAuth.isAuthenticated);
    let redirectPath: string = "";
    if (!fakeAuth.isAuthenticated) {
      redirectPath = this.props.authenticationPath;
    }
    console.log(this.props.location);
    if (redirectPath) {
      const renderComponent = () => (<Redirect push={false} to={{ pathname: redirectPath, state: { referrer: this.props.location } }} />);
      return <Route {...this.props} component={renderComponent} render={(undefined)} />;
    } else {
       return <App><Route {...this.props} /></App>;
      // return <Route {...this.props} render={() => (<App><Component {...this.props.component}/>)} />;
    }
  }
}

const defaultProtectedRouteProps: ProtectedRouteProps = {
  isAuthenticated: fakeAuth.isAuthenticated,
  authenticationPath: "/login",
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <ProtectedRoute
        {...defaultProtectedRouteProps}
        exact={true}
        path="/"
        render={() => (<h1>Hello sir</h1>)}
      />
      <ProtectedRoute {...defaultProtectedRouteProps} exact={true} path="/user" render={() => (<h1>Hello guy</h1>)} />
      <ProtectedRoute {...defaultProtectedRouteProps} path="/user/:id" render={() => (<h1>Hello guy 2</h1>)} />
      <Route path="/login" component={LoginContainer} />
      <Route path="*" render={() => (<h1>Page not found</h1>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("smartadmin-root") as HTMLElement
);
registerServiceWorker();
