import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../actions/actions";
// import { adding } from "../actions/actions";
// import { equals } from "../actions/actions";
import "../style/buttons.css";

class LargeHButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.display(this.props.value);
    }

    render() {
        return (
            <button 
                id={this.props.id}
                className="button-large-h"
                value={this.props.value}
                onClick={this.handleClick}
            >
                {this.props.button}
            </button>
        );
    }
}

const MapDispatchToProps = dispatch => ({
    display: display => dispatch(updateDisplay(display)),
});

export default connect(null, MapDispatchToProps)(LargeHButton);