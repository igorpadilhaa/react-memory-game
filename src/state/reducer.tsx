import { Reducer, useReducer } from "react"
import { BoardSize, Game, newGame, selectCard } from "../api/game"

interface GameSelectCardEvent {
    type: 'game/selectCard',
    payload: { 
        card: number
    }
}

type GameEvent = GameSelectCardEvent

const initialState = newGame(BoardSize.MEDIUM);

const reducer: Reducer<Game, GameEvent> = (prevState, action) => {
    console.log(`event ${action.type} triggered`)
    const newState: Game = {
        selectedCards: [...prevState.selectedCards],
        board: [...prevState.board]
    }

    switch(action.type) {
    case 'game/selectCard':
        selectCard(action.payload.card, newState)
        break;

    default:
        return prevState
    }

    return newState
}

function useGameReducer() {
    return useReducer(reducer, initialState)
}

export default useGameReducer