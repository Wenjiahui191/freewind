import React,{ CSSProperties, FC } from "react";
import { ThemeProps } from "../Icon/icon";

export interface ProgressProps {
  percent?: number;
  vesselHeight?: number;
  showText?: boolean;
  styles?: CSSProperties;
  them?: ThemeProps;
}

const Progress: FC<ProgressProps> = (props) => {
  const { percent, vesselHeight, showText, styles, them } = props;

  return (
    <div className="wind-progress-wrapper" style={styles}>
      <div className="progress-bg" style={{ height: vesselHeight }}>
        <div className={`progress-bar progress-bar-${them}`} style={{ width: `${percent}%` }}>
          {showText && `${percent}%`}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  percent: 0,
  vesselHeight: 15,
  showText: true,
  them: "primary",
};

export default Progress;
