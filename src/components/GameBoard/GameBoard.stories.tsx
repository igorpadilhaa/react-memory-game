import type { Meta, StoryObj } from "@storybook/react";
import GameBoard from "./GameBoard";

import images from '../../api/images'

const meta: Meta<typeof GameBoard> = {
    component: GameBoard
}

export default meta;

type Story = StoryObj<typeof GameBoard>

function tiles(count: number, flipped = false) {
    return Array(count).fill({
        image: images.coffee,
        flipped
    })
}

export const Normal: Story = {
    args: {
        tiles: tiles(6)
    }
}

export const Flipped: Story = {
    args: {
        tiles: tiles(12, true)
    }
}

export const OnMove: Story = {
    args: {
        tiles: tiles(24, false),
        onMove: (cardId) => alert(`Card ${cardId} was clicked!`)
    }
}