import React from "react"
import { DemosGridStyles } from "./DemosGridStyles"
import { useMediaQuery } from "@material-ui/core"
import { BREAKPOINTS } from "../../../constants"

const ImageColumn = ({ imageSrc }) => (
  <div className="imageColumn">
    <img src={imageSrc} alt="" />
  </div>
)
const ShortcutsColumn = ({ logo, title, shortcuts, isEvenGridItem }) => {
  return (
    <div className="shortcutsColumn">
      <div className="header">
        <div className="logoImage">
          <img src={logo} alt="" />
        </div>
        <div className="title">{title}</div>
      </div>
      {shortcuts.map(({ description, shortcut }, idx) => (
        <div
          className={`shortcutRow${idx % 2 === 0 ? "" : " oddShortcutRow"}`}
          key={description}
        >
          {isEvenGridItem ? (
            <>
              <div className="description">{description}</div>
              <div className="shortcut">{shortcut}</div>
            </>
          ) : (
            <>
              <div
                className="shortcut"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                {shortcut}
              </div>
              <div
                className="description"
                style={{ textAlign: "left", width: "100%" }}
              >
                {description}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default ({ demos }) => {
  const isTabletOrLarger = useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET}px)`)
  return (
    <DemosGridStyles>
      {demos.map(({ shortcuts, imageSrc, logo, title }, idx) => {
        const isEvenGridItem = idx % 2 === 0
        const shortcutsColumnProps = {
          isEvenGridItem,
          logo,
          title,
          shortcuts,
        }
        return (
          <div
            className={`demoRow${isEvenGridItem ? "" : " oddDemoRow"}`}
            key={title}
          >
            {isEvenGridItem || !isTabletOrLarger ? (
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
  )
}
