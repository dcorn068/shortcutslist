import React from "react"

import basicShortcuts from "../../../images/basic-shortcuts.gif"
import virtualDesktops from "../../../images/virtual-desktops.gif"
import notepadIcon from "../../../images/icons/notepad-icon.jpg"
import windows10Icon from "../../../images/icons/windows-10-icon.png"
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
    logo: notepadIcon,
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
    imageSrc: virtualDesktops,
    icon: windows10Icon,
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
            <Windows />+<Key letter="." />
          </div>
        ),
      },
    ],
  },
]
