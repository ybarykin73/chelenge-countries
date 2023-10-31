import React from "react"

import { IProps } from "./ISingleCountrie"
import './SingleCountrie.scss'

const SingleCountrie:React.FC<IProps> = (props) => {
  const {
    tld,
    name,
    flags,
    region,
    capital,
    borders,
    subregion,
    languages,
    currencies,
    population
  } = props

  return (
    <section className="single-countrie">
      <div className="single-countrie__flag">
        <img className="single-countrie__flag-image" src={flags.svg} alt="" />
      </div>
      <div className="single-countrie__body">
        <h1 className="single-countrie__title">{name.common}</h1>
        <ul className="single-countrie__list">
          <li className="single-countrie__list-item">
            <b>Official Name</b>: {name.official}
          </li>
          <li className="single-countrie__list-item">
            <b>Population</b>: {population}
          </li>
          <li className="single-countrie__list-item">
            <b>Region</b>: {region}
          </li>
          <li className="single-countrie__list-item">
            <b>Subregion</b>: {subregion}
          </li>
          {
            capital 
            &&
            <li className="single-countrie__list-item">
              <b>Capital</b>: {
                capital.map(item =><span key={item}>{item}</span>)
              }
            </li>
          }
          <li className="single-countrie__list-item">
            <b>Top Level Domain</b>: {
              tld.map(item => <span key={item}>{item}</span>)
            }
          </li>
          {
            currencies 
            &&
            <li className="single-countrie__list-item">
              <b>Currencies</b>: {
                Object.keys(currencies).map(item => <span key={item}>{item}</span>)
              }
            </li>
            }
          <li className="single-countrie__list-item">
            <b>Languages</b>: {
              Object.keys(languages).map(item => <span key={item}>{item}</span>)
            }
          </li>
        </ul>
        <h3 className="single-countrie__sub-title">
          Border Countries:
        </h3>
        {
          !borders 
            ?
            <p className="single-countrie__">
              There is no border countries
            </p>
            :
            <p>This country borders {borders.length} countries</p>
        }
      </div>
    </section>
  )
} 

export default SingleCountrie