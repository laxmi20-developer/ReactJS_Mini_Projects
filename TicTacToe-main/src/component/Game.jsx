import React from 'react'
import './Game.css'
import Usefunctions from '../hook/Usefunctions'
function Game() {
    const { board, handleClick, getStatus, reset } = Usefunctions();
    console.log("board", board);
    return (
        <div className='game'>

            <div className='status'>
                <div>{getStatus()}</div>
                <button onClick={reset}>Reset Game</button>
            </div>
            <div className='board'>
                {board.map((item, i) => <div className='cell' key={i} onClick={() => handleClick(i)}>{item}</div>)}
            </div>
        </div>
    )
}

export default Game
