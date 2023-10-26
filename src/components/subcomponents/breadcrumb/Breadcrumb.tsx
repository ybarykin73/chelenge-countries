import React from "react"
import GoBack from "../go-back/GoBack"

import './Breadcrumb.scss'

const Breadcrumb:React.FC = () => {
  return (
    <div className="breadcrumb">
      <GoBack />
    </div>
  )
}

export default Breadcrumb