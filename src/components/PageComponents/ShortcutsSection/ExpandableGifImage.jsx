import React, { useEffect, useState } from "react"
import styled from "styled-components/macro"
import { animated, useSpring } from "react-spring"
import { useWindowSize } from "../../../utils/hooks"
import { ClickAwayListener } from "@material-ui/core"
import { Z_INDICES } from "../../../utils/constants"
import { useStore } from "../../../utils/store"
import { useIsTouchDevice } from "../../../utils/useIsTouchDevice"

const PADDING = 6
const MAX_GIF_WIDTH = 900
const BREAKPOINT_SHRINK = 630
const SHRINK_OFFSET_RIGHT = 32

/** small gif preview that expands on hover */
export default function ExpandableGifImage({ pathToGif, isHoveredRow }) {
  const {
    spring,
    isOnTop,
    shouldShrink,
    smallGifWidth,
    setIsOpen,
    isOpen,
    setIsPreview,
    isBig,
  } = useSpringExpand(isHoveredRow)

  const isTouchDevice = useIsTouchDevice()

  return (
    <ClickAwayListener
      onClickAway={() => {
        setIsOpen(false)
        setIsPreview(false)
      }}
    >
      <ExpandableGifImageStyles
        {...{
          smallGifWidth,
          shouldShrink,
          isOnTop,
          isOpen,
          isHoveredRow,
          isBig,
        }}
        onClick={e => {
          e.stopPropagation()
          setIsOpen(true)
        }}
        {...(isTouchDevice
          ? // for touch devices we only handle clicks
            {}
          : // desktop: preview on mouseEnter, unpreview on mouseLeave
            {
              onMouseEnter: () => {
                if (isOpen) {
                  return
                }
                setIsPreview(true)
              },
              onMouseLeave: () => {
                if (isOpen) {
                  return
                }
                setIsPreview(false)
              },
            })}
      >
        <animated.img style={spring} src={pathToGif} alt="" srcSet="" />
      </ExpandableGifImageStyles>
    </ClickAwayListener>
  )
}
const ExpandableGifImageStyles = styled.div`
  cursor: pointer;
  height: calc(100% - ${p => (p.isHoveredRow ? 0 : PADDING)}px);
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  padding: ${PADDING}px;
  position: relative;
  z-index: ${p => {
    return p.isOnTop ? 999999 + Z_INDICES[11] : Z_INDICES[11]
  }};
  overflow: ${p => (p.isOnTop ? "visible" : "hidden")};
  img {
    transform-origin: right;
    height: auto;
    width: ${p => p.smallGifWidth}px;
    box-shadow: ${p => (p.isOpen ? "0px 0.5px 1px 1px #00000075;" : "none")};
  }
  right: ${p => (p.shouldShrink ? `-${SHRINK_OFFSET_RIGHT}px` : "unset")};
`

function useSpringExpand(isHoveredRow) {
  const windowSize = useWindowSize()

  // is it open even if you mouse away
  const [isOpen, setIsOpen] = useState(false)
  // is it open only while mousing over
  const [isPreview, setIsPreview] = useState(false)

  // is it animating between big and small
  const [isAnimating, setIsAnimating] = useState(false)

  // big or small image mode
  const isBig = isOpen || isPreview

  // need to set z-index above sticky headers while it's big
  const isOnTop = isBig || isAnimating

  const isBelowBreakpoint = windowSize.width < BREAKPOINT_SHRINK
  const smallGifWidth = isBelowBreakpoint ? 64 : 104
  const bigGifWidth = Math.min(
    MAX_GIF_WIDTH,
    windowSize.width - (isBelowBreakpoint ? 48 : 64)
  )

  const x = isBelowBreakpoint && isOpen ? -SHRINK_OFFSET_RIGHT : 0
  const scale = isBig
    ? (bigGifWidth / smallGifWidth) * (1 + (isOpen ? 0.05 : 0))
    : isHoveredRow
    ? 1.2
    : 1
  const transform = `translateX(${x}px) scale(${scale}) `

  const spring = useSpring({
    transform,
    config: { tension: 380, friction: 40 },
    onStart: () => {
      if (isBig) {
        setIsAnimating(true)
      }
    },
    onRest: () => {
      if (!isHoveredRow) {
        setIsAnimating(false)
      }
    },
  })

  // sync "isGifModalOpen" state to store
  const setIsGifModalOpen = useStore(s => s.setIsGifModalOpen)
  useEffect(() => {
    setIsGifModalOpen(isOpen)
  }, [isOpen])
  // sync "isGifModalBigOrAnimating" state to store
  const setIsGifModalBigOrAnimating = useStore(
    s => s.setIsGifModalBigOrAnimating
  )
  useEffect(() => {
    setIsGifModalBigOrAnimating(isBig || isAnimating)
  }, [isBig, isAnimating])

  return {
    spring,
    isOnTop,
    isOpen,
    shouldShrink: isBelowBreakpoint,
    smallGifWidth,
    setIsOpen,
    setIsPreview,
    isBig,
  }
}
