import React from "react"
import Dropdown from "../subcomponents/dropdown/Dropdown"

import './Filter.scss'

const Filter: React.FC = () => {
  return (
    <div className="filter">
      <Dropdown />
    </div>
  )
}

export default Filter