 
import { MapIcon, SearchIcon } from "../../assets/";
import Spinner from "../Spinner/spinner";

import styles from "./SearchInput.module.scss";

const SearchInput = ({searchResults,searchInput,setSearchInput,onClick,loading}) => {
  const showNotFound = !loading && searchResults?.data?.length === 0;

  return (
    <div className={styles.searchContainer}>
      <div className={styles["search-form"]}>
      <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClick();
            }
            if (e.key === "Escape") {
              setSearchInput("");
            }
          }}
          placeholder={"Some..."}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className={styles["search-input"]}
        />
        <div className={styles["search-button"]}>
          <SearchIcon />
        </div>
        <div className={styles["input-result-container-one"]}>
       
          {searchInput.length > 0 && (
            <div className={styles["input-result-container"]}>
              <div className={styles["input-result"]}>
                { (loading) ?  <Spinner />  : !showNotFound ?   searchResults?.data?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className={styles["input-result-item"]} key={index}>
                        <div>
                          <MapIcon />
                        </div>

                        <div>
                          <h1>{item?.company || "Not Found Company"}</h1>
                          <div className="d-flex flex-row ">
                            <p>
                              {item?.city}, {item?.country}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-center items-center">
                        <hr className={styles.solid} />
                      </div>
                    </div>
                  );
                }) : (<p>Not found</p>)}
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
