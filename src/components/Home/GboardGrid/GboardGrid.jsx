import React from "react"
import styled from "styled-components/macro"
import { COLORS } from "../../../utils/constants"
import gboardLogo from "../../../images/icons/gboard-logo.svg"
import { gboardDemos } from "./gboardGridData"

const GboardGridStyles = styled.div`
  background: ${COLORS.BLUE_BACKGROUND};
  color: white;
  text-align: center;
  margin: auto;
  padding-bottom: 8em;
  .sectionTitle {
    padding: 0 0 2em;
    h2 {
      margin-top: -0.15em;
      font-family: "Montserrat", sans-serif;
      font-size: 2em;
      font-weight: 500;
    }
  }
  .logoContainer {
    height: 64px;
    img.logo {
      margin-top: -3.45em;
      height: 100%;
    }
  }
  .grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 320px);
    grid-row-gap: 3em;
    grid-column-gap: 2em;
    max-width: 1200px;
    margin: auto;
    .demoColumn {
      height: 445px;
      width: 300px;
      background: ${COLORS.PURPLE_BACKGROUND};
      .title {
        padding: 1em 0 0;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
      }
      .content {
        padding: 0 2em 0;
        font-size: 1em;
        p {
          margin-bottom: 0.5em;
          line-height: 1.5em;
        }
      }
      small {
        font-size: 0.6em;
        margin: 0 -2em 0;
      }
    }
    .imageContainer {
      height: 262px;
      background: ${COLORS.TEAL_BACKGROUND};
      img {
        height: 100%;
      }
    }
  }
`

export default () => {
  return (
    <GboardGridStyles>
      <div className="sectionTitle">
        <div className="logoContainer">
          <img src={gboardLogo} alt="gboard logo" />
        </div>
        <h2>Gboard by Google</h2>
      </div>
      <div className="grid">
        {gboardDemos.map(({ imageSrc, title, content }) => {
          return (
            <div className="demoColumn" key={title}>
              <div className="imageContainer">
                <img src={imageSrc} alt="" />
              </div>
              <h3 className="title">{title}</h3>
              <div className="content">{content}</div>
            </div>
          )
        })}
      </div>
    </GboardGridStyles>
  )
}
