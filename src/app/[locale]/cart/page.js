import React from "react";

import styles from "@/styles/cart.module.css";
import CartComponent from "@/components/cart/CartComponent";
import initTranslations from "@/locales/i18n";
import { pages } from "../../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({ params: { locale } }, parent) => {
  const data = await getStaticPageSEO("cart", locale);

  const { CART: pathSegment } = pages;

  return generateMetadataStatic(parent, pathSegment, locale, data);
};

const Cart = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["common"]);
  const data = await getStaticPageSEO("cart", locale);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("common:cart"),
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/cart/`,
      },
    ],
  };

  return (
    <div className={`${styles["cart"]} first-screen`}>
      <div className="container">
        <h1 className={styles["cart__title"]}>
          {data.translated ? data.header : t("common:cart")}
        </h1>
        <CartComponent />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </div>
  );
};

export default Cart;
