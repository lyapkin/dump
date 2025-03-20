import React from "react";
import Image from "next/image";

import s from "@/styles/success.module.css";
import initTranslations from "@/locales/i18n";
import { pages } from "../../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({ params: { locale } }, parent) => {
  const data = await getStaticPageSEO("success", locale);

  const { SUCCESS: pathSegment } = pages;

  return generateMetadataStatic(parent, pathSegment, locale, data);
};

const Success = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["form"]);
  const data = await getStaticPageSEO("success", locale);
  return (
    <div className={`${s["success"]} first-screen`}>
      <div className="container">
        <h1 className={s["success__title"]}>
          {data.translated ? data.header : t("form:success.title")}
        </h1>
        <div className={s["success__content"]}>
          <div className={s["success__icon"]}>
            <Image src={"/svgs/success.svg"} width={45} height={45} />
          </div>
          <div className={s["success__text"]}>
            {t("form:success.text_1")}
            <br />
            {t("form:success.text_2")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
