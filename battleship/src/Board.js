import React, { Component } from 'react';
import './App.css';
import Box from './Box.js'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ],
            carrier: ["C", "C", "C", "C", "C"],
            battleship: ["B", "B", "B", "B"],
            destroyer: ["D", "D", "D", "D"],
            sub: ["S", "S", "S"],
            patrol: ["P", "P"],

            count: 0,

            playerIndexes: [],
            guessIndexes: [],

            mode: "place mode",
            player1Lives: 17,
            player2Lives: 17,
        }
    }

    motherFunction = (boardIndex) => {
        const {mode} = this.state
        if (mode === "place mode"){
            this.handleClick(boardIndex)
        } else {
            this.playMode(boardIndex);
        }
    }

    handleClick = (boardIndex) => {
        const { count, playerIndexes} = this.state
        console.log(count);
        if(playerIndexes.includes(boardIndex) === false){
            let newCount = count+1
            this.setState({count:newCount})
            playerIndexes.push(boardIndex)
            if (count < 5){
                if (count === 0){
                    this.placeCarrier(boardIndex)
                } else {
                    if (playerIndexes[count] !== playerIndexes[count-1] - 1 && playerIndexes[count] !== playerIndexes[count-1] + 1 && playerIndexes[count] !== playerIndexes[count-1] - 10 && playerIndexes[count] !== playerIndexes[count-1] + 10){
                        playerIndexes.pop()
                        this.setState({count:newCount-1})
                        console.log(playerIndexes);
                    } else {
                        this.placeCarrier(boardIndex)
                    }
                }
            } else if (count < 9) {
                if (count === 5){
                    this.placeBattle(boardIndex)
                } else {
                    if (playerIndexes[count] !== playerIndexes[count-1] - 1 && playerIndexes[count] !== playerIndexes[count-1] + 1 && playerIndexes[count] !== playerIndexes[count-1] - 10 && playerIndexes[count] !== playerIndexes[count-1] + 10){
                        playerIndexes.pop()
                        this.setState({count:newCount-1})
                        console.log(playerIndexes);
                    } else {
                        this.placeBattle(boardIndex)
                    }
                }
            } else if (count < 13) {
                if (count === 9){
                    this.placeDestroyer(boardIndex)
                } else {
                    if (playerIndexes[count] !== playerIndexes[count-1] - 1 && playerIndexes[count] !== playerIndexes[count-1] + 1 && playerIndexes[count] !== playerIndexes[count-1] - 10 && playerIndexes[count] !== playerIndexes[count-1] + 10){
                        playerIndexes.pop()
                        this.setState({count:newCount-1})
                        console.log(playerIndexes);
                    } else {
                        this.placeDestroyer(boardIndex)
                    }
                }
            } else if (count < 16) {
                if (count === 13){
                    this.placeSub(boardIndex)
                } else {
                    if (playerIndexes[count] !== playerIndexes[count-1] - 1 && playerIndexes[count] !== playerIndexes[count-1] + 1 && playerIndexes[count] !== playerIndexes[count-1] - 10 && playerIndexes[count] !== playerIndexes[count-1] + 10){
                        playerIndexes.pop()
                        this.setState({count:newCount-1})
                        console.log(playerIndexes);
                    } else {
                        this.placeSub(boardIndex)
                    }
                }
            } else if (count < 18) {
                if (count === 16){
                    this.placePatrol(boardIndex)
                } else {
                    if (playerIndexes[count] !== playerIndexes[count-1] - 1 && playerIndexes[count] !== playerIndexes[count-1] + 1 && playerIndexes[count] !== playerIndexes[count-1] - 10 && playerIndexes[count] !== playerIndexes[count-1] + 10){
                        playerIndexes.pop()
                        this.setState({count:newCount-1})
                        console.log(playerIndexes);
                    } else {
                        this.placePatrol(boardIndex)
                    }
                }

            };
        }
    }
    placeCarrier = (boardIndex) => {
        const { board, carrier } = this.state
        for (let i=0; i<carrier.length; i++){
            return board[boardIndex] = carrier[i]
        }
        this.setState({ board, carrier })
    }

    placeBattle = (boardIndex) => {
        const { board, battleship } = this.state
        for (let i=0; i<battleship.length; i++){
            return board[boardIndex] = battleship[i]
        }
        this.setState({ board, battleship })
    }

    placeDestroyer = (boardIndex) => {
        const { board, destroyer } = this.state
        for (let i=0; i<destroyer.length; i++){
            return board[boardIndex] = destroyer[i]
        }
        this.setState({ board, destroyer })
    }

    placeSub = (boardIndex) => {
        const { board, sub } = this.state
        for (let i=0; i<sub.length; i++){
            return board[boardIndex] = sub[i]
        }
        this.setState({ board, sub })
    }

    placePatrol = (boardIndex) => {
        const { board, patrol } = this.state
        for (let i=0; i<patrol.length; i++){
            return board[boardIndex] = patrol[i]
        }
        this.setState({ board, patrol })
    }

    playMode = (boardIndex) => {
        const {playerIndexes, player1Lives, guessIndexes} = this.state
        if (playerIndexes.includes(boardIndex)){
            if (guessIndexes.includes(boardIndex) === false){
                guessIndexes.push(boardIndex)
                console.log(player1Lives);
                console.log("boom!")
                this.setState({player1Lives: player1Lives -1})
            }

            if(player1Lives === 0 ){
                alert("Player2: YOU WIN")
                document.location.reload();
            }
        }
    }

    modeSwitch = () => {
        const {mode} = this.state
        let gamemode = mode === "place mode" ? "game mode": "place mode"
        this.setState({mode:gamemode})
        console.log(mode);
        this.setState({board: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]})
    }


    render(){
        const { board, mode, playerIndexes} = this.state
        const gameBoard = board.map((value, index)=>{
            return(
                <Box
                    value={value}
                    index={index}
                    key={index}
                    motherFunction={this.motherFunction}
                    mode={mode}
                    playerIndexes={playerIndexes}
                    // boardIndex={boardIndex}
                />
            )
        })
        return(
            <div id="mainBoard">
                {gameBoard}
                <button onClick= {this.modeSwitch}>Play The Game</button>
            </div>
        )
    }
}

export default Board;
