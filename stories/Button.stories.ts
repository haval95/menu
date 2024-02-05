import type { Meta, StoryObj } from '@storybook/react';

import Button from "../components/buttons/Button"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Buttons/submit_button',
    component: Button,
    parameters: {

    },

    tags: ['autodocs'],

    argTypes: {


    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const yellow: Story = {
    args: {
        color: "yellow",
        label: "send",
        onSumbit: {}
    },

};
export const red: Story = {
    args: {
        color: "red",
        label: "send",
        onSumbit: {},
        textColor: "white"
    },

};

