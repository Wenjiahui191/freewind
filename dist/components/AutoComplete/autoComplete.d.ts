import { FC, ReactElement } from "react";
import { InputPropsTypes } from "../Input/input";
interface SuggestItemProps {
    value: string;
}
export type SuggestItemType<T = {}> = T & SuggestItemProps;
export interface AutoCompleteProps extends Omit<InputPropsTypes, "onSelect"> {
    /** 搜索建议项 */
    fetchSuggest: (str: string) => SuggestItemType[] | Promise<SuggestItemType[]>;
    /** 选择建议项时的回调 */
    onSelect: (item: SuggestItemType) => void;
    /** 自定义渲染列表的方法 */
    renderOption?: (item: SuggestItemType) => ReactElement;
}
/**
 * 自动完成组件
 */
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
