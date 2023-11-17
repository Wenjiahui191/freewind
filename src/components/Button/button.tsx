import React from "react";
import classNames from "classnames";

export type ButtonSize= "lg" | "sm"

export type ButtonType = "primary" | "default"| "danger"| "link"

interface ButtonBaseProps {
    className?: string;
    disabled?: boolean;
    btnType?: ButtonType;
    size?: ButtonSize;
    href?: string;
    children: React.ReactNode;
}

type NativeButtonProps = ButtonBaseProps &
    React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = ButtonBaseProps &
    React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonPropsType = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonPropsType> = (props) => {
    const { btnType, size, href, disabled, className, children, ...restProps } =
        props;

    const classes = classNames("btn", className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === 'link' && disabled,
    });

    if (btnType === 'link' && href) {
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
    btnType: 'default',
    disabled: false,
};

export default Button;
