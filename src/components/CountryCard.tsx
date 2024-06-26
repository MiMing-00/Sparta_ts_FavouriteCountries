import { Countries } from "../types/countryType";

const CountryCard = ({ country }: { country: Countries }) => {
  return (
    <div>
      <p>{country.flag}</p>
      <p>{country.name.common}</p>
      <p>{country.capital}</p>
    </div>
  );
};

export default CountryCard;
