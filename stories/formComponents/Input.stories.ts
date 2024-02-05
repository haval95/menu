import type { Meta, StoryObj } from '@storybook/react';

import Input from "../../components/inputs/Input"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Inputs/text-input',
    component: Input,
    parameters: {

    },

    tags: ['autodocs'],

    argTypes: {


    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const inline: Story = {
    args: {
        required: true,
        InputType: "text",
        label: "Full Name",
        showLabel: "inline",
        onInputChange: {},
        name: "name",

    },

};
export const stack: Story = {
    args: {
        required: true,
        InputType: "text",
        label: "Full Name",
        showLabel: "top",
        onInputChange: {},
        name: "name",
        textColor: "red-500",
        outlineColor: "yellow-500"
    },

};
export const noLable: Story = {
    args: {
        required: true,
        InputType: "text",
        showLabel: "none",
        label: "Full Name",
        onInputChange: {},
        name: "name"
    },

};

