import { Countries } from "../types/countryType";

type CountryCardProps = {
  country: Countries;
  handleOnclickEvent: (theCountry: Countries) => void;
};

const CountryCard = ({ country, handleOnclickEvent }: CountryCardProps) => {
  return (
    <div onClick={() => handleOnclickEvent(country)}>
      <p>{country.flag}</p>
      <p>{country.name.common}</p>
      <p>{country.capital}</p>
    </div>
  );
};

export default CountryCard;
