"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = (0, react_1.useState)(false), drag = _a[0], setDrag = _a[1];
    var classes = (0, classnames_1["default"])("wind-upload-dragger", {
        "is-dragover": drag
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
    return (<div draggable={true} onDragOver={function (e) { return handelDragOver(e, true); }} onDragLeave={function (e) { return handelDragOver(e, false); }} onDrop={handelOnDrag} className={classes}>
      {children}
    </div>);
};
exports["default"] = Dragger;
