import { useEffect, useRef } from "react";

function useClickOutside<T extends HTMLDivElement>(callback: () => void) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const floatingUIPortalNode = document.querySelector(
        "[data-floating-ui-portal]",
      );

      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!floatingUIPortalNode ||
          !floatingUIPortalNode.contains(event.target as Node))
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [callback]);

  return ref;
}

export default useClickOutside;
