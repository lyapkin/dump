"use client";
import useCloseByClickOutside from "@/hooks/useCloseByClickOutside";
import styles from "@/styles/catalog.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CatalogSort = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const values = {
    default: t("sort:default"),
    price: t("sort:price"),
    popularity: t("sort:popularity"),
    name: t("sort:name"),
  };
  const [isOpen, setIsOpen] = useState(false);
  const open = isOpen ? styles["open"] : "";
  const [currentValue, setCurrentValue] = useState(
    values[searchParams.get("sort") || "default"]
  );

  const path = usePathname();
  const router = useRouter();

  const handleSelect = (key, value) => {
    setIsOpen(false);
    const currentSort = searchParams.get("sort");

    const isCurrentDefault = currentSort === "default" || currentSort === null;
    if (isCurrentDefault && key === "default") return;

    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (currentSort === key) {
      // Если выбран тот же вариант сортировка, то меняется порядок по-возрастанию/убыванию
      searchParams.has("desc")
        ? newSearchParams.delete("desc")
        : newSearchParams.set("desc", "");
    } else {
      setCurrentValue(value);
      newSearchParams.set("sort", key);

      if (key === "popularity") newSearchParams.set("desc", "");
      else newSearchParams.delete("desc", "");
    }

    newSearchParams.delete("page");
    router.replace(`${path}?${newSearchParams.toString()}`, { scroll: false });
  };

  useEffect(() => {
    setCurrentValue(values[searchParams.get("sort") || "default"]);
  }, [searchParams]);

  const refToClose = useCloseByClickOutside(setIsOpen);

  return (
    <div className={styles["sort"]}>
      <span className={styles["sort__title"]}>{t("sort:title")}:</span>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <span className={styles["sort__selected-value"]}>{currentValue}</span>
        <span className={`${styles["sort__arrow"]} ${open}`}></span>
      </button>
      <ul className={`${styles["sort__dropdown"]} ${open}`} ref={refToClose}>
        {Object.entries(values).map(([key, value]) => (
          <li key={key} onClick={() => handleSelect(key, value)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogSort;
