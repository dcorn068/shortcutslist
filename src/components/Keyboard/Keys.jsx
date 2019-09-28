import React from "react"
import windowsKey from "../../images/windows-key.png"
import tabKey from "../../images/tab-key.png"
import styled from "styled-components/macro"

export const Key = ({ children, small = false, smaller = false }) => (
  <div
    className={`kbd letter${small || !isNaN(Number(children)) ? " small" : ""}${
      smaller ? " smaller" : ""
    }`}
  >
    {children}
  </div>
)
export const Ctrl = () => <div className="kbd">Ctrl</div>
export const Shift = () => <div className="kbd">Shift</div>
export const Home = () => <div className="kbd">Home</div>
export const End = () => <div className="kbd">End</div>
export const Tab = () => (
  <div className="kbd">
    <span>
      <span>Tab</span>
      <img
        alt="tab symbol"
        style={{
          opacity: 0.9,
          marginLeft: 4,
          marginBottom: 2,
          width: 12,
          height: "auto",
        }}
        src={tabKey}
      />
    </span>
  </div>
)
export const Alt = () => <div className="kbd">Alt</div>
export const Left = () => <div className="kbd">←</div>
export const Right = () => <div className="kbd">→</div>
export const Down = () => (
  <div className="kbd" style={{ padding: "0.1em 0.4em" }}>
    ↓
  </div>
)
export const Up = () => (
  <div className="kbd" style={{ padding: "0.1em 0.4em" }}>
    ↑
  </div>
)
export const Windows = () => (
  <div className="kbd">
    <img alt="windows key" style={{ marginBottom: -2 }} src={windowsKey} />
  </div>
)

const CodeStyles = styled.div`
  font-family: "Ubuntu Mono";
  background: hsla(0, 0%, 0%, 0.12);
  padding: 0 1ch;
  font-weight: 600;
`
export const Code = ({ children }) => <CodeStyles>{children}</CodeStyles>
