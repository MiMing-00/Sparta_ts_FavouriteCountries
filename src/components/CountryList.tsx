import { useEffect } from "react";
import CountryCard from "./CountryCard";
import { fetchData } from "../api/api";

// type CountryCardProps = {
//   title: string;
// };

const CountryList = () => {
  // const [data, setData] = useState("");

  useEffect(() => {
    fetchData().then((res) => console.log(res));
  }, []);

  return (
    <div>
      {/* 맵으로 뿌리기 */}
      <CountryCard />
      <CountryCard />
    </div>
  );
};

export default CountryList;
