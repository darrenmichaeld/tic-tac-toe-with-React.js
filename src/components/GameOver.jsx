export default function GameOver({winner, onSelect}){
    return(
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>{winner} Won!</p>}
            {!winner && <p>It's Draw</p>}
            <p>
                <button onClick={onSelect}>
                    Rematch!
                </button>
            </p>
        </div>
    );
}