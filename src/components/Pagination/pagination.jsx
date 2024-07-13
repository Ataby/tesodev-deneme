import React, { useState, useEffect } from "react";
import styles from "./pagination.module.scss";
import { getPageNumbers } from "../../database/dbFunctions";
const Pagination = (props) => {
  const { currentPage, totalPages, filteredRecords, onCurrentPageChange } =
    props;

  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const [isClicked, setIsClicked] = useState(false);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onCurrentPageChange(page);
    }
    if (page !== currentPage) {
      setIsClicked(true);
    }
  };

  useEffect(() => {
    setIsClicked(false);
  }, [currentPage, filteredRecords]);

  useEffect(() => {
    onCurrentPageChange(1);
  }, [filteredRecords]);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.main}>
      <ul className={styles.pageNumbers}>
        <li>
          <button
            className={styles.button}
            disabled={currentPage === pages[0]}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((page, index) => (
          <li
            key={index}
            className={
              currentPage === page
                ? styles.active
                : page !== "number"
                ? styles.threeDot
                : styles.notactive
            }
            onClick={(e) => {
              handlePageChange(page, e.target);
            }}
          >
            {page}
          </li>
        ))}

        <li>
          <button
            className={styles.button}
            disabled={currentPage === pages[pages.length - 1]}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
