import React, { useState } from "react"
import Collapse from "@material-ui/core/Collapse"
import { IconButton, Tooltip, Divider } from "@material-ui/core"
import RightArrowIcon from "@material-ui/icons/ArrowForwardIos"
import { startCase } from "lodash"
import styled from "styled-components/macro"

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

export const ShortcutsSection = ({ shortcuts, sectionTitle }) => {
  const [isSectionExpanded, setIsSectionExpanded] = useState(true)
  return (
    <>
      <div className="sectionTitleRow">
        <Tooltip title={isSectionExpanded ? "Collapse" : "Expand"}>
          <IconButton
            className="iconButton"
            style={{ transform: `rotate(${isSectionExpanded ? 270 : 90}deg)` }}
            onClick={() => setIsSectionExpanded(!isSectionExpanded)}
          >
            <RightArrowIcon />
          </IconButton>
        </Tooltip>
        <h2 className="sectionTitle">{startCase(sectionTitle)}</h2>
      </div>
      <Collapse in={isSectionExpanded}>
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
      </Collapse>
    </>
  )
}
