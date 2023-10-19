import React from "react";

import { IProps } from "./IInput";
import './Input.scss'

const Input: React.FC<IProps> = (props) => {
  const {
    type,
    onChange
  } = props

  const [value, setValue] = React.useState('')

  const change = (value) => {
    setValue(value)
    onChange(value)
  }

  return (
    <input 
      type={type}
      className="input"
      value={value}
      onChange={(e) => change(e.target.value)}
      placeholder="Search for a country..." 
    />
  )
}

export default Input