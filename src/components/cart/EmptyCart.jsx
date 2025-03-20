import React from "react";

import styles from "@/styles/cart.module.css";
import { useTranslation } from "react-i18next";

const EmptyCart = () => {
  const { t } = useTranslation();
  return <div className={styles["cart__empty-cart"]}>{t("cart:empty")}</div>;
};

export default EmptyCart;
