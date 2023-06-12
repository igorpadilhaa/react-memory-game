import { FC } from "react";
import Card from "../Card";
import type { CardTileProps } from "./types";

import css from './CardTile.module.css'

const CardTile: FC<CardTileProps> = ({ cardImage, backgroundColor, borderColor }) => {
    return (
        <article className={css.cardTile} style={{ backgroundColor, borderColor }}>
            <Card image={cardImage}/>
        </article>
    )
}

export default CardTile