import { FC } from "react";

import style from './Card.module.css'
import CardProps from "./types";

const Card : FC<CardProps> = ({ image }) => {
    return <img className={style.card} src={image} alt="Memory game card" />
}

export default Card;