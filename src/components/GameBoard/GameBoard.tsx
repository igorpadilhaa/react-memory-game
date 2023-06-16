import { FC } from "react";

import { GameBoardProps } from "./types";
import CardTile from "../CardTile";

import style from './GameBoard.module.css'

function generateTiles(board: GameBoardProps) {
    const tiles = []
    const tileCount = board.tiles.length;

    for (let i = 0; i < tileCount; i++) {
        const move = () => board.onMove && board.onMove(i)
        const tile = board.tiles[i]

        tiles.push(<CardTile key={i} cardImage={tile.image} show={tile.flipped} onClick={move} />)
    }

    return tiles;
}

function calculateSizeClass(tilesCount: number): string {
    let sizeClass = style.small

    if (tilesCount > 12) {
        sizeClass = style.large
    } else if (tilesCount > 6) {
        sizeClass = style.medium
    }

    return sizeClass
}

const GameBoard: FC<GameBoardProps> = (props) => {
    const cardTiles = generateTiles(props)
    const sizeClass = calculateSizeClass(cardTiles.length)

    return (
        <section className={style.gameBoard + ' ' + sizeClass}>
            {cardTiles}
        </section>
    )
}

export default GameBoard;