"use client";
import React from "react";

import styles from "@/styles/home.module.css";
import Achivement from "./Achivement";
import useAboutAchievementsData from "@/hooks/useAboutAchievementsData";

const AboutAchievements = () => {
  const data = useAboutAchievementsData();
  return (
    <div className={styles["home-about__achivements"]}>
      {data.map((item) => (
        <Achivement data={item} key={item.id} />
      ))}
    </div>
  );
};

// const data = [
//     {
//         id: 1,
//         count: '1 000 000',
//         type: 'единиц товаров',
//         text: 'Хомутов и комплектующих в наличии на складах в Москве'
//     },
//     {
//         id: 2,
//         count: '1 800',
//         type: 'тонн',
//         text: 'Общий вес складского запаса'
//     },
//     {
//         id: 3,
//         count: '500',
//         type: 'Постоянных партнеров',
//         text: 'Мы имеем партнерские отношения с более 150 предприятиями на територии РФ и СНГ'
//     },
//     {
//         id: 4,
//         count: '14',
//         type: 'Производственных линий',
//         text: 'На нашем производстве имеется 14  производственных линий оснащеных передовым оборудованием'
//     }
// ]

export default AboutAchievements;
