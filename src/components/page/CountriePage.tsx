import React from "react"
import { useParams } from "react-router-dom"

import Breadcrumb from "../subcomponents/breadcrumb/Breadcrumb"
import SingleCountrie from "../single-countrie/SingleCountrie"

const CountriePage:React.FC = () => {
  const {countrieName} = useParams();

  const [countrie, setCountrie] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const getCountrue = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countrieName}`)
      const data = await response.json()

      setTimeout(() => {
        setCountrie(data[0])
        setLoading(false)
      }, 1000)
  }

  React.useEffect(() => {
    getCountrue()
  }, [])

  if(!countrie || loading) {
    return (
      <div className="container">loading</div>
    )
  }

  return (
    
    <div className="container">
      <Breadcrumb />
      <SingleCountrie {...countrie}  />
    </div>
  )
}

export default CountriePage