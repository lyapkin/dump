"use client";

import s from "@/styles/faq.module.css";
import { useState } from "react";
import FaqTabsItem from "./FaqTabsItem";

export default function FaqTabs({ setActiveCategory, tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabHandler = (category) => {
    setActiveCategory(category);
    setActiveTab(category);
  };

  return (
    <ul className={s.filters}>
      <FaqTabsItem
        tab={{ name: "Все", id: 0 }}
        active={activeTab}
        onClick={() => tabHandler(0)}
      />
      {tabs.map((tab, i) => {
        return (
          <FaqTabsItem
            tab={tab}
            active={activeTab}
            onClick={() => tabHandler(tab.id)}
            key={tab.name}
          />
        );
      })}
    </ul>
  );
}
