"use client";
import { useState } from "react";
import styles from "./filter.module.css";

const FilterSection = ({ children, name }) => {
  const [isClosed, setIsClosed] = useState(false);

  const closedStyle = isClosed ? styles["closed"] : "";

  return (
    <div className={styles["filter-section"]}>
      <button onClick={() => setIsClosed((prev) => !prev)}>
        {name}
        <span
          className={`${styles["filter-section__button-arrow"]} ${closedStyle}`}
        ></span>
      </button>
      <div className={`${styles["filter-section__content"]} ${closedStyle}`}>
        {children}
      </div>
    </div>
  );
};

export default FilterSection;
