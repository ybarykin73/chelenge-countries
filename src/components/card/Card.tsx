import React from "react"
import { Link } from "react-router-dom"

import { IProps } from "./ICard"
import './Card.scss'

const Card: React.FC<IProps> = (props) => {

  const {
    flags,
    title,
    region,
    capital,
    population
  } = props

  return (
    
    <div className="card">
      <div className="card__image">
        <img className="card__img" src={flags.svg} alt={flags.alt} />
      </div>
      <div className="card__body">
        <h2 className="card__title">
          <Link className="card__title-link" to={`./countries/${title}`}>{title}</Link>
        </h2>
        <ul className="card__list">
          <li className="card__list-item"><b>Population:</b> {population}</li>
          <li className="card__list-item"><b>Region:</b> {region}</li>
          <li className="card__list-item"><b>Capital:</b> {capital}</li>
        </ul>
      </div>
    </div>
  )
}

export default Card