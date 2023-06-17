import { FormEventHandler, forwardRef } from "react";

import style from './GameConfigForm.module.css'

import playImage from '../../assets/play.png'
import { GameConfigFormProps, GameConfig } from "./types";
import { BoardSize } from "../../api/game";

function SizeOption(props: { name: string, size: number, currentSize?: number }) {
    return <option value={props.size}>{props.name}</option>
}

const GameConfigForm = forwardRef<HTMLDialogElement, GameConfigFormProps>((props, ref) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        const data = new FormData(event.currentTarget)
        const newConfig = Object.fromEntries(data.entries()) as GameConfig

        props.onSubmit && props.onSubmit(newConfig)
    }

    return (
        <dialog ref={ref} className={style.configDialog} open={props.open}>
            <form className={style.configForm} method="dialog" onSubmit={handleSubmit}>
                <h1 className={style.title}>Game Settings</h1>
                <label htmlFor="size-select">
                    Board size:
                    <select id="size-select" name="boardSize" defaultValue={props.boardSize}>
                        <SizeOption name="Small" size={BoardSize.LITTLE} />
                        <SizeOption name="Medium" size={BoardSize.MEDIUM} />
                        <SizeOption name="Large" size={BoardSize.LARGE} />
                    </select>
                </label>
                <button><img src={playImage} alt="Play button image" /></button>
            </form>
        </dialog>
    )
})

export default GameConfigForm