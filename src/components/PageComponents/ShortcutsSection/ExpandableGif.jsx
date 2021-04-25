import React, { useEffect, useState } from "react"
import styled from "styled-components/macro"
import { animated, useSpring } from "react-spring"
import { useWindowSize } from "../../../utils/hooks"
import { ClickAwayListener } from "@material-ui/core"
import { Z_INDICES } from "../../../utils/constants"
import { useStore } from "../../../utils/store"

const PADDING = 6
const MAX_GIF_WIDTH = 900
const BREAKPOINT_SHRINK = 630

/** small gif preview that expands on hover */
export default function ExpandableGif({ pathToGif, isHoveredRow }) {
  const [isHovered, setIsHovered] = useState(false)

  // sync "isHoveredImg" state to store
  const set = useStore(s => s.set)
  useEffect(() => {
    set({ isHoveredImg: isHovered })
  }, [isHovered])

  const windowSize = useWindowSize()

  const shouldShrink = windowSize.width < BREAKPOINT_SHRINK
  const smallGifWidth = shouldShrink ? 64 : 104
  const bigGifWidth = Math.min(
    MAX_GIF_WIDTH,
    windowSize.width - (shouldShrink ? 32 : 64)
  )
  const sizeRatio = bigGifWidth / smallGifWidth
  const scale = isHovered ? sizeRatio : isHoveredRow ? 1.2 : 1

  const [isAnimating, setIsAnimating] = useState(false)

  const spring = useSpring({
    transform: `scale(${scale}) `,
    config: { tension: 380, friction: 40 },
    onStart: () => {
      if (isHovered) {
        setIsAnimating(true)
      }
    },
    onRest: () => {
      if (!isHoveredRow) {
        setIsAnimating(false)
      }
    },
  })

  const isOnTop = isHovered || isAnimating

  return (
    <ClickAwayListener onClickAway={() => setIsHovered(false)}>
      <ExpandableGifStyles
        {...{ smallGifWidth, shouldShrink, isOnTop, isHoveredRow }}
        onClick={e => {
          e.stopPropagation()
          setIsHovered(true)
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <animated.img style={spring} src={pathToGif} alt="" srcSet="" />
      </ExpandableGifStyles>
    </ClickAwayListener>
  )
}
const ExpandableGifStyles = styled.div`
  height: calc(100% - ${p => (p.isHoveredRow ? 0 : PADDING)}px);
  transition: height 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  padding: ${PADDING}px;
  position: ${p => (p.isOnTop ? "relative" : "static")};
  z-index: ${p => (p.isOnTop ? Z_INDICES[11] : Z_INDICES[1])};
  overflow: ${p => (p.isOnTop ? "visible" : "hidden")};
  img {
    transform-origin: right;
    height: auto;
    width: ${p => p.smallGifWidth}px;
  }
  top: ${p => (p.shouldShrink ? `${-p.smallGifWidth / 2}px` : "unset")};
  right: ${p => (p.shouldShrink ? "-12px" : "unset")};
`
