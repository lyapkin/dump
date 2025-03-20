"use client";
import React from "react";

import styles from "@/styles/home.module.css";
import Block from "./Block";
import useReputationData from "@/hooks/useReputationData";

const ReputationBlocks = () => {
  const data = useReputationData();
  return (
    <div className={styles["home-reputation__blocks"]}>
      {data.map((d) => (
        <Block key={d.id} data={d} />
      ))}
    </div>
  );
};

// const data = [
//     {
//         id: 1,
//         img: '/images/reputation/pen-paper-icon.svg',
//         title: 'Участник реестра добросовестных поставщиков с 2010 года.',
//         text: 'Мы более 14 лет входим в реестр добросовестных поставщиков'
//     },
//     {
//         id: 2,
//         img: '/images/reputation/bricks-icon.svg',
//         title: 'Поставляли комплектующие на ведущие стройки страны',
//         text: 'Нам доверяют комплектацию своих строительных объектов такие компании как Газпром, Tekfen Construction, ИНТЕР РАО, Yamata, СИБУР, Renaissance construction, Велесстрой и многие другие.'
//     },
//     {
//         id: 3,
//         img: '/images/reputation/gear-icon.svg',
//         title: 'Широкий ассортимент продукции и система контроля качества',
//         text: 'Поставляем хомуты и комплектующие для строительных лесов и опалубки на ведущие стройки страны, в их числе Амурский ГПЗ, Ямал СПГ, Тобольск Полимер, Газопровод в ЯМАО, Комплекс Арктик СПГ-2, Харампурское месторождение.'
//     },
//     {
//         id: 4,
//         img: '/images/reputation/box-icon.svg',
//         title: '3 Склада на территории РФ',
//         text: 'Мы имеем 3 складских помещения в РФ что помогает нам обеспечивать доставку в кратчайшие сроки'
//     },
// ]

export default ReputationBlocks;
