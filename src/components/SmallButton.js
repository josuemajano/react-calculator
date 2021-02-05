import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../actions/actions";
import { clearDisplay } from "../actions/actions";
import { subtracting } from "../actions/actions";
import { multipling } from "../actions/actions";
import { dividing } from "../actions/actions";
import "../style/buttons.css";

class SmallButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (this.props.id === "clear") {
            this.props.clear();
        } else if (this.props.id === "subtract") {
            this.props.subtract(this.props.display)
        } else if (this.props.id === "multiply") {
            this.props.multiply(this.props.display)
        } else if (this.props.id === "divide") {
            this.props.divide(this.props.display);
        } else {
            this.props.updateDisplay(this.props.button)
        }
    }

    render() {
        return (
            <button 
                id={this.props.id}
                value={this.props.value}
                className="small-button"
                onClick={this.handleClick}
            >
                {this.props.button}
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateDisplay: display => dispatch(updateDisplay(display)),
    subtract: display => dispatch(subtracting(display)),
    multiply: display => dispatch(multipling(display)),
    divide: display => dispatch(dividing(display)),
    clear: display => dispatch(clearDisplay(display))
});

export default connect(null, mapDispatchToProps)(SmallButton);