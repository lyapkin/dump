import styles from "@/styles/catalog.module.css";
import { Suspense } from "react";
import FilterBlock from "../Filter/FilterBlock";
import Search from "../Search/Search";
import Tags from "./Tags";
import CatalogSort from "./CatalogSort";

const Catalog = ({ children, locale }) => {
  return (
    <div className={styles["catalog"]}>
      <aside className={styles["catalog__filter-block"]}>
        <Suspense fallback={<></>}>
          <FilterBlock />
        </Suspense>
      </aside>
      <aside className={styles["catalog__search"]}>
        <Suspense fallback={<></>}>
          <Search />
        </Suspense>
      </aside>
      <aside className={styles["catalog__sort"]}>
        <Suspense fallback={<></>}>
          <CatalogSort />
        </Suspense>
      </aside>
      {children}
      <aside className={styles["catalog__tags"]}>
        <Tags locale={locale} />
      </aside>
    </div>
  );
};

export default Catalog;
