import React, { useState,useEffect } from "react";
import Button from "../components/Button/Button";
import Logo from "../../src/assets/logo.svg";
import SearchInput from "../components/SearchInput/SearchInput";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Landing/Footer";
import { useNavigate } from "react-router-dom";
import apiService from "../database/useDatabase";

const Landing = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleMoreResults = () => {
        navigate({
              pathname: `/search`,
              search:`?query=${searchInput}`
            });
  }
useEffect(() => {
      setSearchResults(apiService.getUsers({ search: searchInput, limit: 4, page: 1 }));
}, [searchInput]);


  return (
    <>
      <div className="container">
        <main className="mainContainer">
          <div className="landingHeaderContainer">
            <div className="headerButtonContainer ">
              <Button
                onClick={() => navigate("/add")}
                text={"Add new record"}
              />
            </div>
          </div>
          <div className="findInContainer">
            <div>
              <img src={Logo} />
              <div className=" logoDescription">Search App</div>
            </div>

            <div className="w-full mt-5 justify-center items-center d-flex flex-col">
              <div className="searchContainer ">
                <p className="heading">Find in records</p>

                <div className="w-full d-flex flex-row justify-center items-center ">
                  <SearchInput
                  searchResults={searchResults}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  onClick={handleMoreResults}
                  />
                  <div className="landingSearchButtonContainer">
                    <Button text={"Search"} onClick={()=>handleMoreResults()} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carouselSection">
            <div className="d-flex  justify-center items-center flex-col">
              <div className="text-start w-full ">
                <p className="heading">Top News</p>
              </div>

              <div className="d-flex flex-col">
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
