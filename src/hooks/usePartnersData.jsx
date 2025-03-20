import { useMemo } from "react";

const { useTranslation } = require("react-i18next");

const usePartnersData = () => {
  const { t } = useTranslation();

  const data = useMemo(() => [
    {
      id: 1,
      title: t("partners:tab_1"),
    },
    {
      id: 2,
      title: t("partners:tab_2"),
    },
  ]);

  return data;
};

export default usePartnersData;
