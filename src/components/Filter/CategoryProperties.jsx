import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./filter.module.css";

const CategoryProperties = ({ filter }) => {
  const searchParams = useSearchParams();

  const path = usePathname();

  const router = useRouter();

  const handleChange = (value) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const filters = new Set(urlSearchParams.getAll(filter.slug));
    if (filters.has(value)) {
      filters.delete(value);
    } else {
      filters.add(value);
    }
    urlSearchParams.delete(filter.slug);
    filters.forEach((prop) => urlSearchParams.append(filter.slug, prop));
    urlSearchParams.delete("page");
    router.replace(path + "?" + urlSearchParams.toString(), { scroll: false });
  };

  return (
    <div className={styles["category-properties"]}>
      {filter?.values.map((p) => (
        <div key={p.id} className={styles["category-properties__item"]}>
          <label>
            <input
              name={p.slug}
              type="checkbox"
              value={p.name}
              checked={searchParams.getAll(filter.slug).includes(p.slug)}
              onChange={() => handleChange(p.slug)}
              readOnly
            />
            <div
              className={`${styles["filters__checkbox"]} ${
                searchParams.getAll(filter.slug).includes(p.slug) &&
                styles["checked"]
              }`}
            >
              <img src="/svgs/check-icon.svg" alt="иконка" />
            </div>
            <span>{p.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryProperties;
