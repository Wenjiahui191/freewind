// Upload.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Upload from "./upload";
import Icon from "../Icon/icon";
import Button from "../Button/button";

const defaultFileList = [
  { uid: "1", name: "文件1", size: 2567, status:'uploading', percentage: 0 },
  { uid: "2", name: "文件2", size: 2567, status:'success', percentage: 0 },
  { uid: "3", name: "文件3", size: 2567, status:'error', percentage: 0 },
];

const meta: Meta<typeof Upload> = {
  component: Upload,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Upload>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultUpload: Story = {
  name: "点击上传",
  args: {
    action: "https://mock.apifox.com/m1/3423089-0-default/upload",
    accept:'.jpg',
    headers:{'X-PowerBy-www':'wind-free'},
    multiple:true,
    name:'fileName',
    children:<Button btnType="primary">上传文件</Button>
  },
};

export const DragFileUpload: Story = {
  name: "拖拽上传",
  args: {
    action: "https://mock.apifox.com/m1/3423089-0-default/upload",
    multiple:true,
    drag:true,
    children:<>
      <Icon icon={"upload"}/>
      <div>拖拽文件上传</div>
    </>
  },
};
