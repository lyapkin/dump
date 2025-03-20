import styles from "@/styles/catalog.module.css";

const ProductCharachteristic = ({ c }) => {
  return (
    <li key={c.id}>
      <span className={styles["caracteristics__key"]}>{c.name}</span>
      <span className={styles["caracteristics__val"]}>
        {c.values.map((v) => v.name).join(", ")}
      </span>
    </li>
  );
};

export default ProductCharachteristic;
