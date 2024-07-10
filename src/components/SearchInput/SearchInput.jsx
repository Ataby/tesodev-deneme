import { MapIcon, SearchIcon } from "../../assets/";

import styles from "./SearchInput.module.scss";

const SearchInput = ({
  searchResults,
  searchInput,
  setSearchInput,
  onClick,
}) => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles["search-form"]}>
        <input placeholder={"Some..."} className={styles["search-input"]} />
        <div className={styles["search-button"]}>
          <SearchIcon />
        </div>
        <div className={styles["input-result-container-one"]}>
          {searchInput.length > 0 && (
            <div className={styles["input-result-container"]}>
              <div className={styles["input-result"]}>
                {searchResults?.data?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className={styles["input-result-item"]} key={index}>
                        <div>
                          <MapIcon />
                        </div>

                        <div>
                          <h1>{item?.Company || "Not Found Company"}</h1>
                          <div className="d-flex flex-row ">
                            <p>
                              {item?.City}, {item?.Country}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-center items-center">
                        <hr className={styles.solid} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className={styles.showmore} onClick={onClick}>
                More Results...
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
