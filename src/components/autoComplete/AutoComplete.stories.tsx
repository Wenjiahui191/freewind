// AutoComplete.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import AutoComplete from "./autoComplete";

const meta: Meta<typeof AutoComplete> = {
  component: AutoComplete,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AutoComplete>;

const NAB_Star=["Curry","Irving","James","Jim","Harden","Kobe","Allen","Anthony"]

const handelSuggest=(value:string)=>{
    return NAB_Star.filter(s=>s.includes(value))
}

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultInput: Story = {
  name: "默认",
  args: {
    placeholder: "请输入...",
    fetchSuggest:handelSuggest
  },
};


