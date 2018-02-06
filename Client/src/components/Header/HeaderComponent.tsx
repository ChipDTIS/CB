import * as React from "react";
import { Link } from "react-router-dom";

export class HeaderComponent extends React.Component<{}, {}> {
    render() {
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
                            <Link to="/login" onClick={() => this.testAlert} title="Đăng xuất"  data-logout-msg="Bạn thật sự muốn đăng xuất?">
                                <i className="fa fa-sign-out" />
                            </Link>
                            <a onClick={() => this.testAlert} title="Đăng xuất" >
                                <i className="fa fa-sign-out" />
                            </a>
                        </span>
                    </div>
                </div> 
            </header>
        );
    }
    testAlert() {
        // tslint:disable-next-line:no-string-literal
        window["runAlert"]();
    }
}