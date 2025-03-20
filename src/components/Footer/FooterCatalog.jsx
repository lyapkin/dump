"use client";
import React, { useContext, useEffect, useState } from "react";

import styles from "./footer.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CategoriesContext } from "@/providers/CategoriesProvider";
import { useParams } from "next/navigation";

const FooterCatalog = () => {
  const locale = useParams().locale;

  const [activateToggle, setActivateToggle] = useState(null);
  const { t } = useTranslation();

  const categories = useContext(CategoriesContext);
  const catalog = categories.reduce(
    (arr, item) => arr.concat(item.subcategories),
    []
  );
  // .slice(0, 6);

  useEffect(() => {
    const activateToggle = document.documentElement.clientWidth <= 576;
    setActivateToggle(activateToggle);
  }, []);

  const [isOpen, setIsOpen] = useState(activateToggle ? true : false);
  const handleClick = activateToggle
    ? () => setIsOpen((prev) => !prev)
    : () => {};

  return (
    <div className={`${styles["footer__catalog"]} ${isOpen && styles["open"]}`}>
      <p className={styles["footer-header"]} onClick={handleClick}>
        {t("common:catalog")}{" "}
        {activateToggle && (
          <img src="/svgs/arrow-footer-icon.svg" alt="стрелка" />
        )}
      </p>
      <ul>
        {catalog.map((item) => (
          <li key={item.id}>
            <Link href={`/catalog/${item.slug}`}>
              {item?.translations[locale]?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCatalog;
