import { Reducer, useReducer } from "react"
import { BoardSize, Game, makeMove, newGame, selectCard } from "../../api/game"
import { GameEvent } from "./types";

const initialState = newGame(BoardSize.MEDIUM);

const reducer: Reducer<Game, GameEvent> = (currentState, action) => {
    console.log(`event ${action.type} triggered`)
    const newState: Game = {
        status: currentState.status,
        selectedCards: [...currentState.selectedCards],
        board: currentState.board.map(c => Object.assign({}, c))
    }

    switch(action.type) {
    case 'game/selectCard':
        selectCard(action.payload.card, newState)
        break;

    case 'game/move':
        makeMove(newState)
        break;

    case 'game/new':
        return newGame(action.payload.size)

    default:
        return currentState
    }

    console.dir({
        old: currentState,
        new: newState
    })

    return newState
}

function useGameReducer() {
    return useReducer(reducer, initialState)
}

export default useGameReducer