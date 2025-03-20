import styles from "@/styles/home.module.css";
import AboutAchievements from "../Home/about/AboutAchievements";
import initTranslations from "@/locales/i18n";
import Video from "./Video";

export default async function AboutSection({ locale }) {
  const { t } = await initTranslations(locale, ["about_section"]);

  return (
    <section className={styles["home-about"]}>
      <div className="container">
        <div className={styles["home-about__video"]}>
          <h6>{t("about_section:video")}</h6>
          <Video />
        </div>
        <div className={styles["home-about__description"]}>
          <h2
            className={styles["home-sections-header"]}
            dangerouslySetInnerHTML={{
              __html: t("about_section:title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></h2>
          <div>
            <p>{t("about_section:text")}</p>
            {/* <p>{t('about_section:text')}</p> */}
          </div>
        </div>
        <AboutAchievements />
      </div>
    </section>
  );
}
