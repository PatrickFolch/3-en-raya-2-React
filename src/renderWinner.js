import React from 'react'

export function Winner(props){
    const {winner} = props;
    if(winner === 1) {
        return <WinnerO/>
    }
    if(winner === 2) {
        return <WinnerX></WinnerX>
    }
    return ''
  }
  
  export  function WinnerO(){
    return <p className="WIN">Win O!</p>
  }

  export  function WinnerX(){
    return <p className="WIN">Win X!</p>
  }
  