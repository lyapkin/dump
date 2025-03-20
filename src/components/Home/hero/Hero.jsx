import OfferForm from "@/components/Form/OfferForm";
import PopupForm from "@/components/Form/PopupForm";
import HomeFrontSlider from "@/components/Slider/HomeFrontSlider";
import initTranslations from "@/locales/i18n";
import styles from "@/styles/home.module.css";

const Hero = async ({ locale, data }) => {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <section className={`${styles["home-main"]} first-screen`}>
      <div className="container" style={{ position: "relative" }}>
        <h1
          className={styles["home-main__header"]}
          dangerouslySetInnerHTML={{
            __html: data.translated
              ? data.header
              : t("home:main.title", {
                  interpolation: { escapeValue: false },
                }),
          }}
        ></h1>
        <p
          className={styles["home-main__promise"]}
          dangerouslySetInnerHTML={{
            __html: t("home:main.second", {
              interpolation: { escapeValue: false },
            }),
          }}
        ></p>
        <div className={styles["home-main__actions"]}>
          <div className={styles["home-main__button"]}>
            <PopupForm text={t("main.button")}>
              <OfferForm locale={locale} />
            </PopupForm>
          </div>
        </div>

        <div className={styles["home-main__slider"]}>
          <HomeFrontSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
