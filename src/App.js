
import React, { Suspense }  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/globals.scss";
import setAllData from "./database/dataSetting";
import Spinner from "./components/Spinner/spinner";

setAllData();

const Landing = React.lazy(() => import('./pages/Landing'))
const Add = React.lazy(() => import('./pages/Add'))
const Search = React.lazy(() => import('./pages/Search'))

 

function App() {
  return (
    <Suspense fallback={<Spinner />}>
    <Router>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/add" element={<Add/>} />
        <Route  path="/search" element={<Search/>} />
      </Routes>
    </Router>
    </Suspense>
  );
}

export default App;
