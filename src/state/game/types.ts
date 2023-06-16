interface GameSelectCardEvent {
    type: 'game/selectCard',
    payload: { 
        card: number
    }
}

interface GameMoveEvent {
    type: 'game/move'
}

interface GameNewEvent {
    type: 'game/new',
    payload: {
        size: number
    }
}

type GameEvent = GameSelectCardEvent | GameMoveEvent | GameNewEvent

export type {
    GameSelectCardEvent,
    GameMoveEvent,
    GameNewEvent,
    GameEvent
}