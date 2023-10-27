import React from "react"
import Search from "../search/Search"
import Filter from "../filter/Filter"
import Grid from "../grid/Grid"

import './Main.scss'

const Main: React.FC<any> = (props) => {
  const {
    countries,
    setCountries
  } = props

  const [countriesList, setCountriesList] = React.useState(countries)
  const [regionList, setRegionList] = React.useState([])
  const [filter, setFilter] = React.useState('')
  const [serach, setSearch] = React.useState('')

  const getCountrues = React.useCallback( async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    const regions = Array.from( new Set(data.map(item => item.region)))
    setRegionList(regions)
    setCountries(data)
  }, [])

  React.useEffect(() => {
    getCountrues()
  }, [])

  React.useEffect(() => {
    setCountriesList(countries)
  }, [countries])

  React.useEffect(() => {
    const data = countries.filter(item => item.region.toLowerCase().includes(filter.toLocaleLowerCase()))

    setCountriesList(data)
  }, [filter])

  console.log(countries)

  React.useEffect(() => {
    const data = countries.filter(item => item.name.common.toLowerCase().includes(serach.toLocaleLowerCase()))

    setCountriesList(data)
  }, [serach])

  const searchCountrue = (value) => {
    setSearch(value)
  }

  return (
    <div className="container">
      <main className="main">
        <div className="main__tools">
          <Search handleSearch={searchCountrue} />
          <Filter handleFilter={setFilter} filteList={regionList} />
        </div>
        <Grid list={countriesList}/>
      </main>
    </div>
  )
}

export default Main