import { useTranslation } from "react-i18next";
import BaseForm from "./BaseForm";
import s from "./form.module.css";

const GetPriceForm = ({ product }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={s["get-price-form"]}>
        <h5 className={s["get-price-form__title"]}>{product.name}</h5>
        <BaseForm
          formType={"price"}
          buttonText={t("catalog:get_price")}
          data={{ product: product.id }}
        />
      </div>
    </>
  );
};

export default GetPriceForm;
