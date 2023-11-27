// Menu.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
import Block from "../block/block";

const meta = {
  component: Menu,
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
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>;

export const HorizontalMenuNoSub: Story = {
  name: "横向menu不带子列表",
  render: (args) => (
    <Menu {...args}>
      <MenuItem>item1</MenuItem>
      <MenuItem>item2</MenuItem>
      <MenuItem>item3</MenuItem>
    </Menu>
  ),
};

export const HorizontalMenuHasSub: Story = {
  name: "横向menu带子列表",
  render: (args) => (
    <Menu {...args}>
      <MenuItem>item1</MenuItem>
      <MenuItem>item2</MenuItem>
      <SubMenu title="item3">
        <MenuItem>sub item1</MenuItem>
        <MenuItem>sub item2</MenuItem>
        <MenuItem>sub item3</MenuItem>
      </SubMenu>
    </Menu>
  ),
};

export const VerticalMenuNoSub: Story = {
  name: "横向menu不带子列表",
  render: (args) => (
    <Menu {...args} mode="vertical">
      <MenuItem>item1</MenuItem>
      <MenuItem>item2</MenuItem>
      <MenuItem>item3</MenuItem>
    </Menu>
  ),
};

export const VerticalMenuHasSub: Story = {
  name: "横向menu带子列表",
  render: (args) => (
    <Menu {...args} mode="vertical">
      <MenuItem>item1</MenuItem>
      <MenuItem>item2</MenuItem>
      <SubMenu title="item3">
        <MenuItem>sub item1</MenuItem>
        <MenuItem>sub item2</MenuItem>
        <MenuItem>sub item3</MenuItem>
      </SubMenu>
    </Menu>
  ),
};
