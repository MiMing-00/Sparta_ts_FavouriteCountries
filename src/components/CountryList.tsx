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

  const handleOnclickEvent = (event: React.FormEvent<HTMLLIElement>) => {
    const theCountryId = event.currentTarget.id;
    const index = data.findIndex((item) => item.ccn3 === theCountryId);
    const theCountry = data[index];

    if (index === -1) {
      console.log("못 찾은 거니..!");
      // setAllCountry((prev) => [theCountry, ...prev]);
      return;
    }

    // 클릭된 애 => "선택된 나라" = data[index]
    // setSelectedCountry에서 "선택된 나라"가 있을 경우 (*findIndex?) 삭제 - 필터로 제외 : 비교할 거 data[index].ccn3 와 filter에서 item.ccn3랑 비교
    // setSelectedCountry에서 "선택된 나라"가 없을 경우 포함 + 넣기

    const theCountryIndex = selectedCountry.findIndex(
      (item) => item.ccn3 === theCountry.ccn3
    );

    //셀렉티드에 없을 경우, 추가 + 데이터에서는 삭제
    if (theCountryIndex === -1) {
      setSelectedCountry((prev) => [theCountry, ...prev]);
      setAllCountry((prev) =>
        prev.filter((item) => item.ccn3 !== theCountry.ccn3)
      );
      //셀렉티드에 있을 경우 삭제 + 데이터에서는 추가
    } else {
      setSelectedCountry((prev) =>
        prev.filter((item) => item.ccn3 !== theCountry.ccn3)
      );
      setAllCountry((prev) => [theCountry, ...prev]);
    }
  };

  return (
    <div>
      {/* 맵으로 뿌리기 */}
      <ul>
        <h2>선택된 나라</h2>
        {selectedCountry?.map((country) => (
          <li
            key={country.cca2}
            onClick={handleOnclickEvent}
            className="border-4 my-4 bg-slate-100"
            id={country.ccn3}
          >
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
      <ul>
        {/* 생각해보니 셀렉트 됐으면 여기에 안 나와야 한다. */}
        <h2>모든 나라</h2>
        {allCountry?.map((country) => (
          <li
            key={country.cca2}
            onClick={handleOnclickEvent}
            className="border-4 my-4 bg-slate-100"
            id={country.ccn3}
          >
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
