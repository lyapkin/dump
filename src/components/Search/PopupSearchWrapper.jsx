import { useEffect, useRef } from "react";
import s from "./search.module.css";
import { motion } from "framer-motion";

const PopupSearchWrapper = ({ children, close }) => {
  const ref = useRef(null);

  useEffect(() => {
    const input = ref.current.querySelector("input");
    input.focus();

    const form = ref.current.querySelector("form");
    form.addEventListener("search", close);

    return () => {
      form.removeEventListener("search", close);
    };
  }, []);

  return (
    <motion.div
      className={s["popup-search"]}
      ref={ref}
      initial="hidden"
      animate="visible"
      exit={"hidden"}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default PopupSearchWrapper;
