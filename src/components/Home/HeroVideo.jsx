import React from "react"
import styled from "styled-components/macro"
import Youtube from "react-youtube"
import ContainerDimensions from "react-container-dimensions"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { BREAKPOINTS, Z_INDICES } from "../../utils/constants"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import PageLinksHorizontal from "./PageLinksHorizontal"

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
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
    /* mobile */
    h1 {
      font-family: "Permanent Marker", Sans-serif;
      font-size: 19vw;
    }
    h3 {
      font-size: 20px;
      font-family: "Roboto", sans-serif;
      font-weight: normal;
    }
    /* tablet */
    @media (min-width: ${BREAKPOINTS.MOBILE}px) {
      h1 {
        font-size: 96px;
      }
      h3 {
        font-size: 24px;
      }
    }
    /* desktop */
    @media (min-width: ${BREAKPOINTS.TABLET}px) {
      height: ${HERO_HEIGHT}px;
      h1 {
        font-size: 60px;
      }
    }
    /* desktop+ */
    @media (min-width: ${BREAKPOINTS.DESKTOP + 100}px) {
      h1 {
        font-size: 118px;
      }
      h3 {
        font-size: 32px;
      }
    }
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
  }

  .static-image {
    animation-name: slow-transform-right;
    animation-duration: 20s;
    animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    transform-origin: center center;
  }

  @keyframes slow-transform-right {
    from {
      transform: translate(10px, -5px) scale(1.1);
    }
    to {
      transform: translate(-10px, 5px) scale(1.2);
    }
  }
  .font-effect-anaglyph {
    position: relative;
    width: 100%;
  }
  .titleContainer {
  }
  .emojiBackground {
    opacity: 0.8;
    transform: scale(2);
    position: absolute;
    z-index: ${Z_INDICES[0]};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    place-items: center center;
  }
  .titleword {
    position: absolute;
    z-index: ${Z_INDICES[0]};
    &.top {
      top: 0;
    }
    &.bottom {
      bottom: 0;
    }
    left: 0;
    right: 0;
    display: grid;
    place-items: center center;
    z-index: ${Z_INDICES[1]};
  }
`

const isBraveBrowser = (async () => {
  if (typeof window === 'undefined') { return false }
  return ((navigator?.brave && await navigator.brave.isBrave() || false))
})()

export default () => {
  const isTabletOrLarger = useMediaQuery(`(min-width:${BREAKPOINTS.TABLET}px)`)
  const doesFitFullWidthTitle = useMediaQuery(`(min-width:${914}px)`)
  const isSlowNetwork = typeof window !== 'undefined' && navigator?.connection?.downlink && navigator.connection.downlink < 5
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "speed-bus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ContainerDimensions>
      {({ width }) => (
        <HeroStyles>
          <div className="overflow-wrapper">
            {isTabletOrLarger && !isSlowNetwork && !isBraveBrowser ? (
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
            ) : (
              <div className="static-image">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </div>
            )}
          </div>
          <div className="background-overlay"></div>
          <div className="title">
            <h1 className="font-effect-anaglyph">
              {doesFitFullWidthTitle ? (
                <>
                  Shortcut
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>
                  School
                </>
              ) : (
                <>
                  <div className="emojiBackground">
                    <span role="img" aria-label="lightning">
                      ⚡
                    </span>
                  </div>
                  <div className="titleContainer">
                    <div className="titleword top">Shortcut</div>
                    <div className="titleword bottom">School</div>
                    <div className="">Shortcut</div>
                    <div className="">School</div>
                  </div>
                </>
              )}
            </h1>
            <h3>You can do this — Grab some shortcuts and get moving!</h3>
          </div>
          {isTabletOrLarger && <PageLinksHorizontal />}
        </HeroStyles>
      )}
    </ContainerDimensions>
  )
}
