import React, { useState } from "react"
import Collapse from "@material-ui/core/Collapse"
import { Divider, useMediaQuery } from "@material-ui/core"
import { BREAKPOINTS } from "../../../utils/constants"
import ExpandableGif from "./ExpandableGif"
import { ExpandIcon } from "./ExpandIcon"
import { ShortcutRowStyles } from "./ShortcutRowStyles"

export function ShortcutRow({
  shortcut,
  description,
  moreInfo,
  isEvenRow,
  pathToGif,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHoveredRow, setIsHoveredRow] = useState(false)

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
      {...{ isHoveredRow }}
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
            <ExpandableGif {...{ pathToGif, isHoveredRow }} />
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
