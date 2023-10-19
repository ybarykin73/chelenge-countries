import React from "react"
import Search from "../search/Search"
import Filter from "../filter/Filter"

import './Main.scss'

const Main: React.FC = () => {
  return (
    <div className="container">
      <main className="main">
        <div className="main__tools">
          <Search />
          <Filter />
        </div>
      </main>
    </div>
  )
}

export default Main