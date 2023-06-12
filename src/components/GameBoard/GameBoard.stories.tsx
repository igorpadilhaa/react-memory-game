import type { Meta, StoryObj } from "@storybook/react";
import GameBoard from "./GameBoard";

const meta: Meta<typeof GameBoard> = {
    component: GameBoard
}

export default meta;

type Story = StoryObj<typeof GameBoard>

export const Small: Story = {
    args: {
        size: "small"
    }
}

export const Medium: Story = {
    args: {
        size: "medium"
    }
}

export const Large: Story = {
    args: {
        size: "large"
    }
}