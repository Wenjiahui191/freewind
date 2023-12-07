"use strict";
exports.__esModule = true;
var react_1 = require("react");
var icon_1 = require("../Icon/icon");
var progress_1 = require("../Progress/progress");
var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    var handelRemove = function (e, file) {
        e.preventDefault();
        onRemove(file);
    };
    return (<div className="wind-upload-list-wrapper">
      {fileList.map(function (file) {
            var uid = file.uid, name = file.name, status = file.status, percentage = file.percentage;
            return (<div className="upload-item" key={uid}>
            <div className="upload-list-item">
              <span className={"file-name file-item-".concat(status)}>
                <icon_1["default"] icon={"file"} them="primary" className="file-icon"/>
                {name}
              </span>
              <span className="file-status">
                {status === "uploading" && <icon_1["default"] icon={"spinner"} spin/>}
                {status === "success" && (<icon_1["default"] icon={"check-circle"} them="success"/>)}
                {status === "error" && (<icon_1["default"] icon={"exclamation-circle"} them="danger"/>)}
              </span>
              <span className="file-remove" onClick={function (e) { return handelRemove(e, file); }}>
                <icon_1["default"] icon={"times"}/>
              </span>
            </div>
            {status === "uploading" && <progress_1["default"] percent={percentage}/>}
          </div>);
        })}
    </div>);
};
exports["default"] = UploadList;
