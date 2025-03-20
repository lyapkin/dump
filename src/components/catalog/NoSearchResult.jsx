import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import s from "@/styles/catalog.module.css";

const NoSearchResult = () => {
  const { t } = useTranslation();
  return (
    <div className={s["noresult"]}>
      <div className={s["noresult__icon"]}>
        <Image src={"/svgs/no-serach-result-icon.svg"} width={45} height={45} />
      </div>
      <div className={s["noresult__text"]}>{t("catalog:no_result")}</div>
    </div>
  );
};

export default NoSearchResult;
