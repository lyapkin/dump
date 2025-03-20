import React from "react";
import { useTranslation } from "react-i18next";
import TextInput from "../../UI/form/TextInput";

const NameField = ({ value, error, onChange, required = false, disabled }) => {
  const { t } = useTranslation();
  const handleChange = (e) => {
    const value = e.target.value.trimStart();
    onChange(value);
  };
  return (
    <TextInput
      value={value}
      error={error}
      onChange={handleChange}
      placeholder={t("form:placeholder_name")}
      required={required}
      img={{ url: "/svgs/user-icon.svg", width: 27, height: 27 }}
      type={"text"}
      disabled={disabled}
    />
  );
};

export default NameField;
