import { ChangeEvent, FC, InputHTMLAttributes, ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import Icon from "../Icon/icon";

export type InputSizeType = "lg" | "sm";

export interface InputPropsTypes
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /** 尺寸 */
  size?: InputSizeType;
  /** 禁用状态 */
  disabled?: boolean;
  /** 图标 */
  icon?: IconProp;
  /** 前置内容 */
  preposition?: string | ReactElement;
  /** 后置内容 */
  postposition?: string | ReactElement;
  /** onChange */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputPropsTypes> = (props) => {
  const {
    size,
    disabled,
    placeholder,
    icon,
    className,
    preposition,
    postposition,
    onChange,
    ...restProps
  } = props;

  const classes = classNames("wind-group-input", className, {
    "is-disabled": disabled,
    [`input-${size}`]: size,
    "input-group-pre": !!preposition,
    "input-group-end": !!postposition,
  });

  if("value" in props){
    if(!props.value){
      restProps.value=""
    }
    delete restProps.defaultValue
  }

  return (
    <div className={classes}>
      {preposition && <span className="input-preposition">{preposition}</span>}
      <div className="input-wrapper">
        {icon ? <Icon className="input-icon" icon={icon} /> : ""}
        <input
          type="text"
          disabled={disabled}
          className="input-inner"
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
      </div>
      {postposition && (
        <span className="input-postposition">{postposition}</span>
      )}
    </div>
  );
};

export default Input;
