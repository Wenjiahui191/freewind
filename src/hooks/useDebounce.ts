import { useEffect, useState } from "react";

/**
 * 值防抖
 * @param value 变化的值
 * @param delay 延迟的值
 * @returns 防抖输入的值
 */
function useDebounce(value: any, delay = 300) {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debounceValue;
}

export default useDebounce;
