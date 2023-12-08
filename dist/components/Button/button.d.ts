import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";
interface ButtonBaseProps {
    /** 自定义一类名 */
    className?: string;
    /**禁用状态 */
    disabled?: boolean;
    /** 按钮类型*/
    btnType?: ButtonType;
    /** 按钮大小*/
    size?: ButtonSize;
    /** link跳转地址*/
    href?: string;
    /** 按钮内容*/
    children: React.ReactNode;
}
type NativeButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonPropsType = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 默认按钮组件
 */
export declare const Button: React.FC<ButtonPropsType>;
export default Button;
