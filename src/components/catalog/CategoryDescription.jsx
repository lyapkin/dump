import styles from "@/styles/catalog.module.css";

const CategoryDescription = ({ description }) => {
  return (
    <div
      className={`${styles["catalog__description"]} ${styles["category-inside-content"]}`}
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
};

export default CategoryDescription;
