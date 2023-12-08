import { CSSProperties, FC } from "react";
import { ThemeProps } from "../Icon/icon";
export interface ProgressProps {
    percent?: number;
    vesselHeight?: number;
    showText?: boolean;
    styles?: CSSProperties;
    them?: ThemeProps;
}
declare const Progress: FC<ProgressProps>;
export default Progress;
