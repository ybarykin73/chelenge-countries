import React from "react"
import Search from "../search/Search"
import Filter from "../filter/Filter"
import Grid from "../grid/Grid"

import './Main.scss'

const Main: React.FC = () => {
  const [list, setList] = React.useState([])

  const getList = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    setList(data)
  }

  React.useEffect(() => {
    getList()
  }, [])

  return (
    <div className="container">
      <main className="main">
        <div className="main__tools">
          <Search />
          <Filter />
        </div>
        <Grid list={list}/>
      </main>
    </div>
  )
}

export default Main