/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import "./layout.css"
import { KeyboardStyles } from "./Keyboard/KeyboardStyles"

import styled from "styled-components/macro"
import { COLORS } from "../constants"

const LayoutStyles = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 1.45rem;
  main {
    flex-grow: 1;
  }
  footer {
    color: hsla(0, 0%, 40%);
    padding: 3rem 2rem 1rem;
  }
  a {
    text-decoration: none;
    position: relative;
    color: ${COLORS.BLUE_LINK};
    &:after {
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      content: "";
      position: absolute;
      bottom: -2px;
      height: 2px;
      left: 50%;
      width: 0%;
      background: ${COLORS.BLUE_LINK};
    }
    &:hover {
      &:after {
        left: 0%;
        width: 100%;
      }
    }
  }
`
const Layout = ({ children }) => {
  return (
    <KeyboardStyles>
      <Navbar />
      <LayoutStyles>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </LayoutStyles>
    </KeyboardStyles>
  )
}

export default Layout
