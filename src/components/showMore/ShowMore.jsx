"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./showmore.module.css";
import arrow from "@/../public/svgs/arrow-footer-icon.svg";
import { useTranslation } from "react-i18next";

const ShowMore = ({ children, height }) => {
  const { t } = useTranslation();
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`${styles["show-more"]} ${open && styles["open"]}`}
        style={{ height: !open ? height : "auto" }}
      >
        {children}
      </div>
      {open ? (
        <button
          className={styles["show-more__button"]}
          onClick={() => setIsOpen(false)}
        >
          <span>Скрыть</span> <Image src={arrow} />
        </button>
      ) : (
        <button
          className={styles["show-more__button"]}
          onClick={() => setIsOpen(true)}
        >
          <span style={{ minWidth: "120px" }}>{t("common:show_more")}</span>{" "}
          <Image src={arrow} />
        </button>
      )}
    </>
  );
};

export default ShowMore;
