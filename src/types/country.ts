export interface ICountry {
  name?: Record<string, string>,
  population: number,
  region: string,
  capital: string[] | string,
  flags: flags
}

type flags = {
  png: string,
  svg: string
  alt: string
}