import initTranslations from "@/locales/i18n";
import handleNotExistingPage from "@/utils/handleNotExistingPage";

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, "not_found");
  return {
    title: t("not_found:not_exist"),
  };
};

const Page = async () => {
  handleNotExistingPage();
};

export default Page;
