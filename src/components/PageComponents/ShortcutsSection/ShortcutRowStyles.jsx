import styled from "styled-components/macro"
import { BREAKPOINTS, Z_INDICES } from "../../../utils/constants"

export const ShortcutRowStyles = styled.div`
  .shortcutRow {
    padding: 0.5em 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: ${BREAKPOINTS.TABLET}px) {
      grid-template-columns: 64px 1fr 1fr;
      &.withoutMoreInfo {
      padding-left: calc(64px + 2em);
      }
    }
    &.withoutMoreInfo {
    grid-template-columns: 1fr 1fr;
    }
    &.withoutShortcut {
      grid-template-columns: 1fr;
      @media (min-width: ${BREAKPOINTS.TABLET}px) {
      }
    }
    &.withGif {
      padding-right: 4em;
      @media (min-width: ${630}px) {
      padding-right: 8em;
      }
    }
    /* &.withShortcut {
      &.withoutMoreInfo {
        grid-template-columns: 1fr 1fr;
        @media (min-width: ${BREAKPOINTS.TABLET}px) {
          grid-template-columns: 64px 1fr 1fr;
        }
      }
    } */
    grid-gap: 1em;
    align-items: center;
    min-height: 64px;
    &.withMoreInfo {
      cursor: pointer;
    }
    .shortcut {
      line-height: 2em;
      overflow: hidden;
    }
  }
  .moreInfoSection {
    padding: 1.5em 1.5em 0.5em;
  }
  .iconButton {
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    @media (min-width: ${BREAKPOINTS.MOBILE}px) {
      height: 64px;
    }
  }
  .iconLink{
    color: hsla(0,0%,30%,1);
  }

  &.evenRow {
    .shortcutRow,
    .moreInfoSection,
    .expandButtonRow {
      background: hsl(0, 0%, 85%);
    }
    hr {
      background: hsl(0, 0%, 75%);
    }
  }
  .expandButtonRow {
    display: grid;
    justify-items: center;
    margin-top: -0.75em;
    cursor: pointer;
  }
  pre {
    margin: 0 0 0 -1em;
    padding: 0;
  }
  .description{
    max-width:45vw;
  }
  @media (min-width: ${BREAKPOINTS.MOBILE}px) {
    pre {
      margin: 0.5em 0;
      padding: 0.5em 1em;
    }
  }
  position: relative;
  z-index: ${p => (p.isHoveredRow ? Z_INDICES[7] : 1)};
  .gifImg{
    position:absolute;
    right:0;
    top:0;
    width: fit-content;
    z-index: ${Z_INDICES[9]};
    height: 100%;
  }
`
