import { useMemo } from "react";

const { useTranslation } = require("react-i18next");

const useReputationData = () => {
  const { t } = useTranslation();

  const data = useMemo(() => [
    {
      id: 1,
      img: "/images/reputation/pen-paper-icon.svg",
      title: t("home:reputation.block1_title"),
      text: t("home:reputation.block1_text"),
    },
    {
      id: 2,
      img: "/images/reputation/bricks-icon.svg",
      title: t("home:reputation.block2_title"),
      text: t("home:reputation.block2_text"),
    },
    {
      id: 3,
      img: "/images/reputation/gear-icon.svg",
      title: t("home:reputation.block3_title"),
      text: t("home:reputation.block3_text"),
    },
    {
      id: 4,
      img: "/images/reputation/box-icon.svg",
      title: t("home:reputation.block4_title"),
      text: t("home:reputation.block4_text"),
    },
  ]);

  return data;
};

export default useReputationData;
