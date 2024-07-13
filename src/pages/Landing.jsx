 

import React, { useState, useEffect,useRef } from "react";
import Button from "../components/Button/Button";
import Logo from "../../src/assets/logo.svg";
import SearchInput from "../components/SearchInput/SearchInput";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Landing/Footer";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../database/dbFunctions";
import useDebounce from "../hooks/useDebounce";

const Landing = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const isFirstRender = useRef(true)
  const timeOutId = useRef(null)
  

  const debounceValue = useDebounce(searchInput, 500);

  const handleMoreResults = () => {
    navigate("/search", { state: { searchResults, searchInput } });
  };
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setLoading(true);
    const res = getUsers({ search: searchInput, limit: 3, page: 1 });
    setSearchResults(res);

    // I did it for fake api delay
    timeOutId.current = setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if(isFirstRender.current){
      isFirstRender.current = false
      return
    }
    handleChange()
    return () => {
      if(timeOutId.current) clearTimeout(timeOutId.current)
    }
  }, [debounceValue])
  

  return (
    <>
      <div className="container">
        <main className="mainContainer ">
          <div className="landingHeaderContainer ">
            <div className="headerButtonContainer  ">
              <Button
                onClick={() => navigate("/add")}
                text={"Add new record"}
              />
            </div>
          </div>
          <div className="findInContainer  ">
            <div>
              <img src={Logo} alt="main-logo" />
              <div className=" logoDescription">Search App</div>
            </div>

            <div className="w-full mt-5 justify-center items-center d-flex flex-col">
              <div className="searchContainer  ">
                <p className="heading">Find in records</p>

                <div className="w-full d-flex flex-row justify-center items-center ">
                  <SearchInput
                    searchResults={searchResults}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    onClick={handleMoreResults}
                    loading={loading}
                  />
                  <div className="landingSearchButtonContainer ">
                    <Button
                      text={"Search"}
                      onClick={() => handleMoreResults()}
                      disabled={!searchInput.trim()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carouselSection  ">
            <div className="d-flex  justify-center items-center flex-col   ">
              <div className="text-start  w-full ">
                <p className="heading">Top News</p>
              </div>

              <div className="d-flex flex-col padding  ">
                <Carousel />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
