"use client";
import React, { useState } from "react";

import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "../../../i18nConfig";

const Languages = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  // const [curLang, setCurLang] = useState(currentLocale)

  const handleChange = (newLocale) => {
    // const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div
      className={`${styles["header-mode__languages"]} ${styles["languages"]}`}
    >
      {Object.entries(data).map(([locale, lang]) => (
        <button
          key={locale}
          className={currentLocale === locale ? styles["lang-current"] : null}
          onClick={() => handleChange(locale)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

const data = {
  ru: "RU",
  en: "ENG",
  tr: "TUR",
  zh: "CHINA",
};

export default Languages;
