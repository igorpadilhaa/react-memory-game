import { FC } from "react";

import { GameBoardProps, GameBoardSize } from "./types";
import CardTile from "../CardTile";

import style from './GameBoard.module.css'

function generateTiles(board: GameBoardProps) {
    const tiles = []
    const tileCount = getTileCount(board.size);

    for (let i = 0; i < tileCount; i++) {
        tiles.push(<CardTile {...board.tiles[i]} />)
    }

    return tiles;
}

function getTileCount(size: GameBoardSize) {
    switch (size) {
        case "small":
            return 6;

        case "medium":
            return 12;

        case "large":
            return 24;
    }
}

const GameBoard: FC<GameBoardProps> = (props) => {
    const cardTiles = generateTiles(props)

    return (
        <section className={style.gameBoard + ' ' + style[props.size]}>
            {cardTiles}
        </section>
    )
}

export default GameBoard;