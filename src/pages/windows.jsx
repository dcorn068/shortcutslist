import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components/macro"
import Collapse from "@material-ui/core/Collapse"
import { IconButton, Tooltip, Divider } from "@material-ui/core"
import RightArrowIcon from "@material-ui/icons/ArrowForwardIos"
import {
  windowsShortcutsQuickAccess,
  windowsShortcutsBasics,
} from "../shortcuts/windowsShortcuts"
import { Ctrl, Alt, Shift } from "../components/Keyboard/Keys"
import TopTip from "../components/TopTip"

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
    min-height: 64px;
  }
  .moreInfoSection {
    padding: 1.5em 1.5em 0.5em;
  }
  .iconButton {
    height: 64px;
  }
  &.evenRow {
    .shortcutRow,
    .moreInfoSection {
      background: hsl(0, 0%, 85%);
    }
    hr {
      background: hsl(0, 0%, 75%);
    }
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
    <ShortcutRowStyles className={`${isEvenRow ? "evenRow" : ""}`}>
      <div className={`shortcutRow`}>
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
          <Divider />
          <div className="moreInfoSection">{moreInfo}</div>
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
  .sectionShortcuts {
    padding-bottom: 3em;
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
    <TopTip>
      <Ctrl />, <Alt />, and <Shift /> are your <strong>modifier</strong> keys —{" "}
      <strong>hold them down</strong> while pressing other keys to modify the
      effects.
    </TopTip>
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
