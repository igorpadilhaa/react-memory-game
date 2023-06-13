import type { Meta, StoryObj } from "@storybook/react";
import GameBoard from "./GameBoard";

import { CardTileProps } from "../CardTile/types";
import coffeeImage from '../../assets/coffee.png'

const meta: Meta<typeof GameBoard> = {
    component: GameBoard
}

export default meta;

type Story = StoryObj<typeof GameBoard>

export const Normal: Story = {
    args: {
        size: "large",
        tiles: Array<CardTileProps>(24).fill({ 
            cardImage: coffeeImage, 
            show: true,
            onClick: () => alert('Tile clicked')
        })
    }
}

export const Flipped: Story = {
    args: {
        ...Normal.args,
        tiles: Normal.args?.tiles?.map(tile => Object.assign(tile, { show: true }))
    }
}