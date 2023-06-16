import { GameMoveEvent, GameNewEvent, GameSelectCardEvent } from "./types";

function newGame(size: number): GameNewEvent {
    return { 
        type: 'game/new', 
        payload: { size }
    }
}

function move(): GameMoveEvent {
    return { type: 'game/move' }
}

function selectCard(card: number): GameSelectCardEvent {
    return {
        type: 'game/selectCard',
        payload: { card }
    }
}

export {
    newGame,
    move,
    selectCard
}