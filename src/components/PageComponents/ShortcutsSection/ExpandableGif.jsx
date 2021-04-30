import React, { useEffect, useState } from "react"
import styled from "styled-components/macro"
import { animated, useSpring } from "react-spring"
import { useWindowSize } from "../../../utils/hooks"
import { ClickAwayListener } from "@material-ui/core"
import { Z_INDICES } from "../../../utils/constants"
import { useStore } from "../../../utils/store"
import { getIsTouchDevice } from "../../../utils/getIsTouchDevice"

const PADDING = 6
const MAX_GIF_WIDTH = 900
const BREAKPOINT_SHRINK = 630
const SHRINK_OFFSET_RIGHT = 32

/** small gif preview that expands on hover */
export default function ExpandableGif({ pathToGif, isHoveredRow }) {
  const [isOpen, setIsOpen] = useState(false)

  // sync "isGifModalOpen" state to store
  const set = useStore(s => s.set)
  useEffect(() => {
    set({ isGifModalOpen: isOpen })
  }, [isOpen])

  const windowSize = useWindowSize()

  const shouldShrink = windowSize.width < BREAKPOINT_SHRINK
  const smallGifWidth = shouldShrink ? 64 : 104
  const bigGifWidth = Math.min(
    MAX_GIF_WIDTH,
    windowSize.width - (shouldShrink ? 48 : 64)
  )
  const sizeRatio = bigGifWidth / smallGifWidth
  const scale = isOpen ? sizeRatio : isHoveredRow ? 1.2 : 1

  const [isAnimating, setIsAnimating] = useState(false)

  const spring = useSpring({
    transform: `translateX(${
      shouldShrink && isOpen ? -SHRINK_OFFSET_RIGHT : 0
    }px) scale(${scale}) `,
    config: { tension: 380, friction: 40 },
    onStart: () => {
      if (isOpen) {
        setIsAnimating(true)
      }
    },
    onRest: () => {
      if (!isHoveredRow) {
        setIsAnimating(false)
      }
    },
  })

  const isOnTop = isOpen || isAnimating

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const isTouchDevice = getIsTouchDevice()

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <ExpandableGifStyles
        {...{ smallGifWidth, shouldShrink, isOnTop, isHoveredRow }}
        onClick={e => {
          e.stopPropagation()
          setIsOpen(prev => !prev)
        }}
        {...(isTouchDevice
          ? {}
          : {
              onMouseEnter: handleOpen,
              onMouseLeave: handleClose,
            })}
      >
        <animated.img style={spring} src={pathToGif} alt="" srcSet="" />
      </ExpandableGifStyles>
    </ClickAwayListener>
  )
}
const ExpandableGifStyles = styled.div`
  cursor: pointer;
  height: calc(100% - ${p => (p.isHoveredRow ? 0 : PADDING)}px);
  transition: height 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  padding: ${PADDING}px;
  position: relative;
  z-index: ${p => (p.isOnTop ? Z_INDICES[11] : Z_INDICES[1])};
  overflow: ${p => (p.isOnTop ? "visible" : "hidden")};
  img {
    transform-origin: right;
    height: auto;
    width: ${p => p.smallGifWidth}px;
  }
  right: ${p => (p.shouldShrink ? `-${SHRINK_OFFSET_RIGHT}px` : "unset")};
`
