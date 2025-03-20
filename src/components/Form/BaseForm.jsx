"use client";
import React, { useEffect, useReducer, useState } from "react";
import NameField from "./fields/NameField";
import PhoneField from "./fields/PhoneField";
import baseFormReducer, {
  baseFormActions,
  baseFormInitState,
} from "./reducers/baseFormReducer";
import { useRouter } from "next/navigation";
import { Trans, useTranslation } from "react-i18next";
import getCookie from "@/utils/getCookie";
import s from "./form.module.css";
import Button from "../UI/Buttons/Button";
import Spinner from "../Spinner/Spinner";
import Link from "next/link";
import { getGRecaptchaToken } from "@/utils/gRecaptcha/gRecaptcha";

const BaseForm = ({ formType, buttonText, data = {}, cleanUp = () => {} }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [form, dispatch] = useReducer(baseFormReducer, baseFormInitState);

  const [loading, setLoading] = useState(false);

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    dispatch({ type: baseFormActions.RESET_GLOBAL_ERRORS });
    setLoading(true);
    e.preventDefault();

    const token = await getGRecaptchaToken(`form/${formType}`);

    const csrf = getCookie("csrftoken");

    const body = {
      ...form.data,
      ...data,
      grecaptcha: token,
      isGrecaptchaInitialized: Boolean(window.grecaptcha),
    };

    const url = new URL(process.env.BACK_URL + `/api/request/${formType}/`);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrf,
        },
        mode: "same-origin",
        body: JSON.stringify(body),
      });
      if (response.status === 400) {
        const result = await response.json();
        dispatch({ type: baseFormActions.ERROR, payload: result });
        setLoading(false);
      } else if (response.ok) {
        router.push("/success");
        cleanUp();
        setIsSent(true);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (isSent) {
        dispatch({ type: baseFormActions.RESET });
        setLoading(false);
      }
    };
  });

  return (
    <form className={`${s["form"]} ${s[""]} ${s[""]}`} onSubmit={handleSubmit}>
      <p className={s["form__or-call"]}>
        {t("form:or_call")} <a href="tel:+78007005413">+78007005413</a>
      </p>
      {form.error.global && form.error.global.map((e, i) => <p key={i}>{e}</p>)}
      <div className={s["form__fields"]}>
        <NameField
          value={form.data.name}
          error={form.error.name}
          onChange={(value) =>
            dispatch({ type: baseFormActions.NAME, payload: value })
          }
          required={true}
          disabled={loading}
        />
        <PhoneField
          value={form.data.number}
          error={form.error.number}
          onChange={(value) =>
            dispatch({ type: baseFormActions.NUMBER, payload: value })
          }
          required={true}
          disabled={loading}
        />
      </div>
      <div className={s["form__submit"]}>
        <Button
          text={loading ? <Spinner size={20} color={"#fff"} /> : buttonText}
          action={() => {}}
          disable={loading}
        />
      </div>
      {
        <p className={s["agreement"]}>
          <Trans
            i18nKey={"form:confidential"}
            components={{
              a: <Link href="/policy/" target="_blank" />,
            }}
          />
        </p>
      }
    </form>
  );
};

export default BaseForm;
