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
      description: "Open any program",
      frontPage: true,

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
      frontPage: true,

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
      description: "Task manager - diagnose problems like slow computer",
      frontPage: true,

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
      frontPage: true,

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
      frontPage: true,

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
      frontPage: true,

      shortcut: (
        <>
          <Shift />+<Windows />+<Left />
          or
          <Right />
        </>
      ),
    },
  ],
  movingAround: [
    {
      description: "Find any program or file",
      frontPage: true,

      shortcut: (
        <>
          <Windows />
          &nbsp;+ type something
        </>
      ),
    },
    {
      description: "Open file explorer",
      frontPage: true,

      shortcut: (
        <>
          <Windows />+<Key>E</Key>
        </>
      ),
    },
    {
      description: "Switch to most recently used open app",
      frontPage: true,

      shortcut: (
        <>
          <Alt />+<Tab />
        </>
      ),
    },
    {
      description: "Task view",
      frontPage: true,

      shortcut: (
        <>
          <Windows />+<Tab />
        </>
      ),
    },
    {
      description: "Copy screen clipping to clipboard",
      frontPage: true,

      shortcut: (
        <>
          <Windows />+<Shift />+<Key>S</Key>
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
      description: "Action panel",
      frontPage: true,

      shortcut: (
        <>
          <Windows />+<Key>A</Key>
        </>
      ),
    },
    {
      description: "Toggle desktop view",
      frontPage: true,

      shortcut: (
        <>
          <Windows />+<Key>D</Key>
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
      description: "Sticky notes, screen sketch",
      frontPage: true,

      shortcut: (
        <>
          <Windows />+<Key>W</Key>
        </>
      ),
    },
    {
      description: "OneNote quick note",
      shortcut: (
        <>
          <Windows />+<Key>N</Key>
        </>
      ),
    },
    {
      description: "Magnifier",
      frontPage: true,

      shortcut: (
        <>
          <Windows />+<Key>+</Key>
        </>
      ),
      moreInfo: (
        <div
          style={{ marginBottom: "1em", display: "grid", lineHeight: "2em" }}
        >
          <div>
            Increase magnification: <Windows />+<Key>+</Key>
          </div>
          <div>
            Decrease magnification: <Windows />+<Key>-</Key>
          </div>
          <div>
            Exit magnifier: <Windows />+<Key>Esc</Key>
          </div>
        </div>
      ),
    },

    {
      description: "Admin menu",
      shortcut: (
        <>
          <Windows />+<Key>X</Key>
        </>
      ),
      moreInfo: (
        <div style={{ marginBottom: "1em" }}>
          Once open, type the underlined letters to follow the menu items.
        </div>
      ),
    },
    {
      description: "Search with voice control",
      shortcut: (
        <>
          <Windows />+<Key>Q</Key>
        </>
      ),
    },
    {
      description:
        "Ease of Access Center (magnifier, screen keyboard, high contrast etc.)",
      shortcut: (
        <>
          <Windows />+<Key>U</Key>
        </>
      ),
    },
    {
      description: "Lock the computer",
      shortcut: (
        <>
          <Windows />+<Key>L</Key>
        </>
      ),
    },
    {
      frontPage: true,

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
      frontPage: true,

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
  fileExplorer: [
    {
      description: "Search programs, files, web",
      shortcut: (
        <>
          <Windows />, then <strong>type what you want</strong>
        </>
      ),
    },
    {
      description: "Open file explorer",
      shortcut: (
        <>
          <Windows />+<Key>E</Key>
        </>
      ),
    },
    {
      description: "Create a new folder",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>N</Key>
        </>
      ),
    },
    {
      description: "Rename selected file/folder",
      shortcut: (
        <>
          <Key>F2</Key>
        </>
      ),
    },
    {
      description: "Close file explorer",
      shortcut: (
        <>
          <Ctrl />+<Key>W</Key> or <Alt />+<Key>F4</Key>
        </>
      ),
    },
    {
      description: "Create a new file",
      shortcut: (
        <>
          <strong>right-click</strong>, <Key>W</Key>, <Key>T</Key>
        </>
      ),
      moreInfo: (
        <div style={{ marginBottom: "1em" }}>
          This creates a text file by default; just hit <Ctrl />+<Key>A</Key>{" "}
          and change the file extension.
        </div>
      ),
    },
    {
      description: "Jump to a file in the current directory",
      shortcut: (
        <>
          <strong>click</strong> anywhere in the folder, then{" "}
          <strong>start typing</strong> the file name
        </>
      ),
    },
    {
      description: "Find a file or folder",
      shortcut: (
        <>
          <Ctrl />+<Key>F</Key>
        </>
      ),
    },
    {
      description: "Access any command in the top menus",
      shortcut: (
        <>
          <Alt />, then <strong>type the letters</strong> that appear on top of
          the menu items
        </>
      ),
    },
    {
      description:
        "Focus the address bar (e.g. to copy the address or navigate to a copied address)",
      shortcut: (
        <>
          <Key>F4</Key> or <Ctrl />+<Key>L</Key>
        </>
      ),
    },
  ],
  virtualDesktops: [
    {
      description: "Note: Windows 10 only",
    },
    {
      description: "Add a virtual desktop",
      shortcut: (
        <>
          <Ctrl />+<Windows />+<Key>D</Key>
        </>
      ),
    },
    {
      frontPage: true,
      description: "Switch between virtual desktops",
      shortcut: (
        <>
          <Ctrl />+<Windows />+<Left /> or <Right />
        </>
      ),
    },
    {
      description: "Close virtual desktop",
      shortcut: (
        <>
          <Ctrl />+<Key>F4</Key>
        </>
      ),
    },
    {
      description: "Task View: perform any of above using mouse",
      shortcut: (
        <>
          <Windows />+<Tab />
        </>
      ),
    },
    {
      description: "Show a window or program on all desktops",
      shortcut: (
        <>
          In Task View, <strong>right-click</strong> a window >{" "}
          <strong>"show this window on all desktops"</strong> or{" "}
          <strong>"show windows from this app on all desktops"</strong>
        </>
      ),
    },
  ],
}
