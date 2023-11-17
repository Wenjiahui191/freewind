import React, { useState } from "react";
import classNames from "classnames";

type AlertType = "success" | "default" | "danger" | "warning";

interface BaseAlertProps {
  message?: React.ReactNode;
  type?: AlertType;
  className?: string;
  showIcon?: boolean;
  description?: React.ReactNode;
  onClose?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

export type AlertProps = BaseAlertProps & React.HTMLAttributes<HTMLDivElement>;

const Alert: React.FC<AlertProps> = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const {
    message,
    type,
    showIcon,
    className,
    description,
    onClose,
    ...restProps
  } = props;
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
    big: description,
  });

  function handleClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    typeof onClose === "function" && onClose(e);
    setIsOpen(false);
  }

  return (
    <div
      className={classes}
      style={{ display: isOpen ? undefined : "none" }}
      {...restProps}
    >
      <div className="alert-content">
        <div className="alert-msg">{message}</div>
        {description && <div className="alert-desc">{description}</div>}
      </div>
      {showIcon && (
        <div className="alert-close-btn" onClick={handleClose}>
          x
        </div>
      )}
    </div>
  );
};

Alert.defaultProps = {
  message: "this is a alert",
  type: "default",
  showIcon: true,
};

export default Alert;
