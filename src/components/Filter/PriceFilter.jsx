"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MAX_PRICE, MIN_PRICE } from "./constant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./filter.module.css";
import FilterSection from "./FilterSection";

const PriceFilter = () => {
  const { t } = useTranslation();

  const path = usePathname();

  const searchParams = useSearchParams();

  const router = useRouter();

  const [priceFilter, setPriceFilter] = useState({
    min: searchParams.get("price_min") || "",
    max: searchParams.get("price_max") || "",
  });

  const slideLeftPosition = `${((priceFilter.min || 1) / MAX_PRICE) * 100}%`;
  const slideRightPosition = `${
    100 - ((priceFilter.max || MAX_PRICE) / MAX_PRICE) * 100
  }%`;

  useEffect(() => {
    setPriceFilter({
      min: searchParams.get("price_min") || "",
      max: searchParams.get("price_max") || "",
    });
  }, [searchParams]);

  const handlePriceChange = (val, type) => {
    if (val < 0 || val > MAX_PRICE) return;

    setPriceFilter((prev) => {
      const newState = { ...prev };
      if (type === "filter-price-min") {
        newState.min = val;
      }
      if (type === "filter-price-max") {
        newState.max = val;
      }

      return newState;
    });
  };

  const handlePriceSlide = (e) => {
    const target = e.target;

    if (
      target.id === "price-range-min" &&
      (!priceFilter.max || parseInt(target.value) < parseInt(priceFilter.max))
    ) {
      handlePriceChange(target.value, "filter-price-min");
    } else if (
      target.id === "price-range-max" &&
      (!priceFilter.min || parseInt(target.value) > parseInt(priceFilter.min))
    ) {
      handlePriceChange(target.value, "filter-price-max");
    }
  };

  const handlePriceInput = (e) => {
    const target = e.target;
    handlePriceChange(target.value, target.id);
  };

  const applyPrice = () => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("price_min", priceFilter.min);
    urlSearchParams.set("price_max", priceFilter.max);
    urlSearchParams.delete("page");
    router.replace(path + "?" + urlSearchParams.toString(), { scroll: false });
  };

  return (
    <FilterSection name={t("catalog:price")}>
      <div className={styles["price"]}>
        <div className={styles["price__range"]}>
          <div className={styles["price__input"]}>
            <input
              type="number"
              id="filter-price-min"
              value={priceFilter.min}
              onChange={handlePriceInput}
              onBlur={applyPrice}
            />
            <input
              type="number"
              id="filter-price-max"
              value={priceFilter.max}
              onChange={handlePriceInput}
              onBlur={applyPrice}
            />
          </div>
          <div className={styles["price__range-slider"]}>
            <span
              className={styles["price__range-selected"]}
              style={{ left: slideLeftPosition, right: slideRightPosition }}
            ></span>
          </div>
          <div className={styles["price__range-input"]}>
            <input
              type="range"
              id="price-range-min"
              className={styles["range-input__min"]}
              min={`${MIN_PRICE}`}
              max={`${MAX_PRICE}`}
              value={priceFilter.min || `${MIN_PRICE}`}
              step="1"
              onChange={handlePriceSlide}
              onMouseUp={applyPrice}
              onTouchEnd={applyPrice}
            />
            <input
              type="range"
              id="price-range-max"
              className={styles["range-input__max"]}
              min={`${MIN_PRICE}`}
              max={`${MAX_PRICE}`}
              value={priceFilter.max || `${MAX_PRICE}`}
              step="1"
              onChange={handlePriceSlide}
              onMouseUp={applyPrice}
              onTouchEnd={applyPrice}
            />
          </div>
        </div>
      </div>
    </FilterSection>
  );
};

export default PriceFilter;
