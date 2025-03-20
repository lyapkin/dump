"use client";
import React, { useRef, useState } from "react";
import Button from "../UI/Buttons/Button";

import styles from "./slider.module.css";
import LeftButton from "../UI/Buttons/LeftButton";
import RightButton from "../UI/Buttons/RightButton";
import useProjectsData from "@/hooks/useProjectsData";
import Slider from "react-slick";

const ProjectsSlider = () => {
  const [picIndex, setPicIndex] = useState(0);
  const ref = useRef(null);

  const projects = useProjectsData();

  const handleSlideSwitch = (e) => {
    const target = e.currentTarget;

    if (target.dataset?.type == "left-button") {
      setPicIndex((curIndex) => {
        ref.current.slickPrev();
        if (curIndex <= 0) {
          return projects.length - 1;
        }
        return curIndex - 1;
      });
    } else if (target.dataset?.type == "right-button") {
      setPicIndex((curIndex) => {
        ref.current.slickNext();
        if (curIndex >= projects.length - 1) {
          return 0;
        }
        return curIndex + 1;
      });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (c, n) => setPicIndex(n),
  };

  return (
    <div className={styles["projects-slider"]}>
      <div className={styles["projects-slider-window"]}>
        {/* <div className={styles['projects-slider-block']}> */}
        <Slider {...settings} ref={ref}>
          {projects.map((item, index) => (
            <div
              key={item.id}
              className={styles["project-slide"]}
              style={{ translate: `${-100 * picIndex}%` }}
            >
              <div className={styles["project-slide__img"]}>
                <img src={item.img} />
              </div>
              <div className={styles["project-slide__info"]}>
                <h3 className={styles["project-slide__title"]}>{item.title}</h3>
                <p className={styles["project-slide__location"]}>
                  {item.location}
                </p>
                <p className={styles["project-slide__description"]}>
                  {item.description}
                </p>
                {/* <span className={styles['project-slide__date']}>{item.date}</span> */}
                {item.logo ? (
                  <img
                    className={styles["project-slide__logo"]}
                    src={item.logo}
                  />
                ) : (
                  <span className={styles["project-slide__company-name"]}>
                    {item.company}
                  </span>
                )}
                {/* <div className={styles['project-slide__button']}>
                                    <Button text='Подробнее об объекте' smallFont={true} />
                                </div> */}
              </div>
            </div>
          ))}
        </Slider>
        {/* </div> */}
        <div className={styles["project-slider__buttons"]}>
          <LeftButton action={handleSlideSwitch} />
          <RightButton action={handleSlideSwitch} />
        </div>
      </div>
      <div className={styles["projects-slider__progress-bar"]}>
        <div
          className={styles["projects-slider__progress-filled"]}
          style={{ width: `${((picIndex + 1) / projects.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

// const ProjectsSlider = () => {
//     const [picIndex, setPicIndex] = useState(0)

//     const projects = useProjectsData()

//     const handleSlideSwitch = (e) => {
//         const target = e.currentTarget

//         if (target.dataset?.type == 'left-button') {
//             setPicIndex(curIndex => {
//                 if(curIndex <= 0) {
//                     return 0
//                 }
//                 return curIndex - 1
//             })
//         } else if (target.dataset?.type == 'right-button') {
//             setPicIndex(curIndex => {
//                 if(curIndex >= projects.length - 1) {
//                     return projects.length - 1
//                 }
//                 return curIndex + 1
//             })
//         }
//     }

//     return (
//         <div className={styles['projects-slider']}>
//             <div className={styles['projects-slider-window']}>
//                 <div className={styles['projects-slider-block']}>
//                     {projects.map((item, index) => (
//                         <div key={item.id} className={styles['project-slide']} style={{translate: `${-100 * picIndex}%`}} >
//                             <div className={styles['project-slide__img']}>
//                                 <img src={item.img} />
//                             </div>
//                             <div className={styles['project-slide__info']}>
//                                 <h3 className={styles['project-slide__title']}>{item.title}</h3>
//                                 <p className={styles['project-slide__location']}>{item.location}</p>
//                                 <p className={styles['project-slide__description']}>{item.description}</p>
//                                 {/* <span className={styles['project-slide__date']}>{item.date}</span> */}
//                                 {item.logo ? <img className={styles['project-slide__logo']} src={item.logo} /> :
//                                              <span className={styles['project-slide__company-name']}>{item.company}</span>}
//                                 {/* <div className={styles['project-slide__button']}>
//                                     <Button text='Подробнее об объекте' smallFont={true} />
//                                 </div> */}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className={styles['project-slider__buttons']}>
//                     <LeftButton action={handleSlideSwitch} disabled={picIndex <= 0}/>
//                     <RightButton action={handleSlideSwitch} disabled={picIndex >= projects.length-1}/>
//                 </div>
//             </div>
//             <div className={styles['projects-slider__progress-bar']}>
//                 <div className={styles['projects-slider__progress-filled']} style={{width: `${((picIndex+1) / projects.length) * 100}%`}}></div>
//             </div>
//         </div>
//     )
// }

// const projects = [
//     {
//         id: 1,
//         img: '/images/home-projects-slider/gazprom-amur.jpg',
//         title: 'Строительство Амурского Газоперерабатывающий завода',
//         location: 'г. Свободный',
//         description: 'Поставка строительных лесов, опалубки и комплектующих, 2021-2027г. Поставка строительных лесов, опалубки',
//         // date: '15.08.2023',
//         company: 'ГАЗПРОМ',
//         logo: '/images/gazprom-logo.png',
//         link: '#'
//     },
//     {
//         id: 2,
//         img: '/images/home-projects-slider/sibur-tobolsk.jpg',
//         title: 'Строительство промышленного комплекса "Тобольск Полимер"',
//         location: 'г. Тобольск',
//         description: 'Поставка хомутов и комплектующих к строительным лесам 20ХХ г.',
//         // date: '15.08.2023',
//         company: 'СИБУР',
//         logo: '/images/gov-clients/sibur-logo.png',
//         link: '#'
//     },
//     {
//         id: 3,
//         img: '/images/home-projects-slider/novatek-yamal.jpg',
//         title: 'Строительство промышленного комплекса "Ямал СПГ"',
//         location: 'полуостров Ямал',
//         description: 'Поставка хомутов и комплектующих к строительным лесам 2018 г.',
//         // date: '15.08.2023',
//         company: 'НОВАТЭК',
//         logo: null,
//         link: '#'
//     },
//     {
//         id: 4,
//         img: '/images/home-projects-slider/novatek-murmansk.jpg',
//         title: 'Строительство комплекса "Арктитк СПГ-2"',
//         location: 'г. Мурманск',
//         description: 'Поставка хомутов и комплектующих к строительным лесам 2019-2021 г.',
//         // date: '15.08.2023',
//         company: 'НОВАТЭК',
//         logo: null,
//         link: '#'
//     },
//     {
//         id: 5,
//         img: '/images/home-projects-slider/gazprom-yamal-euro-2.jpg',
//         title: 'Строительство Газопровода "Ямал-Европа-2"',
//         location: null,
//         description: 'Поставка хомутов и комплектующих к строительным лесам 2019 г.',
//         // date: '15.08.2023',
//         company:'ГАЗПРОМ',
//         logo: '/images/gazprom-logo.png',
//         link: '#'
//     },
//     {
//         id: 6,
//         img: '/images/home-projects-slider/rusfen-yanao.jpg',
//         title: 'Освоение Харампурского месторождения',
//         location: 'ЯНАО',
//         description: 'Поставка Шпунта Ларсена и лесоматериала 2020-2021 г.',
//         // date: '15.08.2023',
//         company: 'РУСФЕН',
//         logo: null,
//         link: '#'
//     },
//     {
//         id: 7,
//         img: '/images/home-projects-slider/velstroy-omsk.jpg',
//         title: 'Строительство Омского НПЗ',
//         location: 'г. Омск',
//         description: 'Поставка строительных лесов и комплектующих. 2018-2021г.',
//         // date: '15.08.2023',
//         company: 'ВЕЛЕССТРОЙ',
//         logo: null,
//         link: '#'
//     },
//     {
//         id: 8,
//         img: '/images/home-projects-slider/velstroy-nizh-nov.jpg',
//         title: 'Строительство НПЗ в Нижнем Новгороде',
//         location: 'г. Нижний Новгород',
//         description: 'Поставка строительных лесов и комплектующих, 2018-2022г.',
//         // date: '15.08.2023',
//         company: 'ВЕЛЕССТРОЙ',
//         logo: null,
//         link: '#'
//     },
//     {
//         id: 9,
//         img: '/images/home-projects-slider/velstroy-shalin.jpg',
//         title: 'Строительство дожимной компрессорной станции на о.Сахалин',
//         location: 'о. Сахалин',
//         description: 'Поставка строительных лесов и комплектующих, 2019г.',
//         // date: '15.08.2023',
//         company: 'ВЕЛЕССТРОЙ',
//         logo: null,
//         link: '#'
//     },
//     {
//         id: 10,
//         img: '/images/home-projects-slider/esta-svobodniy.jpg',
//         title: 'Строительство Амурского газохимического комплекса',
//         location: 'г. Свободный',
//         description: 'Поставка строительных лесов, труб, опалубки и комплектующих, 2021-2024г.',
//         // date: '15.08.2023',
//         company: 'ЭСТА КОНСТРАКШЕН',
//         logo: '/images/gov-clients/esta-logo.png',
//         link: '#'
//     },
//     {
//         id: 11,
//         img: '/images/home-projects-slider/innova-irkutsk.jpg',
//         title: 'Строительство Иркутского завода полимеров',
//         location: 'г. Иркутск',
//         description: 'Поставка строительных лесов, труб, опалубки и комплектующих, 2023г.',
//         // date: '15.08.2023',
//         company: 'ИННОВА КОНСТРАКШЕН',
//         logo: '/images/gov-clients/innova-logo.png',
//         link: '#'
//     },
//     {
//         id: 12,
//         img: '/images/home-projects-slider/cncec-kingisep.jpg',
//         title: 'Строительство Балтийского газохимического комплекса',
//         location: 'г. Кингисепп',
//         description: 'Поставка строительных лесов и комплектующих, 2018-2022г.',
//         // date: '15.08.2023',
//         company: 'CNCEC7',
//         logo: '/images/gov-clients/cncec.png',
//         link: '#'
//     },
// ]

export default ProjectsSlider;
