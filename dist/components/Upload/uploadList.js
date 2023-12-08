import React from "react";
import Icon from "../Icon/icon";
import Progress from "../Progress/progress";
var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    var handelRemove = function (e, file) {
        e.preventDefault();
        onRemove(file);
    };
    return (React.createElement("div", { className: "wind-upload-list-wrapper" }, fileList.map(function (file) {
        var uid = file.uid, name = file.name, status = file.status, percentage = file.percentage;
        return (React.createElement("div", { className: "upload-item", key: uid },
            React.createElement("div", { className: "upload-list-item" },
                React.createElement("span", { className: "file-name file-item-".concat(status) },
                    React.createElement(Icon, { icon: "file", them: "primary", className: "file-icon" }),
                    name),
                React.createElement("span", { className: "file-status" },
                    status === "uploading" && React.createElement(Icon, { icon: "spinner", spin: true }),
                    status === "success" && (React.createElement(Icon, { icon: "check-circle", them: "success" })),
                    status === "error" && (React.createElement(Icon, { icon: "exclamation-circle", them: "danger" }))),
                React.createElement("span", { className: "file-remove", onClick: function (e) { return handelRemove(e, file); } },
                    React.createElement(Icon, { icon: "times" }))),
            status === "uploading" && React.createElement(Progress, { percent: percentage })));
    })));
};
export default UploadList;
