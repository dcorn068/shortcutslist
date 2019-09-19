import React from "react"
import styled from "styled-components/macro"
import Youtube from "react-youtube"
import ContainerDimensions from "react-container-dimensions"

const HERO_HEIGHT = 480

const HeroStyles = styled.section`
  height: ${HERO_HEIGHT}px;
  width: 100%;
  position: relative;
  .overflow-wrapper {
    height: 100%;
    overflow: hidden;
    div {
      width: 100%;
      height: 100%;
      iframe {
        height: 100%;
        width: 100%;
        margin: 0;
        transform-origin: center center;
      }
    }
  }
  .background-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    background-image: linear-gradient(
      160deg,
      rgba(0, 224, 172, 0.92) 0%,
      #5427c6 85%
    );
    opacity: 0.7;
    mix-blend-mode: overlay;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 60px;
      font-family: "Permanent Marker", Sans-serif;
    }
    h3 {
      font-size: 20px;
      font-family: "Roboto", sans-serif;
      font-weight: normal;
    }
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
  }
`
export default () => {
  return (
    <ContainerDimensions>
      {({ width }) => (
        <HeroStyles>
          <div className="overflow-wrapper">
            <div
              style={{
                transform: `scale(${Math.min(
                  2.5,
                  (0.7 * width) / HERO_HEIGHT
                )})`,
              }}
            >
              <Youtube
                containerClassName="video-container"
                opts={{
                  playerVars: {
                    autoplay: 1,
                    start: 51,
                    end: 97,
                    loop: 1,
                    controls: 0,
                  },
                }}
                onReady={event => {
                  event.target.setVolume(0)
                }}
                onEnd={event => {
                  event.target.seekTo(51)
                }}
                videoId="dKJa-KQNjQU"
              />
            </div>
          </div>
          <div className="background-overlay"></div>
          <div className="title">
            <h1 className="font-effect-anaglyph">Shortcuts List</h1>
            <h3>You can do this — Grab some shortcuts and get moving!</h3>
          </div>
        </HeroStyles>
      )}
    </ContainerDimensions>
  )
}
