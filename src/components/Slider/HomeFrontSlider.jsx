"use client";
import React, { useRef, useState } from "react";

import styles from "./slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const HomeFrontSlider = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const lastSlide = imgs.length - 1;

  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    beforeChange: (c, n) => setCurrentSlide(n),
  };
  return (
    <div className={styles["home-front-slider"]}>
      <div className={styles["home-front-slider__window"]}>
        <Slider {...settings} ref={ref}>
          {imgs.map((i) => (
            <div className={styles["home-front-slider__slide"]} key={i.id}>
              <Image
                src={i.img}
                width={700}
                height={700}
                alt="хомут"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className={styles['home-front-slider__buttons']}>
                <button className={`${styles['home-front-slider__btn']} ${currentSlide === 0 && styles['disabled']}`}
                        onClick={handlePrevSlide}>
                    <svg width="52" height="10" viewBox="0 0 52 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M0.646671 5.40776C0.421474 5.18256 0.421474 4.81744 0.646671 4.59225L4.31648 0.922437C4.54168 0.697239 4.9068 0.697239 5.132 0.922437C5.35719 1.14763 5.35719 1.51275 5.132 1.73795L1.86994 5L5.132 8.26206C5.35719 8.48725 5.35719 8.85237 5.132 9.07757C4.9068 9.30277 4.54168 9.30277 4.31648 9.07757L0.646671 5.40776ZM51.8652 5.57666L1.05443 5.57666L1.05443 4.42335L51.8652 4.42334L51.8652 5.57666Z" fill="currentColor"/>
                    </svg>
                    {t('home:main.prev')}
                </button>
                <button className={`${styles['home-front-slider__btn']} ${currentSlide === lastSlide && styles['disabled']}`}
                        onClick={handleNextSlide}>
                    {t('home:main.next')}
                    <svg width="52" height="10" viewBox="0 0 52 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.3533 5.40776C51.5785 5.18256 51.5785 4.81744 51.3533 4.59225L47.6835 0.922437C47.4583 0.697239 47.0932 0.697239 46.868 0.922437C46.6428 1.14763 46.6428 1.51275 46.868 1.73795L50.1301 5L46.868 8.26206C46.6428 8.48725 46.6428 8.85237 46.868 9.07757C47.0932 9.30277 47.4583 9.30277 47.6835 9.07757L51.3533 5.40776ZM0.134766 5.57666L50.9456 5.57666L50.9456 4.42335L0.134766 4.42334L0.134766 5.57666Z" fill="currentColor"/>
                    </svg>
                </button>
            </div> */}
    </div>
  );
};

const imgs = [
  {
    id: 1,
    img: "/images/front-slider/homut1.png",
  },
  // {
  //     id: 2,
  //     img: '/images/front-slider/homut1.png'
  // }
];

export default HomeFrontSlider;
