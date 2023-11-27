import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

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
export const Button: React.FC<ButtonPropsType> = (props) => {
  const { btnType, size, href, disabled, className, children, ...restProps } =
    props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });

  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  btnType: "default",
  disabled: false,
};

export default Button;
