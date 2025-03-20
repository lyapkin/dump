import React from "react";

import styles from "./Header.module.css";
import Location from "./Location";
import Languages from "./Languages";

const HeaderMode = () => {
  return (
    <div className={styles["header-mode"]}>
      <div className={`${styles["header-mode-flex"]} container`}>
        <Location />
        <Languages />
      </div>
    </div>
  );
};

export default HeaderMode;
