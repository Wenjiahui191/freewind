import React,{ DragEvent, FC, ReactNode, useState } from "react";
import classNames from "classnames";

export interface DraggerProps {
  children: ReactNode;
  onFile: (files: FileList) => void;
}

const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [drag, setDrag] = useState(false);

  const classes = classNames("wind-upload-dragger", {
    "is-dragover": drag,
  });

  const handelDragOver = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDrag(over);
  };

  const handelOnDrag = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDrag(false);
    const files = e.dataTransfer.files;
    onFile(files);
  };

  return (
    <div
      draggable={true}
      onDragOver={(e) => handelDragOver(e, true)}
      onDragLeave={(e) => handelDragOver(e, false)}
      onDrop={handelOnDrag}
      className={classes}
    >
      {children}
    </div>
  );
};

export default Dragger;
