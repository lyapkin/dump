import initTranslations from "@/locales/i18n";
import ReputationBlocks from "../Home/reputation/ReputationBlocks";
import styles from "@/styles/home.module.css";

export default async function DeliverySection({ locale }) {
  const { t } = await initTranslations(locale, ["home", "common"]);
  return (
    <section className={styles["home-delivery"]}>
      <div className="container">
        <h2
          className={styles["home-sections-header"]}
          dangerouslySetInnerHTML={{
            __html: t("home:delivery.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        ></h2>
        <p>{t("home:delivery.text")}</p>
        <div className={styles["home-delivery__map-contact-block"]}>
          <div className={styles["home-delivery__delivery-map"]}>
            <img src="/images/delivery-map.svg" alt="фон" />
          </div>
          {/* <div className={styles['home-delivery__contact']}>
                        <h4>{t('common:office_ufa')}</h4>
                        <p>{t('common:address')}</p>
                        <span>{t('common:schedule_workweek')},</span>
                        <span>{t('common:schedule_weekend')}</span>
                        <p><a href='tel:+78007005413'>8 800 700 54 13</a></p>
                    </div> */}
        </div>
        <div className={styles["home-reputation"]}>
          <h3
            className={styles["home-sections-header"]}
            dangerouslySetInnerHTML={{
              __html: t("home:reputation.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></h3>
          <ReputationBlocks />
        </div>
      </div>
    </section>
  );
}
