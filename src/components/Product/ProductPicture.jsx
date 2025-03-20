import s from "./product.module.css";

const ProductPicture = ({ src }) => {
  return (
    <div className={s["picture"]}>
      <img src={process.env.BACK_URL + src} />
    </div>
  );
};

export default ProductPicture;
