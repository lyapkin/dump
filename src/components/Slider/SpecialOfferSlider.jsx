"use client";
import React, { useEffect, useState } from "react";

import styles from "./slider.module.css";
import Button from "../UI/Buttons/Button";
import LeftButton from "../UI/Buttons/LeftButton";
import RightButton from "../UI/Buttons/RightButton";

const SpecialOfferSlider = () => {
  const [promos, setPromos] = useState([]);

  const getPromos = async () => {
    const response = await fetch(process.env.API_URL + "/promos/");
    if (!response.ok) {
      throw new Error(response.status + " не удалось получить список акций");
    }
    const data = await response.json();
    setPromos(data);
  };

  useEffect(() => {
    getPromos();
  }, []);

  const [offerIndex, setOfferIndex] = useState(0);

  const handleSlideSwitch = (e) => {
    if (e.currentTarget.dataset?.type == "dot") {
      setOfferIndex(Number(e.currentTarget.dataset?.index));
    } else if (e.currentTarget.dataset?.type == "left-button") {
      setOfferIndex((curIndex) => {
        if (curIndex <= 0) {
          return 0;
        }
        return curIndex - 1;
      });
    } else if (e.currentTarget.dataset?.type == "right-button") {
      setOfferIndex((curIndex) => {
        if (curIndex >= promos.length - 1) {
          return promos.length - 1;
        }
        return curIndex + 1;
      });
    }
  };

  return (
    promos.length !== 0 && (
      <div className={`${styles["special-offer-slider"]}`}>
        <div className={styles["special-offer-slider-window"]}>
          {promos.map((item) => (
            <div
              key={item.id}
              className={styles["special-offer__slide"]}
              style={{ translate: `${-100 * offerIndex}%` }}
            >
              <div className={styles["special-offer__about"]}>
                <div className={styles["special-offer-about__date"]}>
                  <img src="/svgs/calendar-icon.svg" />
                  Действует до{" "}
                  {new Date(item.last_day).toLocaleDateString("ru-RU")}
                </div>
                <h2 className={styles["special-offer-about__title"]}>
                  {item.title}
                </h2>
                <div className={styles["special-offer-about__text"]}>
                  {item.additional_text}
                </div>
              </div>
              <div className={styles["special-offer__img"]}>
                <img src={item.img} />
              </div>
              <div className={styles["special-offer__plus"]}>
                {/* <p><span>Забронируйте позицию через</span> <span>наш сайт и получите:</span></p> */}
                <p>{item.bonus.condition}</p>
                <ul>
                  <li>{item.bonus.bonus1}</li>
                  {item.bonus.bonus2 && <li>{item.bonus.bonus2}</li>}
                  {item.bonus.bonus2 && <li>{item.bonus.bonus3}</li>}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["special-offer-about__actions"]}>
          <Button text={"Заказать деталь"} />
          <div className={styles["special-offer__buttons"]}>
            <LeftButton action={handleSlideSwitch} disabled={offerIndex <= 0} />
            <RightButton
              action={handleSlideSwitch}
              disabled={offerIndex >= promos.length - 1}
            />
          </div>
        </div>
        <div className={styles["special-offer-slider__dots-controll-bg"]}></div>
        <div className={styles["special-offer-slider__dots-controll"]}>
          {promos.map((item, index) => (
            <button
              key={item.id}
              className={`${styles["special-offer-slider__dot"]} ${
                index == offerIndex && styles["current"]
              }`}
              data-type="dot"
              data-index={index}
              onClick={handleSlideSwitch}
            >
              <span></span>
            </button>
          ))}
        </div>
      </div>
    )
  );
};

// const offers = [
//     {
//         id: 1,
//         date: '10.09.2024',
//         title: '-25% на комплексную поставку хомутов до 6000 единиц в 1 поставке',
//         text: 'Оформите заявку на комплексную поставку хомутов до 10.09.2024',
//         img: '/images/special-offer/special-offer-1.png'
//     },
//     {
//         id: 2,
//         date: '20.11.2024',
//         title: '-15% на комплексную поставку хомутов до 6000 единиц в 1 поставке',
//         text: 'Оформите заявку на комплексную поставку хомутов до 20.11.2024',
//         img: '/images/special-offer/special-offer-1.png'
//     },
//     {
//         id: 3,
//         date: '24.11.2024',
//         title: '-35% на комплексную поставку хомутов до 6000 единиц в 1 поставке',
//         text: 'Оформите заявку на комплексную поставку хомутов до 24.11.2024',
//         img: '/images/special-offer/special-offer-1.png'
//     }
// ]

export default SpecialOfferSlider;
