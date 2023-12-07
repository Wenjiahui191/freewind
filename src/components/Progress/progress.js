"use strict";
exports.__esModule = true;
var Progress = function (props) {
    var percent = props.percent, vesselHeight = props.vesselHeight, showText = props.showText, styles = props.styles, them = props.them;
    return (<div className="wind-progress-wrapper" style={styles}>
      <div className="progress-bg" style={{ height: vesselHeight }}>
        <div className={"progress-bar progress-bar-".concat(them)} style={{ width: "".concat(percent, "%") }}>
          {showText && "".concat(percent, "%")}
        </div>
      </div>
    </div>);
};
Progress.defaultProps = {
    percent: 0,
    vesselHeight: 15,
    showText: true,
    them: "primary"
};
exports["default"] = Progress;
