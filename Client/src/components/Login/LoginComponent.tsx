import * as React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import store from "./_store";
import __state from "./_models";
import { action_Login } from "./_actions";
import { UserLoginModel } from "src/models/LoginModel";
interface IState {
    redirectToAdmin: boolean;
}
interface IProps {
    redirectToAdmin: boolean;
}
const mapStateToProps = (state: __state) => ({
    redirectToAdmin: state.RedirectToAdmin
});
export class LoginComponent extends React.Component<IProps, IState> {
    componentWillMount() {
        console.log("componentWillMount");
        this.setState({});
        // store.subscribe = this.props.redirectToAdmin;
    }
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }
    render() {
        console.log("render");
        if (this.state.redirectToAdmin) {
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
                                                    <input type="email" name="email" />
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-user txt-color-teal"></i> Vui lòng nhập tài khoản của bạn</b></label>
                                            </section>

                                            <section>
                                                <label className="label">Mật khẩu</label>
                                                <label className="input"> <i className="icon-append fa fa-lock"></i>
                                                    <input type="password" name="password" />
                                                    <b className="tooltip tooltip-top-right"><i className="fa fa-lock txt-color-teal"></i> Nhập mật khẩu của bạn</b> </label>
                                                <div className="note">
                                                    <a href="forgotpassword.html">Quên mật khẩu?</a>
                                                </div>
                                            </section>

                                            <section>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="remember" defaultChecked={true} />
                                                    <i></i>Duy trì đăng nhập</label>
                                            </section>
                                        </fieldset>
                                        <footer>
                                            <button type="button" onClick={() => this.loginClick()} className="btn btn-primary">Đăng nhập</button>
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
    loginClick() {
        let model: UserLoginModel = {
            Username: "ABC",
            Password: "ACD"
        };
        let ss = store.dispatch(action_Login(model));
        console.log(ss);
        let sss = store.getState();
        console.log(sss);
        mapStateToProps(sss);
        this.setState({redirectToAdmin: sss.RedirectToAdmin});
    }
}