import PartnersTabs from "@/components/Partners/PartnersTabs";
import initTranslations from "@/locales/i18n";
import s from "@/styles/partners.module.css";
import { pages } from "../../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({ params: { locale } }, parent) => {
  const data = await getStaticPageSEO("partners", locale);

  const { PARTNERS: pathSegment } = pages;

  return generateMetadataStatic(parent, pathSegment, locale, data);
};

export default async function Partners({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["partners", "common"]);
  const data = await getStaticPageSEO("partners", locale);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("common:partners"),
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/partners/`,
      },
    ],
  };

  return (
    <div className={`first-screen ${s.partners}`}>
      <div className="container">
        <h1 className={s.title}>
          {data.translated ? data.header : t("partners:title")}
        </h1>
        <PartnersTabs />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </div>
  );
}
