import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components/macro"
import { windowsShortcuts } from "../shortcuts/windowsShortcuts"
import TopTip from "../components/TopTip"
import { MAX_WIDTH } from "../constants"
import { ShortcutsSection } from "../components/PageComponents/ShortcutsSection"

const WindowsPageStyles = styled.div`
  padding: 3em 1em;
  background: white;
  section {
    max-width: ${MAX_WIDTH}px;
    margin: auto;
  }
  .sectionShortcuts {
    padding-bottom: 3em;
  }
  .iconButton {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .title {
    text-align: center;
    font-family: "Montserrat", serif;
    font-size: 3em;
  }
  .sectionTitleRow {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    .iconButton {
      margin-right: 0.125em;
    }
  }
  .sectionTitle {
    font-family: "Montserrat", serif;
    font-size: 2em;
    margin: 0;
  }
  .sectionHeaders {
    padding: 0.5em 1em;
    display: grid;
    grid-template-columns: 64px 1fr 1fr;
    grid-gap: 1em;
    position: sticky;
    top: 0px;
    h3 {
      font-family: "Montserrat", serif;
    }
  }
`
export default () => (
  <Layout>
    <SEO title="Windows" />
    <TopTip />
    <WindowsPageStyles>
      <section>
        <h1 className="title">Windows</h1>
        {Object.entries(windowsShortcuts).map(([sectionTitle, shortcuts]) => (
          <ShortcutsSection
            key={sectionTitle}
            shortcuts={shortcuts}
            sectionTitle={sectionTitle}
          />
        ))}
      </section>
    </WindowsPageStyles>
  </Layout>
)
