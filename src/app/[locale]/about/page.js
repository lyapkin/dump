import Image from "next/image";
import i1 from "@/../public/images/about/i1.png";
import i2 from "@/../public/images/about/i2.png";
import c1 from "@/../public/images/about/case1.svg";
import c2 from "@/../public/images/about/case2.svg";
import c3 from "@/../public/images/about/case3.svg";
import c4 from "@/../public/images/about/case4.svg";
import meImg from "@/../public/images/about/main.png";
import v from "@/../public/images/about/v.svg";
import aboutImg from "@/../public/images/about/about.png";
import check1 from "@/../public/images/about/check1.png";
import check2 from "@/../public/images/about/check2.png";
import s from "@/styles/about.module.css";
import DeliverySection from "@/components/DeliverySection/DeliverySection";
import AboutSection from "@/components/AboutSection/AboutSection";
import initTranslations from "@/locales/i18n";
import ShowMore from "@/components/showMore/ShowMore";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import Link from "next/link";
import { pages } from "../../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";
import Video from "@/components/AboutSection/Video";

export const generateMetadata = async ({ params: { locale } }, parent) => {
  const data = await getStaticPageSEO("about", locale);

  const { ABOUT: pathSegment } = pages;

  return generateMetadataStatic(parent, pathSegment, locale, data);
};

