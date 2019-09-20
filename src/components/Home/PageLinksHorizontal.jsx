import React, { useEffect, useState } from "react"
import { animated, useTrail } from "react-spring"
import { Link } from "gatsby"
import styled from "styled-components/macro"
import { BREAKPOINTS } from "../../constants"

const LINK_WIDTH = 155
const GRID_GAP_HZ = 10
const LINK_HEIGHT = 48

const PageLinksHorizontalStyles = styled.div`
  padding: ${LINK_HEIGHT}px;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${LINK_WIDTH + GRID_GAP_HZ}px, 1fr)
  );
  grid-gap: ${GRID_GAP_HZ * 2}px ${GRID_GAP_HZ}px;
  place-items: center;
  .link div {
    height: ${LINK_HEIGHT * 0.8}px;
    width: ${LINK_WIDTH * 0.9}px;
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
      transform: scale(1.1);
    }
    @media (min-width: ${BREAKPOINTS.MOBILE}px) {
      height: ${LINK_HEIGHT}px;
      width: ${LINK_WIDTH}px;
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

const getPageLinks = () => [
  { to: "/windows", title: "Windows" },
  { to: "/browser", title: "Browser" },
  { to: "/android", title: "Android" },
  { to: "/vs-code", title: "VS Code" },
  { to: "/terminal", title: "Terminal" },
]

export default () => {
  const PAGE_LINKS = getPageLinks()
  const isMounted = useIsMounted()
  const trailSpringLeftOnEnter = useTrail(PAGE_LINKS.length, {
    transform: `translate(${isMounted ? 0 : 250}px, 0px)`,
    opacity: isMounted ? 1 : 0,
    config: { friction: 20, tension: 140, mass: 1.4 },
  })

  return (
    <PageLinksHorizontalStyles>
      {trailSpringLeftOnEnter.map((spring, idx) => {
        const { to, title } = PAGE_LINKS[idx]
        return (
          <animated.div key={to} style={spring}>
            <Link className="link" to={to}>
              <div>
                <span>{title}</span>
              </div>
            </Link>
          </animated.div>
        )
      })}
    </PageLinksHorizontalStyles>
  )
}
