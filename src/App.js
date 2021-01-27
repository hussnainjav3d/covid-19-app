import Cards from "./components/Cards";
import Header from "./components/Hedaer";
import Dropdown from "./components/Dropdown";
import Chart from "./components/Chart";
import React, { useEffect, useState } from "react";
import { fetchGlobalData, fetchCountryData } from "./api";

const App = () => {
  const [globalData, setData] = useState([]);
  const [country, setCountry] = useState("");
  useEffect(() => {
    const gettingData = async () => {
      setData(await fetchGlobalData(country));
    };
    gettingData();
  }, [country]);
  // useEffect(() => {
  //   const gettingCountryData = async () => {
  //     setData(await fetchCountryData(country));
  //   };
  //   gettingCountryData();
  // }, [country]);
  console.log(country);
  return (
    <div>
      <Header />
      <Cards globalData={globalData} />
      <Dropdown getCountry={(q) => setCountry(q)} />
      <Chart data={globalData} country={country} />
    </div>
  );
};

export default App;
