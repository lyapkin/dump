import ProjectsSlider from "@/components/Slider/ProjectsSlider";
import initTranslations from "@/locales/i18n";
import styles from "@/styles/home.module.css";

const ProjectsSection = async ({ locale }) => {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <section className={styles["home-projects"]}>
      <div className="container">
        <h2
          className={styles["home-sections-header"]}
          dangerouslySetInnerHTML={{
            __html: t("home:projects.title", {
              interpolation: { escapeValue: false },
            }),
          }}
        ></h2>
        <ProjectsSlider />
      </div>
    </section>
  );
};

export default ProjectsSection;
