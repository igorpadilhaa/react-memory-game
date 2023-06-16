import { ReactNode } from "react"

interface GameControlsProps {
    title: string,
    controls?: Control[],
    children: ReactNode[] | ReactNode
}

interface Control {
    text?: string,
    image?: string,
    action?: () => void
}

export type {
    GameControlsProps,
    Control
}