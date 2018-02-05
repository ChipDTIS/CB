import * as React from "react";

// var divStyle = {
//     display: "none"
//   };
  
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
                        <span>Recent projects</span>
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
            </header>
        );
    }
}