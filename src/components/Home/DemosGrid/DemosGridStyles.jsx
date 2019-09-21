import styled from "styled-components/macro"
import { BREAKPOINTS } from "../../../constants"
const DEMO_BOX_WIDTH = 600

export const DemosGridStyles = styled.div`
  display: grid;

  .demoRow {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    width: 100%;
    margin: 0 auto;

    .shortcutsColumn {
      background: #ffffff;
      width: 100%;
      height: 100%;
      padding: 2em;
      .header {
        display: grid;
        place-items: center;
        grid-template-rows: auto 1fr;
        .title {
          padding: 0.5em 0 1em 0;
          font-size: 2em;
        }
      }
      .shortcutRow {
        display: grid;
        place-items: center;
        margin: 1em 0;
        grid-gap: 0.25em;
      }
      .header,
      .name,
      .shortcut {
        /* line-height: 1.2em; */
        font-size: 0.8em;
      }
    }

    .imageColumn {
      display: grid;
      place-items: center;
      background: #294675;
      width: 100%;
      height: 100%;
      padding: 4em 1em;
      img {
        width: 100%;
      }
    }

    @media (min-width: ${BREAKPOINTS.MOBILE}px) {
      .shortcutRow {
        display: grid;
        place-items: unset !important;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1.45em !important;
        .name {
          text-align: left;
          justify-self: end;
        }
      }
    }
    @media (min-width: ${BREAKPOINTS.TABLET}px) {
      .header,
      .name,
      .shortcut {
        font-size: 1em;
      }
      .shortcutRow {
        grid-template-columns: 1fr 1fr;
        margin: 0.5em 0;
      }
      height: ${DEMO_BOX_WIDTH}px;
      grid-template-columns: 1fr 1fr;
      .imageColumn {
        padding: 0;
      }
    }
    @media (min-width: ${DEMO_BOX_WIDTH * 2}px) {
      width: ${DEMO_BOX_WIDTH * 2}px;
    }
  }
`
