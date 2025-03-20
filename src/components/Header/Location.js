"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";

import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { BreadCrumbsContext } from "@/providers/BreadCrumbsProvider";
import { useTranslation } from "react-i18next";
import useLocationData from "@/hooks/useLocationData";

const Location = () => {
  const pathname = usePathname();
  const sections = pathname.split("/").filter((p) => p != "");
  const [breadCrumbs] = useContext(BreadCrumbsContext);
  const { t } = useTranslation();
  const paths = useLocationData();

  return (
    <div className={styles["header-mode__location"]}>
      {(breadCrumbs.length > 0 &&
        breadCrumbs.map(({ segment, name }, i) => {
          if (i === breadCrumbs.length - 1) {
            return (
              <div key={segment}>
                <span>/</span>
                <span className={styles["breadcrumbs-end"]}>{name}</span>
              </div>
            );
          }

          return (
            <div key={segment}>
              <span>/</span>
              {segment === "" ? (
                <Link href={"/"}>{name}</Link>
              ) : (
                <Link href={`/${segment}/`}>{name}</Link>
              )}
            </div>
          );
        })) ||
        sections.map((s, i) => {
          const value =
            i !== 0 && sections[i - 1] === "product"
              ? t("breadcrumbs:product")
              : i !== 0 && sections[i - 1] === "catalog"
              ? t("breadcrumbs:category")
              : i !== 0 && sections[i - 1] === "blog"
              ? t("breadcrumbs:post")
              : i !== 0 && sections[i - 1] === "tag"
              ? t("breadcrumbs:tag")
              : s === "tag" || s === "product"
              ? paths["catalog"]
              : paths[s];

          if (value === undefined) return null;

          const section = s === "tag" || s === "product" ? "catalog" : s;

          if (i === sections.length - 1) {
            return (
              <div key={section}>
                <span>/</span>
                <span className={styles["breadcrumbs-end"]}>{value}</span>
              </div>
            );
          }

          return (
            <div key={section}>
              <span>/</span>
              <Link href={`/${section}/`}>{value}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Location;
