"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import s from "./not-found.module.css";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className={s["not-found__text"]}>{t("not_found:not_exist")}</p>
      <Link href={"/"} replace={true} className={s["not-found__link"]}>
        {t("not_found:to_home")}
      </Link>
    </>
  );
};

export default NotFound;
