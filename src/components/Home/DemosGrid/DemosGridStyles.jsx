import styled from "styled-components/macro"
import { BREAKPOINTS } from "../../../constants"
const DEMO_BOX_WIDTH = 600

export const DemosGridStyles = styled.div`
  display: grid;

  .logoImage {
    height: 64px;
    img {
      height: 100%;
    }
  }

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
          font-family: "Montserrat", sans-serif;
        }
      }
      .shortcutRow {
        display: grid;
        place-items: center;
        margin: 1em 0 1.5em;
        grid-gap: 0.25em;
      }
      .header,
      .name,
      .shortcut {
        line-height: 1.6em;
        font-size: 1.2em;
      }
      .shortcut {
        font-family: "Ubuntu Mono";
        .kbd {
          font-family: "Roboto", system-ui, sans-serif;
        }
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
        box-shadow: 0px 2px 9px 6px hsla(0, 0%, 0%, 0.18);
      }
    }

    @media (min-width: ${BREAKPOINTS.MOBILE}px) {
      .shortcutRow {
        display: grid;
        place-items: unset !important;
        grid-template-columns: 1fr 1.3fr;
        grid-gap: 1.45em !important;
        .name {
          text-align: left;
          justify-self: end;
          white-space: nowrap;
        }
        .name,
        .shortcut {
          font-size: 1.1em;
        }
      }
    }
    @media (min-width: 600px) {
      .shortcutRow {
        .name,
        .shortcut {
          font-size: 1.2em;
        }
      }
    }
    @media (min-width: ${BREAKPOINTS.TABLET}px) {
      grid-template-columns: 1fr 1fr;
      .shortcutsColumn {
        box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.42);
        z-index: 1;
        .header,
        .name,
        .shortcut {
          line-height: 1.9em;
          font-size: 0.9em;
        }
        .shortcutRow {
          grid-template-columns: 1fr 1.5fr;
          margin: 0.5em 0;
        }
        @media (min-width: ${BREAKPOINTS.DESKTOP}px) {
          .header,
          .name,
          .shortcut {
            font-size: 1em;
          }
          .shortcutRow {
            grid-template-columns: 1fr 1.3fr;
          }
        }
      }
      .imageColumn {
        padding: 0;
        img {
          box-shadow: none;
        }
      }
    }
    @media (min-width: ${BREAKPOINTS.DESKTOP}px) {
      min-height: ${DEMO_BOX_WIDTH}px;
      max-width: ${DEMO_BOX_WIDTH * 2}px;
    }
  }
`
