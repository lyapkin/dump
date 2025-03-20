"use client";
import React, { useContext, useEffect, useState } from "react";

import styles from "./Header.module.css";
import Link from "next/link";
import { CartContext } from "@/providers/CartProvider";

const CartTab = () => {
  const [storageCart] = useContext(CartContext);

  return (
    <div className={styles["header-tabs__cart"]}>
      <Link href="/cart/" value={Object.keys(storageCart).length || ""}>
        <img src="/svgs/cart.svg" alt="иконка" />
      </Link>
    </div>
  );
};

export default CartTab;
