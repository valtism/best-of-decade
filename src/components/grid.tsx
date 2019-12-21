import React, { FC } from "react"
import { MediaCard } from "./media-card"

interface GridProps {
  nodes: any
}

export const Grid: FC<GridProps> = ({ nodes }) => (
  <div className="grid grid-columns-2 sm:grid-columns-3 md:grid-columns-4 lg:grid-columns-5 xl:grid-columns-6 grid-gap-4 my-4">
    {nodes.map(album => (
      <MediaCard
        image={album.src.childImageSharp.fluid}
        title={album.title}
        subtitle={album.artist}
        key={album.title}
      />
    ))}
  </div>
)
