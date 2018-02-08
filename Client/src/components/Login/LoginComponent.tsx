import * as React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import store from "./_store";
// import __state from "./_models";
import { action_Login, action_UsernameValidate, action_PasswordValidate } from "./_actions";
import { UserLoginModel } from "src/models/LoginModel";
interface IState {
    IsAuth: boolean;
    Username: string;
    Username_Invalid: boolean;
    Password: string;
    Password_Invalid: boolean;
    Username_Invalid_MSG: string;
    Password_Invalid_MSG: string;
}

export class LoginComponent extends React.Component<{}, IState> {
    componentWillMount() {
        console.log("componentWillMount");
        this.setState({});

    }
    componentDidMount() {
        console.log("componentDidMount");
        store.subscribe(() => {
            let storeState = store.getState();
            if (storeState !== undefined) {
                this.setState({
                    IsAuth: storeState.IsAuth,
                    Password_Invalid: storeState.Password_Invalid,
                    Username_Invalid: storeState.Username_Invalid,
                    Username_Invalid_MSG: storeState.Username_Invalid_MSG,
                    Password_Invalid_MSG: storeState.Password_Invalid_MSG
                });
            }
        });
    }
    componentWillUnmount() {
        // tslint:disable-next-line:no-unused-expression
        store.subscribe(() => void ({}));
    }
    render() {
        if (this.state.IsAuth) {
            return <Redirect to="/" />;
        }
        return (
            <div id="extr-page">
                <header id="header">
                    <div id="logo-group">
                        <span id="logo"> <img src="/assets/img/logo.png" alt="SmartAdmin" /> </span>
                    </div>
                    <span id="extr-page-header-space"> <span className="hidden-mobile hiddex-xs">Bạn chưa có tài khoản?</span> <Link to="/register" className="btn btn-danger">Tạo tài khoản</Link> </span>
                </header>
                <div id="main" role="main">
                    <div id="content" className="container">
                        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                <div className="well no-padding">
                                    <div id="login-form" className="smart-form client-form">
                                        <header>Đăng nhập</header>
                                        <fieldset>
                                            <section>
                                                <label className="label">Tài khoản</label>
                                                <label className="input"> <i className="icon-append fa fa-user"></i>
                                                    <input type="email" name="email"
                                                        value={this.state.Username || ""}
                                                        onChange={v => this.setState({
                                                            Username: v.target["value"]
                                                        }, () => store.dispatch(action_UsernameValidate(this.state.Username)))} />

                                                    {this.state.Username_Invalid ? <em id="email-error" className="invalid">{this.state.Username_Invalid_MSG}</em> : null}
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-user txt-color-teal"></i> Vui lòng nhập tài khoản của bạn</b></label>
                                            </section>

                                            <section>
                                                <label className="label">Mật khẩu</label>
                                                <label className="input"> <i className="icon-append fa fa-lock"></i>
                                                    <input type="password" name="password"
                                                        value={this.state.Password || ""}
                                                        onChange={v => this.setState({
                                                            Password: v.target["value"]
                                                        }, () => store.dispatch(action_PasswordValidate(this.state.Password)))} />
                                                    {this.state.Password_Invalid ? <em id="password-error" className="invalid">{this.state.Password_Invalid_MSG}</em> : null}
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-lock txt-color-teal"></i> Nhập mật khẩu của bạn</b> </label>
                                                <div className="note">
                                                    <a href="forgotpassword.html">Quên mật khẩu?</a>
                                                </div>
                                            </section>

                                            <section>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="remember" defaultChecked={false} />
                                                    <i></i>Duy trì đăng nhập</label>
                                            </section>
                                        </fieldset>
                                        <footer>
                                            <button type="button" onClick={() => {
                                                let model: UserLoginModel = {
                                                    Username: this.state.Username,
                                                    Password: this.state.Password
                                                };
                                                store.dispatch(action_Login(model));
                                            }} className="btn btn-primary">Đăng nhập</button>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}