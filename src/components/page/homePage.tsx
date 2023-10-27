import React from "react";

import Main from "../main/Main";

const HomePage:React.FC = () => {

  const [countries, setCountries] = React.useState([])

  return (
    <Main setCountries={setCountries} countries={countries} />
  )
}

export default HomePage