import React from "react"

import basicShortcuts from "../../../images/demosGrid/basic-shortcuts.gif"
import virtualDesktopsDemo from "../../../images/demosGrid/virtual-desktops-demo.gif"
import chromeTabsDemo from "../../../images/demosGrid/chrome-tabs-demo.gif"
import emmetVsCodeDemo from "../../../images/demosGrid/emmet-vscode-demo.gif"
import notepadLogo from "../../../images/icons/notepad-logo.jpg"
import windows10Logo from "../../../images/icons/windows-10-logo.jpg"
import chromeLogo from "../../../images/icons/chrome-logo.jpg"
import vscodeLogo from "../../../images/icons/vscode-logo.png"
import {
  Ctrl,
  Left,
  Right,
  Shift,
  Windows,
  End,
  Home,
  Alt,
  Tab,
  Key,
} from "../../Keyboard/Keys"

export const demos1 = [
  {
    imageSrc: basicShortcuts,
    logo: notepadLogo,
    title: "The Basics",
    shortcuts: [
      {
        description: "Jump entire words",
        shortcut: (
          <>
            <Ctrl />+<Left />
            or
            <Right />
          </>
        ),
      },
      {
        description: "Select characters",
        shortcut: (
          <>
            <Shift />+<Left />
            or
            <Right />
          </>
        ),
      },
      {
        description: "Select entire words",
        shortcut: (
          <>
            <Ctrl />+<Shift />+
            <Left />
            or
            <Right />
          </>
        ),
      },
      {
        description: "Jump to line ends",
        shortcut: (
          <>
            <Home />
            or
            <End />
          </>
        ),
      },
      {
        description: "Select to line ends",
        shortcut: (
          <>
            <Shift />+<Home />
            or
            <End />
          </>
        ),
      },
      {
        description: "Next field",
        shortcut: (
          <>
            <Tab />
          </>
        ),
      },
      {
        description: "Previous field",
        shortcut: (
          <>
            <Shift />+<Tab />
          </>
        ),
      },
      {
        description: "Switch windows",
        shortcut: (
          <>
            <Alt />+<Tab />
          </>
        ),
      },
    ],
  },
  {
    title: "Windows 10",
    imageSrc: virtualDesktopsDemo,
    logo: windows10Logo,
    shortcuts: [
      {
        description: "Open file explorer",
        shortcut: (
          <>
            <Windows />+<Key letter="E" />
          </>
        ),
      },
      {
        description: "Action panel",
        shortcut: (
          <>
            <Windows />+<Key letter="A" />
          </>
        ),
      },
      {
        description: "Connections (bluetooth)",
        shortcut: (
          <>
            <Windows />+<Key letter="K" />
          </>
        ),
      },
      {
        description: "Sticky notes",
        shortcut: (
          <>
            <Windows />+<Key letter="W" />
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
            <Windows />+<Key letter="0" />
            to
            <Key letter="9" />
          </>
        ),
      },
      {
        description: "Toggle desktop view",
        shortcut: (
          <>
            <Windows />+<Key letter="D" />
          </>
        ),
      },
      {
        description: "🎈 Emoji menu 😎✨",
        shortcut: (
          <>
            <Windows />+<Key smaller={true} letter="." />
          </>
        ),
      },
    ],
  },
  {
    title: "Google Chrome",
    imageSrc: chromeTabsDemo,
    logo: chromeLogo,
    shortcuts: [
      {
        description: "New tab",
        shortcut: (
          <>
            <Ctrl />+<Key letter="N" />
          </>
        ),
      },
      {
        description: "Next tab",
        shortcut: (
          <>
            <Ctrl />+<Tab />
          </>
        ),
      },
      {
        description: "Previous tab",
        shortcut: (
          <>
            <Ctrl />+<Shift />+<Tab />
          </>
        ),
      },
      {
        description: "Close tab",
        shortcut: (
          <>
            <Ctrl />+<Key letter="W" />
          </>
        ),
      },
      {
        description: "Reopen last closed tab",
        shortcut: (
          <>
            <Ctrl />+<Shift />+<Key letter="T" />
          </>
        ),
      },
      {
        description: "Open link in new tab",
        shortcut: (
          <>
            <Ctrl />+ <strong>Click</strong> or{" "}
            <strong>Mousewheel-Click</strong>
          </>
        ),
      },
      {
        description: "Quick-search text",
        shortcut: (
          <>
            <strong>Select text</strong> then <strong>drag to tab strip</strong>
          </>
        ),
      },
      {
        description: "Select multiple tabs",
        shortcut: (
          <>
            <Shift />
            or
            <Ctrl />+ <strong>Click</strong> tabs
          </>
        ),
      },
      {
        description: "Split tabs into new window",
        shortcut: (
          <>
            <strong>Drag tabs</strong> out of the tab strip
          </>
        ),
      },
      {
        description: "Save group of tabs for later",
        shortcut: (
          <>
            <strong>Save session</strong> in{" "}
            <a
              href="https://chrome.google.com/webstore/detail/toby-for-chrome/hddnkoipeenegfoeaoibdmnaalmgkpip?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Toby tab manager
            </a>
          </>
        ),
      },
    ],
  },
]

export const demos2 = [
  {
    title: (
      <div style={{ position: "relative" }}>
        <div>Visual Studio Code</div>
        <small
          style={{
            fontSize: "0.4em",
            position: "absolute",
            overflow: "visible",
            whiteSpace: "nowrap",
            left: -40,
            right: -40,
            textAlign: "center",
          }}
        >
          Note: some of these require{" "}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings"
            rel="noopener noreferrer"
          >
            Sublime Text keymap extension
          </a>
        </small>
      </div>
    ),
    imageSrc: emmetVsCodeDemo,
    logo: vscodeLogo,
    shortcuts: [
      {
        description: "Command palette",
        shortcut: (
          <>
            <Ctrl />+<Shift />+<Key letter="P" />
          </>
        ),
      },
      {
        description: "Navigate files",
        shortcut: (
          <>
            <Ctrl />+<Key letter="P" />
          </>
        ),
      },
      {
        description: "Comment out lines",
        shortcut: (
          <>
            <Ctrl />+<Key letter="/" />
          </>
        ),
      },
      {
        description: "Duplicate lines",
        shortcut: (
          <>
            <Ctrl />+<Shift />+<Key letter="D" />
          </>
        ),
      },
      {
        description: "Add cursor at next instance of selection",
        shortcut: (
          <>
            <Ctrl />+<Key letter="D" />
          </>
        ),
      },
      {
        description: "Add cursors to selection line ends",
        shortcut: (
          <>
            <Ctrl />+<Shift />+<Key letter="L" />
          </>
        ),
      },
      {
        description: "Delete lines",
        shortcut: (
          <>
            <Ctrl />+<Shift />+<Key letter="K" />
          </>
        ),
      },
      {
        description: "Join lines",
        shortcut: (
          <>
            <Ctrl />+<Key letter="J" />
          </>
        ),
      },
      {
        description: "Toggle text wrap",
        shortcut: (
          <>
            <Alt />+<Key letter="Z" />
          </>
        ),
      },
      {
        description: "Expand selection",
        shortcut: (
          <>
            <Shift />+<Alt />+<Right />
          </>
        ),
      },
    ],
  },
]
