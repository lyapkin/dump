import styles from "./popup.module.css";

const PopupCloseButton = ({ close }) => {
  return (
    <button className={styles["popup__close"]} onClick={close}>
      <img src="/svgs/close-white-icon.svg" alt="закрыть иконка" />
    </button>
  );
};

export default PopupCloseButton;
