import React from "react";
var Progress = function (props) {
    var percent = props.percent, vesselHeight = props.vesselHeight, showText = props.showText, styles = props.styles, them = props.them;
    return (React.createElement("div", { className: "wind-progress-wrapper", style: styles },
        React.createElement("div", { className: "progress-bg", style: { height: vesselHeight } },
            React.createElement("div", { className: "progress-bar progress-bar-".concat(them), style: { width: "".concat(percent, "%") } }, showText && "".concat(percent, "%")))));
};
Progress.defaultProps = {
    percent: 0,
    vesselHeight: 15,
    showText: true,
    them: "primary",
};
export default Progress;
