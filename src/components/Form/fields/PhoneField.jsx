import React from "react";
import { useTranslation } from "react-i18next";
import TextInput from "../../UI/form/TextInput";
import { unmaskNumber } from "@/utils/phoneNumberMask";

const PhoneField = ({ value, error, onChange, required = false, disabled }) => {
  const { t } = useTranslation();
  const handleChange = (e) => {
    const input = e.target;
    // console.log(e.nativeEvent.data);
    // console.log(input.selectionStart);
    const dirtyValue = input.value;
    const cleanValue = unmaskNumber(dirtyValue);
    // if (dirtyValue.length !== input.selectionStart) {
    //   if (e.nativeEvent.data && /\D/g.test(e.nativeEvent.data)) {
    //     onChange(cleanValue);
    //     return;
    //   }
    //   onChange(dirtyValue);
    //   return;
    // }

    let result = "";

    if (dirtyValue[0] === "7" || dirtyValue[0] === "8") {
      result = "+7" + cleanValue.slice(1);
    } else if (dirtyValue[0] !== "+" && dirtyValue !== "") {
      result = "+7" + cleanValue;
    } else if (dirtyValue[0] === "+") {
      result = "+" + cleanValue;
    }

    if (result.length > 2 && result.startsWith("+7")) {
      result = result.slice(0, 2) + " (" + result.slice(2);
    }
    if (result.length > 7 && result.startsWith("+7")) {
      result = result.slice(0, 7) + ") " + result.slice(7);
    }
    if (result.length > 12 && result.startsWith("+7")) {
      result = result.slice(0, 12) + "-" + result.slice(12);
    }
    if (result.length > 15 && result.startsWith("+7")) {
      result = result.slice(0, 15) + "-" + result.slice(15);
    }

    if (result.startsWith("+7")) {
      result = result.slice(0, 18);
    } else {
      result = result.slice(0, 16);
    }

    onChange(result);
  };
  return (
    <TextInput
      value={value}
      error={error}
      onChange={handleChange}
      placeholder={t("form:placeholder_number")}
      required={required}
      img={{ url: "/svgs/phone-icon.svg", width: 27, height: 27 }}
      type={"tel"}
      disabled={disabled}
    />
  );
};

export default PhoneField;
