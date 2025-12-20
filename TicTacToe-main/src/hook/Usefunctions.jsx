import React, { useState } from 'react'
const initialBoard = () => Array(9).fill(null);
function Usefunctions() {
    const [board, setBoard] = useState(initialBoard());
    const [isNext, setNext]=useState(true);
    const winning_patterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    const calculateWinner=(currentBoard)=>{
        for(let i=0;i<winning_patterns.length;i++){
            const [a,b,c]=winning_patterns[i];
            if(currentBoard[a]&&currentBoard[a]==currentBoard[b]&&currentBoard[a]==currentBoard[c])
                return currentBoard[a];
        }
        return null;
    }     
    const handleClick=(i)=>{
        const winner=calculateWinner(board);
        console.log("winner",winner);
        if(winner || board[i])return null
        const newboard=[...board];
        newboard[i]=isNext?'X':'O';
        setBoard(newboard);
        setNext(!isNext);      
    }
    const getStatus=()=>{
        const winner=calculateWinner(board);
        if(winner)
         return `Player ${winner} Wins`
        if(!board.includes(null)) 
        return `Game is Draw`;
         return `Player ${isNext?"X":"O"} turn`;       
    }   
    const reset=()=>{
        setBoard(initialBoard());
        setNext(true);
    }    
    return { board, handleClick,getStatus,reset}
}
export default Usefunctions
