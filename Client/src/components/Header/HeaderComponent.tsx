import * as React from "react";
import { Redirect } from "react-router";
import { SmartAlerts, SmartAlertTypeEnums, SmartAlertResultEnums } from "src/commons/smartAlert";
// import { Redirect } from "react-router";
interface IState {
    redirectToLogin: boolean;
}
export class HeaderComponent extends React.Component<{}, IState> {
    
    componentWillMount() {
        console.log("HeaderComponent");
        this.setState({});
    }
    render() {
        if (this.state.redirectToLogin) {
            return (
                <Redirect to="/login" push={true} />
            );
        } else {
            return (
                <header id="header">
                    <div id="logo-group">
                        <span id="logo">
                            <img src="/assets/img/logo.png" alt="SmartAdmin" />
                        </span>
                        <div>
                            <span id="activity">
                                <i className="fa fa-user" />
                                {/* <b className="badge bg-color-red">14</b> */}
                            </span>
                        </div>
                    </div>
                    {/*  dropdown: open close */}
                    <div className="project-context hidden-xs dropdown">
                        <span className="label">Chat bot Alpha</span>
                        {/*  dropdown: open close */}
                        <span className="project-selector dropdown-toggle" data-toggle="dropdown" >
                            <span>Recent activity page</span>
                            <i className="fa fa-angle-down" />
                        </span>
                        <ul className="dropdown-menu">
                            <li><a href="/">fsdfsdf</a></li>
                            <li><a href="/">Notes on pipeline upgradee</a></li>
                            <li><a href="/">Assesment Report for merchant account</a></li>
                            <li className="divider" />
                            <li>
                                <a>
                                    <i className="fa fa-power-off" />
                                    Clear
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="pull-right">
                        <div id="hide-menu" className="btn-header pull-right">
                            <span>
                                <a data-action="toggleMenu" title="Collapse Menu" >
                                    <i className="fa fa-reorder" />
                                </a>
                            </span>
                        </div>
                        <div id="logout" className="btn-header transparent pull-right">
                            <span>
                                <a onClick={() => this.logout()} title="Đăng xuất" >
                                    <i className="fa fa-sign-out" />
                                </a>
                            </span>
                        </div>
                    </div>
                </header>
            );
        }
    }
    async logout() {
        let result = await SmartAlerts.show({
            title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Đăng xuất <span class='txt-color-orangeDark'><strong>Toàn</strong></span> ?",
            content: "Bạn chắc chắn muốn đăng xuất?",
            type: SmartAlertTypeEnums.Success
        });
        if (result === SmartAlertResultEnums.Confirm) {
            this.setState({redirectToLogin: true});
        }
    }
}