import React, { useState, useEffect } from "react";
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

  const [isFirstRender, setIsFirstRender] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debounceValue = useDebounce(searchInput, 500);

  const handleMoreResults = () => {
    navigate("/search", { state: { searchResults, searchInput } });
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setLoading(true);
    const res = getUsers({ search: searchInput, limit: 3, page: 1 });
    setSearchResults(res);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [debounceValue]);

  const fetchData = async () => {
    const res = await fetch("/mock-data.json");
    const data = await res.json();
  };

  useEffect(() => {
    fetchData();
  }, []);


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
              <img src={Logo} />
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
