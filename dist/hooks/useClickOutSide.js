import { useEffect } from "react";
function useClickOutSide(ref, callback) {
    useEffect(function () {
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
export default useClickOutSide;
