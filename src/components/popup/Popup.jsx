"use client";
import React, { useEffect, useRef } from "react";

import styles from "./popup.module.css";
import PopupCloseButton from "./PopupCloseButton";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Popup = ({ children, close, isCloseButtonDisplayed = true }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current.children[0].contains(e.target)) {
        close();
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return createPortal(
    <motion.div
      className={styles["popup"]}
      ref={ref}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
        visible: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {isCloseButtonDisplayed && <PopupCloseButton close={close} />}
    </motion.div>,
    document.body
  );
};

export default Popup;
