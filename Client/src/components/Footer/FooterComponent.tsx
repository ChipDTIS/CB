import * as React from "react";

export class FooterComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div className="page-footer">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <span className="txt-color-white">Công ty trách nhiệm hưu hạn một hành viên © 2017-2019</span>
                    </div>
                </div>
            </div>
        );
    }
}