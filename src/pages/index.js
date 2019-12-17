import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Grid from "../components/grid"
import SEO from "../components/seo"
import Button from "../components/buttons/button"

const _ = require("lodash")

const IndexPage = () => {
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

  const sorters = [
    {
      name: "Default",
      fn: () => {},
    },
    {
      name: "Artist",
      fn: albums => _.sortBy(albums, "artist"),
    },
    {
      name: "Album",
      fn: albums => _.sortBy(albums, "album"),
    },
    // TODO: Year
  ]

  let currentSort = sorters[0]

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {sorters.map(sort => (
          <Button
            color="purple"
            onClick={() => {
              currentSort = sort
              console.log(currentSort)
            }}
            active={currentSort === sort}
            group
          >
            {sort.name}
          </Button>
        ))}
      </div>
      <div>{currentSort.name}</div>
      <Grid json={data.allAlbumsJson} />
    </Layout>
  )
}

export default IndexPage
