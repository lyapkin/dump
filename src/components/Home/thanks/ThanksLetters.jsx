import s from "./thanks.module.css";
import initTranslations from "@/locales/i18n";
import ThanksSlider from "./ThanksSlider";

const ThanksLetters = async ({ locale }) => {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <div className={s["thanks-letters"]}>
      <h2
        className={s["thanks-letters__title"]}
        dangerouslySetInnerHTML={{
          __html: t("home:thank_letters.title", {
            interpolation: { escapeValue: false },
          }),
        }}
      ></h2>
      <div className={s["thanks-letters__letters"]}>
        <ThanksSlider />
      </div>
    </div>
  );
};

export default ThanksLetters;
