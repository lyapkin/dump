import styles from "./filter.module.css";

const HideCategoryItemButton = ({
  cat,
  isCategoriesItemClosed,
  setIsCategoriesItemClosed,
}) => {
  return (
    <button
      onClick={() =>
        setIsCategoriesItemClosed((prev) => ({
          ...prev,
          [cat.id]: !prev[cat.id],
        }))
      }
    >
      {cat.name}
      <span className={styles["categories__button-circle"]}>
        <img
          src={`/svgs/${
            isCategoriesItemClosed[cat.id] ? "plus" : "minus"
          }-icon.svg`}
          alt="иконка"
        />
      </span>
    </button>
  );
};

export default HideCategoryItemButton;
