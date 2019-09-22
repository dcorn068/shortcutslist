import React from "react"
import HeroVideo from "../components/Home/HeroVideo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DemosGrid from "../components/Home/DemosGrid/DemosGrid"
import PageLinksHorizontal from "../components/Home/PageLinksHorizontal"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroVideo />
      <PageLinksHorizontal />
      <DemosGrid />
    </Layout>
  )
}

export default IndexPage
