import { useTranslation } from "react-i18next";
import BaseForm from "./BaseForm";
import s from "./form.module.css";

const OrderForm = ({ cart, productsCount, resetCart }) => {
  const { t } = useTranslation();

  return (
    <div className={s["order-form"]}>
      <p className={s["order-form__head"]}>{t("form:input_contacts")}</p>
      <BaseForm
        formType={"order"}
        buttonText={t("form:order_button")}
        data={{
          products: cart.map((p) => ({
            product: p.id,
            order_price: p.current_price,
            count: productsCount[p.id],
          })),
        }}
        cleanUp={resetCart}
      />
    </div>
  );
};

export default OrderForm;
