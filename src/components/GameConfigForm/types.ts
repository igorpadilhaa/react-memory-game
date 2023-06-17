import { BoardSize } from "../../api/game"

interface GameConfig {
    boardSize?: BoardSize
}

interface GameConfigFormProps extends GameConfig {
    onSubmit?: (config: GameConfig) => void,
    open?: boolean
}

export type {
    GameConfigFormProps,
    GameConfig
}