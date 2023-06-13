import { FC } from "react";
import Card from "../Card";
import type { CardTileProps } from "./types";

import css from './CardTile.module.css'

const CardTile: FC<CardTileProps> = ({ cardImage, backgroundColor, borderColor, show, onClick }) => {
    return (
        <article className={css.cardTile} style={{ backgroundColor, borderColor }} onClick={onClick}>
            {show && <Card image={cardImage}/>}
        </article>
    )
}

export default CardTile