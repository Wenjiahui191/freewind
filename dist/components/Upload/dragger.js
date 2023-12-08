import React, { useState } from "react";
import classNames from "classnames";
var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = useState(false), drag = _a[0], setDrag = _a[1];
    var classes = classNames("wind-upload-dragger", {
        "is-dragover": drag,
    });
    var handelDragOver = function (e, over) {
        e.preventDefault();
        setDrag(over);
    };
    var handelOnDrag = function (e) {
        e.preventDefault();
        setDrag(false);
        var files = e.dataTransfer.files;
        onFile(files);
    };
    return (React.createElement("div", { draggable: true, onDragOver: function (e) { return handelDragOver(e, true); }, onDragLeave: function (e) { return handelDragOver(e, false); }, onDrop: handelOnDrag, className: classes }, children));
};
export default Dragger;
