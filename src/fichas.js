import React from 'react'

export function Casilla(props) {
    const  data = props.data;
    let value = ''
    if(data === 1) value = <span className="O">O</span>;
    if(data === 2) value = <span className="X">X</span>;
    return <span className="casilla" onClick={props.tirar}>{value}</span>
    
  }