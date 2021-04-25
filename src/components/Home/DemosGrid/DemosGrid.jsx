import React from "react"
import { DemosGridStyles } from "./DemosGridStyles"
import { useMediaQuery } from "@material-ui/core"
import { BREAKPOINTS } from "../../../utils/constants"
import { Link } from "gatsby"
import { useStore } from "../../../utils/store"

export default function DemosGrid({ demos }) {
  const isTabletOrLarger = useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET}px)`)
  return (
    <DemosGridStyles>
      {demos.map(({ shortcuts, link, imageSrc, logo, title, note }, idx) => {
        const isEvenGridItem = idx % 2 === 0
        const shortcutsColumnProps = {
          isEvenGridItem,
          logo,
          title,
          note,
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

const ShortcutsColumn = ({
  logo,
  title,
  note,
  link,
  shortcuts,
  isEvenGridItem,
}) => {
  const LinkOrDiv = props => (link ? <Link {...props} /> : <div {...props} />)
  const isWindows = useStore(s => s.isWindows)
  return (
    <div className="shortcutsColumn">
      <LinkOrDiv
        to={link}
        className={`header ${link ? "header-link" : ""}${
          note ? " withNote" : ""
        }`}
      >
        <div className="logoImage">
          <img src={logo} alt="" />
        </div>
        <div className={`title`}>{title}</div>
      </LinkOrDiv>
      {note && <div className="note">{note}</div>}
      {shortcuts.map(({ description, shortcut, shortcutMac }, idx) => (
        <div
          className={`shortcutRow${idx % 2 === 0 ? "" : " oddShortcutRow"}`}
          key={idx}
        >
          {isEvenGridItem ? (
            <>
              <div className="description">{description}</div>
              <div className="shortcut">
                {isWindows ? shortcut : shortcutMac}
              </div>
            </>
          ) : (
            <>
              <div
                className="shortcut"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                {isWindows ? shortcut : shortcutMac}
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
