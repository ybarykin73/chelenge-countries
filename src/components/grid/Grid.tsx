import React from "react";
import Card from '../card/Card'

import { IProps } from "./IGrid"
import './Grid.scss'

const Grid : React.FC<IProps> = (props) => {
  const {
    list
  } = props

  return (
    <div className="grid">
      {
        list.map(item => (
          <Card 
            key={item.name.common}
            title={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital}
            flag={item.flags}
          />
        ))
      }
    </div>
  )
}

export default Grid