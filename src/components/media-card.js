import React from "react"
import Img from "gatsby-image"

const MediaCard = ({ image, title, subtitle }) => {
  return (
    <div className="block w-48">
      <Img fluid={image} className="rounded" />
      <span className="block">{title}</span>
      <span className="block">{subtitle}</span>
    </div>
  )
}

export default MediaCard
