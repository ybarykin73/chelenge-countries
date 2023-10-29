import React from "react"

import './Skeleton.scss'

const Skeleton = ({children}) => {
  return (
    <div className="skeleton">
      {children}
    </div>
  )
}

const Image = () => {
  return (
    <div className="skeleton__image" />
  )
}

const Title = () => {
  return (
    <div className="skeleton__title" />
  )
}

const Text = () => {
  return (
    <div className="skeleton__text" />
  )
}

Skeleton.Image = Image
Skeleton.Title = Title
Skeleton.Text = Text

export default Skeleton