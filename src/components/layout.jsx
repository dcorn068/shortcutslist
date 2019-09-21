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

const Layout = ({ children }) => {
  return (
    <KeyboardStyles>
      <Navbar />
      <div
        style={{
          padding: `0px 0px 1.45rem`,
          paddingTop: 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <main>{children}</main>
        </div>
        <footer style={{ paddingLeft: "1.0875rem" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </KeyboardStyles>
  )
}

export default Layout
