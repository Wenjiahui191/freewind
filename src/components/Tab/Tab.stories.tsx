// Menu.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Tab from "./tab";
import TabItem from "./tabItem";
import Block from '../block/block'

const meta = {
  component: Tab,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <Block>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Block>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const DefaultTabs: Story = {
  name: "默认Tab",
  render: (args) => (
    <Tab {...args}>
      <TabItem label="item1">content1</TabItem>
      <TabItem label="item2">content2</TabItem>
    </Tab>
  ),
};

export const CardTabs: Story = {
    name: "卡片Tab",
    render: (args) => (
      <Tab {...args} type="card">
        <TabItem label="item1">content1</TabItem>
        <TabItem label="item2">content2</TabItem>
      </Tab>
    ),
  };
