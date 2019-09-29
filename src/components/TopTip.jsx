import React from "react"
import styled from "styled-components/macro"
import { MAX_WIDTH } from "../constants"

const TopTipStyles = styled.div`
  background: hsl(180, 20%, 75%);
  padding: 0.5em 2em;
  .tipContent {
    max-width: ${MAX_WIDTH}px;
    margin: auto;
  }
`

export default ({ children }) => (
  <TopTipStyles>
    <div className="tipContent">{children}</div>
  </TopTipStyles>
)
