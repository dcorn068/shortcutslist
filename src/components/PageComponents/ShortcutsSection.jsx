import React, { useState } from "react"
import Collapse from "@material-ui/core/Collapse"
import { IconButton, Tooltip, Divider, useMediaQuery } from "@material-ui/core"
import RightArrowIcon from "@material-ui/icons/ArrowForwardIos"
import LinkIcon from "@material-ui/icons/Link"
import { startCase, kebabCase } from "lodash"
import styled from "styled-components/macro"
import { BREAKPOINTS } from "../../utils/constants"

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
`
const ExpandButton = ({ isOpen, isTabletOrLarger }) => (
  <Tooltip
    title={`${!isOpen ? "More" : "Less"} info`}
    placement={isTabletOrLarger ? "bottom" : "right"}
  >
    <IconButton
      className="iconButton"
      style={{ transform: `rotate(${isOpen ? 270 : 90}deg)` }}
      // onClick={() => setIsOpen(!isOpen)}
    >
      <RightArrowIcon />
    </IconButton>
  </Tooltip>
)

const ListItemCollapsible = ({
  shortcut,
  description,
  moreInfo,
  isEvenRow,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const isTabletOrLarger = useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET}px)`)
  const handleClick = () => setIsOpen(!isOpen)
  const clickHandlerProps = {
    onClick: handleClick,
    onKeyDown: handleClick,
  }
  return (
    <ShortcutRowStyles className={`${isEvenRow ? "evenRow" : ""}`}>
      <div
        className={`shortcutRow${
          moreInfo ? " withMoreInfo" : " withoutMoreInfo"
        }${shortcut ? " withShortcut" : " withoutShortcut"}`}
        {...clickHandlerProps}
      >
        {!isTabletOrLarger
          ? null
          : moreInfo && (
              <ExpandButton
                isTabletOrLarger={isTabletOrLarger}
                isOpen={isOpen}
              />
            )}
        <div className="description">{description}</div>
        {shortcut && <div className="shortcut">{shortcut}</div>}
      </div>
      {!isTabletOrLarger && moreInfo ? (
        <div className={`expandButtonRow`} {...clickHandlerProps}>
          <ExpandButton isTabletOrLarger={isTabletOrLarger} isOpen={isOpen} />
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

export const ShortcutsSection = ({ shortcuts, sectionTitle }) => {
  const slug = kebabCase(sectionTitle)
  return (
    <div className="shortcutSection">
      <div className="sectionTitleRow" id={slug}>
        <a href={`#${slug}`} className="iconLink">
          <div className="sectionTitleButton">
            <LinkIcon />
            <h2 className="sectionTitle">{startCase(sectionTitle)}</h2>
          </div>
        </a>
      </div>
      <div className="sectionHeaders">
        <div />
        <h3>Effect</h3>
        <h3>Shortcut</h3>
      </div>
      <div className="sectionShortcuts">
        {shortcuts.map(({ shortcut, description, moreInfo }, idx) => (
          <ListItemCollapsible
            isEvenRow={idx % 2 === 0}
            key={
              idx
            } /* we can use idx here since the order/shortcuts array will never change */
            description={description}
            shortcut={shortcut}
            moreInfo={moreInfo}
          />
        ))}
      </div>
    </div>
  )
}
