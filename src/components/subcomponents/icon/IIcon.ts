import React, { SVGAttributes } from 'react'

export interface IOwnProps {
  className?: string,
  // TODO поправить тип
  icon: any,
  size?: number
}

export type IProps = IOwnProps & SVGAttributes<SVGAElement>