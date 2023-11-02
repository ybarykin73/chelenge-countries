import React from "react"
import Search from "../search/Search"
import Filter from "../filter/Filter"
import Grid from "../grid/Grid"
import Error from "../error/Error"

import { IProps } from './IMain'
import './Main.scss'

const Main: React.FC<IProps> = (props) => {
  const {
    countries,
    setCountries
  } = props

  const [countriesList, setCountriesList] = React.useState(countries)
  const [regionList, setRegionList] = React.useState([])
  const [filter, setFilter] = React.useState('')
  const [serach, setSearch] = React.useState('')
  const [error, setError] = React.useState(false)

  const getCountrues = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags')
      const data = await response.json()
      const regions = Array.from( new Set(data.map(item => item.region)))
      setRegionList(regions)
      setCountries(data)
    } catch(error) {
      console.log(error)
      setError(true)
    }
  }

  React.useEffect(() => {
    if(!countries.length) {
      getCountrues()
    }
  }, [])

  React.useEffect(() => {
    setCountriesList(countries)
  }, [countries])

  React.useEffect(() => {
    let data = [...countries]

    if (serach) {
      data = data.filter(item => item.name.common.toLowerCase().includes(serach.toLocaleLowerCase()))
    }

    if (filter) {
      data = data.filter(item => item.region.toLowerCase().includes(filter.toLocaleLowerCase()))
    }
    
    setCountriesList(data)
  }, [serach, filter])

  return (
    <div className="container">
      <main className="main">
        <div className="main__tools">
          <Search handleSearch={setSearch} />
          <Filter handleFilter={setFilter} filteList={regionList} />
        </div>
        {
          !error 
          ? <Grid list={countriesList}/>
          : <Error />
        }
      </main>
    </div>
  )
}

export default Main