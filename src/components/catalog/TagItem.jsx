"use client";
import Link from "next/link";
import styles from "@/styles/catalog.module.css";
import { useSelectedLayoutSegments } from "next/navigation";

const TagItem = ({ tag }) => {
  const segment = useSelectedLayoutSegments();
  const currentTag = segment[0] === "tag" ? segment[1] : null;
  const active = currentTag === tag.slug ? styles["tag-item_active"] : "";

  return (
    <li className={`${styles["tag-item"]} ${active}`}>
      <Link href={`/tag/${tag.slug}`}>{tag.name}</Link>
    </li>
  );
};

export default TagItem;
