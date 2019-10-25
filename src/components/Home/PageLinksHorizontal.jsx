import React, { useEffect, useState } from "react"
import { animated, useTrail } from "react-spring"
import { Link } from "gatsby"
import styled from "styled-components/macro"
import { BREAKPOINTS, getPageLinks } from "../../constants"

const LINK_WIDTH = 155
const GRID_GAP_HZ = 10
const LINK_HEIGHT = 48
const PageLinksHorizontalStyles = styled.div`
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    position: absolute;
    bottom: 0;
  }
  width: 100%;
  padding: 0 ${LINK_HEIGHT / 2}px ${LINK_HEIGHT}px;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${LINK_WIDTH * 0.8 + GRID_GAP_HZ}px, 1fr)
  );
  grid-gap: ${GRID_GAP_HZ * 2}px ${GRID_GAP_HZ}px;
  place-items: center;
  .link div {
    height: ${LINK_HEIGHT * 0.8}px;
    width: ${LINK_WIDTH * 0.9}px;
    transform: scale(0.8);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2em;
    border: 2px solid white;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 0.35em 1em;
    transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: grid;
    place-items: center;
    span {
      margin-top: -2px;
    }
    &:hover {
      border-width: 3px;
      /* transform: scale(1.07) translateY(-3px); */
    }
    @media (min-width: ${BREAKPOINTS.MOBILE}px) {
      height: ${LINK_HEIGHT}px;
      width: ${LINK_WIDTH}px;
    }
  }
  @media (min-width: ${821}px) {
  }
  @media (min-width: ${960}px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(${LINK_WIDTH + GRID_GAP_HZ}px, 1fr)
    );
    .link div {
      transform: unset;
    }
  }
`

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted
}

export const useRandomRotate = () => {
  const [randomNumbers, setRandomNumbers] = useState([0, 0, 0])
  const [rotateDeg, setRotateDeg] = useState(0)
  return {
    randomNumbers,
    setRandomNumbers,
    rotateDeg,
    setRotateDeg,
  }
}

export default () => {
  const PAGE_LINKS = getPageLinks().slice(1)
  const isMounted = useIsMounted()
  const trailSpringLeftOnEnter = useTrail(PAGE_LINKS.length, {
    transform: `translate(${isMounted ? 0 : 250}px, 0px)`,
    opacity: isMounted ? 1 : 0,
    config: { friction: 20, tension: 140, mass: 1.4 },
  })

  const {
    randomNumbers,
    setRandomNumbers,
    rotateDeg,
    setRotateDeg,
  } = useRandomRotate()

  const [isMousedOverIdx, setIsMousedOverIdx] = useState(null)

  return (
    <PageLinksHorizontalStyles>
      {trailSpringLeftOnEnter.map((spring, idx) => {
        const { to, title } = PAGE_LINKS[idx]
        return (
          <animated.div key={to} style={spring}>
            <Link className="link" to={to}>
              <div
                style={{
                  ...(isMousedOverIdx === idx
                    ? {
                        transform: `scale(1.07) translateY(-3px) rotate(${rotateDeg}deg)`,
                        color: `hsl(${randomNumbers[0] * 360},90%,80%)`,
                        borderColor: `hsl(${randomNumbers[1] * 360},90%,80%)`,
                        boxShadow: `0px 0px 20px 0px hsla(${randomNumbers[2] *
                          360}, 67%, 82%, 0.56)`,
                      }
                    : {}),
                }}
                onMouseEnter={() => {
                  const randomRotateDeg =
                    (Math.random() > 0.5 ? -1 : 1) * Math.random() * 8
                  setRotateDeg(randomRotateDeg)
                  setRandomNumbers([
                    Math.random(),
                    Math.random(),
                    Math.random(),
                  ])
                  setIsMousedOverIdx(idx)
                }}
                onMouseLeave={() => {
                  setIsMousedOverIdx(null)
                }}
              >
                <span>{title}</span>
              </div>
            </Link>
          </animated.div>
        )
      })}
    </PageLinksHorizontalStyles>
  )
}
