import * as React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import store from "./_store";
// import __state from "./_models";
import { action_Login, action_UsernameValidate, action_PasswordValidate } from "./_actions";
import { UserLoginModel } from "src/models/LoginModel";
import { Unsubscribe } from "redux";
import { fakeAuth } from "src/commons/constant";
interface IState {
    IsAuth: boolean;
    LoginModel: UserLoginModel;
    Username_Invalid: boolean;
    Password_Invalid: boolean;
    Username_Invalid_MSG: string;
    Password_Invalid_MSG: string;
}

export class LoginComponent extends React.Component<any, IState> {
    private unsubscribe: Unsubscribe;
    componentWillMount() {
        console.log(fakeAuth.isAuthenticated);
        let storeState = store.getState();
        this.setState({
            LoginModel: {
                Username: storeState !== undefined ? storeState.Model.Username : "",
                Password: "",
                Remember: false
            } 
        });
        this.unsubscribe = store.subscribe(() => {
            if (storeState !== undefined) {
                if (this.state.IsAuth !== storeState.IsAuth
                    || this.state.Username_Invalid !== storeState.Username_Invalid
                    || this.state.Username_Invalid_MSG !== storeState.Username_Invalid_MSG
                    || this.state.Password_Invalid !== storeState.Password_Invalid
                    || this.state.Password_Invalid_MSG !== storeState.Password_Invalid_MSG) {
                    this.setState({
                        IsAuth: storeState.IsAuth,
                        Password_Invalid: storeState.Password_Invalid,
                        Username_Invalid: storeState.Username_Invalid,
                        Username_Invalid_MSG: storeState.Username_Invalid_MSG,
                        Password_Invalid_MSG: storeState.Password_Invalid_MSG
                    });
                }
            }
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        // const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { referrer } = this.props.location.state || { referrer: { pathname: "/" } };
        console.log("render again");
        if (this.state.IsAuth) {
            fakeAuth.authenticate();
            return <Redirect to={referrer}/>;
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
                                                        value={this.state.LoginModel.Username || ""}
                                                        onChange={v => this.setState({
                                                            LoginModel: {
                                                                Username: v.target["value"],
                                                                Password: this.state.LoginModel.Password,
                                                                Remember: this.state.LoginModel.Remember
                                                            }
                                                        }, () => store.dispatch(action_UsernameValidate(this.state.LoginModel.Username)))} />

                                                    {this.state.Username_Invalid ? <em id="email-error" className="invalid">{this.state.Username_Invalid_MSG}</em> : null}
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-user txt-color-teal"></i> Vui lòng nhập tài khoản của bạn</b></label>
                                            </section>

                                            <section>
                                                <label className="label">Mật khẩu</label>
                                                <label className="input"> <i className="icon-append fa fa-lock"></i>
                                                    <input type="password" name="password"
                                                        value={this.state.LoginModel.Password || ""}
                                                        onChange={v => this.setState({
                                                            LoginModel: {
                                                                Password: v.target["value"],
                                                                Username: this.state.LoginModel.Username,
                                                                Remember: this.state.LoginModel.Remember
                                                            }
                                                        }, () => store.dispatch(action_PasswordValidate(this.state.LoginModel.Password)))} />
                                                    {this.state.Password_Invalid ? <em id="password-error" className="invalid">{this.state.Password_Invalid_MSG}</em> : null}
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-lock txt-color-teal"></i> Nhập mật khẩu của bạn</b> </label>
                                                <div className="note">
                                                    <a href="forgotpassword.html">Quên mật khẩu?</a>
                                                </div>
                                            </section>

                                            <section>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="remember" onChange={v => (
                                                        this.setState({
                                                            LoginModel: {
                                                                Username: this.state.LoginModel.Username,
                                                                Password: this.state.LoginModel.Password,
                                                                Remember: true
                                                            }
                                                        }))} defaultChecked={false} />
                                                    <i></i>Duy trì đăng nhập</label>
                                            </section>
                                        </fieldset>
                                        <footer>
                                            <button type="button" onClick={() => {
                                                let model: UserLoginModel = {
                                                    Username: this.state.LoginModel.Username,
                                                    Password: this.state.LoginModel.Password,
                                                    Remember: this.state.LoginModel.Remember
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