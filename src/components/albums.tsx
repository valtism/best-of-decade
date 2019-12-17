import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Button from "./buttons/button"
import Grid from "./grid"

const _ = require("lodash")

const Albums = () => {
  const data = useStaticQuery(graphql`
    query {
      allAlbumsJson {
        nodes {
          title
          artist
          date
          src {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const sorters = [
    {
      name: "Favourites",
      sort: albums => albums,
    },
    {
      name: "Artist",
      sort: albums => _.sortBy(albums, "artist"),
    },
    {
      name: "Album",
      sort: albums => _.sortBy(albums, "title"),
    },
    {
      name: "Year",
      sort: albums => _.sortBy(albums, "date"),
    },
  ]

  const [sorter, setSorter] = useState(sorters[0])
  const albumSortButtons = sorters.map(sort => (
    <Button
      color="purple"
      onClick={() => setSorter(sort)}
      active={sorter.name === sort.name}
      group
      key={sort.name}
    >
      {sort.name}
    </Button>
  ))

  return (
    <>
      <div className="inline-flex">{albumSortButtons}</div>
      <Grid nodes={sorter.sort(data.allAlbumsJson.nodes)} />
    </>
  )
}

export default Albums
