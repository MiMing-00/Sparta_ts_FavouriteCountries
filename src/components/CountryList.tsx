import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { fetchData } from "../api/api";
import { Countries } from "../types/countryType";

// export type CountryArray = Countries[];

const CountryList = () => {
  const [data, setData] = useState<Countries[]>([]);
  // const [allCountry, setAllCountry] = useState<CountryArray>([]);
  const [selectedCountry, setSelectedCountry] = useState<Countries[]>([]);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
      // setAllCountry(res);
    }),
      [];
  });

  const handleOnclickEvent = (theCountry: Countries): void => {
    if (
      !selectedCountry.find((item: Countries) => item.cca2 === theCountry.cca2)
    ) {
      setSelectedCountry((prev) => [...prev, theCountry]);
    } else {
      setSelectedCountry((prev) =>
        prev.filter((item: Countries) => item.cca2 !== theCountry.cca2)
      );
    }

    // findIndex 사용 리팩토링
    // const theCountryId = event.currentTarget.id;
    // const index = data.findIndex((item) => item.cca2 === theCountryId);
    // const theCountry = data[index];

    // if (index === -1) {
    //   return;
    // }

    // const theCountryIndex = selectedCountry.findIndex(
    //   (item) => item.cca2 === theCountry.cca2
    // );

    // if (theCountryIndex === -1) {
    //   setSelectedCountry((prev) => [theCountry, ...prev]);
    //   setAllCountry((prev) =>
    //     prev.filter((item) => item.cca2 !== theCountry.cca2)
    //   );
    // } else {
    //   setSelectedCountry((prev) =>
    //     prev.filter((item) => item.cca2 !== theCountry.cca2)
    //   );
    //   setAllCountry((prev) => [theCountry, ...prev]);
    // }
  };

  const unselectedData = data.filter(
    (item) => !selectedCountry.some((item2) => item.cca2 === item2.cca2)
  );

  return (
    <div>
      <h2 className="font-bold">선택된 나라</h2>
      <ul className="grid xl:grid-cols-4 gap-4 md:grid-cols-3 gap-3 sm:grid-cols-2 gap-2">
        {selectedCountry?.map((country: Countries) => (
          <li
            key={country.cca2}
            className="border-2 border-emerald-300 rounded-xl my-4 h-[80px] truncate cursor-pointer hover:shadow-md"
            id={country.cca2}
          >
            <CountryCard
              country={country}
              handleOnclickEvent={handleOnclickEvent}
            />
          </li>
        ))}
      </ul>
      <br />
      <h2 className="font-bold">모든 나라</h2>
      <ul className="grid xl:grid-cols-4 gap-4 md:grid-cols-3 gap-3 sm:grid-cols-2 gap-2">
        {unselectedData?.map((country: Countries) => (
          <li
            key={country.cca2}
            className="border-2 border-indigo-200 rounded-xl my-4 h-[80px] truncate cursor-pointer hover:shadow-md"
            id={country.cca2}
          >
            <CountryCard
              country={country}
              handleOnclickEvent={handleOnclickEvent}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
