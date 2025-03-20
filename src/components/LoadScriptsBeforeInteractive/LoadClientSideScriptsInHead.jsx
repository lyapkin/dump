"use client";

import { useEffect } from "react";

const LoadClientSideScriptsInHead = ({ scripts }) => {
  useEffect(() => {
    for (let s of scripts) {
      if (!window[s.id]) {
        const script = document.createElement("script");
        script.src = s.src;
        script.id = s.id;
        document.head.prepend(script);
      }
    }
  }, []);
  return null;
};

export default LoadClientSideScriptsInHead;
