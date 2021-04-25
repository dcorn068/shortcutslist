import React from "react"
import { DemosGridStyles } from "./DemosGridStyles"
import { useMediaQuery } from "@material-ui/core"
import { BREAKPOINTS } from "../../../utils/constants"
import { ShortcutsColumn } from "./ShortcutsColumn"

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
