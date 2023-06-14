import { Reducer, useReducer } from "react"
import { BoardSize, Game, newGame } from "../api/game"

type GameEvent = {
    type: string
}

const reducer: Reducer<Game, GameEvent> = (prevState, action) => {
    console.log(`event ${action.type} triggered`)
    return prevState
}

function useGameReducer() {
    return useReducer(reducer, newGame(BoardSize.MEDIUM))
}

export default useGameReducer