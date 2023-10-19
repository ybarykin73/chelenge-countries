import React from "react"

import { IProps } from "./ICard"
import './Card.scss'

const Card: React.FC<IProps> = (props) => {

  const {
    flag,
    title,
    region,
    capital,
    population
  } = props

  return (
    <div className="card">
      <div className="card__image">
        <img className="card__img" src={flag.svg} alt={flag.alt} />
      </div>
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <ul className="card__list">
          <li className="card__list-item">Population: {population}</li>
          <li className="card__list-item">Region: {region}</li>
          <li className="card__list-item">Capital: {capital}</li>
        </ul>
      </div>
    </div>
  )
}

export default Card