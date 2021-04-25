import React from "react"
import { Link } from "gatsby"
import { useStore } from "../../../utils/store"
import { BREAKPOINTS } from "../../../utils/constants"
import styled from "styled-components/macro"

export const ShortcutsColumn = ({
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
    <ShortcutsColumnStyles className="shortcutsColumn">
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
    </ShortcutsColumnStyles>
  )
}

const ShortcutsColumnStyles = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  padding: 2em 1em;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    padding: 2em;
  }
  .header {
    display: grid;
    place-items: center;
    grid-template-rows: auto 1fr;
    .title {
      padding: 0.5em 0 1em 0;
      font-size: 2em;
      font-family: "Montserrat", sans-serif;
    }
    &.withNote {
      .title {
        padding: 0.5em 0 0 0;
      }
    }
  }
  .note {
    font-size: 1.2em;
    padding-bottom: 0.5em;
    text-align: center;
  }
  .shortcutRow {
    display: grid;
    place-items: center;
    padding: 1em 0.5em;
    grid-gap: 0.25em;
    &.oddShortcutRow {
      background: hsla(0, 0%, 0%, 0.08);
    }
    [alt="windows key"] {
      margin-top: -2px;
    }
  }
  .header,
  .description,
  .shortcut {
    font-size: 1.2em;
  }
  .header {
    line-height: 1.6em;
  }
  .shortcut {
    line-height: 1.8em;
    font-family: "Ubuntu Mono";
  }
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.42);
    z-index: 1;
    .header,
    .description,
    .shortcut {
      font-size: 0.9em;
    }
    .header {
      line-height: 1.9em;
    }
    .shortcutRow {
      grid-template-columns: 1fr 1.5fr;
      padding: 0.5em 0.5em;
    }
    @media (min-width: ${BREAKPOINTS.DESKTOP}px) {
      .header,
      .description,
      .shortcut {
        font-size: 1em;
      }
      .shortcutRow {
        grid-template-columns: 1fr 1.3fr;
      }
    }
  }
`
