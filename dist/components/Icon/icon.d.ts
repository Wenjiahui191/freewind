import React from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
export type ThemeProps = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";
export interface IconProps extends FontAwesomeIconProps {
    them?: ThemeProps;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
