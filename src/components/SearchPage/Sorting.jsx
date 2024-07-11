import { useState } from "react";
import { SortIcon } from "../../assets";
import styles from "./sorting.module.scss";

const Sorting = ({
  optionsList,
  selectedOption,
  handleSelect,
  isOpen,
  setisOpen,
}) => {
  const toogle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.button} type="button" onClick={toogle}>
          <SortIcon fill="black" width="22px" height="20px" />
          {selectedOption?.title || "Order By"}
        </button>
        <div
          className={`${isOpen ? styles.open : styles.closed}`}
          tabIndex={-1}
        >
          <ul>
            {optionsList?.map((option, index) => (
              <li key={index} onClick={() => handleSelect(option)} tabIndex={0}>
                {option?.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sorting;
