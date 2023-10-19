import React from "react"

import './Icon.scss'
import { IProps } from './IIcon'

const Icom: React.FC<IProps> = (props) => {
  const {
    className,
    icon: SvgIcon,
    size = 20,
  } = props

  return (
    <SvgIcon
      className={`icon ${className ? className : ''}`}
      width={size}
      height={size}
    />
  )
}

export default Icom