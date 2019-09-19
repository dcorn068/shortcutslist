import React from "react"
import { Link } from "gatsby"
import HeroVideo from "../components/Home/HeroVideo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DemosGrid from "../components/Home/DemosGrid"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroVideo />
      <DemosGrid />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
