import React from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface IconProps extends FontAwesomeIconProps {
  them?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
  const { them, className, ...restProps } = props;
  const classes = classNames("wind-icon", className, {
    [`icon-${them}`]: them,
  });

  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
