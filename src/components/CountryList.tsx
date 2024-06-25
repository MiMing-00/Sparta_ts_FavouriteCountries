import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { fetchData } from "../api/api";
import { Countries } from "../types/countryType";

// type CountryCardProps = {
//   title: string;
// };

const CountryList = () => {
  const [data, setData] = useState<Countries[]>([]);
  // const [selectedCountry, setSelectedCountry] = useState(false);

  useEffect(() => {
    fetchData().then((res) => setData(res));
  }, []);

  console.log(data);

  const handleOnclickEvent = (event) => {
    const theCountry = event.target;
    console.log(theCountry);
  };

  return (
    <div>
      {/* 맵으로 뿌리기 */}
      <ul>
        {data &&
          data.map((country) => (
            <li
              key={country.area}
              className="border-4 my-4 bg-slate-100"
              onClick={() => handleOnclickEvent(event)}
            >
              <CountryCard country={country} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CountryList;
