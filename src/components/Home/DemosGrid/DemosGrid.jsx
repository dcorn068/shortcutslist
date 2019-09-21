import React from "react"
import styled from "styled-components/macro"
import { DemosGridStyles } from "./DemosGridStyles"
import { demos } from "./demosGridUtils"

const ImageColumn = ({ imageSrc }) => (
  <div className="imageColumn">
    <img src={imageSrc} alt="" />
  </div>
)
const ShortcutsColumn = ({ logo, title, shortcuts, isEven }) => (
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
            <div className="shortcut">{shortcut}</div>
            <div className="name">{description}</div>
          </>
        )}
      </div>
    ))}
  </div>
)

const SectionTitleStyles = styled.div`
  color: white;
  text-align: center;
  p {
    font-family: "Permanent Marker", sans-serif;
    font-size: 1.4em;
    margin-bottom: 0.6em;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 2em;
    font-weight: 500;
  }
`

export default () => {
  return (
    <>
      <SectionTitleStyles>
        <p>No time to waste?</p>
        <h2>TOP SHORTCUTS:</h2>
      </SectionTitleStyles>
      <DemosGridStyles>
        {demos.map(({ shortcuts, imageSrc, logo, title }, idx) => {
          const isEven = idx % 2 === 0
          return (
            <div className={`demoRow`} key={title}>
              {isEven ? (
                <>
                  <ShortcutsColumn
                    isEven={isEven}
                    logo={logo}
                    title={title}
                    shortcuts={shortcuts}
                  />
                  <ImageColumn imageSrc={imageSrc} />
                </>
              ) : (
                <>
                  <ImageColumn imageSrc={imageSrc} />
                  <ShortcutsColumn
                    isEven={isEven}
                    logo={logo}
                    title={title}
                    shortcuts={shortcuts}
                  />
                </>
              )}
            </div>
          )
        })}
      </DemosGridStyles>
    </>
  )
}
