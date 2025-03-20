"use client";
import { useEffect, useRef, useState } from "react";

import s from "./thanks.module.css";
import RightButton from "../../UI/Buttons/RightButton";
import LeftButton from "../../UI/Buttons/LeftButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Letter from "./Letter";
import PopupLetter from "./PopupLetter";

const ThanksSlider = () => {
  const [picIndex, setPicIndex] = useState(0);
  const [width, setWidth] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const width = document.documentElement.clientWidth;
    setWidth(width);
  }, []);
  const slidesCount =
    width <= 768 ? 1 : width <= 992 ? 2 : width <= 1450 ? 3 : 4;

  const handleSlideSwitch = (e) => {
    const target = e.currentTarget;

    if (target.dataset?.type == "left-button") {
      setPicIndex((curIndex) => {
        if (curIndex <= 0) {
          return 0;
        }
        ref.current.slickPrev();
        return curIndex - 1;
      });
    } else if (target.dataset?.type == "right-button") {
      setPicIndex((curIndex) => {
        if (curIndex >= letters.length - 1 - (slidesCount - 1)) {
          return letters.length - 1;
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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, n) => setPicIndex(n),
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={s["letters"]}>
      <Slider {...settings} ref={ref}>
        {letters.map((item) => (
          <PopupLetter key={item.id} letter={<Letter url={item.img} />} />
        ))}
      </Slider>
      <span className={s["letters-slider__btn-left"]}>
        <LeftButton action={handleSlideSwitch} disabled={picIndex <= 0} />
      </span>
      <span className={s["letters-slider__btn-right"]}>
        <RightButton
          action={handleSlideSwitch}
          disabled={picIndex >= letters.length - 1 - (slidesCount - 1)}
        />
      </span>
    </div>
  );
};

const letters = [
  {
    id: 1,
    img: "/images/thanks-letters/1.jpg",
  },
  {
    id: 2,
    img: "/images/thanks-letters/2.jpg",
  },
  {
    id: 3,
    img: "/images/thanks-letters/3.jpg",
  },
  {
    id: 4,
    img: "/images/thanks-letters/4.jpg",
  },
  {
    id: 5,
    img: "/images/thanks-letters/5.jpg",
  },
];

export default ThanksSlider;
