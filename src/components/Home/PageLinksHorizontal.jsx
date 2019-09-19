import React, { useEffect, useState } from "react"
import { animated, useTrail } from "react-spring"
import { Link } from "gatsby"
import styled from "styled-components/macro"

const PageLinksHorizontalStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`
export default () => {
  const PAGE_LINKS = [{ to: "/page-2", title: "Windows" }]

  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const trailSpringLeftOnEnter = useTrail(PAGE_LINKS.length, {
    transform: `translate(${isMounted ? 0 : 100}px, 0px)`,
  })

  return (
    <PageLinksHorizontalStyles>
      {trailSpringLeftOnEnter.map((spring, idx) => {
        const { to, title } = PAGE_LINKS[idx]
        return (
          <animated.div key={to} style={spring}>
            <Link to={to}>{title}</Link>
          </animated.div>
        )
      })}
    </PageLinksHorizontalStyles>
  )
}
