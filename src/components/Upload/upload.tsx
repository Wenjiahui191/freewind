import  React,{ ChangeEvent, FC,  ReactNode, useRef, useState } from "react";
import UploadList from "./uploadList";
import axios from "axios";
import Dragger from "./dragger";

export type UploadFileStatus = "ready" | "uploading" | "success" | "error";

export interface UploadFile {
  uid: string;
  name: string;
  size: number;
  percentage: number;
  status: UploadFileStatus;
  raw: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  /** 上传地址 */
  action: string;
  /** 已上传的文件列表 */
  defaultUploadedList?: UploadFile[];
  /** 文件上传前置操作 */
  beforeUpload?: (file: UploadFile) => UploadFile | Promise<UploadFile>;
  /** 文件上传成功回调 */
  onSuccess?: (data: any, file: UploadFile) => void;
  /** 文件上传进度 */
  onProgress?: (percent: number, file: UploadFile) => void;
  /** 文件变化回调 */
  onChange?: (file: UploadFile) => void;
  /** 文件上传失败回调 */
  onError?: (err: any, file: UploadFile) => void;
  /** 移除文件的回调 */
  onRemove?: (file: UploadFile) => void;
  /** 额外的请求头 */
  headers?: { [key: string]: any };
  /** 额外的formData */
  data?: { [key: string]: any };
  /** 允许携带cookie */
  withCredentials?: boolean;
  /** 自定义formData文件名 */
  name?: string;
  /** 限制文件上传类型 */
  accept?: string;
  /** 是否开启多选 */
  multiple?: boolean;
  /** 是否开启拖拽 */
  drag?: boolean;
  children?: ReactNode;
}

/**
 * 上传文件组件
 * */
export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultUploadedList,
    beforeUpload,
    onSuccess,
    onChange,
    onProgress,
    onError,
    onRemove,
    headers,
    name,
    data,
    withCredentials,
    accept,
    multiple,
    drag,
    children,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>(
    defaultUploadedList || []
  );

  const updateFileList = (
    _file: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((preList) => {
      return preList.map((item) => {
        if (item.uid === _file.uid) {
          return {
            ..._file,
            ...updateObj,
          };
        } else {
          return item;
        }
      });
    });
  };

  const handelClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handelFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    uploadFiles(files);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files);
    postFiles.forEach((file) => {
      let _file: UploadFile = {
        uid: Date.now() + "_upload-file",
        name: file.name,
        size: file.size,
        status: "ready",
        raw: file,
        percentage: 0,
      };
      if (beforeUpload) {
        const result = beforeUpload(_file);
        if (result instanceof Promise) {
          result.then((changedFile) => {
            post(changedFile);
          });
        } else {
          post(result);
        }
      } else {
        post(_file);
      }
    });
  };

  const post = (_file: UploadFile) => {
    setFileList((preList) => {
      return [_file, ...preList];
    });

    const formData = new FormData();
    formData.append(name || "file", _file.raw);
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        data: formData,
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
        withCredentials,
        onUploadProgress(e) {
          let percentage = 0;
          percentage = Math.round((e.loaded / e.event.total) * 100);
          if (percentage < 100) {
            updateFileList(_file, { status: "uploading", percentage });
            if (onProgress) {
              onProgress(percentage, _file);
            }
          }
        },
      })
      .then((result) => {
        updateFileList(_file, { status: "success", response: result.data });
        if (onSuccess) {
          onSuccess(result.data, _file);
        }
        if (onChange) {
          onChange(_file);
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: "error", error: err });
        if (onError) {
          onError(err, _file);
        }
        if (onChange) {
          onChange(_file);
        }
      });
  };

  const handelRemove = (file: UploadFile) => {
    setFileList((preList) => {
      return preList.filter((p) => p.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };

  return (
    <div className="wind-upload-component">
      <div onClick={handelClick}>
        {drag ? (
          <Dragger onFile={(fileList) => uploadFiles(fileList)}>
            {children}
          </Dragger>
        ) : (
          children
        )}
      </div>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handelFileChange}
        accept={accept}
        multiple={multiple}
      />
      <UploadList fileList={fileList} onRemove={handelRemove} />
    </div>
  );
};

Upload.defaultProps = {
  name: "file",
};

export default Upload;
