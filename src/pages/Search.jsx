import React, { useState, useEffect, useRef } from "react";
import { getUsers, orderBy } from "../database/dbFunctions";
import { useLocation } from "react-router-dom";
import ResultCard from "../components/ResultCard/ResultCard";
import Pagination from "../components/Pagination/pagination";
import Header from "../components/SearchPage/Header";
import Sorting from "../components/SearchPage/Sorting";

const Search = () => {
  const { searchInput } = useLocation().state;
  const isFirstRender = useRef(true);

  const [showData, setShowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [newWord, setnewWord] = useState(searchInput || "");

  const [isOpen, setisOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("orderBy");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setisOpen(false);
    const res = getUsers({
      search: searchInput,
      limit: 7,
      page: 1,
      order: option,
    });
    setShowData(res);
  };

  const getDataWithPage = (page, order) => {
    const res = getUsers({
      search: searchInput,
      limit: 7,
      page: page,
      order: order,
    });
    setShowData(res);
  };

  const onPageChange = (pageNumber) => {
    getDataWithPage(pageNumber);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      getDataWithPage(1);
      isFirstRender.current = false;
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
                totalPages={showData?.pages}
                getDataWithPage={getDataWithPage}
                onCurrentPageChange={(value) => setCurrentPage(value)}
                filteredRecords={showData.data}
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Search;
