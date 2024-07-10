import { useState } from "react"

export default function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handingEditClick(){
        setIsEditing(isEditing=>!isEditing);
    }
    function handlingNameChanges(event){
        setPlayerName(event.target.value)
    }

    return(
        <li className={isActive? "active" : undefined}>
          <span className="player">
            {isEditing ? <input type="text" required onChange={handlingNameChanges}></input> : <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handingEditClick}>
            {isEditing? 'Save' : 'Edit'}
          </button>
        </li>
    )
}