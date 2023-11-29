import { ChangeEvent, FC, useState } from "react";
import Input, { InputPropsTypes } from "../Input/input";

export interface AutoCompleteProps extends Omit<InputPropsTypes, "onSelect"> {
  fetchSuggest: (str: string) => string[];
  onSelect: (keyword: string) => void;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggest, onSelect, value, ...resetProps } = props;

  const [inputVal, setInputVal] = useState(value);
  const [suggestList, setSuggestList] = useState<Array<string>>([]);

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setInputVal(val);

    if (val) {
      const result = fetchSuggest(val);
      setSuggestList(result);
    } else {
      setSuggestList([]);
    }
  };

  return (
    <div className="wind-auto-complete">
      <Input value={inputVal} onChange={handelChange} />
      {suggestList.length > 0 && (
        <ul>
          {suggestList.map((suggest, index) => {
            return <li key={index}>{suggest}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
