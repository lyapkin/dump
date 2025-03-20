import React from "react";

import s from "@/styles/policy.module.css";

import initTranslations from "@/locales/i18n";
import { pages } from "../../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({ params: { locale } }, parent) => {
  const data = await getStaticPageSEO("policy", locale);

  const { POLICY: pathSegment } = pages;

  return generateMetadataStatic(parent, pathSegment, locale, data);
};

const Policy = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["policy", "footer"]);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("footer:confid"),
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/policy/`,
      },
    ],
  };

  return (
    <>
      <div
        className={`${s.policy} container first-screen`}
        dangerouslySetInnerHTML={{
          __html: t("policy:private", {
            interpolation: { escapeValue: false },
          }),
        }}
      ></div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default Policy;
