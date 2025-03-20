"use client";
import { useContext, useEffect, useRef, useState } from "react";

import styles from "./Header.module.css";
import TabsContentBlock from "./TabsContentBlock";
import CartTab from "./CartTab";
import { CategoriesContext } from "@/providers/CategoriesProvider";
import CatalogLink from "./CatalogLink";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const ref = useRef(null);

  const categories = useContext(CategoriesContext);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setActiveTab(null);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const displayList = categories.map((item) => (
    <li
      key={item.id}
      className={
        activeTab === item.id ? styles["header-tabs__tab_active"] : null
      }
    >
      <button
        onClick={() =>
          setActiveTab((prev) => (prev === item.id ? null : item.id))
        }
      >
        {item.name}
      </button>
    </li>
  ));

  return (
    <div className={styles["header-tabs"]}>
      <div className={`${styles["header-tabs-flex"]} container`}>
        <CatalogLink />

        <ul className={styles["header-tabs__list"]} ref={ref}>
          {displayList}
        </ul>

        <CartTab />
      </div>
      {categories.map(
        (c) =>
          activeTab === c.id && (
            <TabsContentBlock
              data={c.subcategories}
              closeTab={() => setActiveTab(null)}
              key={c.id}
            />
          )
      )}
    </div>
  );
};

export default HeaderTabs;
