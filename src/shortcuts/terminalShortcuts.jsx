import React from "react"
import { Alt, Key, Ctrl } from "../components/Keyboard/Keys"

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
  ],
}
