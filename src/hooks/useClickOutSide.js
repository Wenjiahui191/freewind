"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useClickOutSide(ref, callback) {
    (0, react_1.useEffect)(function () {
        var listener = function (event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };
        document.addEventListener("click", listener);
        return function () {
            document.removeEventListener("click", listener);
        };
    }, [ref, callback]);
}
exports["default"] = useClickOutSide;
