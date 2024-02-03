import type { Meta, StoryObj } from '@storybook/react';

import WhoWeAre from "../app/about/_components/WhoWeAre"

const meta = {
    title: 'sections/Who_We_Are',
    component: WhoWeAre,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        content: {
            title: "About Us",
            subtitle: "Who we are?",
            detail: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
            slogan: "Successfully Providing business solutions from 25 years",
            image: { url: "/herobg.jpg" },
            buttonDestination: "/book",
            buttonText: "book now"
        }
    },
} satisfies Meta<typeof WhoWeAre>;

export default meta;
type Story = StoryObj<typeof meta>;


export const yellow: Story = {
    args: {
        content: {
            title: "About Us",
            subtitle: "Who we are?",
            detail: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
            slogan: "Successfully Providing business solutions from 25 years",
            image: { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-151796,resizemode-75,msid-99462440/industry/services/hotels-/-restaurants/restaurant-bills-what-is-the-game-of-the-name/do-the-restaurants-benefit-from-it.jpg" },
            buttonDestination: "/book",
            buttonText: "book now"
        },
        color: "yellow"
    },

};

export const Red: Story = {
    args: {
        content: {
            title: "About Us",
            subtitle: "Who we are?",
            detail: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.",
            slogan: "Successfully Providing business solutions from 25 years",
            image: { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-151796,resizemode-75,msid-99462440/industry/services/hotels-/-restaurants/restaurant-bills-what-is-the-game-of-the-name/do-the-restaurants-benefit-from-it.jpg" },
            buttonDestination: "/book",
            buttonText: "book now"
        },
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
