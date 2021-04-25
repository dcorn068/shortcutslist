import styled from "styled-components/macro"
import { Z_INDICES } from "../../utils/constants"
export const KeyboardStyles = styled.div`
  .kbd {
    display: inline;
    margin: 0 0.4em;
    min-width: 1.5em;
    text-align: center;
    color: white;
    padding: 0.1em 0.3em;
    white-space: nowrap;
    flex-shrink: 0;
    height: fit-content;
    &.letter {
      padding: 0.1em 0.4em;
      &.small {
        padding: 0.1em 0.5em;
      }
      &.smaller {
        padding: 0.1em 0.6em;
      }
    }
    border-radius: 4px;
    background-image: linear-gradient(
      to right top,
      #272727,
      #343434,
      #414141,
      #4f4f4f,
      #5d5d5d,
      #5d5d5d,
      #5d5d5d,
      #5d5d5d,
      #4f4f4f,
      #414141,
      #343434,
      #272727
    );
    position: relative;
    z-index: ${Z_INDICES[1]};
    &:before {
      border-radius: 4px;
      position: absolute;
      z-index: -1;
      content: "";
      top: -2.5px;
      bottom: -2.5px;
      left: -2.5px;
      right: -2.5px;
      background-image: linear-gradient(
        to right bottom,
        #272727,
        #343434,
        #414141,
        #4f4f4f,
        #5d5d5d,
        #5d5d5d,
        #5d5d5d,
        #5d5d5d,
        #4f4f4f,
        #414141,
        #343434,
        #272727
      );
    }
    img {
      height: 1.2em;
      transform: translateY(0.15em);
    }
  }
`
