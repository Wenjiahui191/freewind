import { RefObject, useEffect } from "react";

function useClickOutSide(ref: RefObject<HTMLElement>, callback: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      callback(event);
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, callback]);
}

export default useClickOutSide;
