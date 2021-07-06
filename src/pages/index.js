import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

const IndexPage = ({
  data: { site }
}) => {

  return (
    <Layout>
        <title>{site.siteMetadata.title}</title>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
