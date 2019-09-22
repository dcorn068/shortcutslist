import React from "react"

import basicShortcuts from "../../../images/basic-shortcuts.gif"
import virtualDesktopsDemo from "../../../images/virtual-desktops-demo.gif"
import chromeTabsDemo from "../../../images/chrome-tabs-demo.gif"
import notepadLogo from "../../../images/icons/notepad-logo.jpg"
import windows10Logo from "../../../images/icons/windows-10-logo.jpg"
import chromeLogo from "../../../images/icons/chrome-logo.jpg"
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

export const demos = [
  {
    imageSrc: basicShortcuts,
    logo: notepadLogo,
    title: "The Basics",
    shortcuts: [
      {
        description: "Jump entire words",
        shortcut: (
          <div>
            <Ctrl />+<Left />
            or
            <Right />
          </div>
        ),
      },
      {
        description: "Select characters",
        shortcut: (
          <div>
            <Shift />+<Left />
            or
            <Right />
          </div>
        ),
      },
      {
        description: "Select entire words",
        shortcut: (
          <div>
            <Ctrl />+<Shift />+
            <Left />
            or
            <Right />
          </div>
        ),
      },
      {
        description: "Jump to line ends",
        shortcut: (
          <div>
            <Home />
            or
            <End />
          </div>
        ),
      },
      {
        description: "Select to line ends",
        shortcut: (
          <div>
            <Shift />+<Home />
            or
            <End />
          </div>
        ),
      },
      {
        description: "Next field",
        shortcut: (
          <div>
            <Tab />
          </div>
        ),
      },
      {
        description: "Previous field",
        shortcut: (
          <div>
            <Shift />+<Tab />
          </div>
        ),
      },
      {
        description: "Switch windows",
        shortcut: (
          <div>
            <Alt />+<Tab />
          </div>
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
          <div>
            <Windows />+<Key letter="E" />
          </div>
        ),
      },
      {
        description: "Action panel",
        shortcut: (
          <div>
            <Windows />+<Key letter="A" />
          </div>
        ),
      },
      {
        description: "Connections (bluetooth)",
        shortcut: (
          <div>
            <Windows />+<Key letter="K" />
          </div>
        ),
      },
      {
        description: "Sticky notes",
        shortcut: (
          <div>
            <Windows />+<Key letter="W" />
          </div>
        ),
      },
      {
        description: "Task view",
        shortcut: (
          <div>
            <Windows />+<Tab />
          </div>
        ),
      },
      {
        description: "Launch Nth taskbar program",
        shortcut: (
          <div>
            <Windows />+<Key letter="0" />
            to
            <Key letter="9" />
          </div>
        ),
      },
      {
        description: "Toggle desktop view",
        shortcut: (
          <div>
            <Windows />+<Key letter="D" />
          </div>
        ),
      },
      {
        description: "🎈 Emoji menu 😎✨",
        shortcut: (
          <div>
            <Windows />+<Key smaller={true} letter="." />
          </div>
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
          <div>
            <Ctrl />+<Key letter="N" />
          </div>
        ),
      },
      {
        description: "Next tab",
        shortcut: (
          <div>
            <Ctrl />+<Tab />
          </div>
        ),
      },
      {
        description: "Previous tab",
        shortcut: (
          <div>
            <Ctrl />+<Shift />+<Tab />
          </div>
        ),
      },
      {
        description: "Close tab",
        shortcut: (
          <div>
            <Ctrl />+<Key letter="W" />
          </div>
        ),
      },
      {
        description: "Reopen last closed tab",
        shortcut: (
          <div>
            <Ctrl />+<Shift />+<Key letter="T" />
          </div>
        ),
      },
      {
        description: "Open link in new tab",
        shortcut: (
          <div>
            <Ctrl />+ <strong>Click</strong> or{" "}
            <strong>Mousewheel-Click</strong>
          </div>
        ),
      },
      {
        description: "Quick-search text",
        shortcut: (
          <div>
            <strong>Select</strong> text then <strong>drag to tab strip</strong>
          </div>
        ),
      },
      {
        description: "Select multiple tabs",
        shortcut: (
          <div>
            <Shift />
            or
            <Ctrl />+ <strong>Click</strong> tabs
          </div>
        ),
      },
      {
        description: "Split tabs into new window",
        shortcut: (
          <div>
            <strong>Drag tabs</strong> out of the tab strip
          </div>
        ),
      },
      {
        description: "Save groups of tabs for later",
        shortcut: (
          <div>
            <strong>Save session</strong> in{" "}
            <a
              href="https://chrome.google.com/webstore/detail/toby-for-chrome/hddnkoipeenegfoeaoibdmnaalmgkpip?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Toby tab manager
            </a>
          </div>
        ),
      },
    ],
  },
]
