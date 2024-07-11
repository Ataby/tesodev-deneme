import React, { useState, useEffect } from "react";
import { getUsers } from "../database/useDatabase";
import { useLocation } from "react-router-dom";
import ResultCard from "../components/ResultCard/ResultCard";
import Pagination from "../components/Pagination/pagination";
import Header from "../components/SearchPage/Header";
import Sorting from "../components/SearchPage/Sorting";

const Search = () => {
  const { state } = useLocation();
  const [isFirstRender, setIsFirstRender] = useState(true);

  const [showData, setShowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [maxPageLimit, setMaxPageLimit] = useState(6);
  const [newWord, setnewWord] = useState("");

  const [isOpen, setisOpen] = useState(false);
  const [optionsList] = useState([
      { data: "name-asc", title: "Name ascending" },
  
      { data: "name-desc", title: "Name descending" },
      { data: "year-asc", title: "Year ascending" },
      { data: "year-desc", title: "Year descending" },
    ]);
  const [selectedOption, setSelectedOption] = useState({
      title:  "orderBy",
      data: "orderBy"
    });

  const handleSelect = (option) => {

      setSelectedOption(option);
      setisOpen(false);
    };

  const getDataWithPage = (page) => {
    const res = getUsers({ search:"" , limit: 5, page: page });
    setShowData(res);
    //return res.data;
    //console.log("showdata", res);

    //      <pre>{JSON.stringify(state, null, 2)}</pre>
  };

  const onPageChange = (pageNumber) => {
    getDataWithPage(pageNumber);
    setCurrentPage(pageNumber);
  };
  const onPrevClick = () => {
    if ((currentPage - 1) % 3 === 0) {
      setMaxPageLimit(maxPageLimit - 3);
      setMinPageLimit(minPageLimit - 3);
    }
    getDataWithPage(currentPage);
    setCurrentPage((prev) => prev - 1);
  };
  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + 3);
      setMinPageLimit(minPageLimit + 3);
    }
    getDataWithPage(currentPage);
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
      
    if (isFirstRender) {
      getDataWithPage();
      console.log("First page", getDataWithPage());
      setIsFirstRender(false);      
    }
  }, []);

  /*
  <div style={{ display: "flex", gap: "1rem" }}>
    {new Array(state.pages).fill(0).map((_, index) => (
      <p onClick={() => getDataWithPage(index + 1)} key={index}>
        {index + 1}
      </p>
    ))}
  </div>;


  <div style={{ display: "flex", gap: "1rem" }}>
        {new Array(state.pages).fill(0).map((_, index) => (
          <p onClick={() => getDataWithPage(index + 1)} key={index}>
            {index + 1}
          </p>
          ))}
          </div>
          */

  return (
    <>
      <div className="container">
        <Header newWord={newWord} setnewWord={setnewWord} />
        <main className="mainContainer">
          <div className="d-flex w-full  flex-col justify-center items-center">
            <div className="w-full ">
              <div className="resultContainer">
                Search
                {showData.data === 0 && <div>Not Found Result</div>}
                {showData.data?.length > 0 && (
                  <ul>
                    <div>
                      {showData?.data?.map((item, index) => (
                        <div key={item.id}>
                          <ResultCard key={index} data={item} />
                        </div>
                      ))}
                    </div>
                  </ul>
                )}
                <div id="select">
                  {showData.data > 0 && (
                    <Sorting
                      optionsList={optionsList}
                      selectedOption={selectedOption}
                      handleSelect={handleSelect}
                      isOpen={isOpen}
                      setisOpen={setisOpen}
                    />
                  )}
                </div>
              </div>
            </div>
            {showData?.data?.length > 3 && state.pages > 0 && (
              <Pagination
                onPageChange={onPageChange}
                currentPage={currentPage}
                minPageLimit={minPageLimit}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                totalPages={state.pages}
                getDataWithPage={getDataWithPage}
                maxPageLimit={maxPageLimit}
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Search;
