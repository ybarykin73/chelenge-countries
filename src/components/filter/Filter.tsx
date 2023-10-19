import React from "react"
import Dropdown from "../subcomponents/dropdown/Dropdown"

import './Filter.scss'

const filterList = [
  {id: 1,partWorld: 'Africa'},
  {id: 2,partWorld: 'America'},
  {id: 3,partWorld: 'Asia'},
  {id: 4,partWorld: 'Europe'},
  {id: 5,partWorld: 'Oceania'}
]

const Filter: React.FC = () => {
  return (
    <div className="filter">
      <Dropdown list={filterList} />
    </div>
  )
}

export default Filter