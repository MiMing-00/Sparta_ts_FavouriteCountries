// import axios from "axios";

import { Countries } from "../types/countryType";

export const fetchData = async (): Promise<Countries[]> => {
  // try {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  // console.log(data);
  return data;
  // } catch (error) {
  //   console.log(error);
  // }
};
