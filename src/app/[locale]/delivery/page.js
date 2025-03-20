import s from "@/styles/delivery.module.css";
import Image from "next/image";
import Link from "next/link";
import MapImage from "@/../public/images/delivery-map.svg";
import CarImage from "@/../public/images/bg/delivery-truck-bg-big.png";

import i1 from "@/../public/images/delivery/i1.png";
import i2 from "@/../public/images/delivery/i2.png";
import i3 from "@/../public/images/delivery/i3.png";
import initTranslations from "@/locales/i18n";
import { pages } from "../../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({ params: { locale } }, parent) => {
  const data = await getStaticPageSEO("delivery", locale);

  const { DELIVERY: pathSegment } = pages;

  return generateMetadataStatic(parent, pathSegment, locale, data);
};

export default async function Delivery({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["delivery_pay"]);
  const data = await getStaticPageSEO("delivery", locale);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("delivery_pay:d_button"),
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/delivery/`,
      },
    ],
  };

  return (
    <div className={`first-screen ${s.delivery}`}>
      <div className="container">
        <div className={s.wrap}>
          <div>
            <h1
              className={s.title}
              dangerouslySetInnerHTML={{
                __html: data.translated
                  ? data.header
                  : t("delivery_pay:d_title", {
                      interpolation: { escapeValue: false },
                    }),
              }}
            >
              {/* Обеспечиваем доставку <br /> авто и ж/д способом */}
            </h1>
            <div className={s.btns}>
              <button className={`${s.btn} ${s.btn__active}`}>
                {t("delivery_pay:d_button")}
              </button>
              <Link href={"/pay/"}>
                <button className={`${s.btn}`}>
                  {t("delivery_pay:p_button")}
                </button>
              </Link>
            </div>
            <p className={s.text}>{t("delivery_pay:d_text")}</p>

            <Image className={s.map} src={MapImage} />
          </div>
          <div>
            <Image className={s.car} src={CarImage} />
          </div>
        </div>
        <div className={s.items}>
          <div className={s.item}>
            <div className={s.item__number}>01</div>
            <h4 className={s.item__title}>{t("delivery_pay:d_method_1")}</h4>
            <Image className={s.item__img} src={i1} alt="" />
            <div className={s.item__line}></div>
            {/* <p className={s.item__text}>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев более
                            менее осмысленного текста рыбы на русском языке, а
                            начинающему оратору отточить навык публичных
                            выступлений в домашних условиях. При создании
                            генератора мы использовали
                        </p> */}
          </div>
          <div className={s.item}>
            <div className={s.item__number}>02</div>
            <h4 className={s.item__title}>{t("delivery_pay:d_method_2")}</h4>
            <Image className={s.item__img} src={i2} alt="" />
            <div className={s.item__line}></div>
            {/* <p className={s.item__text}>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев более
                            менее осмысленного текста рыбы на русском языке, а
                            начинающему оратору отточить навык публичных
                            выступлений в домашних условиях. При создании
                            генератора мы использовали
                        </p> */}
          </div>
          <div className={s.item}>
            <div className={s.item__number}>03</div>
            <h4 className={s.item__title}>{t("delivery_pay:d_wherehouse")}</h4>
            <Image className={s.item__img} src={i3} alt="" />
            <div className={s.item__line}></div>
            {/* <p className={s.item__text}>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев более
                            менее осмысленного текста рыбы на русском языке, а
                            начинающему оратору отточить навык публичных
                            выступлений в домашних условиях. При создании
                            генератора мы использовали
                        </p> */}
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </div>
  );
}
