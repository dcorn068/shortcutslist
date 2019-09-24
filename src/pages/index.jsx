import React from "react"
import HeroVideo from "../components/Home/HeroVideo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DemosGrid from "../components/Home/DemosGrid/DemosGrid"
import PageLinksHorizontal from "../components/Home/PageLinksHorizontal"
import GboardGrid from "../components/Home/GboardGrid/GboardGrid"
import DemosSectionTitle from "../components/Home/DemosGrid/DemosSectionTitle"
import { demos1, demos2 } from "../components/Home/DemosGrid/demosGridData"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroVideo />
      <PageLinksHorizontal />
      <DemosSectionTitle />
      <DemosGrid demos={demos1} />
      <GboardGrid />
      <DemosGrid demos={demos2} />
    </Layout>
  )
}

export default IndexPage
