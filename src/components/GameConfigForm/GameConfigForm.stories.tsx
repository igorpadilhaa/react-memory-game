import { Meta, StoryObj } from "@storybook/react";
import { GameConfigForm } from ".";

const meta: Meta<typeof GameConfigForm> = {
    component: GameConfigForm
}

export default meta;

type Story = StoryObj<typeof GameConfigForm>

export const Normal: Story = {
    args: {
        onSubmit: (config) => alert('New configuration:\n' + JSON.stringify(config, null, '\n\t')),
        open: true
    }
}