import React from "react";
type AlertType = "success" | "default" | "danger" | "warning";
interface BaseAlertProps {
    /** 标题文字 */
    message?: React.ReactNode;
    /** 消息类型 */
    type?: AlertType;
    className?: string;
    /** 是否展示关闭按钮 */
    showIcon?: boolean;
    /** 描述文字 */
    description?: React.ReactNode;
    onClose?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}
export type AlertProps = BaseAlertProps & React.HTMLAttributes<HTMLDivElement>;
/**
 * 弹窗组件，支持自定义类型
 */
export declare const Alert: React.FC<AlertProps>;
export default Alert;
