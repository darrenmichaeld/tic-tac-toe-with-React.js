import Player from "./components/Player"
import GameBoard from "./components/Gameboard";
import { useState } from "react"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./assets/winning_combination";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function activePlayerChanger(prevTurn){
  let curActivePlayer = 'X';
  if(prevTurn.length > 0 && prevTurn[0].player === "X"){
    curActivePlayer = 'O';
  }
  return curActivePlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);

  const activePlayer = activePlayerChanger(gameTurn);

  // Perform Deep Copy
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  let winner = null;

  let hasDraw = null;

  for(const turn of gameTurn){
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS){
    const first = gameBoard[combination[0].row][combination[0].column];
    const second = gameBoard[combination[1].row][combination[1].column];
    const third = gameBoard[combination[2].row][combination[2].column];

    if(first && first === second && first === third){
      winner = first;
    }

    if(!winner && gameTurn.length === 9){
      hasDraw = true;
    }
  }
  
  function handleActivePlayer(rowIndex, colIndex){
    setGameTurn((prevTurn) =>
    {
      const curTurn = activePlayerChanger(prevTurn);
      
      const updatedGameTurn = [
        { square : {row: rowIndex, col: colIndex}, player : curTurn}
        ,...prevTurn];

      return updatedGameTurn;
    })
  }

  function handleRestart(){
    setGameTurn([]);
  }

  return (
    <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onSelect={handleRestart}/>}
      <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard}/>
    </div>
    <Log turns={gameTurn}/>
    </main>
  )
}

export default App
