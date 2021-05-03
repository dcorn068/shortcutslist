import React from "react"
import { IconButton, Tooltip } from "@material-ui/core"
import RightArrowIcon from "@material-ui/icons/ArrowForwardIos"

export function ExpandIcon({ isOpen, isTabletOrLarger }) {
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
