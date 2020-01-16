import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import { Grid } from "./grid"

const _ = require("lodash")

export const Albums = () => {
  const data = useStaticQuery(graphql`
    query {
      allAlbumsJson {
        nodes {
          title
          artist
          date
          src {
            childImageSharp {
              fluid(maxWidth: 300) {
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
    <button
      key={sort.name}
      onClick={() => setSorter(sort)}
      className={classNames(
        "text-xs font-bold mb-1 mt-2 mx-3 leading-normal border-b-2 border-transparent hover:border-indigo-500",
        sorter.name === sort.name && "border-indigo-500"
      )}
    >
      {sort.name}
    </button>
  ))

  return (
    <>
      <div className="flex">
        <h2 className="sm:text-l md:text-xl font-bold">Albums</h2>
        <span className="flex-1"></span>
        <div className="flex flex-col">
          <span className="text-center text-xs text-gray-500 my-auto px-2 font-semibold">
            Sort By
          </span>
          <div>{albumSortButtons}</div>
        </div>
      </div>
      <Grid nodes={sorter.sort(data.allAlbumsJson.nodes)} />
    </>
  )
}
