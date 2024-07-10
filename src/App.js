import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Add from "./pages/Add";
import Search from "./pages/Search";
import "../src/styles/globals.scss";
import setAllData from "./database/dataSetting";

 
setAllData();
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/add" element={<Add/>} />
        <Route  path="/search" element={<Search/>} />
      </Routes>
    </Router>
  );
}

export default App;
