import React from "react"
import { useParams } from "react-router-dom"

import Breadcrumb from "../../subcomponents/breadcrumb/Breadcrumb"
import SingleCountrie from "../../single-countrie/SingleCountrie"
import CountriePageSkeleton from "./CountriePageSkeleton"
import Error from "../../error/Error"

const CountriePage:React.FC = () => {
  const {countrieName} = useParams();

  const [countrie, setCountrie] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  const getCountrue = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countrieName}`)
      const data = await response.json()
      setCountrie(data[0])
    } catch(error) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getCountrue()
  }, [])

  return (
    <div className="container">
      <Breadcrumb />
      {
        loading ? <CountriePageSkeleton /> 
        : 
        error || !countrie 
        ? <Error /> 
        : <SingleCountrie {...countrie}  />
      }
    </div>
  )
}

export default CountriePage