import { useEffect, useState } from "react";

function Game() {
  const [slots, setSlots] = useState(Array(9).fill(null));
  const [player1Turn, setPlayer1Turn] = useState(true);
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [winner, setWinner] = useState("")
  const [gameOver, setGameOver] = useState(false)
  

  function winnerDetection(board) {
    for (let i = 0; i < winningPatterns.length; i++) {
      // console.log(winningPatterns[i][0])
      if (
        board[winningPatterns[i][0]] !== null &&
        board[winningPatterns[i][1]] !== null &&
        board[winningPatterns[i][2]] !== null) {
        if (
          (board[winningPatterns[i][0]] === board[winningPatterns[i][1]]) && 
         (board[winningPatterns[i][1]] === board[winningPatterns[i][2]])
        ) {
          if(board[winningPatterns[i][0]]){
            setWinner("Player 1")
            setGameOver(true)
        }
        else{
            setWinner("Player 2")
            setGameOver(true)
          }
        }
      }
    }
  }

  function changeSign(index) {

    if(!gameOver){

  const newSlots = [...slots];

    if (slots[index] !== null) return;

    if (player1Turn) {
      newSlots[index] = true;
      setPlayer1Turn(false);
    } 

    else if (!player1Turn) {
      newSlots[index] = false;
      setPlayer1Turn(true);
    }
    setSlots(newSlots);
    winnerDetection(newSlots);

    }
  
  }

  return (
    <div id="container"  >
      <div>
        <button onClick={() => changeSign(0)} className="checkboxes" id="0">
          {slots[0] === null ? "" : slots[0] ? "X" : "O"}
        </button>
        <button onClick={() => changeSign(1)} className="checkboxes" id="1">
          {slots[1] === null ? "" : slots[1] ? "X" : "O"}
        </button>
        <button onClick={() => changeSign(2)} className="checkboxes" id="2">
          {slots[2] === null ? "" : slots[2] ? "X" : "O"}
        </button>
      </div>

      <div>
        <button onClick={() => changeSign(3)} className="checkboxes" id="3">
          {slots[3] === null ? "" : slots[3] ? "X" : "O"}
        </button>
        <button onClick={() => changeSign(4)} className="checkboxes" id="4">
          {slots[4] === null ? "" : slots[4] ? "X" : "O"}
        </button>
        <button onClick={() => changeSign(5)} className="checkboxes" id="5">
          {slots[5] === null ? "" : slots[5] ? "X" : "O"}
        </button>
      </div>
      <div>
        <button onClick={() => changeSign(6)} className="checkboxes" id="6">
          {slots[6] === null ? "" : slots[6] ? "X" : "O"}
        </button>
        <button onClick={() => changeSign(7)} className="checkboxes" id="7">
          {slots[7] === null ? "" : slots[7] ? "X" : "O"}
        </button>
        <button onClick={() => changeSign(8)} className="checkboxes" id="8">
          {slots[8] === null ? "" : slots[8] ? "X" : "O"}
        </button>
      </div>
      <div>{gameOver? <p>{winner} Won the game</p> : player1Turn? <p>Player 1's Turn </p> : <p>Player 2's Turn </p> }</div>
    </div>
  );
}

export default Game;
