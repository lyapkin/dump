"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";

import styles from "./filter.module.css";

const ResetFilter = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const currentPath = usePathname();

  const handleReset = () => {
    router.replace(currentPath, {
      scroll: false,
    });
  };

  return (
    <div className={styles["filters__reset"]}>
      <button onClick={handleReset}>
        {t("catalog:reset_filters")}
        <img src="/svgs/trash-icon.svg" alt="иконка" />
      </button>
    </div>
  );
};

export default ResetFilter;
