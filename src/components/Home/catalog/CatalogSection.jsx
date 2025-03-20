import CatalogSlider from "@/components/Slider/CatalogSlider";
import initTranslations from "@/locales/i18n";
import styles from "@/styles/home.module.css";

const CatalogSection = async ({ locale }) => {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <section className={styles["home-catalog"]}>
      <div className="container">
        <h2
          className={styles["home-sections-header"]}
          dangerouslySetInnerHTML={{
            __html: t("home:catalog.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        ></h2>
        <CatalogSlider />
      </div>
    </section>
  );
};

export default CatalogSection;
