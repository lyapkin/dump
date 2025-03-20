"use client";
import { useEffect, useRef, useState } from "react";

import s from "./product.module.css";
import ProductPicture from "./ProductPicture";
import ProductMainPopupSlider from "./ProductMainPopupSlider";
import Slider from "react-slick";
import ProductSliderBtn from "./ProductSliderBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImgs = ({ imgs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const mainSliderRef = useRef(null);
  const secodarySliderRef = useRef(null);
  const popupSliderRef = useRef(null);

  useEffect(() => {
    setNav1(mainSliderRef.current);
    setNav2(secodarySliderRef.current);
  }, []);

  const afterChange = (i) => {
    setCurrentSlide(i);
  };

  const handleNextSlide = () => {
    mainSliderRef.current.slickNext();
    if (popupSliderRef.current) {
      popupSliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    mainSliderRef.current.slickPrev();
    if (popupSliderRef.current) {
      popupSliderRef.current.slickPrev();
    }
  };

  return imgs.length > 0 ? (
    <div className={s["imgs"]}>
      <div className={s["imgs__secondary-slider"]}>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (secodarySliderRef.current = slider)}
          slidesToShow={imgs.length >= 3 ? 3 : imgs.length}
          swipeToSlide={true}
          focusOnSelect={true}
          vertical={true}
          verticalSwiping={true}
          arrows={false}
        >
          {imgs.map((item) => (
            <div className={s["secondary-slider__img-wrapper"]} key={item.id}>
              <ProductPicture src={"/media/" + item.img_url} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={s["imgs__main-slider"]}>
        <ProductMainPopupSlider
          slider={
            <Slider
              asNavFor={nav2}
              ref={(slider) => (mainSliderRef.current = slider)}
              style={{ height: "100%" }}
              adaptiveHeight={true}
              className="slick-slider-product"
              arrows={false}
              afterChange={afterChange}
            >
              {imgs.map((item) => (
                <ProductPicture key={item.id} src={"/media/" + item.img_url} />
              ))}
            </Slider>
          }
          popupSlider={
            <Slider
              asNavFor={nav1}
              ref={(slider) => (popupSliderRef.current = slider)}
              initialSlide={currentSlide}
              style={{ height: "100%" }}
              adaptiveHeight={true}
              className="slick-slider-product"
              arrows={false}
            >
              {imgs.map((item) => (
                <ProductPicture key={item.id} src={"/media/" + item.img_url} />
              ))}
            </Slider>
          }
          buttons={
            <>
              <span className={s["product-slider__btn-left"]}>
                <ProductSliderBtn onClick={handlePrevSlide} />
              </span>
              <span className={s["product-slider__btn-right"]}>
                <ProductSliderBtn onClick={handleNextSlide} />
              </span>
            </>
          }
        />
      </div>
    </div>
  ) : (
    <ProductPicture src={"/images/noimage.jpg"} />
  );
};

export default ProductImgs;
