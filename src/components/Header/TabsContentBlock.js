import styles from "./Header.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";

const TabsContentBlock = ({ data, closeTab }) => {
  const locale = useParams().locale;
  return (
    <div className={styles["header-tabs__tabs-content"]}>
      <div className={`${styles["header-tabs__tabs-content-flex"]} container`}>
        {data.map((item) => (
          <Link
            href={`/catalog/${item?.slug}`}
            key={item.id}
            onClick={closeTab}
          >
            <p>{item?.translations[locale]?.name}</p>
            <img
              src={
                item.img
                  ? process.env.BACK_URL + "/media/" + item?.img
                  : "/images/noimage.jpg"
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabsContentBlock;
