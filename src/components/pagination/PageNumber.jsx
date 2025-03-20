import React from "react";

import styles from "@/styles/catalog.module.css";

const PageNumber = ({ active, pageNum, onClick, disabled }) => {
  return (
    <li>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${styles["pagination__page-button"]} ${
          active && styles["active"]
        }`}
      >
        {pageNum}
      </button>
    </li>
  );
};

export default PageNumber;
