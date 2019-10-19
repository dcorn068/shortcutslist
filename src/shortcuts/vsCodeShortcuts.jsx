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
  Code,
} from "../components/Keyboard/Keys"

const SUBLIME_TEXT_NOTICE = {
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
}

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
  writingHtmlWithEmmet: [
    {
      description: (
        <div style={{ margin: "0.5em 0 0.5em", width: "90%" }}>
          Write HTML with maximum efficiency using Emmet shortcuts -- head on
          over to the{" "}
          <a
            style={{ fontWeight: "bold" }}
            href="https://docs.emmet.io/cheat-sheet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emmet Cheat Sheet
          </a>{" "}
          for a full specification.
        </div>
      ),
    },
    {
      description: `<div class="foo"></div>`,
      shortcut: (
        <>
          <Code>div.foo</Code> or simply <Code>.foo</Code>
        </>
      ),
    },
    {
      description: `<p id="bar"></p>`,
      shortcut: (
        <>
          <Code>p#bar</Code>
        </>
      ),
    },
    {
      description: `<h1 id="weirdo" class="salty sweet sour"></h1>`,
      shortcut: (
        <>
          <Code>h1#weirdo.salty.sweet.sour</Code>
        </>
      ),
    },
    {
      description: (
        <pre style={{ margin: "0.5em 0", padding: "0.5em 1em" }}>
          {`<section class="list-container">
  <li>
    <ul>item 1</ul>
    <ul>item 2</ul>
    <ul>item 3</ul>
  </li>
</section>`}
        </pre>
      ),
      shortcut: (
        <>
          <Code>
            section.list-container>li>ul*3{"{"}item ${"}"}
          </Code>
        </>
      ),
    },
  ],
  multipleCursors: [
    SUBLIME_TEXT_NOTICE,
    /* TODO: find shortcuts without sublime keymapper */
    {
      description: "Add cursor above or below",
      shortcut: (
        <>
          <Shift />+<Alt />+<Up /> or <Down />
        </>
      ),
    },
    {
      description: "Add cursor by clicking",
      shortcut: (
        <>
          <Ctrl />+ click or <Alt />+ click
        </>
      ),
      moreInfo: (
        <p>
          Search your settings for 'Editor: Multi Cursor Modifier' to change
          between <strong>Ctrl</strong> and <strong>Alt</strong>.
        </p>
      ),
    },
    {
      description: "Split a selection on line ends",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>L</Key>
        </>
      ),
    },
    {
      description: "Rectangular selection",
      shortcut: (
        <>
          <strong>Middle-mouse-drag</strong>
        </>
      ),
    },
  ],
  multipleSelections: [
    SUBLIME_TEXT_NOTICE,
    {
      description: "Add cursor at next instance of current selection",
      shortcut: (
        <>
          <Ctrl />+<Key>D</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>
            Select any repeating pattern or word, then use this shortcut
            repeatedly to select multiple instances.
          </p>
        </>
      ),
    },
    {
      description:
        "While adding cursors using Ctrl + D, skip the current selected instance",
      shortcut: (
        <>
          <Ctrl />+<Key>K</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>
            For example: to select all the <strong>'selectme'</strong> in{" "}
            <strong>'selectme selectme dontselectme selectme'</strong>:
          </p>
          <div style={{ marginBottom: "1em" }}>
            Select the first 'selectme', then hold <Ctrl />, then <Key>D</Key>,{" "}
            <Key>D</Key>, <Key>K</Key>, <Key>D</Key>.
          </div>
        </>
      ),
    },
    {
      description: "Select all instances of selection",
      shortcut: (
        <>
          <Alt />+<Key>F3</Key>
        </>
      ),
    },
  ],
  copyPaste: [
    SUBLIME_TEXT_NOTICE,
    {
      description: "Copy entire line",
      shortcut: (
        <>
          with no selection, <Ctrl />+<Key>C</Key>
        </>
      ),
    },
    {
      description: "Cut (copy+delete) entire line",
      shortcut: (
        <>
          with no selection, <Ctrl />+<Key>X</Key>
        </>
      ),
    },
    {
      description: "Duplicate line(s)",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>D</Key>
        </>
      ),
    },
    {
      description: "Multi-copy-paste",
      shortcut: <>multi-select + copy, multi-select + paste</>,
      moreInfo: (
        <>
          <p>
            Note: this will only work as expected if the number of selections
            when copying equals the number of cursors or selections when
            pasting.
          </p>
        </>
      ),
    },
  ],
}
