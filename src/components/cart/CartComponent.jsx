"use client";
import React, { useContext, useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import EmptyCart from "./EmptyCart";
import Link from "next/link";
import Image from "next/image";
import OrderForm from "../Form/OrderForm";
import { CartContext } from "@/providers/CartProvider";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";

import styles from "@/styles/cart.module.css";

const CartComponent = () => {
  const locale = useParams().locale;
  const [cart, setCart] = useState([]);
  const [
    storageCart,
    _,
    deleteFromStorageCart,
    changeCountStorageCart,
    resetCart,
  ] = useContext(CartContext);
  const [count, setCount] = useState(storageCart);
  const { t } = useTranslation();

  const [loading, setLoading] = useState(Object.keys(storageCart).length > 0);

  const getCart = async (ids) => {
    const url = new URL(
      `${process.env.BACK_URL}/${locale}/api/catalog/products/cart/`
    );

    ids.keys().forEach((id) => url.searchParams.append("pk", id));
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status + " запрос товаров из корзины не удался");
    }
    const data = await response.json();

    let cart = data.map((p) => ({ ...p, storageCart: ids.get(p.id + "") }));

    setCart(cart);
    setLoading(false);
  };

  useEffect(() => {
    let goodsCart = new Map(Object.entries(storageCart));

    if (goodsCart.size < 1) return;

    getCart(goodsCart);
  }, [storageCart]);

  useEffect(() => {
    setCount(storageCart);
    setCart(cart.filter((p) => p.id in storageCart));
  }, [storageCart]);

  const handleInputChange = (e, id) => {
    setCount((prev) => ({ ...prev, [id]: parseInt(e.target.value) }));
  };

  const handleInputBlur = (e, id) => {
    if (count[id] < 1) {
      setCount(storageCart);
    } else {
      changeCountStorageCart(count);
    }
  };

  const handleInputChangeByClick = (type, id) => {
    let newCart = { ...storageCart };
    if (type === "less") {
      newCart[id] =
        storageCart[id] <= 1 ? storageCart[id] : storageCart[id] - 1;
    } else if (type === "more") {
      newCart[id] = storageCart[id] + 1;
    } else {
      return;
    }

    changeCountStorageCart(newCart);
  };

  const [discount, total] = cart.reduce(
    (res, p) => {
      const arr = [...res];
      arr[0] +=
        p.actual_price * storageCart[p.id] -
        p.current_price * storageCart[p.id];
      arr[1] += p.current_price * storageCart[p.id];
      return arr;
    },
    [0, 0]
  );

  return loading ? (
    <Spinner />
  ) : Object.keys(storageCart).length === 0 ? (
    <EmptyCart />
  ) : (
    <div className={styles["cart__content"]}>
      <div className={styles["cart__products"]}>
        <div className={styles["cart__list"]}>
          {cart.map((p) => (
            <div key={p.id} className={styles["cart__card"]}>
              <Link
                href={`/product/${p.slug}`}
                className={styles["card__cover"]}
              >
                <img
                  src={process.env.BACK_URL + "/media/" + p.img_urls[0].img_url}
                />
              </Link>
              <div className={styles["card__product-info"]}>
                <h3 className={styles["product-info__name"]}>{p.name}</h3>
                <ul className={styles["product-info__charachteristics"]}>
                  <li>
                    <span className={styles["characteristics__key"]}>
                      {t("catalog:presence.title")}
                    </span>
                    <span
                      className={`${styles["characteristics__val"]} ${
                        p.is_present && styles["present"]
                      }`}
                    >
                      {p.is_present
                        ? t("catalog:presence.on")
                        : t("catalog:presence.off")}
                    </span>
                  </li>
                  {p.characteristics.map((c) => (
                    <li key={c.id}>
                      <span className={styles["characteristics__key"]}>
                        {c.name}
                      </span>
                      <span className={styles["characteristics__val"]}>
                        {c.values.map((v) => v.name).join(", ")}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={styles["product-info__price"]}>
                  <span className={styles["product-info__price-current"]}>
                    {p.current_price && p.current_price + " ₽"}
                  </span>
                  <span
                    className={styles["product-info__price-actual"]}
                    hidden={p.current_price === p.actual_price}
                  >
                    {p.actual_price && p.actual_price + " ₽"}
                  </span>
                </div>
                {p.code && (
                  <div className={styles["product-info__code"]}>
                    <span>
                      {t("catalog:part_number")}: {p.code}
                    </span>
                  </div>
                )}
              </div>
              <div className={styles["card__controls"]}>
                <div className={styles["controls__count"]}>
                  <button
                    onClick={() => handleInputChangeByClick("less", p.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="2"
                      fill="none"
                    >
                      <path fill="black" d="M7.5 1.61h-7v-1h7v1Z" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    className={styles["controls__count-input"]}
                    value={count[p.id]}
                    onChange={(e) => handleInputChange(e, p.id)}
                    onBlur={(e) => handleInputBlur(e, p.id)}
                  />
                  <button
                    onClick={() => handleInputChangeByClick("more", p.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="none"
                    >
                      <path
                        fill="black"
                        d="M7.5 4.5h-3v3h-1v-3h-3v-1h3v-3h1v3h3v1Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className={styles["controls__delete"]}>
                  <button onClick={() => deleteFromStorageCart(p.id)}>
                    {t("cart:delete")}{" "}
                    <Image
                      src="/svgs/trash-icon.svg"
                      width={36}
                      height={36}
                      alt="иконка"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["cart__total"]}>
          <div
            className={`${styles["total-discount"]} ${
              discount <= 0 && styles["hidden"]
            }`}
          >
            <span className={styles["total-discount__key"]}>
              <Image
                src="/svgs/graph-icon.svg"
                width={24}
                height={24}
                alt="иконка"
              />
              {t("cart:discount_sum")}
            </span>
            <span className={styles["total__dots"]}></span>
            <span className={styles["total-discount__val"]}>
              {discount + " ₽"}
            </span>
          </div>
          <div className={styles["total-price"]}>
            <span className={styles["total-price__key"]}>
              <Image
                src="/svgs/wallet-icon.svg"
                width={24}
                height={24}
                alt="иконка"
              />
              {t("cart:sum")}
            </span>
            <span className={styles["total__dots"]}></span>
            <span className={styles["total-price__val"]}>{total + " ₽"}</span>
          </div>
        </div>
      </div>
      <div className={styles["cart__form"]}>
        <OrderForm cart={cart} productsCount={count} resetCart={resetCart} />
      </div>
    </div>
  );
};

export default CartComponent;
