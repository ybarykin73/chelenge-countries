import { ICountry } from "../../types/country";

export interface IProps {
  countries: ICountry[]
  setCountries: (ICountry) => void
}