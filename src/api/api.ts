// import { CountryArray } from "../components/CountryList";
import axios from "axios";
import { Countries } from "../types/countryType";

// export const fetchData = async (): Promise<Countries[]> => {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const data = await response.json();
//   console.log("Fetched data:", data);
//   return data;
// };

export const fetchData = async (): Promise<Countries[]> => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};
