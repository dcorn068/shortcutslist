import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { demos1 } from "../components/Home/DemosGrid/demosGridData"
import styled from "styled-components/macro"
import Collapse from "@material-ui/core/Collapse"
import { IconButton } from "@material-ui/core"
import RightArrowIcon from "@material-ui/icons/ArrowForwardIos"

const sections = [{ sectionTitle: "Test123", shortcuts: demos1[1].shortcuts }]

const WindowsPageStyles = styled.div`
  background: white;
  .iconButton {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

const ListItemCollapsible = ({ shortcut, description, moreInfo }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="shortcutRow">
      <div className="shortcut">{shortcut}</div>
      <div className="description">{description}</div>
      <IconButton
        className="iconButton"
        style={{ transform: `rotate(${isOpen ? 270 : 90}deg)` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <RightArrowIcon />
      </IconButton>
      <Collapse in={isOpen}>
        <div className="moreInfo">{moreInfo}</div>
      </Collapse>
    </div>
  )
}

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
              <ListItemCollapsible
                key={description}
                description={description}
                shortcut={shortcut}
                moreInfo={moreInfo}
              />
            ))}
          </div>
        </div>
      ))}
    </WindowsPageStyles>
  </Layout>
)
