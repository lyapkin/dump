import React from "react";
import styles from "@/styles/catalog.module.css";
import { useTranslation } from "react-i18next";

const CardPrice = ({ price, isInCart, action }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles["order__price"]}>
        <div className={styles["price__key"]}>
          <span>{price && t("catalog:price")}</span>
        </div>
        <div className={styles["price__val"]}>
          <span>{price && price + " ₽"}</span>
        </div>
      </div>
      <div className={styles["order__cart-button"]}>
        {!isInCart ? (
          <button onClick={action}>
            {t("catalog:to_cart")}
            <img src="/svgs/catalog-cart-icon.svg" alt="иконка" />
          </button>
        ) : (
          <button>
            {t("catalog:in_cart")}{" "}
            <img src="/svgs/cart-check-icon.svg" alt="иконка" />
          </button>
        )}
      </div>
    </>
  );
};

export default CardPrice;
