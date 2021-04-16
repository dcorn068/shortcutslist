import React from "react"
import { DemosGridStyles } from "./DemosGridStyles"
import { useMediaQuery } from "@material-ui/core"
import { BREAKPOINTS } from "../../../utils/constants"
import { Link } from "gatsby"

export default function DemosGrid({ demos }) {
  const isTabletOrLarger = useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET}px)`)
  return (
    <DemosGridStyles>
      {demos.map(({ shortcuts, link, imageSrc, logo, title }, idx) => {
        const isEvenGridItem = idx % 2 === 0
        const shortcutsColumnProps = {
          isEvenGridItem,
          logo,
          title,
          link,
          shortcuts,
        }
        return (
          <div
            className={`demoRow${isEvenGridItem ? "" : " oddDemoRow"}`}
            key={idx}
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

const ImageColumn = ({ imageSrc }) => (
  <div className="imageColumn">
    <img src={imageSrc} alt="" />
  </div>
)

const ShortcutsColumn = ({ logo, title, link, shortcuts, isEvenGridItem }) => {
  const LinkOrDiv = props => (link ? <Link {...props} /> : <div {...props} />)
  return (
    <div className="shortcutsColumn">
      <LinkOrDiv to={link} className={`header ${link ? "header-link" : ""}`}>
        <div className="logoImage">
          <img src={logo} alt="" />
        </div>
        <div className="title">{title}</div>
      </LinkOrDiv>
      {shortcuts.map(({ description, shortcut }, idx) => (
        <div
          className={`shortcutRow${idx % 2 === 0 ? "" : " oddShortcutRow"}`}
          key={idx}
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
