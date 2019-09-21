import styled from "styled-components/macro"
export const KeyboardStyles = styled.div`
  .kbd {
    display: inline-block;
    margin: 0 0.4em;
    min-width: 1.5em;
    text-align: center;
    color: white;
    padding: 0.1em 0.3em;
    border-radius: 5px;
    background-image: linear-gradient(
      to right top,
      #373737,
      #3d3d3d,
      #444444,
      #4a4a4a,
      #515151,
      #515151,
      #515151,
      #515151,
      #4a4a4a,
      #444444,
      #3d3d3d,
      #373737
    );
    position: relative;
    z-index: 1;
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
        #373737,
        #3d3d3d,
        #444444,
        #4a4a4a,
        #515151,
        #515151,
        #515151,
        #515151,
        #4a4a4a,
        #444444,
        #3d3d3d,
        #373737
      );
    }
    img {
      height: 1.2em;
      transform: translateY(0.15em);
    }
  }
`
