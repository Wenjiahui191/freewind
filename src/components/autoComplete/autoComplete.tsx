import React,{
  ChangeEvent,
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from "react";
import Input, { InputPropsTypes } from "../Input/input";
import useDebounce from "../../hooks/useDebounce";
import Icon from "../Icon/icon";
import useClickOutSide from "../../hooks/useClickOutSide";
import classNames from "classnames";
import Transition from "../Transition/transition";

interface SuggestItemProps {
  value: string;
}

export type SuggestItemType<T = {}> = T & SuggestItemProps;

export interface AutoCompleteProps extends Omit<InputPropsTypes, "onSelect"> {
  /** 搜索建议项 */
  fetchSuggest: (str: string) => SuggestItemType[] | Promise<SuggestItemType[]>;
  /** 选择建议项时的回调 */
  onSelect: (item: SuggestItemType) => void;
  /** 自定义渲染列表的方法 */
  renderOption?: (item: SuggestItemType) => ReactElement;
}

/**
 * 自动完成组件
 */
export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggest, onSelect, renderOption, value, ...resetProps } = props;

  const [inputVal, setInputVal] = useState(value);
  const [suggestList, setSuggestList] = useState<Array<SuggestItemType>>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showDropDown, setShowDropDown] = useState(false);
  const suggestRef = useRef(false);
  const suggestComponent = useRef<HTMLDivElement>(null);
  const debounceValue = useDebounce(inputVal, 500);

  useClickOutSide(suggestComponent, () => setSuggestList([]));

  useEffect(() => {
    if (debounceValue && suggestRef.current) {
      const result = fetchSuggest(debounceValue);
      if (result instanceof Promise) {
        setLoading(true);
        result.then((res) => {
          setLoading(false);
          setSuggestList(res);
        });
      } else {
        setSuggestList(result);
      }
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
      setSuggestList([]);
    }
  }, [debounceValue]);

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    suggestRef.current = true;
    const val = e.target.value.trim();
    setInputVal(val);
  };

  const handelSelect = (suggest: SuggestItemType) => {
    suggestRef.current = false;
    onSelect(suggest);
    setInputVal(suggest.value);
    setSuggestList([]);
  };

  const handelHighlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestList.length) {
      index = suggestList.length - 1;
    }
    setSelectedIndex(index);
  };

  const handelKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const keyCode = e.keyCode;
    switch (keyCode) {
      case 13:
        if (suggestList[selectedIndex]) {
          handelSelect(suggestList[selectedIndex]);
        }
        break;
      case 27:
        setSelectedIndex(-1);
        setSuggestList([]);
        break;
      case 38:
        handelHighlight(selectedIndex - 1);
        break;
      case 40:
        handelHighlight(selectedIndex + 1);
        break;
      default:
        break;
    }
  };

  const renderSuggest = (item: SuggestItemProps) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const renderSuggestList = () => {
    return (
      <Transition in={showDropDown || loading} timeout={300} animation="zoom-in-top">
        <div>
          {loading ? (
             <ul className="suggest-dropdown"><Icon icon={"spinner"} spin /></ul>
          ) : (
            suggestList.length > 0 && (
              <ul className="suggest-dropdown">
                {suggestList.map((suggest, index) => {
                  const cnames = classNames("suggest-item", {
                    "is-active": index === selectedIndex,
                  });
                  return (
                    <li
                      className={cnames}
                      key={index}
                      onClick={() => handelSelect(suggest)}
                    >
                      {renderSuggest(suggest)}
                    </li>
                  );
                })}
              </ul>
            )
          )}
        </div>
      </Transition>
    );
  };

  return (
    <div className="wind-auto-complete" ref={suggestComponent}>
      <Input
        value={inputVal}
        {...resetProps}
        onChange={handelChange}
        onKeyDown={handelKeyDown}
      />
      {renderSuggestList()}
    </div>
  );
};

export default AutoComplete;
