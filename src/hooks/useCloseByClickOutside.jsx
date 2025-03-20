import { useEffect, useRef } from "react";

const useCloseByClickOutside = (close) => {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current.contains(e.target)) {
        close(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return ref;
};

export default useCloseByClickOutside;
