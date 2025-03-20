import { useMemo } from "react";

const { useTranslation } = require("react-i18next");

const useAboutAchievementsData = () => {
  const { t } = useTranslation();

  const data = useMemo(() => [
    {
      id: 1,
      count: "1 000 000",
      type: t("about_section:block1_type"),
      text: t("about_section:block1_text"),
    },
    {
      id: 2,
      count: "1 800",
      type: t("about_section:block2_type"),
      text: t("about_section:block2_text"),
    },
    {
      id: 3,
      count: "500",
      type: t("about_section:block3_type"),
      text: t("about_section:block3_text"),
    },
    {
      id: 4,
      count: "14",
      type: t("about_section:block4_type"),
      text: t("about_section:block4_text"),
    },
  ]);

  return data;
};

export default useAboutAchievementsData;
