// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultInput: Story = {
  name: "默认输入框",
  args: {
    placeholder: "请输入...",
  },
};

export const InputWithIcon: Story = {
  name: "输入框带图标",
  args: {
    icon: "search",
    placeholder: "请输入...",
  },
};

export const DisabledInput: Story = {
  name: "禁用输入框",
  args: {
    disabled: true,
    placeholder: "请输入...",
  },
};

export const InputWithPreAndEnd: Story = {
  name: "前置与后置内容",
  args: {
    preposition: "https://",
    placeholder: "请输入...",
    postposition: ".com",
  },
};
