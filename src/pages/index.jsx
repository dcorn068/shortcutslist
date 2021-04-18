import React from "react"
import HeroVideo from "../components/Home/HeroVideo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DemosGrid from "../components/Home/DemosGrid/DemosGrid"
import GboardGrid from "../components/Home/GboardGrid/GboardGrid"
import DemosSectionTitle from "../components/Home/DemosGrid/DemosSectionTitle"
import { getDemos1, demos2 } from "../components/Home/DemosGrid/demosGridData"
import BottomQuoteAndContact from "../components/Home/BottomQuoteAndContact"
import "antd/dist/antd.css" // or 'antd/dist/antd.less'
import { AppStyles } from "../components/AppStyles"
import { ToggleMacOrWindowsLinux } from "../components/ToggleMacOrWindowsLinux"
import { useStore } from "../utils/store"

const IndexPage = () => {
  const isWindows = useStore(s => s.isWindows)
  return (
    <AppStyles>
      <Layout>
        <SEO title="Home" />
        <ToggleMacOrWindowsLinux />
        <HeroVideo />
        <DemosSectionTitle /> {/* no time to waste? */}
        <DemosGrid demos={getDemos1(isWindows)} />
        <GboardGrid />
        <DemosGrid demos={demos2} />
        <BottomQuoteAndContact />
      </Layout>
    </AppStyles>
  )
}

export default IndexPage
