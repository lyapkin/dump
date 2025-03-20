import React from "react";
import Image from "next/image";
import s from "../ui.module.css";

const TextInput = ({
  value,
  error,
  onChange,
  placeholder,
  required = false,
  img,
  type = "text",
  disabled,
}) => {
  return (
    <>
      {error && <p>{error}</p>}
      <label className={`${s["text-input"]} ${error && s["text-input_error"]}`}>
        <div className={s["text-input__icon"]}>
          <Image src={img.url} width={img.width} height={img.height} />
        </div>
        <input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type}
          required={required}
          disabled={disabled}
        />
      </label>
    </>
  );
};

export default TextInput;
