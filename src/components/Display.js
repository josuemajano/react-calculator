import React, { Component } from "react";
import "../style/display.css";

class Display extends Component {
    render() {
        return (
            <div className="lcd-screen" id="display">
                {this.props.display}
            </div>
        )
    }
}

export default Display