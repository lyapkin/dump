import Catalog from "@/components/catalog/Catalog";
import styles from "@/styles/catalog.module.css";

const CatalogLayout = async ({ children, params: { locale } }) => {
  return (
    <div className={`${styles["catalog-page"]} first-screen`}>
      <div className="container">
        <Catalog locale={locale}>{children}</Catalog>
      </div>
    </div>
  );
};

export default CatalogLayout;
