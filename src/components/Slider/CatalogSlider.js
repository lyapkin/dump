"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./slider.module.css";
import LeftButton from "../UI/Buttons/LeftButton";
import RightButton from "../UI/Buttons/RightButton";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { CategoriesContext } from "@/providers/CategoriesProvider";
import { useParams } from "next/navigation";

const CatalogSlider = () => {
  const locale = useParams().locale;

  const [catalogIndex, setCatalogIndex] = useState(0);
  const [width, setWidth] = useState(null);

  const ref = useRef(null);

  const categories = useContext(CategoriesContext);

  const { t } = useTranslation();

  useEffect(() => {
    const width = document.documentElement.clientWidth;
    setWidth(width);
  }, []);
  const slidesCount = width <= 768 ? 1 : width <= 992 ? 2 : 3;

  const handleSlideSwitch = (e) => {
    if (e.currentTarget.dataset?.type == "dot") {
      setCatalogIndex(Number(e.currentTarget.dataset?.index));
    } else if (e.currentTarget.dataset?.type == "left-button") {
      setCatalogIndex((curIndex) => {
        if (curIndex <= 0) {
          return 0;
        }
        ref.current.slickPrev();
        return curIndex - 1;
      });
    } else if (e.currentTarget.dataset?.type == "right-button") {
      setCatalogIndex((curIndex) => {
        if (curIndex >= categories.length - 1 - (slidesCount - 1)) {
          return categories.length - 1;
        }
        ref.current.slickNext();
        return curIndex + 1;
      });
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: width ? slidesCount : 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (c, n) => setCatalogIndex(n),
  };

  return (
    <div className={`${styles["caltalog-slider"]} home-catalog-slider-slick`}>
      <Slider {...settings} ref={ref}>
        {categories.map((item) => (
          <div
            key={item.id}
            className={styles["catalog-slider__slide"]}
            //  style={{translate: `-${106 * catalogIndex}%`}}
          >
            <div className={styles["slide__text"]}>
              <div>
                <h4>{item.name}</h4>
                <ul>
                  {item.subcategories.slice(0, 8).map((cat) => (
                    <li key={cat.id}>
                      <Link href={`/catalog/${cat.slug}/`}>
                        {cat?.translations[locale]?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className={styles["catalog-slider__link"]}
                href={"/catalog/"}
              >
                {t("home:catalog.button")}
                <span className={styles["catalog-slider__link-arrow"]}></span>
              </Link>
            </div>
            <div className={styles["catalog-slider__pic"]}>
              {item.img && (
                <img src={process.env.BACK_URL + "/media/" + item?.img} />
              )}
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles["catalog-slider__buttons"]}>
        <LeftButton action={handleSlideSwitch} disabled={catalogIndex <= 0} />
        <RightButton
          action={handleSlideSwitch}
          disabled={catalogIndex >= categories.length - 1 - (slidesCount - 1)}
        />
      </div>
    </div>
  );
};

export default CatalogSlider;
