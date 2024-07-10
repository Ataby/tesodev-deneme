import React from "react";
import Button from "../components/Button/Button";
import Header from "../components/Landing/Header";
import Logo from "../../src/assets/logo.svg";
import SearchInput from "../components/SearchInput/SearchInput";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Landing/Footer";

const Landing = () => {
  return (
    <>
      <div className="container">
        <main className="mainContainer">
          <Header />
          <div className="findInContainer">
            <div>
              <img src={Logo} />
              <div className=" logoDescription">Search App</div>
            </div>

            <div className="w-full mt-5 justify-center items-center d-flex flex-col">
              <div className="searchContainer ">
                <p className="heading">Find in records</p>

                <div className="w-full d-flex flex-row justify-center items-center ">
                  <SearchInput />
                  <div className="landingSearchButtonContainer">
                    <Button text={"Search"} />
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
        <Footer/>
         
      </div>
    </>
  );
};

export default Landing;
