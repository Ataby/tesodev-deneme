import { MapIcon, SearchIcon } from "../../assets/";

import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles["search-form"]}>
        <input
          placeholder={"Some..."}         
          className={styles["search-input"]}
        />
        <div className={styles["search-button"]}>
          <SearchIcon />
        </div>
        <div className={styles["input-result-container-one"]}>
           DUZENLENECEK
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
