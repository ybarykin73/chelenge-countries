import { ICountry } from "../../types/country"

export interface IProps extends ICountry {
  subregion: string,
  borders: string[],
  capital: string[],
  currencies: Record<string,string>[],
  languages: Record<string, string>,
  tld: string[],
}