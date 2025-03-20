import styles from "@/styles/home.module.css";
import initTranslations from "@/locales/i18n";
import GovClientsSlider from "../Slider/GovClientsSlider";
import ThanksLetters from "../Home/thanks/ThanksLetters";

const ClientsSection = async ({ locale }) => {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <section className={styles["home-clients"]}>
      <div className="container">
        <div className={styles["home-clients__gov-clients"]}>
          <h2
            className={styles["home-sections-header"]}
            dangerouslySetInnerHTML={{
              __html: t("home:gov_clients.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></h2>
          <GovClientsSlider />
        </div>
        <ThanksLetters locale={locale} />
      </div>
    </section>
  );
};

export default ClientsSection;
