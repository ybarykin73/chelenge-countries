import React from "react";

import { IProps } from "./IInput";
import './Input.scss'

const Input: React.FC<IProps> = (props) => {
  const {
    type
  } = props

  return (
    <input 
      type={type}
      className="input"
      placeholder="Search for a country..." 
    />
  )
}

export default Input