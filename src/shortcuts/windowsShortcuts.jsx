import React from "react"
import { Windows, Alt, Tab, Key } from "../components/Keyboard/Keys"

export const windowsShortcutsBasics = [
  {
    description: "Quick switch programs",
    shortcut: (
      <>
        <Alt />+<Tab />
      </>
    ),
    moreInfo: <>Hold Alt</>,
  },
  {
    description: "Close program",
    shortcut: (
      <>
        <Alt />+<Key>F4</Key>
      </>
    ),
  },
]

export const windowsShortcutsQuickAccess = [
  {
    description: "Open file explorer",
    shortcut: (
      <>
        <Windows />+<Key>E</Key>
      </>
    ),
    moreInfo: "HEY I'm a more info over here",
  },
  {
    description: "Action panel",
    shortcut: (
      <>
        <Windows />+<Key>A</Key>
      </>
    ),
  },
  {
    description: "Connections (bluetooth)",
    shortcut: (
      <>
        <Windows />+<Key>K</Key>
      </>
    ),
  },
  {
    description: "Sticky notes",
    shortcut: (
      <>
        <Windows />+<Key>W</Key>
      </>
    ),
  },
  {
    description: "Task view",
    shortcut: (
      <>
        <Windows />+<Tab />
      </>
    ),
  },
  {
    description: "Launch Nth taskbar program",
    shortcut: (
      <>
        <Windows />+<Key>0</Key>
        to
        <Key>9</Key>
      </>
    ),
  },
  {
    description: "Toggle desktop view",
    shortcut: (
      <>
        <Windows />+<Key>D</Key>
      </>
    ),
  },
  {
    description: "🎈 Emoji menu 😎✨",
    shortcut: (
      <>
        <Windows />+<Key smaller={true}>.</Key>
      </>
    ),
    moreInfo: "HEY I'm a more info over here",
  },
  {
    description: "Custom shortcuts",
    shortcut: (
      <div>
        Check out{" "}
        <a
          href="https://www.autohotkey.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline" }}
        >
          AutoHotkey
        </a>{" "}
        — many scripts are already available!
      </div>
    ),
  },
]
