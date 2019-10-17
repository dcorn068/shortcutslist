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
  basics: [
    {
      description: "Open any program",
      shortcut: (
        <>
          <Windows />, then type what you want to open
        </>
      ),
    },
    {
      description: "Copy",
      shortcut: (
        <>
          <Ctrl />+<Key>C</Key>
        </>
      ),
    },
    {
      description: "Paste",
      shortcut: (
        <>
          <Ctrl />+<Key>V</Key>
        </>
      ),
    },
    {
      description: "Cut (copy + delete)",
      shortcut: (
        <>
          <Ctrl />+<Key>X</Key>
        </>
      ),
    },
    {
      description: "Undo",
      shortcut: (
        <>
          <Ctrl />+<Key>Z</Key>
        </>
      ),
    },
    {
      description: "Close system dialog boxes / pop-ups",
      shortcut: (
        <>
          <Key>Esc</Key>
        </>
      ),
    },
    {
      description: "Quick-switch programs",
      shortcut: (
        <>
          <Alt />+<Tab />
        </>
      ),
      moreInfo: (
        <>
          <div>
            Hold <Alt />, then tap <Tab /> repeatedly until you land on the
            desired program, then release <Alt />.
          </div>
          <p>Convenient for rapidly switching between two programs.</p>
        </>
      ),
    },
    {
      description: "Close program",
      shortcut: (
        <>
          <Alt />+<Key>F4</Key>
        </>
      ),
    },
    {
      description: "Snap window to sides",
      shortcut: (
        <>
          <Windows />+<Left />
          or
          <Right />
        </>
      ),
      moreInfo: (
        <p>Try it with one window on each side for side-by-side mode!</p>
      ),
    },
    {
      description: "Maximize, restore, minimize window",
      shortcut: (
        <>
          <Windows />+<Up />
          or
          <Down />
        </>
      ),
    },
    {
      description: "Move window between multiple monitors",
      shortcut: (
        <>
          <Shift />+<Windows />+<Left />
          or
          <Right />
        </>
      ),
    },
    {
      description: "Set up your own custom shortcuts",
      shortcut: (
        <>
          <Windows />, type "keyboard" to open Keyboard Settings, then scroll to
          the bottom.
        </>
      ),
    },
  ],
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
