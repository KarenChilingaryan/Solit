import { useCallback, useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  const handleClick = useCallback(async (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
};
