import React from "react";
import styles from "./pagination.module.scss";
const Pagination = (props) => {

  const { currentPage, maxPageLimit, minPageLimit, totalPages,getUsers,setShowData,selectedOption,searchInput } = props;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    props.onPrevClick();

  };

  const handleNextClick = () => {
    props.onNextClick();
  };

  const handlePageClick = (e) => {
    props.onPageChange(Number(e.target.id));
    const res = getUsers({ search: searchInput, limit: 7, page: Number(e.target.id),order:selectedOption }); 
    setShowData(res);
  };

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={handlePageClick}
          className={currentPage === page ? styles.active : styles.notactive}
        >
          {page}
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = (
      <li onClick={handleNextClick}>
        <p className={styles.dots}>...</p>
      </li>
    );
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = (
      <li onClick={handlePrevClick}>
        {" "}
        <p className={styles.dots}>...</p>
      </li>
    );
  }

  return (
    <div className={styles.main}>
      <ul className={styles.pageNumbers}>
        <li>
          <button
            className={styles.button}
            onClick={handlePrevClick}
            disabled={currentPage === pages[0]}
          >
            Previous
          </button>
        </li>
        {pageDecremenEllipses}
        {pageNumbers}
        {pageIncrementEllipses}
        <li>
          <button
            className={styles.button}
            onClick={handleNextClick}
            disabled={currentPage === pages[pages.length - 1]}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;