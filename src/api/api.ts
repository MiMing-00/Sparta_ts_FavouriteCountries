import { CountryArray } from "../components/CountryList";

export const fetchData = async (): Promise<CountryArray> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
};
