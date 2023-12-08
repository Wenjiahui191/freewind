import { ChangeEvent, FC, InputHTMLAttributes, ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export type InputSizeType = "lg" | "sm";
export interface InputPropsTypes extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    /** 尺寸 */
    size?: InputSizeType;
    /** 禁用状态 */
    disabled?: boolean;
    /** 图标 */
    icon?: IconProp;
    /** 前置内容 */
    preposition?: string | ReactElement;
    /** 后置内容 */
    postposition?: string | ReactElement;
    /** onChange */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: FC<InputPropsTypes>;
export default Input;
