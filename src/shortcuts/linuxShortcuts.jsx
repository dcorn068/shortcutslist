import React from "react"
import {
  Windows,
  Alt,
  Tab,
  Key,
  Ctrl,
  Shift,
  Left,
  Right,
  Down,
  Up,
} from "../components/Keyboard/Keys"

export const linuxShortcuts = {
  terminal: [
    {
      description: "New terminal",
      shortcut: (
        <>
          <Ctrl />+<Alt />+<Key>T</Key>
        </>
      ),
    },
    {
      description: "New tab in terminal",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>T</Key>
        </>
      ),
    },
    {
      description: "Move to Nth terminal tab",
      shortcut: (
        <>
          <Alt />+<Key>0</Key> to <Key>9</Key>
        </>
      ),
    },
    {
      description: "Close terminal tab",
      shortcut: (
        <>
          <Ctrl />+<Key>D</Key> or <Ctrl />+<Shift />+<Key>W</Key>
        </>
      ),
    },
    {
      description: "Cancel a running command",
      shortcut: (
        <>
          <Ctrl />+<Key>C</Key>
        </>
      ),
    },
    {
      description: `Copy selected text — Simply selecting text with the mouse will copy it. If that doesn't work, try:`,
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>C</Key>
        </>
      ),
    },
    {
      description: "Paste copied text",
      shortcut: (
        <>
          <strong>Middle-mouse-click</strong> or <Ctrl />+<Shift />+<Key>V</Key>
        </>
      ),
    },
  ],
}
