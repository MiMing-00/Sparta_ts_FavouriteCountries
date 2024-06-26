// import axios from "axios";

import { CountryArray } from "../components/CountryList";

export const fetchData = async (): Promise<CountryArray> => {
  // try {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  // console.log(data);
  return data;
  // } catch (error) {
  //   console.log(error);
  // }
};
