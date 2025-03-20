"use client";

import s from "@/styles/faq.module.css";
import { useState } from "react";

export default function FaqItem({
  children,
  category,
  activeCategory,
  question,
}) {
  const [active, setActive] = useState(false);

  return (
    <>
      {activeCategory === 0 && (
        <div className={s.item}>
          <h4 className={s.item_title} onClick={() => setActive(!active)}>
            {question}
          </h4>
          <img src="/svgs/arrow-bottom-grey.svg" alt="" />
          {active && children}
        </div>
      )}
      {category.includes(activeCategory) && (
        <div className={s.item}>
          <h4 className={s.item_title} onClick={() => setActive(!active)}>
            {question}
          </h4>
          <img src="/svgs/arrow-bottom-grey.svg" alt="" />
          {active && children}
        </div>
      )}
    </>
  );
}
