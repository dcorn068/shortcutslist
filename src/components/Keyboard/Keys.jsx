import React from "react"
import windowsKey from "../../images/windows-key.png"

export const Key = ({ letter }) => <div className="kbd">{letter}</div>
export const Ctrl = () => <div className="kbd">Ctrl</div>
export const Shift = () => <div className="kbd">Shift</div>
export const Home = () => <div className="kbd">Home</div>
export const End = () => <div className="kbd">End</div>
export const Tab = () => <div className="kbd">Tab</div>
export const Alt = () => <div className="kbd">Alt</div>
export const Left = () => <div className="kbd">←</div>
export const Right = () => <div className="kbd">→</div>
export const Windows = () => (
  <div className="kbd">
    <img alt="windows key" src={windowsKey} />
  </div>
)
