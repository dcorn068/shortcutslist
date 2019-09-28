import React from "react"
import styled from "styled-components/macro"

const TopTipStyles = styled.div`
  background: hsl(180, 20%, 75%);
  padding: 0.5em 2em;
`

export default ({ children }) => <TopTipStyles>{children}</TopTipStyles>
