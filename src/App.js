import React, { Component } from 'react';
import './App.css';



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
 
  
  render() {
    
    return (
      <div className="App">
         <div className="tablero">
             {this.state.tablero.map((casilla, 
              index) => <div  onClick={()=> this.handleClick(index)} >{casilla}</div> )}
         </div>
        
      </div>
    );
  }
}




export default App;
