import ConsultationForm from "@/components/Form/ConsultationForm";
import initTranslations from "@/locales/i18n";
import styles from "@/styles/home.module.css";

const Advantages = async ({ locale }) => {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <section className={styles["home-advantages"]}>
      <div className="container">
        <h2
          className={styles["home-sections-header"]}
          dangerouslySetInnerHTML={{
            __html: t("home:advantages.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        ></h2>
        <div className={styles["home-advantages-content"]}>
          <div
            className={`${styles["home-advantages-block"]} ${styles["home-advantages-block-1"]}`}
          >
            <img src="/images/advantages/papers.png" alt="лицензия" />
            <h5
              dangerouslySetInnerHTML={{
                __html: t("home:advantages.first_block_title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></h5>
            <p>{t("home:advantages.first_block_text")}</p>
          </div>
          <div
            className={`${styles["home-advantages-block"]} ${styles["home-advantages-block-2"]}`}
          >
            <img src="/images/advantages/truck.png" alt="грузовик" />
            <h5
              dangerouslySetInnerHTML={{
                __html: t("home:advantages.second_block_title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></h5>
            <p>{t("home:advantages.second_block_text")}</p>
          </div>

          <div
            className={`${styles["home-advantages-block"]} ${styles["home-advantages-block-3"]}`}
          >
            <img src="/images/advantages/calendar.png" alt="календарь" />
            <h5
              dangerouslySetInnerHTML={{
                __html: t("home:advantages.third_block_title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></h5>
            <p>{t("home:advantages.third_block_text")}</p>
          </div>
          <div
            className={`${styles["home-advantages-block"]} ${styles["home-advantages-block-4"]}`}
          >
            <img src="/images/advantages/money.png" alt="деньги" />
            <h5
              dangerouslySetInnerHTML={{
                __html: t("home:advantages.forth_block_title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></h5>
            <p>{t("home:advantages.forth_block_text")}</p>
          </div>
        </div>
        <div className={styles["home-advantages-form"]}>
          <ConsultationForm locale={locale} />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
