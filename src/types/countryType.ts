export type Countries = {
  altSpellings: string[];
  area: number;
  capital: string[];
  capitalInfo: { latlng: number[] };
  car: { side: string; signs: string[] };
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms?: {
    png: string;
    svg: string;
  };
  continents: string[];
  currencies: {
    XOF: {
      name: string;
      symbol: string;
    };
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  fifa: string;
  flag: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  gini: {
    2009: number;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  //이거 뒤져보기...^^
  languages: {
    fra: string;
  };
  latlng: number[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    nativeName: {
      fra: {
        common: string;
        official: string;
      };
    };
    official: string;
  };
  population: number;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  unMember: boolean;
};