export default async function About({ params: { locale } }) {
  const { t } = await initTranslations(locale, [
    "about",
    "about_section",
    "common",
  ]);
  const data = await getStaticPageSEO("about", locale);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("common:about"),
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/about/`,
      },
      // {
      //   "@type": "ListItem",
      //   "position": 2,
      //   "name": "Science Fiction",
      //   "item": "https://example.com/books/sciencefiction"
      // },
      // {
      //   "@type": "ListItem",
      //   "position": 3,
      //   "name": "Award Winners"
      // }
    ],
  };
  return (
    <>
      <div className={`${s.about} first-screen`}>
        <div className="container">
          {/* <Image className={s.img} src={groupImg} /> */}
          <div className={s["about__video"]}>
            <h6>{t("about_section:video")}</h6>
            <Video />
          </div>
          <h1 className={s.title}>
            {data.translated ? data.header : t("about:main.title")}
          </h1>
          <p className={s.text}>{t("about:main.text")}</p>
          <div className={s.items}>
            <div className={s.item}>
              <h4
                className={s.item__title}
                dangerouslySetInnerHTML={{
                  __html: t("about:main.bullet_1", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></h4>
              <Image src={i1} />
            </div>
            <div className={s.item}>
              <h4
                className={s.item__title}
                dangerouslySetInnerHTML={{
                  __html: t("about:main.bullet_2", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></h4>
              <Image src={i2} />
            </div>
          </div>
          {/* <Button text={t('about:main.more_about')} /> */}
          <Link href="#about-anchor" className={s["about-link-anchor"]}>
            {t("about:main.more_about")}
          </Link>
        </div>
      </div>
      <div className={s.cases} id="about-anchor">
        <div className="container">
          <div className={s.cases__top}>
            <h2 className={s.cases__title}>{t("about:company.title")}</h2>
            <p
              className={s.cases__text}
              dangerouslySetInnerHTML={{
                __html: t("about:company.text", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></p>
          </div>
          <h4 className={s.cases__subtitle}>
            {t("about:company.blocks_title")}
          </h4>
          <div className={s.cases__items}>
            <div className={s.cases__item}>
              <Image className={s.cases__item__margin} src={c1} />
              <h5 className={s.cases__item_title}>
                {t("about:company.block_1_title")}
              </h5>
              <p className={s.cases__item_text}>
                {t("about:company.block_1_text")}
              </p>
            </div>
            <div className={s.cases__item}>
              <Image src={c2} />
              <h5 className={s.cases__item_title}>
                {t("about:company.block_2_title")}
              </h5>
              <p className={s.cases__item_text}>
                {t("about:company.block_2_text")}
              </p>
            </div>
            <div className={s.cases__item}>
              <Image src={c3} />
              <h5 className={s.cases__item_title}>
                {t("about:company.block_3_title")}
              </h5>
              <p className={s.cases__item_text}>
                {t("about:company.block_3_text")}
              </p>
            </div>
            <div className={s.cases__item}>
              <Image src={c4} />
              <h5 className={s.cases__item_title}>
                {t("about:company.block_4_title")}
              </h5>
              <p className={s.cases__item_text}>
                {t("about:company.block_4_text")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.me}>
        <div className="container">
          <div className={s.me__inner}>
            <div className={s.me__inner_left}>
              <h3 className={s.me__title}>{t("about:director.title")}:</h3>
              <p className={s.me__text}>{t("about:director.text")}</p>
            </div>
            <div className={s.me__img}>
              <Image src={meImg} />
            </div>
            <div>
              <p className={s.me__info}>{t("about:director.goal")}</p>
              <div className={s.me__info_items}>
                <div className={s.me__item}>
                  <h6 className={s.me__item_title}>
                    {t("about:director.name")}
                  </h6>
                  <p className={s.me__item_subtitle}>
                    {t("about:director.position")}
                  </p>
                </div>
                <div className={s.me__item}>
                  <Image src={v} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className={s.me__items_bottom}>
                        <div className={s.me__item_bottom}>
                            <h5>
                                {t('about:director.block_1_title')}
                            </h5>
                            <p>
                                {t('about:director.block_1_text')}
                            </p>
                        </div>
                        <div className={s.me__item_bottom}>
                            <h5>
                                {t('about:director.block_2_title')}
                            </h5>
                            <p>
                                {t('about:director.block_2_text')}
                            </p>
                        </div>
                        <div className={s.me__item_bottom}>
                            <h5>
                                {t('about:director.block_3_title')}
                            </h5>
                            <p>
                                {t('about:director.block_3_text')}
                            </p>
                        </div>
                    </div> */}
        </div>
      </div>
      {/* <div className={s.command}>
                <div className="container">
                    <div className={s.command__inner}>
                        <h3 className={s.command__title}>
                            {t('about:command.title')}
                        </h3>
                        <p className={s.command__text}>
                            {t('about:command.text')}
                        </p>
                    </div>
                    <Image src={groupImg} />
                </div>
            </div> */}
      <DeliverySection locale={locale} />
      <AboutSection locale={locale} />
      <section className={s.prod}>
        <div className="container">
          <div className={s.prod__inner}>
            <Image src={aboutImg} />
            <div>
              <h4 className={s.prod__title}>{t("about:prod.title")}</h4>
              <div className={s.prod__text}>
                <ShowMore height={"290px"}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("about:prod.text", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  ></p>
                </ShowMore>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.check}>
        <div className="container">
          <h4
            className={s.check__title}
            dangerouslySetInnerHTML={{
              __html: t("about:quality.title", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></h4>
          <div className={s.check__items}>
            <div className={s.check__item}>
              <Image src={check1} />
              <h6
                className={s.check__item_title}
                dangerouslySetInnerHTML={{
                  __html: t("about:quality.block_1_title", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></h6>
              <p className={s.check__item_text}>
                {t("about:quality.block_1_text")}
              </p>
            </div>
            <div className={s.check__item}>
              <Image src={check2} />
              <h6 className={s.check__item_title}>
                {t("about:quality.block_2_title")}
              </h6>
              <p className={s.check__item_text}>
                {t("about:quality.block_2_text")}
              </p>
            </div>
            {/* <div className={s.check__item}>
                            <Image src={check3} />
                            <h6 className={s.check__item_title}>
                                {t('about:quality.block_3_title')}
                            </h6>
                            <p className={s.check__item_text}>
                                {t('about:quality.block_3_text')}
                            </p>
                        </div> */}
          </div>
        </div>
      </section>
      <ClientsSection locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
}
