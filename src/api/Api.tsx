import axios from "axios";

// const fetchData = async () => {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const data = await response.json();
// };

const countryApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const getCountry = async () => {
  try {
    const { data } = await countryApi.get("/all");
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// getCountry()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
