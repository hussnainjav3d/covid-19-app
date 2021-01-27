import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchGlobalData = async (country) => {
  try {
    let changeAbleURL = url;
    if (country) {
      changeAbleURL = `${url}/countries/${country}`;
    }
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`${changeAbleURL}`);
    const modifiedData = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate: lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryList = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

// export const fetchCountryData = async (country) => {
//   try {
//     const {
//       data: { confirmed, recovered, deaths, lastUpdate },
//     } = await axios.get(`${url}/countries/${country}`);
//     const modifiedData = {
//       confirmed: confirmed.value,
//       recovered: recovered.value,
//       deaths: deaths.value,
//       lastUpdate,
//     };
//     return modifiedData;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
