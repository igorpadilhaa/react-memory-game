import { FC } from "react";

import { GameBoardProps, GameBoardSize } from "./types";
import CardTile from "../CardTile";

import style from './GameBoard.module.css'
import coffeeImage from '../../assets/coffee.png'

function generateTiles(tileCount: number) {
    const tiles = [];

    for (let i = 0; i < tileCount; i++) {
        tiles.push(<CardTile cardImage={coffeeImage} />)
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

const GameBoard: FC<GameBoardProps> = ({ size }) => {

    const tiles = generateTiles(getTileCount(size))

    return (
        <section className={style.gameBoard + ' ' + style[size]}>
            {tiles}
        </section>
    )
}

export default GameBoard;