"use client";

import FaqItem from "./FaqItem";
import FaqTabs from "./FaqTabs";
import s from "@/styles/faq.module.css";
import { useState } from "react";

export default function FaqContent({ items }) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <div className={s.top}>
        <h2 className={s.title}>FAQ (Вопрос - ответ)</h2>
        <FaqTabs
          setActiveCategory={setActiveCategory}
          tabs={items.categories}
        />
      </div>
      <div className={s.content}>
        {items.faqs.map(({ question, answer, categories, id }) => {
          return (
            <FaqItem
              category={categories}
              activeCategory={activeCategory}
              question={question}
              key={id}
            >
              <div className={s.item__content}>
                <p
                  className={s.text}
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></p>
              </div>
            </FaqItem>
          );
        })}
      </div>
    </>
  );
}
