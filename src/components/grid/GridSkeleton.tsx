import React from "react"
import Skeleton from "../subcomponents/skeleton/Skeleton"

const GridSkeleton:React.FC = () => {
  return (
    <Skeleton>
      <Skeleton.Image />
      <Skeleton.Title />
      <Skeleton.Text />
      <Skeleton.Text />
      <Skeleton.Text />
    </Skeleton>
  )
}

export default GridSkeleton