"use client";

import usePartnersData from "@/hooks/usePartnersData";
import s from "@/styles/partners.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SampleForm from "../Form/SampleForm";

export default function PartnersTabs() {
  const [active, setActive] = useState(0);
  const tabs = usePartnersData();
  const { t } = useTranslation();

  return (
    <>
      <div className={s.btns}>
        {tabs.map((tab, i) => {
          return (
            <button
              key={tab.id}
              className={`${s.btn} ${active === i && s.btn__active}`}
              onClick={() => setActive(i)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      {active === 0 && (
        <div className={`${s.content} ${s.enterprises}`}>
          <p
            className={s.content__text}
            dangerouslySetInnerHTML={{
              __html: t("partners:tab_1_text", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></p>
          <span>{t("partners:tab_1_sub")}</span>
          <SampleForm />
        </div>
      )}
      {active === 1 && (
        <div className={s.content}>
          <p
            className={s.content__text}
            dangerouslySetInnerHTML={{
              __html: t("partners:tab_2_text", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></p>
        </div>
      )}
    </>
  );
}
