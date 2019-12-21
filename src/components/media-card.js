import React from "react"
import Img from "gatsby-image"

export const MediaCard = ({ image, title, subtitle }) => {
  return (
    <div className="block w-48 text-xs">
      <Img fluid={image} className="rounded mb-1" />
      <span className="block">{title}</span>
      <span className="block text-gray-500">{subtitle}</span>
    </div>
  )
}
