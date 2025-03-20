import React from "react";

import s from "@/styles/catalog.module.css";
import { ClipLoader } from "react-spinners";

const Spinner = ({ size, color }) => {
  return (
    <div className={s["catalog-get-spinner"]}>
      <ClipLoader color={color || "#27a9dc"} size={size} />
    </div>
  );
};

export default Spinner;
