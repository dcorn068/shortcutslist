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
import { ReactComponent as AppleIcon } from "../images/icons/apple-logo.svg"
import "antd/dist/antd.css" // or 'antd/dist/antd.less'

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
      checkedChildren={<AppleIcon />}
      unCheckedChildren={<WindowsIcon />}
      defaultChecked
      checked={checked}
      onChange={checked => {
        setChecked(checked)
      }}
    />
  )
}

function WindowsIcon() {
  return <img alt="windows" src="../images/icons/windows-10-logo.jpg" />
}
