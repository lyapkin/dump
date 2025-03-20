import React from "react";

import s from "../ui.module.css";

const Button = ({ text, action, disable }) => {
  return (
    <button className={s["button"]} disabled={disable} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
