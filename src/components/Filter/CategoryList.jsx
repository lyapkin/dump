import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SubCategory from "./SubCategory";
import HideCategoryItemButton from "./HideCategoryItemButton";

import styles from "./filter.module.css";

const CategoryList = ({ categories, currentCat }) => {
  const locale = useParams().locale;

  const [isCategoriesItemClosed, setIsCategoriesItemClosed] = useState(
    categories.reduce((state, cat) => ({ ...state, [cat.id]: true }), {})
  );

  useEffect(() => {
    setIsCategoriesItemClosed((prev) => {
      return categories.reduce((state, cat) => {
        const obj = {
          ...state,
        };
        const chosen = cat.subcategories.find((s) => currentCat === s.slug);
        obj[cat.id] = chosen ? false : true;
        return obj;
      }, {});
    });
  }, [currentCat]);

  return (
    <div className={styles["filters__categories-list"]}>
      {categories.map((cat) => (
        <div key={cat.id} className={styles["filters__categories-item"]}>
          <HideCategoryItemButton
            cat={cat}
            isCategoriesItemClosed={isCategoriesItemClosed}
            setIsCategoriesItemClosed={setIsCategoriesItemClosed}
          />
          <div
            className={`${
              isCategoriesItemClosed[cat.id]
                ? styles["filters__subcategories-list_closed"]
                : styles["filters__subcategories-list"]
            }`}
          >
            {cat.subcategories.map(
              (sub) =>
                locale in sub.translations && (
                  <SubCategory catSlug={cat.slug} sub={sub} key={sub.id} />
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
