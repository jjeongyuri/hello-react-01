import { Component } from "react";

class MyName extends Component {
    static defaultProps = {
        name: '기본이름'
    }

    render() {
        return (
            <div>
                Hello! My Name is{this.props.name} <b></b>.
            </div>
        )
    }
}

export default MyName;