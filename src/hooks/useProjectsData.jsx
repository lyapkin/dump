import { useMemo } from "react";

const { useTranslation } = require("react-i18next");

const useProjectsData = () => {
  const { t } = useTranslation();

  const data = useMemo(() => [
    {
      id: 1,
      img: "/images/home-projects-slider/gazprom-amur.jpg",
      title: t("home:projects.project1_title"),
      location: t("home:projects.project1_city"),
      description: t("home:projects.project1_text"),
      company: "ГАЗПРОМ",
      logo: "/images/gazprom-logo.png",
      link: "#",
    },
    {
      id: 2,
      img: "/images/home-projects-slider/sibur-tobolsk.jpg",
      title: t("home:projects.project2_title"),
      location: t("home:projects.project2_city"),
      description: t("home:projects.project2_text"),
      company: "СИБУР",
      logo: "/images/gov-clients/sibur-logo.png",
      link: "#",
    },
    {
      id: 3,
      img: "/images/home-projects-slider/novatek-yamal.jpg",
      title: t("home:projects.project3_title"),
      location: t("home:projects.project3_city"),
      description: t("home:projects.project3_text"),
      company: "НОВАТЭК",
      logo: null,
      link: "#",
    },
    {
      id: 4,
      img: "/images/home-projects-slider/novatek-murmansk.jpg",
      title: t("home:projects.project4_title"),
      location: t("home:projects.project4_city"),
      description: t("home:projects.project4_text"),
      company: "НОВАТЭК",
      logo: null,
      link: "#",
    },
    {
      id: 5,
      img: "/images/home-projects-slider/gazprom-yamal-euro-2.jpg",
      title: t("home:projects.project5_title"),
      location: t("home:projects.project5_city"),
      description: t("home:projects.project5_text"),
      company: "ГАЗПРОМ",
      logo: "/images/gazprom-logo.png",
      link: "#",
    },
    {
      id: 6,
      img: "/images/home-projects-slider/rusfen-yanao.jpg",
      title: t("home:projects.project6_title"),
      location: t("home:projects.project6_city"),
      description: t("home:projects.project6_text"),
      company: "РУСФЕН",
      logo: null,
      link: "#",
    },
    {
      id: 7,
      img: "/images/home-projects-slider/velstroy-omsk.jpg",
      title: t("home:projects.project7_title"),
      location: t("home:projects.project7_city"),
      description: t("home:projects.project7_text"),
      company: "ВЕЛЕССТРОЙ",
      logo: null,
      link: "#",
    },
    {
      id: 8,
      img: "/images/home-projects-slider/velstroy-nizh-nov.jpg",
      title: t("home:projects.project8_title"),
      location: t("home:projects.project8_city"),
      description: t("home:projects.project8_text"),
      company: "ВЕЛЕССТРОЙ",
      logo: null,
      link: "#",
    },
    {
      id: 9,
      img: "/images/home-projects-slider/velstroy-shalin.jpg",
      title: t("home:projects.project9_title"),
      location: t("home:projects.project9_city"),
      description: t("home:projects.project9_text"),
      company: "ВЕЛЕССТРОЙ",
      logo: null,
      link: "#",
    },
    {
      id: 10,
      img: "/images/home-projects-slider/esta-svobodniy.jpg",
      title: t("home:projects.project10_title"),
      location: t("home:projects.project10_city"),
      description: t("home:projects.project10_text"),
      company: "ЭСТА КОНСТРАКШЕН",
      logo: "/images/gov-clients/esta-logo.png",
      link: "#",
    },
    {
      id: 11,
      img: "/images/home-projects-slider/innova-irkutsk.jpg",
      title: t("home:projects.project11_title"),
      location: t("home:projects.project11_city"),
      description: t("home:projects.project11_text"),
      company: "ИННОВА КОНСТРАКШЕН",
      logo: "/images/gov-clients/innova-logo.png",
      link: "#",
    },
    {
      id: 12,
      img: "/images/home-projects-slider/cncec-kingisep.jpg",
      title: t("home:projects.project12_title"),
      location: t("home:projects.project12_city"),
      description: t("home:projects.project12_text"),
      company: "CNCEC7",
      logo: "/images/gov-clients/cncec.png",
      link: "#",
    },
  ]);

  return data;
};

export default useProjectsData;
