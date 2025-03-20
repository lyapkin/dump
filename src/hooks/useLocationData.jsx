import { useMemo } from "react";

const { useTranslation } = require("react-i18next");

const useLocationData = () => {
  const { t } = useTranslation();

  const data = useMemo(() => ({
    blog: t("common:blog"),
    cart: t("common:cart"),
    catalog: t("breadcrumbs:catalog"),
    delivery: t("breadcrumbs:delivery"),
    pay: t("breadcrumbs:pay"),
    faq: t("common:faq"),
    partners: t("common:partners"),
    vacancies: t("common:vacancies"),
    about: t("common:about"),
    contacts: t("common:contacts"),
  }));

  return data;
};

export default useLocationData;
