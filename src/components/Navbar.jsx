import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components/macro"
import { getPageLinks, COLORS } from "../constants"
import GatsbyImage from "gatsby-image"

const PAGE_LINKS = getPageLinks()
const LOGO_WIDTH = 64

const NavbarStyles = styled.nav`
  max-width: 960px;
  margin: auto;
  padding: 1em;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  .logo-link {
    .logo {
      width: ${LOGO_WIDTH}px;
      transform: scale(0.95);
      transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
      transform-origin: center center;
      &:hover {
        transform: scale(1);
      }
    }
  }
  .link {
    margin: 1em 0;
    div {
      overflow: visible;
      white-space: nowrap;
    }
    color: white;
    text-decoration: none;
    text-align: center;
    transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
    transform: scale(0.96);
    font-size: 0.8em;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    span {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: -4px;
        height: 3px;
        background: ${COLORS.BLUE_BRIGHT};
        left: -1px;
        width: 0%;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
      }
    }
    &:hover,
    &.active {
      transform: scale(1);
      span:after {
        opacity: 1;
        width: calc(100% + 1px);
      }
    }
    &:hover {
      color: ${COLORS.YELLOW_HIGHLIGHT};
    }
    &.active {
      pointer-events: none;
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "shortcutslist-icon.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <NavbarStyles>
      <Link className="logo-link" to="/">
        <div className="logo">
          <GatsbyImage fixed={data.placeholderImage.childImageSharp.fixed} />
        </div>
      </Link>
      {PAGE_LINKS.map(({ to, title }) => (
        <Link key={title} className="link" to={to} activeClassName="active">
          <div>
            <span>{title}</span>
          </div>
        </Link>
      ))}
    </NavbarStyles>
  )
}
