import React, { useState } from "react"
import Collapse from "@material-ui/core/Collapse"
import { IconButton, Tooltip, Divider, useMediaQuery } from "@material-ui/core"
import RightArrowIcon from "@material-ui/icons/ArrowForwardIos"
import styled from "styled-components/macro"
import { BREAKPOINTS } from "../../../utils/constants"
import ExpandableGif from "./ExpandableGif"

export function ShortcutRow({
  shortcut,
  description,
  moreInfo,
  isEvenRow,
  pathToGif,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHoveredRow, setIsHoveredRow] = useState(false)
  const [isHoveredImg, setIsHoveredImg] = useState(false)

  const isTabletOrLarger = useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET}px)`)
  const handleClick = () => setIsOpen(!isOpen)
  const clickHandlerProps = {
    onClick: handleClick,
    onKeyDown: handleClick,
  }

  return (
    <ShortcutRowStyles
      onMouseEnter={() => setIsHoveredRow(true)}
      onMouseLeave={() => setIsHoveredRow(false)}
      {...{ isHoveredImg }}
      className={`${isEvenRow ? "evenRow" : ""}`}
    >
      <div
        className={`shortcutRow${
          moreInfo ? " withMoreInfo" : " withoutMoreInfo"
        }
        ${shortcut ? " withShortcut" : " withoutShortcut"}
        ${pathToGif ? " withGif" : ""}
        `}
        {...clickHandlerProps}
      >
        {!isTabletOrLarger
          ? null
          : moreInfo && (
              <ExpandIcon isTabletOrLarger={isTabletOrLarger} isOpen={isOpen} />
            )}
        <div className="description">{description}</div>
        {shortcut && <div className="shortcut">{shortcut}</div>}
        {pathToGif && (
          <div className="gifImg">
            <ExpandableGif
              {...{ pathToGif, isHoveredRow, isHoveredImg, setIsHoveredImg }}
            />
          </div>
        )}
      </div>
      {!isTabletOrLarger && moreInfo ? (
        <div className={`expandButtonRow`} {...clickHandlerProps}>
          <ExpandIcon isTabletOrLarger={isTabletOrLarger} isOpen={isOpen} />
        </div>
      ) : null}
      {moreInfo && (
        <Collapse in={isOpen}>
          <Divider />
          <div className="moreInfoSection">{moreInfo}</div>
        </Collapse>
      )}
    </ShortcutRowStyles>
  )
}

const ShortcutRowStyles = styled.div`
  .shortcutRow {
    padding: 0.5em 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: ${BREAKPOINTS.TABLET}px) {
      grid-template-columns: 64px 1fr 1fr;
      &.withoutMoreInfo {
      padding-left: calc(64px + 2em);
      }
    }
    &.withoutMoreInfo {
    grid-template-columns: 1fr 1fr;
    }
    &.withoutShortcut {
      grid-template-columns: 1fr;
      @media (min-width: ${BREAKPOINTS.TABLET}px) {
      }
    }
    &.withGif {
      padding-right: 4em;
    }
    /* &.withShortcut {
      &.withoutMoreInfo {
        grid-template-columns: 1fr 1fr;
        @media (min-width: ${BREAKPOINTS.TABLET}px) {
          grid-template-columns: 64px 1fr 1fr;
        }
      }
    } */
    grid-gap: 1em;
    align-items: center;
    min-height: 64px;
    &.withMoreInfo {
      cursor: pointer;
    }
    .shortcut {
      line-height: 2em;
      overflow: hidden;
    }
  }
  .moreInfoSection {
    padding: 1.5em 1.5em 0.5em;
  }
  .iconButton {
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    @media (min-width: ${BREAKPOINTS.MOBILE}px) {
      height: 64px;
    }
  }
  .iconLink{
    color: hsla(0,0%,30%,1);
  }

  &.evenRow {
    .shortcutRow,
    .moreInfoSection,
    .expandButtonRow {
      background: hsl(0, 0%, 85%);
    }
    hr {
      background: hsl(0, 0%, 75%);
    }
  }
  .expandButtonRow {
    display: grid;
    justify-items: center;
    margin-top: -0.75em;
    cursor: pointer;
  }
  pre {
    margin: 0 0 0 -1em;
    padding: 0;
  }
  .description{
    max-width:45vw;
  }
  @media (min-width: ${BREAKPOINTS.MOBILE}px) {
    pre {
      margin: 0.5em 0;
      padding: 0.5em 1em;
    }
  }
  position: relative;
  z-index: ${p => (p.isHoveredImg ? 99999 : 1)};
  .gifImg{
    position:absolute;
    right:0;
    top:0;
    width: fit-content;
    z-index: 99999;
    height: 100%;
  }
`
function ExpandIcon({ isOpen, isTabletOrLarger }) {
  return (
    <Tooltip
      title={`${!isOpen ? "More" : "Less"} info`}
      placement={isTabletOrLarger ? "bottom" : "right"}
    >
      <IconButton
        className="iconButton"
        style={{ transform: `rotate(${isOpen ? 270 : 90}deg)` }}
      >
        <RightArrowIcon />
      </IconButton>
    </Tooltip>
  )
}
