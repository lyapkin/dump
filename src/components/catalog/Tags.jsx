import styles from "@/styles/catalog.module.css";
import TagItem from "./TagItem";

const Tags = async ({ locale }) => {
  const data = await getTags(locale);

  return (
    <ul className={styles["tag-list"]}>
      {data.map((tag) => (
        <TagItem key={tag.id} tag={tag} />
      ))}
    </ul>
  );
};

export default Tags;

const getTags = async (locale) => {
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/catalog/tags/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(response.status + " запрос не удался");
  }

  return await response.json();
};
