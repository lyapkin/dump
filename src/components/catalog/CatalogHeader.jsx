import initTranslations from "@/locales/i18n";
import styles from "@/styles/catalog.module.css";

const CatalogHeader = async ({ header, params: locale }) => {
  const { t } = await initTranslations(locale, ["catalog"]);
  return (
    <h1 className={styles["catalog__title"]}>
      {header || t("catalog:catalog")}
    </h1>
  );
};

export default CatalogHeader;
