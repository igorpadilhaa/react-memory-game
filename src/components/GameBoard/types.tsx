interface GameBoardProps {
    tiles: { image: string, flipped: boolean}[],
    onMove?: (cardId: number) => void
}

export type {
    GameBoardProps
}