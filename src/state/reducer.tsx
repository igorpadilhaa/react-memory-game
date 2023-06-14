import { Reducer, useReducer } from "react"
import { Game } from "../api/game"

type GameEvent = {
    type: string
}

const reducer: Reducer<Game | null, GameEvent> = (prevState, action) => {
    console.log(`event ${action.type} triggered`)
    return prevState
}

function useGameReducer() {
    return useReducer(reducer, null)
}

export default useGameReducer