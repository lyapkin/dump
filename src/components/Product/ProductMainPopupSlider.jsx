import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "../popup/Popup";
import s from "./product.module.css";

const ProductMainPopupSlider = ({ slider, popupSlider, buttons }) => {
  const [isPictureShown, setIsPictureShown] = useState(false);

  return (
    <AnimatePresence>
      {isPictureShown && (
        <Popup
          close={() => setIsPictureShown(false)}
          key={"popup-product-picture"}
        >
          <motion.div
            className={`${s["popup-picture"]} ${s["main-slider"]}`}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.75 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.1 }}
          >
            {popupSlider}
            {buttons}
          </motion.div>
        </Popup>
      )}
      <div className={`${s["popup-replacement"]} ${s["main-slider"]}`}>
        <div
          className={s["main-slider"]}
          onClick={() => setIsPictureShown(true)}
        >
          {slider}
        </div>
        {buttons}
      </div>
    </AnimatePresence>
  );
};

export default ProductMainPopupSlider;
