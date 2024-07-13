import data from "./mock-data.json";

const setAllData = () => {
  localStorage.setItem("data", JSON.stringify({ data }));
};
export default setAllData;
