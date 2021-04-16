import React from "react"
import HeroVideo from "../components/Home/HeroVideo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DemosGrid from "../components/Home/DemosGrid/DemosGrid"
import GboardGrid from "../components/Home/GboardGrid/GboardGrid"
import DemosSectionTitle from "../components/Home/DemosGrid/DemosSectionTitle"
import { demos1, demos2 } from "../components/Home/DemosGrid/demosGridData"
import BottomQuoteAndContact from "../components/Home/BottomQuoteAndContact"
import { Switch } from "antd"
import { useLocalStorageState } from "../utils/hooks"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ToggleMacOrWindowsLinux />
      <HeroVideo />
      <DemosSectionTitle />
      <DemosGrid demos={demos1} />
      <GboardGrid />
      <DemosGrid demos={demos2} />
      <BottomQuoteAndContact />
    </Layout>
  )
}

export default IndexPage

function ToggleMacOrWindowsLinux() {
  const [checked, setChecked] = useLocalStorageState(
    "isNetworkDebuggerOpen",
    false
  )
  return (
    <Switch
      checkedChildren={<Thing />}
      unCheckedChildren={<Thing />}
      defaultChecked
      checked={checked}
      onChange={checked => {
        setChecked(checked)
      }}
    />
  )
}

function Thing() {
  return <div></div>
}
