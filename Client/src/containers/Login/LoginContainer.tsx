import * as React from "react";
import { LoginComponent } from "../../components/Login/LoginComponent";

export class LoginContainer extends React.Component<any, {}> {
    componentWillMount() {
        console.log(this.props.location);
    }
    render() {
        return (<LoginComponent {...this.props} />);
    }
}