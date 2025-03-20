import React from "react";

import styles from "@/styles/catalog.module.css";
import useGetPaginationPages from "@/hooks/useGetPaginationPages";

const PagePagination = (props) => {
  const pages = useGetPaginationPages(props);

  return <ul className={styles["pagination__page-pagination"]}>{pages}</ul>;
};

export default PagePagination;
