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
import taskManager from "../images/windows/task-manager-end-task.jpg"

export const windowsShortcuts = {
  basics: [
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
          <p>
            Hold <Alt />, then tap <Tab /> repeatedly until you land on the
            desired program, then release <Alt />.
          </p>
          <p>Convenient for rapidly switching between two programs.</p>
        </>
      ),
    },
    {
      description: "Task manager - diagnose problems like slow computer",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>Esc</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>
            Click the column headers to sort tasks by usage of CPU, Memory etc.
            to find problematic tasks.
          </p>
          <p>
            To improve performance, check the{" "}
            <a
              href="https://support.microsoft.com/en-ca/help/4026268/windows-10-change-startup-apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Startup</strong> tab
            </a>{" "}
            and disable any unnecessary tasks.
          </p>
          <img src={taskManager} alt="task manager" />
        </>
      ),
    },
    {
      description: "Task manager menu - try when above doesn't work",
      shortcut: (
        <>
          <Ctrl />+<Alt />+<Key>Delete</Key>
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
  ],
  quickAccess: [
    {
      description: "Open file explorer",
      shortcut: (
        <>
          <Windows />+<Key>E</Key>
        </>
      ),
      moreInfo: <p>HEY I'm a more info over here</p>,
    },
    {
      description: "Action panel",
      shortcut: (
        <>
          <Windows />+<Key>A</Key>
        </>
      ),
    },
    {
      description: "Connections (bluetooth)",
      shortcut: (
        <>
          <Windows />+<Key>K</Key>
        </>
      ),
    },
    {
      description: "Sticky notes",
      shortcut: (
        <>
          <Windows />+<Key>W</Key>
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
          <Windows />+<Key>0</Key>
          to
          <Key>9</Key>
        </>
      ),
    },
    {
      description: "Toggle desktop view",
      shortcut: (
        <>
          <Windows />+<Key>D</Key>
        </>
      ),
    },
    {
      description: "🎈 Emoji menu 😎✨",
      shortcut: (
        <>
          <Windows />+<Key smaller={true}>.</Key>
        </>
      ),
      moreInfo: <p>HEY I'm a more info over here</p>,
    },
    {
      description: "Custom shortcuts",
      shortcut: (
        <div>
          Check out{" "}
          <a
            href="https://www.autohotkey.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline" }}
          >
            AutoHotkey
          </a>{" "}
          — many scripts are already available!
        </div>
      ),
    },
  ],
}
