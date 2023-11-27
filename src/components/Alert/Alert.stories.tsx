// Alert.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./alert";

const meta = {
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: "clicked",description:'点击关闭的回调' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const defaultAlert: Story = {
    name:'默认',
    args:{
        message:'标题',
        showIcon:true
    }
};

export const AlertWhitDesc:Story={
    name:'有描述信息',
    args:{
        message:'标题',
        description:'这是一段描述文字嘻嘻嘻嘻嘻嘻嘻'
    }
}

export const AlertWhitDiffType:Story={
    name:'不同状态',
    args:{
        type:'success',
        message:'标题',
        description:'这是一段描述文字嘻嘻嘻嘻嘻嘻嘻'
    }
}
