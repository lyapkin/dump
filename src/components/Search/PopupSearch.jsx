"use client";
import { useState } from "react";
import Popup from "../popup/Popup";
import SearchButton from "./SearchButton";
import s from "./search.module.css";
import Search from "./Search";
import PopupSearchWrapper from "./PopupSearchWrapper";
import { AnimatePresence } from "framer-motion";

const PopupSearch = () => {
  const [isSearchShown, setIsSearchShown] = useState(false);

  const close = () => setIsSearchShown(false);

  return (
    <AnimatePresence>
      {isSearchShown && (
        <Popup
          close={close}
          isCloseButtonDisplayed={false}
          key={"popup-search"}
        >
          <PopupSearchWrapper close={close}>
            <Search />
          </PopupSearchWrapper>
        </Popup>
      )}
      <div className={s["popup-search-button"]}>
        <SearchButton action={() => setIsSearchShown(true)} />
      </div>
    </AnimatePresence>
  );
};

export default PopupSearch;
