import React from "react"
import Img from "gatsby-image"

interface MediaCardProps {
  image: any
  title: string
  subtitle: string
}

export const MediaCard = ({ image, title, subtitle }: MediaCardProps) => {
  return (
    <div className="p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <Img fluid={image} className="rounded mb-1" />
      <span className="block text-xs">{title}</span>
      <span className="block text-xs text-gray-500">{subtitle}</span>
    </div>
  )
}
