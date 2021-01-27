import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../api";
import "../main.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: "true",
          },
          {
            data: dailyData.map(({ deaths }) => deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: "true",
          },
        ],
      }}
    />
  ) : null;
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Active", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["green", "yellow", "blue", "red"],
            data: [
              confirmed,
              confirmed - recovered + deaths,
              recovered,
              deaths,
            ],
          },
        ],
      }}
    />
  ) : null;
  return <div className="line_chart">{country ? barChart : lineChart}</div>;
};

export default Chart;
