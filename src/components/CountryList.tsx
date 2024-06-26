import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { fetchData } from "../api/api";
import { Countries } from "../types/countryType";

export type CountryArray = Countries[];

const CountryList = () => {
  const [data, setData] = useState<CountryArray>([]);
  const [allCountry, setAllCountry] = useState<CountryArray>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryArray>([]);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
      setAllCountry(res);
    });
  }, []);

  const handleOnclickEvent = (event: React.MouseEvent<HTMLLIElement>) => {
    const theCountryId = event.currentTarget.id;
    const index = data.findIndex((item) => item.cca2 === theCountryId);
    const theCountry = data[index];

    if (index === -1) {
      return;
    }

    const theCountryIndex = selectedCountry.findIndex(
      (item) => item.cca2 === theCountry.cca2
    );

    if (theCountryIndex === -1) {
      setSelectedCountry((prev) => [theCountry, ...prev]);
      setAllCountry((prev) =>
        prev.filter((item) => item.cca2 !== theCountry.cca2)
      );
    } else {
      setSelectedCountry((prev) =>
        prev.filter((item) => item.cca2 !== theCountry.cca2)
      );
      setAllCountry((prev) => [theCountry, ...prev]);
    }
  };

  return (
    <div>
      <h2 className="font-bold">선택된 나라</h2>
      <ul className="grid xl:grid-cols-4 gap-4 md:grid-cols-3 gap-3 sm:grid-cols-2 gap-2">
        {selectedCountry?.map((country) => (
          <li
            key={country.cca2}
            onClick={handleOnclickEvent}
            className="border-4 my-4 bg-emerald-100 h-[80px] truncate cursor-pointer"
            id={country.cca2}
          >
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
      <br />
      <h2 className="font-bold">모든 나라</h2>
      <ul className="grid xl:grid-cols-4 gap-4 md:grid-cols-3 gap-3 sm:grid-cols-2 gap-2">
        {allCountry?.map((country) => (
          <li
            key={country.cca2}
            onClick={handleOnclickEvent}
            className="border-4 my-4 bg-indigo-100  h-[80px] truncate cursor-pointer"
            id={country.cca2}
          >
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
