import Link from "next/link";
import { useParams, useSelectedLayoutSegments } from "next/navigation";

import styles from "./filter.module.css";

const SubCategory = ({ catSlug, sub }) => {
  const locale = useParams().locale;
  const currentCat = useSelectedLayoutSegments()[1];

  return (
    <div key={sub.id} className={styles["subcategories__item"]}>
      <Link href={"/catalog/" + sub.slug} scroll={true}>
        <label>
          <input
            name={catSlug}
            type="radio"
            value={sub.slug}
            checked={sub.slug == currentCat}
            readOnly
          />
          <div
            className={`${styles["filters__radio"]} ${
              sub.slug === currentCat && styles["checked"]
            }`}
          >
            <span></span>
          </div>
          <span>{sub.translations[locale].name}</span>
        </label>
      </Link>
    </div>
  );
};

export default SubCategory;
