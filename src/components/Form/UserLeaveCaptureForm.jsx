"use client";
import { useEffect, useState } from "react";
import Popup from "../popup/Popup";
import BaseForm from "./BaseForm";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import s from "./form.module.css";
import scrollSpeed from "./utils/scrollSpeed";

const UserLeaveCaptureForm = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // desktop
    const showForm = () => {
      setIsFormShown(true);
    };
    const desktopTimeoutId = setTimeout(() => {
      document.addEventListener("mouseleave", showForm, { once: true });
    }, 30000);

    // mobile
    const mobileExitIntentOn = () => {
      clearTimeout(desktopTimeoutId);

      setTimeout(() => {
        setIsFormShown(true);
      }, 30000);
    };
    document.addEventListener("touchstart", mobileExitIntentOn, { once: true });

    return () => {
      clearTimeout(desktopTimeoutId);
      document.removeEventListener("mouseleave", showForm);
      document.removeEventListener("touchstart", mobileExitIntentOn);
    };
  }, []);

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
            <p
              className={s["capture-form__title"]}
              dangerouslySetInnerHTML={{
                __html: t("form:title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></p>
            <p className={s["capture-form__text"]}>{t("form:text")}</p>
            <BaseForm
              formType={"consultation"}
              buttonText={t("form:consult_button")}
              cleanUp={() => setIsFormShown(false)}
            />
          </motion.div>
        </Popup>
      )}
    </AnimatePresence>
  );
};

export default UserLeaveCaptureForm;
