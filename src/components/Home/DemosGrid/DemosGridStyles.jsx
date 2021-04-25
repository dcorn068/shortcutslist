import styled from "styled-components/macro"
import { BREAKPOINTS, Z_INDICES } from "../../../utils/constants"
const DEMO_BOX_WIDTH = 600

export const DemosGridStyles = styled.div`
  display: grid;
  padding-bottom: 8.5em;

  .kbd {
    align-items: center;
    max-height: 29px;
    font-family: "Roboto", system-ui, sans-serif;
  }

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

    &.oddDemoRow {
      .shortcut {
        line-height: 1.4em;
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
        .description {
          text-align: right;
          justify-self: end;
        }
        .description,
        .shortcut {
          align-self: center;
          font-size: 1.1em;
        }
      }
    }
    @media (min-width: 600px) {
      .shortcutRow {
        .description,
        .shortcut {
          font-size: 1.2em;
        }
      }
    }
    @media (min-width: ${BREAKPOINTS.TABLET}px) {
      &:not(.oddDemoRow) {
        .shortcut {
          line-height: 2em;
        }
      }
      grid-template-columns: 1fr 1fr;
      .shortcutsColumn {
        box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.42);
        z-index: ${Z_INDICES[1]};
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
