import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, SearchIcon } from "../../assets";
import Button from "../Button/Button";
import styles from "./header.module.scss";
import { getUsers } from "../../database/useDatabase";

const Header = ({  newWord, setnewWord }) => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const handleMoreResults = () => {
      console.log("handleMoreResults deneme");
      navigate("/search", { state: searchResults });
  };

  useEffect(() => {
      setSearchResults(getUsers({ search: newWord}));
    }, [newWord]);

  return (
    <header>
      <div>
        <Logo onClick={() => navigate("/")} className={styles.logo} />
      </div>

      <div className={styles.headerContainer}>
        <div className={styles["search-form"]}>
          <input
            value={newWord}
            onChange={(e) => setnewWord(e.target.value)}
            className={styles["search-input"]}
          />
          <div className={styles["search-button"]}>
            <SearchIcon />
          </div>
        </div>
        <div className="landingSearchButtonContainer">
          <Button
            onClick={() => {
              handleMoreResults();
            }}
            text={"Search"}
          />
        </div>
      </div>
      <div>
        <div className="headerButtonContainer ">
          <Button onClick={() => navigate("/add")} text={"Add new record"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
