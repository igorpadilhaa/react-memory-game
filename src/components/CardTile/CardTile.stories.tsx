import type { Meta, StoryObj } from "@storybook/react";
import CardTile from "./CardTile";

import coffeeImage from '../../assets/coffee.png'

const meta: Meta<typeof CardTile> = {
    component: CardTile,
    decorators: [
        (Story) => {
            return (
                <div style={{
                    width: '120px',
                    height: '120px'
                }}>
                    <Story />
                </div>
            )
        }
    ],
    argTypes: {
        cardImage: {
            type: 'string'
        },
        backgroundColor: {
            type: 'string'
        },
        borderColor: {
            type: 'string'
        }
    }
}

export default meta;

type Story = StoryObj<typeof CardTile>

export const Primary: Story = {
    args: {
        cardImage: coffeeImage
    }
}