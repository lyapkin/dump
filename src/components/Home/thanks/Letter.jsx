import s from "./thanks.module.css";

const Letter = ({ url }) => {
  return (
    <div className={s["letter"]}>
      <img src={url} />
    </div>
  );
};

export default Letter;
