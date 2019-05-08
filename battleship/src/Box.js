import React, { Component } from 'react';
import './App.css';


class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: "#0044cc" ,

        }
    }

    helpHandleClick = () => {
        //const {color} = this.state
        const { index, motherFunction, mode, playerIndexes, value} = this.props
        if(value === 0 && playerIndexes.includes(index) && mode==="place mode"){
            this.setState({color:"blue"})
        }else if(mode==="game mode" && playerIndexes.includes(index)){
            this.setState({color:"red"})
        }else if(mode ==="game mode"){
            this.setState({color: "white"})
        }else if(mode === "place mode"){
            this.setState({color:"grey"})
        }
        motherFunction(index)
    }
    render(){
        const {color} = this.state
        const { value } = this.props
        return(
            <div>
                <div id="mainBox" style = {{backgroundColor: color}}onClick={this.helpHandleClick}>
                    {value}
                </div>
            </div>
        )
    }
}

export default Box;
