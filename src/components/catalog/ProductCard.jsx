import styles from "@/styles/catalog.module.css";
import Link from "next/link";
import ProductCharachteristic from "./ProductCharachteristic";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { CartContext } from "@/providers/CartProvider";
import PopupForm from "../Form/PopupForm";
import GetPriceForm from "../Form/GetPriceForm";
import CardPrice from "./CardPrice";
import Image from "next/image";

const ProductCard = ({ p }) => {
  const { t } = useTranslation();

  const [cart, addToCart] = useContext(CartContext);

  return (
    <div className={styles["products__card"]}>
      <div className={styles["card__cover"]}>
        <Link href={`/product/${p.slug}/`}>
          <span className={styles["card__presence"]}>
            {p.is_present
              ? t("catalog:presence.on")
              : t("catalog:presence.off")}
          </span>
          <div className={styles["card__image"]}>
            {p.img_urls.length > 0 ? (
              <Image
                src={process.env.BACK_URL + "/media/" + p.img_urls[0].img_url}
                height={214}
                width={200}
                alt="фото товара"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mN8Yc+AARiHsiAAKpkLkc65VkIAAAAASUVORK5CYII="
              />
            ) : (
              <Image src={"/images/noimage.jpg"} />
            )}
          </div>
        </Link>
      </div>
      <div className={styles["card__body"]}>
        <div className={styles["card__name"]}>
          <Link href={`/product/${p.slug}/`}>{p.name}</Link>
        </div>
        <div className={styles["card__caracteristics"]}>
          <ul>
            {p.characteristics
              .map((c) => <ProductCharachteristic key={c.id} c={c} />)
              .slice(0, 3)}
          </ul>
        </div>
        <div className={styles["card__price"]}>
          {p.current_price ? (
            <CardPrice
              price={p.current_price}
              isInCart={p.id in cart}
              action={() => addToCart(p.id)}
            />
          ) : (
            <div className={styles["card__get-price"]}>
              <PopupForm text={t("catalog:get_price")}>
                <GetPriceForm product={p} />
              </PopupForm>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
