import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

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
export const Alert: React.FC<AlertProps> = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const {
    message,
    type,
    showIcon,
    className,
    description,
    onClose,
    ...restProps
  } = props;
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
    big: description,
  });

  function handleClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    typeof onClose === "function" && onClose(e);
    setIsOpen(false);
  }

  return (
    <Transition timeout={300} in={isOpen} animation={"zoom-in-top"}>
      <div
        className={classes}
        // style={{ display: isOpen ? undefined : "none" }}
        {...restProps}
      >
        <div className="alert-content">
          <div className="alert-msg">{message}</div>
          {description && <div className="alert-desc">{description}</div>}
        </div>
        {showIcon && (
          <div className="alert-close-btn" onClick={handleClose}>
            <Icon icon={"times"} />
          </div>
        )}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  message: "标题",
  type:'default',
  showIcon: true,
};

export default Alert;
