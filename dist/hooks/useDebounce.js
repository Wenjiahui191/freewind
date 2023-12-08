import { useEffect, useState } from "react";
/**
 * 值防抖
 * @param value 变化的值
 * @param delay 延迟的值
 * @returns 防抖输入的值
 */
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(""), debounceValue = _a[0], setDebounceValue = _a[1];
    useEffect(function () {
        var handler = window.setTimeout(function () {
            setDebounceValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [delay, value]);
    return debounceValue;
}
export default useDebounce;
