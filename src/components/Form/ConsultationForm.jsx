import React from "react";
import BaseForm from "./BaseForm";
import initTranslations from "@/locales/i18n";
import s from "./form.module.css";

const ConsultationForm = async ({ locale, section = false }) => {
  const { t } = await initTranslations(locale, ["form"]);
  return (
    <div
      className={`${s["consultation-form"]} ${section && s["form-section"]}`}
    >
      <p
        className={s["consultation-form__title"]}
        dangerouslySetInnerHTML={{
          __html: t("form:title", {
            interpolation: { escapeValue: false },
          }),
        }}
      ></p>
      <p className={s["consultation-form__text"]}>{t("form:text")}</p>
      <BaseForm
        formType={"consultation"}
        buttonText={t("form:consult_button")}
      />
    </div>
  );
};

export default ConsultationForm;
