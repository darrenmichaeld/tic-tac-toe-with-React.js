
export default function GameBoard({onSelectSquare, board}){
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleClickButton(rowIndex, colIndex){
    //     setGameBoard((previousGameBoard)=>{
    //         const updatedGameBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = curActivePlayer;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <ol key={rowIndex}>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>
                    )
                    )}
                </ol>
            ))}
        </ol>
    );
}