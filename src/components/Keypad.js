import React, { Component } from "react";
import { connect } from "react-redux";
import '../style/keypad.css';

class Keypad extends Component {
    comstructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="keypad">
               <div className="button-group-3x4">
                   <div className="button-row-3x1">
                       <SmallButton button={"C"} id={"clear"} type={'clear'}/>
                       <SmallButton button={"/"} id={"divide"} type={'operator'} display={this.props.display}/>
                       <SmallButton button={"*"} id={"multiply"} type={'operator'} display={this.props.display}/>
                   </div>
                   <div className="button-group-3x1">
                       <SmallButton button={"7"} id={"seven"} value={'7'} type={'num'}/>
                       <SmallButton button={"8"} id={"eight"} value={'8'} type={'num'}/>
                       <SmallButton button={"9"} id={"nine"} value={'9'} type={'num'}/> 
                   </div>
                   <div className="button-row-3x1">
                        <SmallButton button={"4"} id={"four"} value={'4'} type={'num'}/>
                        <SmallButton button={"5"} id={"five"} value={'5'} type={'num'}/>
                        <SmallButton button={"6"} id={"six"} value={'6'} type={'num'}/>     
                   </div>
                   <div className="button-row-3x1">
                       <SmallButton button={"1"} id={"one"} value={'1'} type={'num'}/>
                       <SmallButton button={"2"} id={"two"} value={'2'} type={'num'}/>
                       <SmallButton button={"3"} id={"three"} value={'3'} type={'num'}/>
                   </div>
               </div>
               <div className="button-row-4x1">
                   <LargeHButton button={"0"} id={"zero"} value={'0'} type={'num'}/>
                   <SmallButton button={"."} id={"decimal"} value={'.'} type={'decimal'} display={this.props.display}/>
               </div>
               <div className="button-col-1x5">
                   <SmallButton button={"-"} id={"subtract"} type={'operator'} display={this.props.display}/>
                   <LargeVButton button={"+"} id={"add"} type={'operator'} display={this.props.display}/>
                   <LargeVButton button={"="} id={"equals"} type={'operator'} display={this.props.display}/>
               </div>
            </div>
        )
    }
}

export default Keypad;