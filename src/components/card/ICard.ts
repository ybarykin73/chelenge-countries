export interface IProps {
  population: number,
  region: string,
  capital: string,
  flag: flags,
  title: string
}

type flags = {
  png: string,
  svg: string
  alt: string
}