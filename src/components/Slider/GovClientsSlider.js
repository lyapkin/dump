"use client";
import React, { useEffect, useRef, useState } from "react";

import styles from "./slider.module.css";
import LeftButton from "../UI/Buttons/LeftButton";
import RightButton from "../UI/Buttons/RightButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GovClientsSlider = () => {
  const [picIndex, setPicIndex] = useState(0);
  const [width, setWidth] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const width = document.documentElement.clientWidth;
    setWidth(width);
  }, []);

  const slidesCount =
    width <= 768
      ? 2
      : width <= 992
      ? 3
      : width <= 1200
      ? 4
      : width <= 1450
      ? 5
      : 6;

  const handleSlideSwitch = (e) => {
    const target = e.currentTarget;

    if (target.dataset?.type == "left-button") {
      setPicIndex((curIndex) => {
        // if (curIndex <= 0) {
        //     return 0;
        // }
        ref.current.slickPrev();
        return curIndex - 1;
      });
    } else if (target.dataset?.type == "right-button") {
      setPicIndex((curIndex) => {
        // if (curIndex >= logos.length - 1 - (slidesCount - 1)) {
        //     return logos.length - 1;
        // }
        ref.current.slickNext();
        return curIndex + 1;
      });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: width ? slidesCount : 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (c, n) => setPicIndex(n),
  };

  return (
    <div
      className={`${styles["gov-clients-slider"]} home-catalog-slider-slick`}
    >
      <div className={styles["gov-clients-slider-window"]}>
        {/* <div className={styles["gov-clients-slider-block"]}> */}
        <Slider {...settings} ref={ref}>
          {logos.map((item, index) => (
            <div
              key={item.id}
              className={styles["gov-clients-slide__wrapper"]}
              // style={{ translate: `${-percent * picIndex}%` }}
            >
              <div key={item.id} className={styles["gov-clients-slide"]}>
                <img
                  className={styles["gov-clients-slide__img"]}
                  src={item.img}
                />
              </div>
            </div>
          ))}
        </Slider>
        {/* </div> */}
        <div className={styles["gov-clients-slider__buttons"]}>
          <LeftButton
            action={handleSlideSwitch}
            // disabled={picIndex <= 0}
          />
          <RightButton
            action={handleSlideSwitch}
            // disabled={
            //     picIndex >= logos.length - 1 - (slidesCount - 1)
            // }
          />
        </div>
      </div>
    </div>
  );
};

const logos = [
  {
    id: 1,
    img: "/images/gov-clients/gazprom-logo.png",
  },
  {
    id: 2,
    img: "/images/gov-clients/tc-logo.png",
  },
  {
    id: 3,
    img: "/images/gov-clients/enter-engineering-logo.png",
  },
  {
    id: 4,
    img: "/images/gov-clients/yamata-logo.png",
  },
  {
    id: 5,
    img: "/images/gov-clients/sibur-logo.png",
  },
  {
    id: 6,
    img: "/images/gov-clients/renaissance-logo.png",
  },
  {
    id: 7,
    img: "/images/gov-clients/tco-logo.png",
  },
  {
    id: 8,
    img: "/images/gov-clients/cncec.png",
  },
  {
    id: 9,
    img: "/images/gov-clients/esta-logo.png",
  },
  {
    id: 10,
    img: "/images/gov-clients/ict-logo.png",
  },
  {
    id: 11,
    img: "/images/gov-clients/velstroy-logo.png",
  },
  {
    id: 12,
    img: "/images/gov-clients/innova-logo.png",
  },
];

export default GovClientsSlider;
