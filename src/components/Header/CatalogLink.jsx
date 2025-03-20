import Link from "next/link";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

const CatalogLink = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["header-catalog-link"]}>
      <Link href="/catalog/">{t("common:catalog")}</Link>
    </div>
  );
};

export default CatalogLink;
