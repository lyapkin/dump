import React from "react";
import BaseForm from "./BaseForm";
import initTranslations from "@/locales/i18n";

const OfferForm = async ({ locale }) => {
  const { t } = await initTranslations(locale, ["home"]);
  return <BaseForm formType={"offer"} buttonText={t("main.button")} />;
};

export default OfferForm;
