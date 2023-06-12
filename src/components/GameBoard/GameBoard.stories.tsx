import type { Meta, StoryObj } from "@storybook/react";
import GameBoard from "./GameBoard";

import { CardTileProps } from "../CardTile/types";
import coffeeImage from '../../assets/coffee.png'

const meta: Meta<typeof GameBoard> = {
    component: GameBoard
}

export default meta;

type Story = StoryObj<typeof GameBoard>

export const Small: Story = {
    args: {
        size: "small",
        tiles: Array<CardTileProps>(6).fill({ cardImage: coffeeImage })
    }
}

export const Medium: Story = {
    args: {
        size: "medium",
        tiles: Array<CardTileProps>(12).fill({ cardImage: coffeeImage })
    }
}

export const Large: Story = {
    args: {
        size: "large",
        tiles: Array<CardTileProps>(24).fill({ cardImage: coffeeImage })
    }
}