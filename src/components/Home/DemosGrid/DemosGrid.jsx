import React from "react"
import styled from "styled-components/macro"
import { DemosGridStyles } from "./DemosGridStyles"
import { demos } from "./demosGridUtils"
import { useMediaQuery } from "@material-ui/core"
import { BREAKPOINTS } from "../../../constants"

const ImageColumn = ({ imageSrc }) => (
  <div className="imageColumn">
    <img src={imageSrc} alt="" />
  </div>
)
const ShortcutsColumn = ({ logo, title, shortcuts, isEven }) => {
  return (
    <div className="shortcutsColumn">
      <div className="header">
        <div className="logoImage">
          <img src={logo} alt="" />
        </div>
        <div className="title">{title}</div>
      </div>
      {shortcuts.map(({ description, shortcut }) => (
        <div className={`shortcutRow`} key={description}>
          {isEven ? (
            <>
              <div className="name">{description}</div>
              <div className="shortcut">{shortcut}</div>
            </>
          ) : (
            <>
              <div className="name">{shortcut}</div>
              <div className="shortcut">{description}</div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

const SectionTitleStyles = styled.div`
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
    <>
      <SectionTitleStyles>
        <p>No time to waste?</p>
        <h2>TOP SHORTCUTS:</h2>
      </SectionTitleStyles>
      <DemosGridStyles>
        {demos.map(({ shortcuts, imageSrc, logo, title }, idx) => {
          const isEven = idx % 2 === 0
          const shortcutsColumnProps = {
            isEven,
            logo,
            title,
            shortcuts,
          }
          return (
            <div className={`demoRow`} key={title}>
              {isEven || !isTabletOrLarger ? (
                <>
                  <ShortcutsColumn {...shortcutsColumnProps} />
                  <ImageColumn imageSrc={imageSrc} />
                </>
              ) : (
                <>
                  <ImageColumn imageSrc={imageSrc} />
                  <ShortcutsColumn {...shortcutsColumnProps} />
                </>
              )}
            </div>
          )
        })}
      </DemosGridStyles>
    </>
  )
}
