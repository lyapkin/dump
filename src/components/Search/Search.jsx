"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

import styles from "./search.module.css";
import SearchButton from "./SearchButton";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchLine, setSearchLine] = useState(
    searchParams.get("search") || ""
  );

  const { t } = useTranslation();

  useEffect(() => {
    setSearchLine(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParam = searchLine ? `?search=${searchLine}` : "";
    router.push(`/catalog/${queryParam}`, { scroll: false });

    const form = e.target;
    const searchEvent = new SubmitEvent("search");
    form.dispatchEvent(searchEvent);
  };
  return (
    <form className={styles["search"]} onSubmit={handleSearch}>
      <div className={styles["search__bar"]}>
        <div className={styles["search__input"]}>
          <input
            type="text"
            placeholder={t("catalog:search_placeholder")}
            value={searchLine}
            onChange={(e) => setSearchLine(e.target.value)}
          />
        </div>
        <div className={styles["search__button"]}>
          <SearchButton />
        </div>
      </div>
    </form>
  );
};

export default Search;
