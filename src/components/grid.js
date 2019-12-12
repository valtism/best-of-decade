import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MediaCard from "./media-card"

const Grid = () => {
  const data = useStaticQuery(graphql`
    query {
      allAlbumsJson {
        nodes {
          title
          artist
          src {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="grid grid-columns-12 grid-gap-4">
      {data.allAlbumsJson.nodes.map(album => (
        <MediaCard
          image={album.src.childImageSharp.fluid}
          title={album.title}
          subtitle={album.artist}
        />
      ))}
    </div>
  )
}

export default Grid
