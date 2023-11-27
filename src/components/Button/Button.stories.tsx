// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" ,description:'回调函数',control:'function'},
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: "默认按钮",
  args: {
    btnType: "primary",
    children: "primary button",
  },
};

export const Danger: Story = {
  name: "不同类型的按钮",
  args: {
    btnType: "danger",
    children: "danger button",
  },
};

export const Lg: Story = {
  name: "不同大小的按钮",
  args: {
    btnType: "primary",
    children: "different size button",
    size: "lg",
  },
};
