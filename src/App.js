import React, { Component } from 'react';
import './App.css';
import {Casilla} from './fichas.js'


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
    if (this.state.turno=== 1) {
      this.setState({turno:2})
    } else {
      this.setState({turno:1})

    }
  }
  
  render() {
    
    return (
      <div className="App">
         <div className="tablero">
             {this.state.tablero.map((casilla, 
              index) => <Casilla data={casilla} tirar={()=> this.handleClick(index)} ></Casilla> )}
         </div>
        
      </div>
    );
  }
}




export default App;
