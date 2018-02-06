import * as React from "react";
import { Link } from "react-router-dom";

export class MenuNavComponent extends React.Component<{}, {}> {
    render() {
        return (
            <aside id="left-panel">
                <div className="login-info">
                    <span>
                        <a href="/" id="show-shortcut" data-action="toggleShortcut">
                            <img src="/assets/img/avatars/sunny.png" alt="me" className="online" />
                            <span>Toàn</span>
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#" title="Danh mục"><i className="fa fa-lg fa-fw fa-home"></i> <span className="menu-item-parent">Danh mục</span></a>
                            <ul >
                                <li>
                                    <Link to="/users" title="Danh mục"><span className="menu-item-parent">Danh sách nhân viên</span></Link>
                                   
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <span className="minifyme" data-action="minifyMenu">
                    <i className="fa fa-arrow-circle-left hit"></i>
                </span>
            </aside>
        );
    }
}