import Link from "next/link";
import CartTab from "./CartTab";

import styles from "./Header.module.css";
import NavLinks from "./NavLinks";
import PopupSearch from "../Search/PopupSearch";
import CatalogLink from "./CatalogLink";

const HeaderMain = ({ mobileOpen, setMobileOpen }) => {
  return (
    <div className={styles["header-main-wrapper"]}>
      <div className="container">
        <div className={styles["header-main"]}>
          <div className={styles["header-main__left"]}>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className={styles["mobile-nav__burger"]}
            >
              {!mobileOpen ? (
                <img src="/svgs/burger-icon.svg" alt="иконка меню" />
              ) : (
                <img
                  className={styles["mobile-nav__close"]}
                  src="/svgs/close-icon.svg"
                  alt="иконка меню"
                />
              )}
            </button>
            <div className={styles["header-main__logo"]}>
              <Link href="/">
                <img src="/svgs/logo.svg" alt="логотип" />
              </Link>
            </div>
          </div>
          <nav className={styles["header-main__nav"]}>
            <div className={styles["header-nav-container"]}>
              <CatalogLink />
              <NavLinks />
              <div className={styles["header-main__search"]}>
                <PopupSearch />
              </div>
              <div className={styles["header-main__cart"]}>
                <CartTab />
              </div>
            </div>
          </nav>

          <div className={styles["header-main__tel"]}>
            <span>info@visota13.ru</span>
            <a href="tel:+78007005413">
              <img src="/svgs/phone-pic.svg" alt="иконка" />
              <span>8(800)700-54-13</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
