import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { demos1 } from "../components/Home/DemosGrid/demosGridData"
import styled from "styled-components/macro"

const sections = [{ sectionTitle: "Test123", shortcuts: demos1[1].shortcuts }]

const WindowsPageStyles = styled.div`
  color: white;
`

export default () => (
  <Layout>
    <SEO title="Windows" />
    <WindowsPageStyles>
      <div className="title">WINDOWS!!!</div>
      {sections.map(({ sectionTitle, shortcuts }) => (
        <div key={sectionTitle}>
          <div className="sectionTitle">{sectionTitle}</div>
          <div className="sectionShortcuts">
            {shortcuts.map(({ shortcut, description, moreInfo }) => (
              <div key={description} className="shortcutRow">
                <div className="shortcut">{shortcut}</div>
                <div className="description">{description}</div>
                <div className="moreInfo">{moreInfo}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </WindowsPageStyles>
  </Layout>
)
