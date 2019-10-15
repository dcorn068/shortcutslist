import React from "react"

import basicShortcuts from "../../../images/demosGrid/basic-shortcuts.gif"
import virtualDesktopsDemo from "../../../images/demosGrid/virtual-desktops-demo.gif"
import chromeTabsDemo from "../../../images/demosGrid/chrome-tabs-demo.gif"
import emmetVsCodeDemo from "../../../images/demosGrid/emmet-vscode-demo.gif"
import terminalDemo from "../../../images/demosGrid/terminal-demo.gif"
import linuxDemo from "../../../images/demosGrid/linux-demo.gif"

import notepadLogo from "../../../images/icons/notepad-logo.jpg"
import windows10Logo from "../../../images/icons/windows-10-logo.jpg"
import chromeLogo from "../../../images/icons/chrome-logo.jpg"
import vscodeLogo from "../../../images/icons/vscode-logo.png"
import terminalLogo from "../../../images/icons/terminal-logo.svg"
import ubuntuLogo from "../../../images/icons/ubuntu-logo.png"

import {
  Ctrl,
  Left,
  Right,
  Down,
  Shift,
  Windows,
  End,
  Home,
  Alt,
  Tab,
  Key,
  Code,
  Up,
} from "../../Keyboard/Keys"
import { windowsShortcuts } from "../../../shortcuts/windowsShortcuts"
import { browserShortcuts } from "../../../shortcuts/browserShortcuts"

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
      {
        description: "Close window",
        shortcut: (
          <>
            <Alt />+<Key>F4</Key>
          </>
        ),
      },
    ],
  },
  {
    title: "Windows 10",
    imageSrc: virtualDesktopsDemo,
    logo: windows10Logo,
    shortcuts: windowsShortcuts.quickAccess,
  },
  {
    title: "Google Chrome",
    imageSrc: chromeTabsDemo,
    logo: chromeLogo,
    shortcuts: [...browserShortcuts.basics, ...browserShortcuts.tabs],
  },
]

export const demos2 = [
  {
    title: (
      <div style={{ position: "relative", paddingBottom: "0.5em" }}>
        <div>Visual Studio Code</div>
        <small
          style={{
            fontSize: "0.4em",
            position: "absolute",
            overflow: "visible",
            whiteSpace: "nowrap",
            left: -200,
            right: -200,
            textAlign: "center",
          }}
        >
          Note: some of these require{" "}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings"
            target="_blank"
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
            <Ctrl />+<Shift />+<Key>P</Key>
          </>
        ),
      },
      {
        description: "Navigate files",
        shortcut: (
          <>
            <Ctrl />+<Key>P</Key>
          </>
        ),
      },
      {
        description: "Comment out lines",
        shortcut: (
          <>
            <Ctrl />+<Key>/</Key>
          </>
        ),
      },
      {
        description: "Duplicate lines",
        shortcut: (
          <>
            <Ctrl />+<Shift />+<Key>D</Key>
          </>
        ),
      },
      {
        description: "Add cursor at next instance of selection",
        shortcut: (
          <>
            <Ctrl />+<Key>D</Key>
          </>
        ),
      },
      {
        description: "Add cursors to selection line ends",
        shortcut: (
          <>
            <Ctrl />+<Shift />+<Key>L</Key>
          </>
        ),
      },
      {
        description: "Delete lines",
        shortcut: (
          <>
            <Ctrl />+<Shift />+<Key>K</Key>
          </>
        ),
      },
      {
        description: "Join lines",
        shortcut: (
          <>
            <Ctrl />+<Key>J</Key>
          </>
        ),
      },
      {
        description: "Toggle text wrap",
        shortcut: (
          <>
            <Alt />+<Key>Z</Key>
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
  {
    title: (
      <div style={{ position: "relative", paddingBottom: "0.5em" }}>
        <div>Terminal</div>
        <small
          style={{
            fontSize: "0.4em",
            position: "absolute",
            overflow: "visible",
            whiteSpace: "nowrap",
            left: -200,
            right: -200,
            textAlign: "center",
          }}
        >
          Note: on Windows, use{" "}
          <a
            href="https://git-scm.com/downloads"
            target="_blank"
            rel="noopener noreferrer"
          >
            git bash
          </a>{" "}
          (easy) or{" "}
          <a
            href="https://itsfoss.com/install-bash-on-windows/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linux bash
          </a>{" "}
          (powerful)
        </small>
      </div>
    ),
    imageSrc: terminalDemo,
    logo: terminalLogo,
    shortcuts: [
      {
        description: "Change directory",
        shortcut: <Code>cd [directory]</Code>,
      },
      {
        description: "Up one level",
        shortcut: <Code>cd ..</Code>,
      },
      {
        description: "Create files",
        shortcut: <Code>touch [file names]</Code>,
      },
      {
        description: "Create folders",
        shortcut: <Code>mkdir [folder names]</Code>,
      },
      {
        description: "Open file explorer here (Windows)",
        shortcut: <Code>start .</Code>,
      },
      {
        description: "Open file explorer here (Linux)",
        shortcut: <Code>nautilus .</Code>,
      },
      {
        description: "Open VS Code here",
        shortcut: <Code>code .</Code>,
      },
    ],
  },
  {
    title: "Ubuntu (Linux)",
    imageSrc: linuxDemo,
    logo: ubuntuLogo,
    shortcuts: [
      {
        description: "Open terminal",
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
        description: "Go to terminal tab [N]",
        shortcut: (
          <>
            <Alt />+<Key>0</Key>to<Key>9</Key>
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
        description: "Cancel terminal command",
        shortcut: (
          <>
            <Ctrl />+<Key>C</Key>
          </>
        ),
      },
      {
        description: "Switch virtual desktops",
        shortcut: (
          <>
            <Ctrl />+<Alt />+<Down /> or <Up />
          </>
        ),
      },
      {
        description: "Save area screenshot to clipboard",
        shortcut: (
          <>
            <Windows />, type "Keyboard", scroll to "screenshots" and set a
            shortcut
          </>
        ),
      },
      {
        description: "Run any terminal command",
        shortcut: (
          <>
            <Windows />, type "Keyboard", scroll to bottom, add custom shortcut
          </>
        ),
      },
    ],
  },
]
