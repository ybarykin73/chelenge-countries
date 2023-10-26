export interface IProps {
  name: any,
  population: number,
  region: string,
  subregion: string,
  capital: string[],
  currencies: Record<string,string>[],
  languages: Record<string, string>,
  tld: string[],
  flags: {
    alt: string,
    png: string,
    svg: string
  }
}