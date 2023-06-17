import { Meta, StoryObj } from "@storybook/react";
import GameControls from "./GameControls";

import GameBoard from "../GameBoard";
import { newGame } from "../../api/game";

import restart from '../../assets/restart.png'

const meta: Meta<typeof GameControls> = {
    component: GameControls
}

export default meta

const game = newGame(24)
type Story = StoryObj<typeof GameControls>

export const Basic: Story = {
    args: {
        title: 'Game controls title',
        children: <GameBoard tiles={game.board} />
    }
}

export const Controls: Story = {
    args: {
        ...Basic.args,
        controls: [
            {
                text: 'Control',
                action: () => alert('A control was used')
            }
        ]
    }
}

export const Image: Story = {
    args: {
        ...Basic.args,
        controls: [
            {
                text: 'Restart image',
                image: restart
            }
        ]
    }
}