import { useState } from "react";
import s from "./thanks.module.css";
import Popup from "@/components/popup/Popup";
import { AnimatePresence, motion } from "framer-motion";

const PopupLetter = ({ letter }) => {
  const [isLetterShown, setIsLetterShown] = useState(false);
  return (
    <AnimatePresence>
      {isLetterShown && (
        <Popup close={() => setIsLetterShown(false)} key={"popup-letter"}>
          <motion.div
            className={s["popup-letter"]}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.75 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.1 }}
          >
            {letter}
          </motion.div>
        </Popup>
      )}
      <div
        className={s["popup-replacement"]}
        onClick={() => setIsLetterShown(true)}
      >
        {letter}
      </div>
    </AnimatePresence>
  );
};

export default PopupLetter;
