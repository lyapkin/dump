"use client";
import { CartContext } from "@/providers/CartProvider";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./product.module.css";
import ProductImgs from "./ProductImgs";
import Image from "next/image";
import GetPriceForm from "../Form/GetPriceForm";
import PopupForm from "../Form/PopupForm";
import ProductDocs from "./ProductDocs";

const ProductComponent = ({ product }) => {
  const [aboutBlock, setAboutBlock] = useState("char");

  const { t } = useTranslation();

  const [cart, addToCart] = useContext(CartContext);

  return (
    product && (
      <main className={styles["product__content"]}>
        <div className={styles["product__imgs"]}>
          <ProductImgs imgs={product.img_urls} />
        </div>
        <div className={styles["product__title"]}>
          <div className={styles["title__name"]}>
            <h1 className={styles["product-name"]}>{product.name}</h1>
          </div>
          <div className={styles["title__product-code"]}>
            <span className={styles["product-code__key"]}>
              {t("catalog:part_number")}:{" "}
            </span>
            <span className={styles["product-code__val"]}>{product.code}</span>
          </div>
        </div>
        <div className={styles["product__about"]}>
          <div className={styles["about__buttons"]}>
            <button
              className={styles[`${aboutBlock === "char" && "active"}`]}
              onClick={() => setAboutBlock("char")}
            >
              {t("catalog:charachteristics")}
            </button>
            <button
              className={styles[`${aboutBlock === "desc" && "active"}`]}
              onClick={() => setAboutBlock("desc")}
            >
              {t("catalog:description.title")}
            </button>
            {product.docs.length > 0 && (
              <button
                className={styles[`${aboutBlock === "doc" && "active"}`]}
                onClick={() => setAboutBlock("doc")}
              >
                {t("catalog:documentation.title")}
              </button>
            )}
          </div>
          <div className={styles["about__prod-info"]}>
            <div
              className={styles["prod-info__characteristics"]}
              hidden={aboutBlock !== "char"}
            >
              <ul className={styles["characteristics__list"]}>
                <li>
                  <span className={styles["characteristics__list-key"]}>
                    {t("catalog:presence.title")}
                  </span>
                  <span className={styles["characteristics__list-dots"]}></span>
                  <span
                    className={`${styles["characteristics__list-val"]} ${
                      product.is_present && styles["present"]
                    }`}
                  >
                    {product.is_present
                      ? t("catalog:presence.on")
                      : t("catalog:presence.off")}
                  </span>
                </li>
                {product.characteristics.map((item) => (
                  <li key={item.id}>
                    <span className={styles["characteristics__list-key"]}>
                      {item.name}
                    </span>
                    <span
                      className={styles["characteristics__list-dots"]}
                    ></span>
                    <span className={styles["characteristics__list-val"]}>
                      {item.values.map((v) => v.name).join(", ")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={styles["prod-info__description"]}
              hidden={aboutBlock !== "desc"}
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            {product.docs.length > 0 && (
              <div
                className={styles["prod-info__documentation"]}
                hidden={aboutBlock !== "doc"}
              >
                {/* {t("catalog:documentation.text")} */}
                <ProductDocs docs={product.docs} />
              </div>
            )}
          </div>
          <div className={styles["about__cart"]}>
            {product.current_price ? (
              <>
                <div className={styles["about__price"]}>
                  <div className={styles["price__current"]}>
                    {product.current_price && product.current_price + " ₽"}
                  </div>
                  <div
                    className={styles["price__actual"]}
                    hidden={product.actual_price === product.current_price}
                  >
                    {product.actual_price + " ₽"}
                  </div>
                  <div
                    className={styles["price__discount_text"]}
                    hidden={product.actual_price === product.current_price}
                  >
                    {t("catalog:price_discount")}
                  </div>
                </div>
                <div
                  className={`${styles["about__cart-button"]} ${
                    product.id in cart && styles["delete"]
                  }`}
                >
                  {!(product.id in cart) ? (
                    <button onClick={() => addToCart(product.id)}>
                      {t("catalog:to_cart")}{" "}
                      <Image
                        src="/svgs/catalog-cart-icon.svg"
                        width={36}
                        height={36}
                        alt="иконка"
                      />
                    </button>
                  ) : (
                    <button>
                      {t("catalog:in_cart")}{" "}
                      <img src="/svgs/cart-check-icon.svg" alt="иконка" />
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className={styles["about__cart-get-price-button"]}>
                <PopupForm text={t("catalog:get_price")}>
                  <GetPriceForm product={product} />
                </PopupForm>
              </div>
            )}
          </div>
        </div>
        <div className={styles["product__extra-info"]}>
          <div className={styles["extra-info"]}>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: t("catalog:info_1", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></div>
              <img
                src={"/images/product/papers.png"}
                width={100}
                height={100}
                style={{ objectFit: "cover", width: "100%" }}
                alt="картика с документам"
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: t("catalog:info_2", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></div>
              <img
                src={"/images/product/woman.png"}
                width={100}
                height={100}
                style={{ objectFit: "cover", width: "100%" }}
                alt="девушка"
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: t("catalog:info_3", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></div>
              <img
                src={"/images/product/map.png"}
                width={100}
                height={100}
                style={{ objectFit: "cover", width: "100%" }}
                alt="карта"
              />
            </div>
          </div>
        </div>
      </main>
    )
  );
};

export default ProductComponent;
