import React from "react"
import { Link } from "react-router-dom"
import './Error.scss'

const Error:React.FC = () => {
  return (
    <div className="error">
      <h1 className="error__title">Oops</h1>
      <p className="error__description">
        something went wrong please go to<br />
        <Link className="error__link" to={'/'}><b>home page</b></Link>
      </p>
    </div>
  )
}

export default Error