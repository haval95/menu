import type { Meta, StoryObj } from '@storybook/react';

import CategoryCard from "../app/menu/_components/CategoryCard"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Cards/category',
    component: CategoryCard,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        category: {
            image: { url: "https://media.graphassets.com/uK3Vye7T46eqkwes5iMI" },
            slug: "put a slug here",
            name: "Category Name"
        },
    },
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Example_1: Story = {
    args: {
        category: {
            image: { url: "https://media.graphassets.com/uK3Vye7T46eqkwes5iMI" },
            slug: "/slug",
            name: "deserts",
        },
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
