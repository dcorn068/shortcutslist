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

export const vsCodeShortcuts = {
  basics: [
    {
      description: "Comment out lines of code",
      shortcut: (
        <>
          <Ctrl />+<Key>/</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>Handy for:</p>
          <ul>
            <li>Making notes to your future self or other developers.</li>
            <li>
              "Turning off" code that you don't want to delete (remember to
              clean up after yourself!)
            </li>
          </ul>
          <p>
            Select anywhere in one or more lines; this will comment out the
            entire line.
          </p>
        </>
      ),
    },
    {
      description: "Comment out sections (not entire lines) of code",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>/</Key>
        </>
      ),
    },
    {
      description: "Go to any file",
      shortcut: (
        <>
          <Ctrl />+<Key>P</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>
            Performs a "fuzzy match" — type any part(s) of the file name to find
            it.
          </p>
          <p>Much faster than using the file explorer!</p>
        </>
      ),
    },
    {
      description: "Command palette — perform any action",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>P</Key>
        </>
      ),
      moreInfo: (
        <>
          <div style={{ margin: "1em 0" }}>
            The one shortcut to rule them all.{" "}
            <span role="img" aria-label="ring">
              💍
            </span>
          </div>
          <p>
            Type what you want to do, and the command palette will show you your
            options, and any shortcut keys associated with them.
          </p>
        </>
      ),
    },
  ],
  selectionAndMultipleCursors: [
    {
      description: `NOTE: this section's shortcuts use the extension "Sublime Text Keymap and Settings Importer" — find the equivalent shortcuts in the expansion panels.`,
      moreInfo: (
        <>
          <p>
            Check out the extension{" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sublime Text Keymap and Settings Importer
            </a>{" "}
            for a(n arguably) better shortcuts experience.
          </p>
        </>
      ),
    },
  ],
}
