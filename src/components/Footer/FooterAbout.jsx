"use client";
import React, { useEffect, useState } from "react";

import styles from "./footer.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";

const FooterAbout = () => {
  const [activateToggle, setActivateToggle] = useState(null);

  const { t } = useTranslation();

  const locale = useParams().locale;

  useEffect(() => {
    const activateToggle = document.documentElement.clientWidth <= 576;
    setActivateToggle(activateToggle);
  }, []);

  const [isOpen, setIsOpen] = useState(activateToggle ? true : false);
  const handleClick = activateToggle
    ? () => setIsOpen((prev) => !prev)
    : () => {};
  return (
    <div className={`${styles["footer__about"]} ${isOpen && styles["open"]}`}>
      <p className={styles["footer-header"]} onClick={handleClick}>
        {t("common:about")}{" "}
        {activateToggle && (
          <img src="/svgs/arrow-footer-icon.svg" alt="стрелка" />
        )}
      </p>
      <ul>
        <li>
          <Link href={"/about/"}>{t("common:about")}</Link>
        </li>
        <li>
          <Link href={"/contacts/"}>{t("common:contacts")}</Link>
        </li>
        <li>
          <Link href={"/partners/"}>{t("common:partners")}</Link>
        </li>
        <li>
          <Link href={"/blog/"}>{t("common:blog")}</Link>
        </li>
        {/* <li>
                    <Link href={"/faq/"}>{t('common:faq')}</Link>
                </li> */}
        {locale === "ru" && (
          <li>
            <Link href={"/vacancies/"}>{t("common:vacancies")}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FooterAbout;
