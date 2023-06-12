import { CardTileProps } from "../CardTile/types"

type GameBoardSize = 'small' | 'medium' | 'large'

interface GameBoardProps {
    tiles: CardTileProps[]
    size: GameBoardSize
}

export type {
    GameBoardProps,
    GameBoardSize
}