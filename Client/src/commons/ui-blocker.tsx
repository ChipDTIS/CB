import * as React from "react";

interface IState {
    currentThread: number;
}

export class UIBlocker extends React.Component<{}, IState> {
    static instance: any;
    componentWillMount() {
        UIBlocker.instance = this;
        this.setState({ currentThread: 0 });
        let $div = $("<div id=\"ui-blocked\" class=\"ui-blocked hidden\"><div class=\"loading-icon\"><i class=\"fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom\"></i></div></div>");
        $("body").append($div);
    }

    block() {
        this.setState({
            currentThread: this.state.currentThread + 1
        });
    }

    unblock() {
        this.setState({
            currentThread: this.state.currentThread ? this.state.currentThread - 1 : 0
        });
    }

    render() {
        if (this.state.currentThread) {
            $("#ui-blocked").removeClass("hidden");
        } else {
            $("#ui-blocked").addClass("hidden");
        }
        return null;
    }
}