import s from "./search.module.css";
import SearchIcon from "./SearchIcon";

const SearchButton = ({ action }) => {
  return (
    <button className={s["search-button"]} onClick={action || undefined}>
      <SearchIcon />
    </button>
  );
};

export default SearchButton;
