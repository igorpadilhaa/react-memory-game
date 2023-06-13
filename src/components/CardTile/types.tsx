import { MouseEventHandler } from "react"

interface CardTileProps {
    cardImage: string,
    backgroundColor?: string,
    borderColor?: string,
    show?: boolean,
    onClick?: MouseEventHandler
}

export type {
    CardTileProps
}