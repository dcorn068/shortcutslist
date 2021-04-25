import React from "react"
import LinkIcon from "@material-ui/icons/Link"
import { startCase, kebabCase } from "lodash"
import styled from "styled-components/macro"
import { useStore } from "../../../utils/store"
import { ShortcutRow } from "./ShortcutRow"

export default function ShortcutsSection({ shortcuts, sectionTitle }) {
  const slug = kebabCase(sectionTitle)
  const isWindows = useStore(s => s.isWindows)
  return (
    <ShortcutSectionStyles className="shortcutSection">
      <div className="sectionTitleRow" id={slug}>
        <a href={`#${slug}`} className="iconLink">
          <div className="sectionTitleButton">
            <LinkIcon />
            <h2 className="sectionTitle">{startCase(sectionTitle)}</h2>
          </div>
        </a>
      </div>
      <div className="sectionHeaders">
        <div />
        <h3>Effect</h3>
        <h3>Shortcut</h3>
      </div>
      <div className="sectionShortcuts">
        {shortcuts.map(
          (
            { shortcut, shortcutMac, description, moreInfo, pathToGif },
            idx
          ) => (
            <ShortcutRow
              isEvenRow={idx % 2 === 0}
              key={
                idx
              } /* we can use idx here since the order/shortcuts array will never change */
              {...{
                description,
                shortcut: isWindows ? shortcut : shortcutMac,
                moreInfo,
                pathToGif,
              }}
            />
          )
        )}
      </div>
    </ShortcutSectionStyles>
  )
}

const ShortcutSectionStyles = styled.div`
  position: relative;
  .sectionShortcuts {
    padding-bottom: 3em;
  }
`
