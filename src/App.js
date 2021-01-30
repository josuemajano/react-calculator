// import { null } from "mathjs";
import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="calculator-body">
        <div className="display-block skewed-shadow">
          <Display
            display={this.props.display}/>
        </div>
        <div className="keypad-block">
          <Keypad
            dispaly={this.props.display}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const displayValue = showDisplay(state);
  return ({
    display: displayValue
  });
};

export default connect(
  mapStateToProps, null
)(App)