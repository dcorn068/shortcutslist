import React from "react"
import styled from "styled-components/macro"
import { MAX_WIDTH } from "../constants"
import { Alt, Ctrl, Shift, Key } from "./Keyboard/Keys"

const TopTipStyles = styled.div`
  background: hsl(200, 50%, 75%);
  padding: 0.5em 2em;
  .tipContent {
    max-width: ${MAX_WIDTH}px;
    margin: auto;
  }
`

const tips = [
  <>
    <Ctrl />, <Alt />, and <Shift /> are <strong>modifier</strong> keys —{" "}
    <strong>hold them down</strong> while pressing other keys to modify the
    effects.
  </>,
  <>
    The best way to understand a shortcut is to try it out and see what happens!
  </>,
  <>
    <div>
      You can use{" "}
      <a
        href="https://www.audible.ca/pd/Unlimited-Memory-Audiobook/B071VH423Q"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span role="img" aria-label="lightning">
          ⚡
        </span>
        mnemonics
        <span role="img" aria-label="brain">
          🧠
        </span>
      </a>{" "}
      to memorize anything more quickly.
    </div>
    <div>
      For example, <Shift /> means "backwards", <Ctrl />+<Key>T</Key> is "new
      browser tab", so <Ctrl />+<Shift />+<Key>T</Key> must be "old browser
      tab".
    </div>
  </>,
]

export default () => {
  const randomIndex = Math.floor(Math.random() * tips.length)
  return (
    <TopTipStyles>
      <div className="tipContent">{tips[randomIndex]}</div>
    </TopTipStyles>
  )
}
