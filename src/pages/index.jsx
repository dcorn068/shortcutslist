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
import "antd/dist/antd.css" // or 'antd/dist/antd.less'
import styled from "styled-components/macro"

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
    <SwitchStyles>
      <Switch
        checkedChildren={<WindowsIcon />}
        unCheckedChildren={<AppleIcon />}
        defaultChecked
        checked={checked}
        onChange={checked => {
          setChecked(checked)
        }}
      />
    </SwitchStyles>
  )
}

const SwitchStyles = styled.div`
  .ant-switch,
  .ant-switch-checked {
    background: hsl(0, 0%, 80%);
  }
`

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 256 315"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
          fill="#000000"
        ></path>
      </g>
    </svg>
  )
}

function WindowsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 88 88">
      <path
        fill="#00adef"
        d="m0,12.402,35.687-4.8602,0.0156,34.423-35.67,0.20313zm35.67,33.529,0.0277,34.453-35.67-4.9041-0.002-29.78zm4.3261-39.025,47.318-6.906,0,41.527-47.318,0.37565zm47.329,39.349-0.0111,41.34-47.318-6.6784-0.0663-34.739z"
      />
    </svg>
  )
}
