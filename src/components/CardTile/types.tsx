import { MouseEventHandler } from "react"

interface CardTileProps {
    cardImage: string,
    show?: boolean,
    onClick?: MouseEventHandler
}

export type {
    CardTileProps
}