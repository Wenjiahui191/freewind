import type { Meta, StoryObj } from "@storybook/react";

import AutoComplete,{SuggestItemType} from "./autoComplete";

const meta: Meta<typeof AutoComplete> = {
  component: AutoComplete,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AutoComplete>;

// const NAB_Star = [
//   "Curry",
//   "Irving",
//   "James",
//   "Jim",
//   "Harden",
//   "Kobe",
//   "Allen",
//   "Anthony",
// ];

const NAB_Star = [
  {name:"Curry",number:30},
  {name:"Irving",number:11},
  {name:"James",number:23},
  {name:"Jim",number:23},
  {name:"Harden",number:1},
  {name:"Kobe",number:24},
  {name:"Allen",number:33},
];

// const handelSuggest = (value:string) => {
//   return NAB_Star.filter((s) => s.name.includes(value)).map(i=>({value:i.name,...i}));
// };

const handelSuggest = (value:string) => {
  return fetch(`https://api.github.com/search/users?q=${value}`).then(res=>res.json()).then(({items=[]}) => { 
    return items.slice(0,10).map((i:any) => ({value:i.login,...i}))
   })
};


const handelRender=(item:SuggestItemType) => { 
  return <>
    <h5>{item.value}</h5>
  </>
 }

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultAutoComplete: Story = {
  name: "默认",
  args: {
    placeholder: "请输入...",
    fetchSuggest: handelSuggest,
    renderOption:handelRender,
  },
};
