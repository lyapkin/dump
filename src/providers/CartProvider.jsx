"use client";
import setStorageCart from "@/utils/setStorageCart";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "{}") || {});
  }, []);

  const addToCart = (id) => {
    const newCart = {
      ...cart,
      [id]: 1,
    };
    changeCart(newCart);
  };

  const deleteFromCart = (id) => {
    const newCart = { ...cart };
    delete newCart[id];
    changeCart(newCart);
  };

  const changeCountInCart = (newCart) => {
    changeCart(newCart);
  };

  const changeCart = (cart) => {
    setStorageCart(cart);
    setCart(cart);
  };

  const resetCart = () => {
    setStorageCart({});
    setCart({});
  };

  return (
    <CartContext.Provider
      value={[cart, addToCart, deleteFromCart, changeCountInCart, resetCart]}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
