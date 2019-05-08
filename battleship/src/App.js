import React, { Component } from 'react';
import './App.css';
import Board from './Board.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Board />
            </div>
        )
    }
}

export default App;
