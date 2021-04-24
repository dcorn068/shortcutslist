import React, { useState } from "react"
import styled from "styled-components/macro"
import { animated, useSpring } from "react-spring"
import { useWindowSize } from "../../../utils/hooks"

const PADDING = 6
const MAX_GIF_WIDTH = 900
const BREAKPOINT_SHRINK = 630

/** small gif preview that expands on hover */
export function ExpandableGif({ pathToGif, isHoveredRow }) {
  const [isHovered, setIsHovered] = useState(false)
  const windowSize = useWindowSize()
  console.log("🌟🚨 ~ windowSize", windowSize)

  const shouldShrink = windowSize.width < BREAKPOINT_SHRINK
  console.log("🌟🚨 ~ shouldShrink", shouldShrink)
  const smallGifWidth = shouldShrink ? 48 : 64
  const bigGifWidth = Math.min(MAX_GIF_WIDTH, windowSize.width - 24)
  const sizeRatio = bigGifWidth / smallGifWidth / 2
  const scale = isHovered ? sizeRatio : isHoveredRow ? 1.2 : 1

  const spring = useSpring({
    transform: `scale(${scale}) `,
    config: { tension: 380, friction: 40 },
  })

  return (
    <ExpandableGifStyles
      {...{ smallGifWidth, shouldShrink }}
      onClick={e => e.stopPropagation()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={spring}
    >
      <img src={pathToGif} alt="" srcSet="" />
    </ExpandableGifStyles>
  )
}
const ExpandableGifStyles = styled(animated.div)`
  transform-origin: right;
  height: 100%;
  padding: ${PADDING}px;
  position: relative;
  z-index: 20;
  img {
    height: ${p => p.smallGifWidth}px;
    width: auto;
  }
  top: ${p => (p.shouldShrink ? `${-p.smallGifWidth / 2}px` : "unset")};
  right: ${p => (p.shouldShrink ? "-12px" : "unset")};
`
