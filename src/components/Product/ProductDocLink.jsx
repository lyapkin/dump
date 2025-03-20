import s from "./product.module.css";
import DocExtention from "./DocExtention";

const ProductDocLink = ({ doc }) => {
  return (
    <li className={s["docs__item"]}>
      <a
        className={s["docs__link"]}
        href={process.env.BACK_URL + "/media/" + doc.url}
        target="_blank"
      >
        <span>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"></path>
          </svg>
        </span>
        <span>
          {doc["file_name"]}
          <DocExtention link={doc.url} />
        </span>
      </a>
    </li>
  );
};

export default ProductDocLink;
