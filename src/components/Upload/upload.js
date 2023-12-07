"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Upload = void 0;
var react_1 = require("react");
var uploadList_1 = require("./uploadList");
var axios_1 = require("axios");
var dragger_1 = require("./dragger");
/**
 * 上传文件组件
 * */
var Upload = function (props) {
    var action = props.action, defaultUploadedList = props.defaultUploadedList, beforeUpload = props.beforeUpload, onSuccess = props.onSuccess, onChange = props.onChange, onProgress = props.onProgress, onError = props.onError, onRemove = props.onRemove, headers = props.headers, name = props.name, data = props.data, withCredentials = props.withCredentials, accept = props.accept, multiple = props.multiple, drag = props.drag, children = props.children;
    var inputRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(defaultUploadedList || []), fileList = _a[0], setFileList = _a[1];
    var updateFileList = function (_file, updateObj) {
        setFileList(function (preList) {
            return preList.map(function (item) {
                if (item.uid === _file.uid) {
                    return __assign(__assign({}, _file), updateObj);
                }
                else {
                    return item;
                }
            });
        });
    };
    var handelClick = function () {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };
    var handelFileChange = function (e) {
        var files = e.target.files;
        if (!files)
            return;
        uploadFiles(files);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            var _file = {
                uid: Date.now() + "_upload-file",
                name: file.name,
                size: file.size,
                status: "ready",
                raw: file,
                percentage: 0
            };
            if (beforeUpload) {
                var result = beforeUpload(_file);
                if (result instanceof Promise) {
                    result.then(function (changedFile) {
                        post(changedFile);
                    });
                }
                else {
                    post(result);
                }
            }
            else {
                post(_file);
            }
        });
    };
    var post = function (_file) {
        setFileList(function (preList) {
            return __spreadArray([_file], preList, true);
        });
        var formData = new FormData();
        formData.append(name || "file", _file.raw);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios_1["default"]
            .post(action, formData, {
            data: formData,
            headers: __assign(__assign({}, headers), { "Content-Type": "multipart/form-data" }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = 0;
                percentage = Math.round((e.loaded / e.event.total) * 100);
                if (percentage < 100) {
                    updateFileList(_file, { status: "uploading", percentage: percentage });
                    if (onProgress) {
                        onProgress(percentage, _file);
                    }
                }
            }
        })
            .then(function (result) {
            updateFileList(_file, { status: "success", response: result.data });
            if (onSuccess) {
                onSuccess(result.data, _file);
            }
            if (onChange) {
                onChange(_file);
            }
        })["catch"](function (err) {
            updateFileList(_file, { status: "error", error: err });
            if (onError) {
                onError(err, _file);
            }
            if (onChange) {
                onChange(_file);
            }
        });
    };
    var handelRemove = function (file) {
        setFileList(function (preList) {
            return preList.filter(function (p) { return p.uid !== file.uid; });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    return (<div className="wind-upload-component">
      <div onClick={handelClick}>
        {drag ? (<dragger_1["default"] onFile={function (fileList) { return uploadFiles(fileList); }}>
            {children}
          </dragger_1["default"]>) : (children)}
      </div>
      <input type="file" ref={inputRef} style={{ display: "none" }} onChange={handelFileChange} accept={accept} multiple={multiple}/>
      <uploadList_1["default"] fileList={fileList} onRemove={handelRemove}/>
    </div>);
};
exports.Upload = Upload;
exports.Upload.defaultProps = {
    name: "file",
    multiple: false
};
exports["default"] = exports.Upload;
