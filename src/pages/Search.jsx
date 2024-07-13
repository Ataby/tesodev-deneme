import React, { useState, useEffect,useRef } from "react";
import { getUsers, orderBy } from "../database/dbFunctions";
import { useLocation } from "react-router-dom";
import ResultCard from "../components/ResultCard/ResultCard";
import Pagination from "../components/Pagination/pagination";
import Header from "../components/SearchPage/Header";
import Sorting from "../components/SearchPage/Sorting";

const Search = () => {
  
  const { searchResults, searchInput } =useLocation().state;
  const isFirstRender = useRef(true);

  const [showData, setShowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [maxPageLimit, setMaxPageLimit] = useState(6);
  const [newWord, setnewWord] = useState(searchInput || "");

  const [isOpen, setisOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("orderBy");

  const handleSelect = (option) => {
    console.log(showData.data,"showw");
    setSelectedOption(option);
    setisOpen(false);
    console.log(newWord,"newword");
    console.log(option,"option");
    const res = getUsers({ search: searchInput, limit: 7, page: 1,order:option }); 
    console.log(res.data,"res data")
    //res.data boş dönüyor
    //getusers içine order vermeyince dolu dönüyor.
    setShowData(res);  
  };

  const getDataWithPage = (page,order) => {
    const res = getUsers({ search: searchInput, limit: 7, page: page,order:order });
    console.log(newWord, "newWord");
    setShowData(res);
    //return res.data;
    //console.log("showdata", res);

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
    if (isFirstRender.current) {
      getDataWithPage(1);
      isFirstRender.current=(false);
    }
  }, []);

  return (
    <>
      <div className="container">
        <Header
          onClickSearch={(results) => setShowData(results)}
          newWord={newWord}
          setnewWord={setnewWord}
          searchInput={searchInput}
          
        />
        <main className="mainContainer">
          <div className="d-flex w-full  flex-col justify-center items-center">
            <div className="w-full ">
              <div className="resultContainer">
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
                  {showData.data !== undefined && (
                    <Sorting
                      selectedOption={selectedOption}
                      handleSelect={handleSelect}
                      isOpen={isOpen}
                      setisOpen={setisOpen}
                    />
                  )}
                </div>
              </div>
            </div>
            {showData?.count > 3 && showData?.pages > 0 && (
              <Pagination
                onPageChange={onPageChange}
                currentPage={currentPage}
                minPageLimit={minPageLimit}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                totalPages={showData?.pages}
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
