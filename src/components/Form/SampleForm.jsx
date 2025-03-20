import React from "react";
import { useTranslation } from "react-i18next";
import BaseForm from "./BaseForm";

const SampleForm = () => {
  const { t } = useTranslation();
  return <BaseForm formType={"samples"} buttonText={t("form:get_example")} />;
};

export default SampleForm;
