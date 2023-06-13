type GameBoardSize = 'small' | 'medium' | 'large'

interface GameBoardProps {
    size: GameBoardSize,
    tiles: { cardImage: string, show: boolean }[],
    onMove?: (cardId: number) => void
}

export type {
    GameBoardProps,
    GameBoardSize
}