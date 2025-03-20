"use client";
import { useState } from "react";
import Popup from "../popup/Popup";
import Button from "../UI/Buttons/Button";
import s from "./form.module.css";
import { AnimatePresence, motion } from "framer-motion";

const PopupForm = ({ text, children }) => {
  const [isFormShown, setIsFormShown] = useState(false);
  return (
    <AnimatePresence>
      {isFormShown && (
        <Popup close={() => setIsFormShown(false)} key={"popup-form"}>
          <motion.div
            className={s["popup-form"]}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.75 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.div>
        </Popup>
      )}
      <Button text={text} action={() => setIsFormShown(true)} />
    </AnimatePresence>
  );
};

export default PopupForm;
