import * as React from "react";
import { LoginComponent } from "../../components/Login/LoginComponent";

export class LoginContainer extends React.Component<any, {}> {
    render() {
        return (<LoginComponent {...this.props} />);
    }
}