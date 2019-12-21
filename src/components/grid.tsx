import React, { FC } from "react"
import { MediaCard } from "./media-card"

interface GridProps {
  nodes: any
}

export const Grid: FC<GridProps> = ({ nodes }) => (
  <div className="flex flex-wrap -mx-1 overflow-hidden">
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
