import { FC } from "react"
import { Control, GameControlsProps } from "./types"

import style from './GameControls.module.css'

function buildControls(descriptors: Control[]) {
    const controls = []

    for (const descriptor of descriptors) {
        controls.push(
            <button onClick={descriptor.action} className={style.control}>
                {
                    descriptor.image && <img src={descriptor.image} alt={descriptor.image} /> ||
                    descriptor.text
                }
            </button>
        )
    }

    return controls
}

const GameControls: FC<GameControlsProps> = ({ title, controls, children }) => {
    return (
        <section className={style.controlsContainer}>
            <h1 className={style.head}>{title}</h1>
            <section className={style.center}>
                {children}
            </section>
            <section className={style.controls}>
                {controls && buildControls(controls)}
            </section>
        </section>
    )
}

export default GameControls