import styled from "styled-components/macro"
import { BREAKPOINTS, MAX_WIDTH, Z_INDICES } from "../../utils/constants"

export default styled.div`
  padding: 3em 1em;
  background: white;
  section {
    max-width: ${MAX_WIDTH}px;
    margin: auto;
    position: relative;
  }
  .iconButton {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .title {
    text-align: center;
    font-family: "Montserrat", serif;
    font-size: 3em;
    &.subtitle {
      font-size: 1em;
    }
  }
  .sectionTitleRow {
    position: relative;
    background: white;
    padding-bottom: 1em;
  }
  .sectionTitleButton {
    cursor: pointer;
    display: grid;
    grid-template-columns: auto 1fr;
    place-items: center start;
    grid-gap: 0.5em;
  }
  .sectionTitle {
    font-family: "Montserrat", serif;
    font-size: 2em;
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
  }
  .sectionHeaders {
    padding: 0.5em 1em;
    @media (min-width: ${BREAKPOINTS.TABLET}px) {
      padding-left: 88px;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 64px;
    grid-gap: 1em;
    position: sticky;
    top: 0px;
    box-shadow: 0px 6px 9px -8px rgba(0, 0, 0, 0.3);
    background: white;
    z-index: ${p => (p.isGifModalOpen ? 1 : Z_INDICES[2])};
    align-items: baseline;
    justify-items: start;
    .demo {
      justify-self: right;
    }
    h3,
    h4,
    h5,
    h6 {
      font-family: "Montserrat", serif;
      margin: 0;
    }
  }
`
