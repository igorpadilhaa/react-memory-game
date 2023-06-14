import { Reducer, useReducer } from "react"
import { BoardSize, Game, makeMove, newGame, selectCard } from "../api/game"

interface GameSelectCardEvent {
    type: 'game/selectCard',
    payload: { 
        card: number
    }
}

interface GameMoveEvent {
    type: 'game/move'
}

type GameEvent = GameSelectCardEvent | GameMoveEvent

const initialState = newGame(BoardSize.MEDIUM);

const reducer: Reducer<Game, GameEvent> = (currentState, action) => {
    console.log(`event ${action.type} triggered`)
    const newState: Game = {
        selectedCards: [...currentState.selectedCards],
        board: [...currentState.board]
    }

    switch(action.type) {
    case 'game/selectCard':
        selectCard(action.payload.card, newState)
        break;

    case 'game/move':
        makeMove(newState)
        break;

    default:
        return currentState
    }

    return newState
}

function useGameReducer() {
    return useReducer(reducer, initialState)
}

export default useGameReducer