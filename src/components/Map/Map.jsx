import styles from "./map.module.css";

const Map = () => {
  return (
    <div className={styles["map-iframe"]}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=238009804657&scroll=false"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Map;
