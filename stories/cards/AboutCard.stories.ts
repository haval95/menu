import type { Meta, StoryObj } from '@storybook/react';
import { FaCarSide } from "react-icons/fa";
import AboutCard from "../../components/cards/AboutCard"

const meta = {
    title: 'Cards/About_card',
    component: AboutCard,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        color: { control: 'color' },


    },
} satisfies Meta<typeof AboutCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const yellow: Story = {
    args: {
        title: "Fast Delivery",
        detail: "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
        icon: undefined,
        image: { url: "https://media.graphassets.com/uK3Vye7T46eqkwes5iMI" },
        otherCssClasses: " text-white",
        color: "yellow"

    },

};

export const red: Story = {
    args: {
        title: "Fast Delivery",
        detail: "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
        icon: undefined,
        image: { url: "https://media.graphassets.com/uK3Vye7T46eqkwes5iMI" },
        otherCssClasses: " text-white",
        color: "red"
    },
};

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
