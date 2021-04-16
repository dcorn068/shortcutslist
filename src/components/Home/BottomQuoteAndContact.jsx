import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components/macro"
import quotesIcon from "../../images/icons/quotes-icon.png"
import { Modal, Button } from "@material-ui/core"
import { useRandomRotate } from "./PageLinksHorizontal"
import { BREAKPOINTS } from "../../utils/constants"
import ContactModalContent from "./ContactModalContent"
import { animated, useSpring } from "react-spring"

const BottomQuoteStyles = styled.div`
  margin: auto;
  color: white;
  display: grid;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    grid-template-columns: 1fr 1fr;
  }
  max-width: 1200px;
  .link-left {
    color: white;
  }
  .left,
  .right {
    display: grid;
    place-items: center center;
    align-content: center;
    padding: 2em;
    text-align: center;
    height: 100%;
    min-height: 372px;
  }
  .left {
    background: #4054b2;
    font-family: "Montserrat", serif;
    .quoteImgWrapper {
      width: 56px;
      height: 56px;
    }
    figure {
      display: grid;
      place-items: center center;
      margin: 0;
      blockquote {
        margin: 0;
        padding: 4em 0;
      }
      figcaption {
        font-weight: 700;
        font-size: 1.5em;
      }
    }
  }
  .right {
    background: #001021;
    .contentWrapper {
      margin-top: -4em;
    }
    h2 {
      font-size: 3em;
    }
    p {
      margin: 1em 0 1.5em;
    }
    .bodyText p {
      margin: 0.2em;
    }
    button {
      color: white;
      font-size: 1.2em;
      border: 2px solid white;
      color: white;
      text-align: center;
      border-radius: 6px;
      padding: 0.35em 1em;
      transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
      display: grid;
      place-items: center;
      &:hover {
        border-width: 3px;
      }
    }
  }
`

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMousedOver, setIsMousedOver] = useState(false)
  const [isModalMounted, setIsModalMounted] = useState(false)

  const springUpDown = useSpring({
    transform: `translate(0px,${isModalMounted ? 0 : 50}px)`,
    opacity: isModalMounted ? 1 : 0,
    config: { tension: 340, friction: 20 },
  })

  const {
    randomNumbers,
    setRandomNumbers,
    rotateDeg,
    setRotateDeg,
  } = useRandomRotate()
  const timerRef = useRef()
  const handleClose = () => {
    setIsModalMounted(false)
    timerRef.current = setTimeout(() => {
      setIsModalOpen(false)
    }, 250)
  }
  useEffect(() => () => {
    // if (timerRef.current) {
    //   clearTimeout(timerRef.current)
    // }
  })
  const springRotateOnClick = useSpring({
    position: "relative",
    transform: `translateY(${isModalOpen ? 30 : 0}px) rotate(${
      isModalOpen ? 1080 : 0
    }deg) scale(${isModalOpen ? 0.5 : 1})`,
    opacity: isModalOpen ? 0 : 1,
    config: {
      friction: isModalOpen ? 80 : 24,
      mass: 2,
    },
  })
  return (
    <>
      <BottomQuoteStyles>
        <a
          className="link-left"
          href="https://www.lesswrong.com/posts/PmQkensvTGg7nGtJE/absolute-authority"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="left">
            <div className="quoteImgWrapper">
              <img src={quotesIcon} alt="quote" />
            </div>
            <figure>
              <blockquote>
                <p>Don't push harder,</p>
                <p>lower the resistance.</p>
              </blockquote>
              <figcaption>Lois Bujold</figcaption>
            </figure>
          </div>
        </a>
        <div className="right">
          <div className="contentWrapper">
            <h2>Want to help?</h2>
            <div className="bodyText">
              <p>Missing out on your fave shortcuts?</p>
              <p>Comments or suggestions?</p>
              <p>Want to help develop this site?</p>
            </div>
            <p>
              Let me know!{" "}
              <span role="img" aria-label="hands-raised">
                🙌
              </span>
            </p>
            <animated.div style={springRotateOnClick}>
              <Button
                variant="outlined"
                onClick={() => {
                  setIsModalOpen(true)
                }}
                disabled={isModalOpen}
                style={{
                  position: "absolute",
                  margin: "auto",
                  left: -200,
                  right: -200,
                  overflow: "visible",
                  whiteSpace: "nowrap",
                  ...(isMousedOver
                    ? {
                        transform: `scale(1.17) translateY(-3px) rotate(${rotateDeg}deg)`,
                        color: `hsl(${randomNumbers[0] * 360},90%,80%)`,
                        borderColor: `hsl(${randomNumbers[1] * 360},90%,80%)`,
                        boxShadow: `0px 0px 20px 0px hsla(${randomNumbers[2] *
                          360}, 67%, 82%, 0.56)`,
                      }
                    : {}),
                }}
                onMouseEnter={() => {
                  const randomRotateDeg =
                    (Math.random() > 0.5 ? -1 : 1) * Math.random() * 16
                  setRotateDeg(randomRotateDeg)
                  setRandomNumbers([
                    Math.random(),
                    Math.random(),
                    Math.random(),
                  ])
                  setIsMousedOver(true)
                }}
                onMouseLeave={() => {
                  setIsMousedOver(false)
                }}
              >
                GET IN TOUCH
              </Button>
            </animated.div>
          </div>
        </div>
        <Modal open={isModalOpen} onClose={handleClose}>
          <animated.div style={springUpDown}>
            <ContactModalContent
              setIsModalMounted={setIsModalMounted}
              handleClose={handleClose}
            />
          </animated.div>
        </Modal>
      </BottomQuoteStyles>
    </>
  )
}
