import styled from "styled-components/macro"
import { MAX_WIDTH } from "../../constants"

export default styled.div`
  padding: 3em 1em;
  background: white;
  section {
    max-width: ${MAX_WIDTH}px;
    margin: auto;
  }
  .sectionShortcuts {
    padding-bottom: 3em;
  }
  .iconButton {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .title {
    text-align: center;
    font-family: "Montserrat", serif;
    font-size: 3em;
  }
  .sectionTitleButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    .iconButton {
      margin-right: 0.125em;
    }
  }
  .sectionTitle {
    font-family: "Montserrat", serif;
    font-size: 2em;
    margin: 0;
  }
  .sectionHeaders {
    padding: 0.5em 1em;
    display: grid;
    grid-template-columns: 64px 1fr 1fr;
    grid-gap: 1em;
    position: sticky;
    top: 0px;
    h3 {
      font-family: "Montserrat", serif;
    }
  }
`
