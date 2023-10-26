import React from "react"
import { useNavigate } from "react-router-dom"

import './GoBack.scss'

const GoBack = () => {
  const navigate = useNavigate()

  return (
    <button 
      className="back-button" 
      onClick={() => navigate(-1)}
    >
      Back
    </button>
  )
}

export default GoBack