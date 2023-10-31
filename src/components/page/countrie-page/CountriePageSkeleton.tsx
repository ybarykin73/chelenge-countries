import React from "react"
import Skeleton from "../../subcomponents/skeleton/Skeleton"

import './CountriePageSkeleton.scss'

const CountriePageSkeleton:React.FC = () => {
  return (
    <Skeleton>
      <div className="countrie-page-skeleton">
        <Skeleton.Image />
        <div className="countrie-page-skeleton__body">
          <Skeleton.Title />
          <Skeleton.Text />
          <Skeleton.Text />
          <Skeleton.Text />
          <Skeleton.Text />
          <Skeleton.Text />
          <Skeleton.Text />
        </div>
      </div>
    </Skeleton>
  )
}

export default CountriePageSkeleton