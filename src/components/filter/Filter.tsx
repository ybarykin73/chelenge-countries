import React from "react"
import Dropdown from "../subcomponents/dropdown/Dropdown"

import { IProps } from "./IFilter"
import './Filter.scss'

const Filter: React.FC<IProps> = (props) => {
  const {
    filteList,
    handleFilter
  } = props

  const [fiterRegion, setFilterRegion] = React.useState('111')

  return (
    <div className="filter">
      <Dropdown 
        list={filteList}
        handleSelect={handleFilter}
      />
    </div>
  )
}

export default Filter