import s from "./product.module.css";
import ProductDocLink from "./ProductDocLink";

const ProductDocs = ({ docs }) => {
  const content = docs.map((d) => <ProductDocLink key={d.id} doc={d} />);
  return <ul className={s["docs"]}>{content}</ul>;
};

export default ProductDocs;
