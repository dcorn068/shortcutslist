import React, { useState } from "react"
import styled from "styled-components/macro"
import { animated, useSpring } from "react-spring"

/** small gif preview that expands on hover */
export function ExpandableGif({ pathToGif }) {
  const [isHovered, setIsHovered] = useState(false)
  const spring = useSpring({ position: isHovered ? "fixed" : "relative" })
  return (
    <ExpandableGifStyles
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={spring}
    >
      <img src={pathToGif} alt="" srcset="" />
    </ExpandableGifStyles>
  )
}
const ExpandableGifStyles = styled(animated.div)`
  height: 100%;
  padding: 6px;
  img {
    height: 64px;
    width: auto;
  }
`
