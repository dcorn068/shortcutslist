import React from "react"
import styled from "styled-components/macro"
import { useMediaQuery } from "@material-ui/core"
import { BREAKPOINTS } from "../../../constants"
import PageLinksHorizontal from "../PageLinksHorizontal"

const SectionTitleStyles = styled.div`
  position: relative;
  padding: 2em 0;
  color: white;
  text-align: center;
  p {
    font-family: "Permanent Marker", sans-serif;
    font-size: 1.4em;
    margin-bottom: 0.6em;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 2em;
    font-weight: 500;
  }
`
export default () => {
  const isTabletOrLarger = useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET}px)`)
  return (
    <SectionTitleStyles>
      {!isTabletOrLarger && <PageLinksHorizontal />}
      <p>No time to waste?</p>
      <h2>TOP SHORTCUTS:</h2>
    </SectionTitleStyles>
  )
}
