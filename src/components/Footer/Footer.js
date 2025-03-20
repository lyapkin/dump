// 'use client'
import Link from "next/link";
import React from "react";

import styles from "./footer.module.css";
import FooterCatalog from "./FooterCatalog";
import FooterAbout from "./FooterAbout";
import initTranslations from "@/locales/i18n";
// import { useTranslation } from 'react-i18next'

const Footer = async ({ locale }) => {
  const { t } = await initTranslations(locale, ["footer", "common"]);
  // const {t} = useTranslation()
  return (
    <footer className={styles["footer"]}>
      <div className={`${styles["footer__grid"]} container`}>
        <div className={styles["footer__top"]}>
          <div className={styles["footer__company"]}>
            <div className={styles["footer__logo"]}>
              <a href="/">
                <img src="/images/visota-logo.png" alt="logo" />
              </a>
            </div>
            <span>{t("footer:logo_text")}</span>
          </div>
          <div className={styles["footer__social"]}>
            <span>{t("footer:text_us")}:</span>
            <figure className={styles["footer__telegram"]}>
              <a href="https://t.me/visotaUSR13" target="_blank">
                <img src="/svgs/telegram-icon.svg" alt="иконка" />
              </a>
            </figure>
            <figure className={styles["footer__vk"]}>
              <a href="https://vk.com/id827831209" target="_blank">
                <img src="/svgs/vk-icon.svg" alt="иконка" />
              </a>
            </figure>
          </div>
        </div>
        <FooterCatalog />
        <FooterAbout />
        <div className={styles["footer__contacts"]}>
          <p className={styles["footer-header"]}>{t("common:contacts")}</p>
          <span className={styles["footer__city"]}>
            {t("common:city_moscow")}, {t("common:city")}
          </span>
          <ul className={styles["footer__numbers"]}>
            <li>
              <a href="tel:+78007005413">
                <img src="/svgs/phone-pic.svg" alt="phone picture" />8 800 700
                54 13
              </a>
            </li>
            <li>
              <a href="tel:+79677436716">
                <img src="/svgs/phone-pic.svg" alt="phone picture" />8 967 743
                67 16
              </a>
            </li>
          </ul>
          <p className={styles["footer__work-schedule"]}>
            <span>{t("common:schedule_workweek")},</span>
            <span>{t("common:schedule_weekend")}</span>
          </p>
        </div>
        <div className={styles["footer__contacts-small"]}>
          <p className={styles["footer-header"]}>{t("common:contacts")}</p>
          <a href="tel:+78007005413">+7 800 700 54 13</a>
          <p className={styles["footer__work-schedule"]}>
            <span>{t("common:schedule_workweek")},</span>
            <span>{t("common:schedule_weekend")}</span>
          </p>
          <div className={styles["mail__main"]}>
            <a href="mailto:info@visota13.ru">info@visota13.ru</a>
            <a href="mailto:info@visota13.ru">{t("footer:send_mail")}</a>
          </div>
        </div>
        <div className={styles["footer__mail"]}>
          <p className={styles["footer-header"]}>{t("footer:mail")}</p>
          <div className={styles["mail__main"]}>
            <a href="mailto:info@visota13.ru">info@visota13.ru</a>
            <span>{t("footer:mail_us")}</span>
          </div>
          <div className={styles["mail__commercial"]}>
            <span>{t("footer:mail_commercial")}</span>
            <a href="mailto:info@visota13.ru">info@visota13.ru</a>
          </div>
          {/* <div className={styles['mail__head']}>
						<a href='mailto:info@visota13.ru'>{t('footer:mail_director')}</a>
					</div> */}
        </div>
      </div>
      <div className={styles["footer__bottom"]}>
        <div className={`${styles["footer__bottom-flex"]} container`}>
          <span>
            {t("footer:copyright1")} © {new Date().getFullYear()}.{" "}
            {t("footer:copyright2")}{" "}
            <a href="https://visota13.ru/">visota13.ru</a>
          </span>
          <a href="#">{t("footer:confid")}</a>
          <a href="#">{t("footer:user_agreement")}</a>
          <span>
            {t("footer:site_maker")} <a href="#">Axis-Marketing.ru</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
