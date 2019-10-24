import React from "react"
import { Alt, Key, Ctrl, Shift } from "../components/Keyboard/Keys"

export const terminalShortcuts = {
  bash: [
    {
      description: "New terminal",
      shortcut: (
        <>
          <Ctrl />+<Alt />+<Key>T</Key>
        </>
      ),
    },
    {
      description: "New terminal tab",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>T</Key>
        </>
      ),
    },
    {
      description: "Switch to tab [1-9]",
      shortcut: (
        <>
          <Alt />+<Key>0</Key> to <Key>9</Key>
        </>
      ),
    },
    {
      description: "Close tab",
      shortcut: (
        <>
          <Ctrl />+<Key>D</Key>
        </>
      ),
    },
  ],
}
