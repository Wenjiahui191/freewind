import React, { FC, MouseEvent } from "react";
import { UploadFile } from "./upload";
import Icon from "../Icon/icon";
import Progress from "../Progress/progress";

export interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;

  const handelRemove = (e: MouseEvent<HTMLElement>, file: UploadFile) => {
    e.preventDefault();
    onRemove(file);
  };

  return (
    <div className="wind-upload-list-wrapper">
      {fileList.map((file) => {
        const { uid, name, status, percentage } = file;
        return (
          <div className="upload-item" key={uid}>
            <div className="upload-list-item">
              <span className={`file-name file-item-${status}`}>
                <Icon icon={"file"} them="primary" className="file-icon" />
                {name}
              </span>
              <span className="file-status">
                {status === "uploading" && <Icon icon={"spinner"} spin />}
                {status === "success" && (
                  <Icon icon={"check-circle"} them="success" />
                )}
                {status === "error" && (
                  <Icon icon={"exclamation-circle"} them="danger" />
                )}
              </span>
              <span
                className="file-remove"
                onClick={(e) => handelRemove(e, file)}
              >
                <Icon icon={"times"} />
              </span>
            </div>
            {status === "uploading" && <Progress percent={percentage} />}
          </div>
        );
      })}
    </div>
  );
};

export default UploadList;
