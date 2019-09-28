import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components/macro"
import Collapse from "@material-ui/core/Collapse"
import { IconButton, Tooltip } from "@material-ui/core"
import RightArrowIcon from "@material-ui/icons/ArrowForwardIos"
import {
  windowsShortcutsQuickAccess,
  windowsShortcutsBasics,
} from "../shortcuts/windowsShortcuts"

const sections = [
  { sectionTitle: "Basics", shortcuts: windowsShortcutsBasics },
  { sectionTitle: "Quick Access", shortcuts: windowsShortcutsQuickAccess },
]

const ShortcutRowStyles = styled.div`
  .shortcutRow {
    padding: 0.5em 1em;
    display: grid;
    grid-template-columns: 64px 1fr 1fr;
    grid-gap: 1em;
    align-items: center;
    &.evenRow {
      background: hsl(0, 0%, 85%);
    }
  }
  .iconButton {
    height: 64px;
  }
`
const ListItemCollapsible = ({
  shortcut,
  description,
  moreInfo,
  isEvenRow,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ShortcutRowStyles>
      <div className={`shortcutRow${isEvenRow ? " evenRow" : ""}`}>
        {moreInfo ? (
          <Tooltip title="More info">
            <IconButton
              className="iconButton"
              style={{ transform: `rotate(${isOpen ? 270 : 90}deg)` }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <RightArrowIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <div />
        )}
        <div className="description">{description}</div>
        <div className="shortcut">{shortcut}</div>
      </div>
      {moreInfo && (
        <Collapse in={isOpen}>
          <div className="moreInfo">{moreInfo}</div>
        </Collapse>
      )}
    </ShortcutRowStyles>
  )
}

const WindowsPageStyles = styled.div`
  padding: 3em 1em;
  background: white;
  section {
    max-width: 900px;
    margin: auto;
  }
  .iconButton {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .title {
    font-family: "Montserrat", serif;
    font-size: 3em;
  }
  .sectionTitle {
    font-family: "Montserrat", serif;
    font-size: 2em;
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
    <WindowsPageStyles>
      <section>
        <h1 className="title">Windows</h1>
        {sections.map(({ sectionTitle, shortcuts }) => (
          <div key={sectionTitle}>
            <h2 className="sectionTitle">{sectionTitle}</h2>
            <div className="sectionHeaders">
              <div />
              <h3>Effect</h3>
              <h3>Shortcut</h3>
            </div>
            <div className="sectionShortcuts">
              {shortcuts.map(({ shortcut, description, moreInfo }, idx) => (
                <ListItemCollapsible
                  isEvenRow={idx % 2 === 0}
                  key={description}
                  description={description}
                  shortcut={shortcut}
                  moreInfo={moreInfo}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </WindowsPageStyles>
  </Layout>
)
