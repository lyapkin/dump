import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./filter.module.css";
import { useTranslation } from "react-i18next";

const PresenceFilter = () => {
  const { t } = useTranslation();
  const filter = {
    slug: "presence",
    values: [
      { id: 1, slug: "order", name: t("catalog:presence.off") },
      { id: 2, slug: "stock", name: t("catalog:presence.on") },
    ],
  };
  const searchParams = useSearchParams();

  const path = usePathname();

  const router = useRouter();

  const handleChange = (value) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const presence = urlSearchParams.get(filter.slug);
    if (presence === value) {
      urlSearchParams.delete(filter.slug);
    } else {
      urlSearchParams.set(filter.slug, value);
    }
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
              type="input"
              value={p.name}
              checked={searchParams.get(filter.slug) === p.slug}
              onClick={() => handleChange(p.slug)}
              readOnly
            />
            <div
              className={`${styles["filters__radio"]} ${
                searchParams.get(filter.slug) === p.slug && styles["checked"]
              }`}
            >
              <span></span>
            </div>
            <span>{p.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default PresenceFilter;
