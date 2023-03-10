import React from "react"
import { Alt, Key, Ctrl, Shift, Tab, Code } from "../components/Keyboard/Keys"

export const terminalShortcuts = {
  "Navigation": [
    {
      description: "Open File Explorer here",
      shortcut: (
        <>
          <Code>{`start .`}</Code>
        </>
      ),
      shortcutMac: (
        <>
          <Code>{`open .`}</Code>
        </>
      ),
    },
    {
      description: "Go back to last location",
      shortcut: (
        <>
          <Code>{`cd -`}</Code>
        </>
      ),
    },
    {
      description: "Autocomplete",
      shortcut: (
        <>
          <Tab />
        </>
      ),
    },
    {
      description: "Autocomplete - list all options",
      shortcut: (
        <>
          <Tab />, <Tab />
        </>
      ),
    },
    {
      description: "Reverse search",
      shortcut: (
        <>
          <Ctrl />+<Key>R</Key>
        </>
      ),
    },
    {
      description: "Reverse search - previous match",
      shortcut: (
        <>
          <Ctrl />+<Key>R</Key>, <Ctrl />+<Key>R</Key>
        </>
      ),
    },

  ].map(s => ({ ...s, shortcutMac: s.shortcutMac || s.shortcut })),
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
  ].map(s => ({ ...s, shortcutMac: s.shortcutMac || s.shortcut })),
}
