import type { Meta, StoryObj } from '@storybook/react';

import HeroTop from "../components/HeroTop"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Heros/top_section',
    component: HeroTop,
    parameters: {

    },

    tags: ['autodocs'],

    argTypes: {
        description: "description",
        image: "https://media.graphassets.com/uK3Vye7T46eqkwes5iMI",
        position: "bottom",
        title: "title"

    },
} satisfies Meta<typeof HeroTop>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Example_1: Story = {
    args: {
        description: "description",
        image: "https://media.graphassets.com/uK3Vye7T46eqkwes5iMI",
        position: "bottom",
        title: "page name"
    },

};

// export const Secondary: Story = {
//   args: {
//     label: 'Card',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
