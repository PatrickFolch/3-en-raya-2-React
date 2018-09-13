import React, { Component } from 'react';
import './App.css';
import {Casilla} from './fichas.js'
import {Winner, WinenrO, WinnerX} from './renderWinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablero: [
        0,0,0,
        0,0,0,
        0,0,0,
      ],
      turno: 1,
    }
  }
  handleClick(index) {
    const {tablero, turno}  = this.state;
    if (tablero[index] === 0) {
      tablero[index] = turno
      this.setState({tablero}, this.cambiaTurno)
    }
    
  }
  cambiaTurno() {
    if(this.state.winner !== 0) { this.reset()}
    if (this.state.turno=== 1) {
      this.setState({turno:2})
    } else {
      this.setState({turno:1})

    }
    this.quienGana();
    
  }
  reset() {
    this.setState({ tablero: [
      0,0,0,
      0,0,0,
      0,0,0,
    ], turno:1  })
  }
  quienGana() {
    const tablero = this.state.tablero;
    let winner = 0
    if(tablero[0]===1 && tablero[1]===1 && tablero[2]===1){
      winner = 1
  }
  else if(tablero[3]===1 && tablero[4]===1 && tablero[5]===1){
      winner = 1
  }
  else if(tablero[6]===1 && tablero[7]===1 && tablero[8]===1){
      winner = 1
  }
  else if(tablero[0]===1 && tablero[3]===1 && tablero[6]===1){
      winner = 1
  }
  else if(tablero[1]===1 && tablero[4]===1 && tablero[7]===1){
      winner = 1
  }
  else if(tablero[2]===1 && tablero[5]===1 && tablero[8]===1){
      winner = 1
  }
  else if(tablero[0]===1 && tablero[4]===1 && tablero[8]===1){
      winner = 1
  }
  else if(tablero[2]===1 && tablero[4]===1 && tablero[6]===1){
      winner = 1
  }
  ///////////////////////////////////////////////////////////
  else if(tablero[0]===2 && tablero[1]===2 && tablero[2]===2){
      winner = 2
  }
  else if(tablero[3]===2 && tablero[4]===2 && tablero[5]===2){
      winner = 2
  }
  else if(tablero[6]===2 && tablero[7]===2 && tablero[8]===2){
      winner = 2
  }
  else if(tablero[0]===2 && tablero[3]===2 && tablero[6]===2){
      winner = 2
  }
  else if(tablero[1]===2 && tablero[4]===2 && tablero[7]===2){
      winner = 2
  }
  else if(tablero[2]===2 && tablero[5]===2 && tablero[8]===2){
      winner = 2
  }
  else if(tablero[0]===2 && tablero[4]===2 && tablero[8]===2){
    winner = 2
  }
  else if(tablero[2]===2 && tablero[4]===2 && tablero[6]===2){
      winner = 2     
  }
  this.setState({winner:winner})

  }
  
  render() {
    
    return (
      <div className="App">
         <h1>TIC-TAC-TOE</h1>
         <Winner winner={this.state.winner}/>
         <div className="tablero">
             {this.state.tablero.map((casilla, 
              index) => <Casilla data={casilla} tirar={()=> this.handleClick(index)} ></Casilla> )}
         </div>
            
      </div>
    );
  }
}




export default App;
