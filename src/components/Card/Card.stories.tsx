import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

import images from '../../api/images'

const meta: Meta<typeof Card> = {
    component: Card,
    decorators: [
        (Story) => (
            <div style={{
                margin: '15px',
                height: '120px',
                width: '120px'
            }}>
                <Story />
            </div>
        )
    ]
}

export default meta;
type Story = StoryObj<typeof Card>

export const Primary: Story = {
    args: {
        image: images.coffee
    }
}