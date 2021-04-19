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
  MacOption,
  MacCommand,
  MacMissionControl,
  MacControl,
} from "../components/Keyboard/Keys"
import taskManager from "../images/windows/task-manager-end-task.jpg"

export const macShortcuts = {
  basics: [
    {
      description: "Open any program",
      shortcutMac: (
        <>
          <Windows />, then type what you want to open
        </>
      ),
    },
    {
      description: "Copy",
      shortcutMac: (
        <>
          <Ctrl />+<Key>C</Key>
        </>
      ),
    },
    {
      description: "Paste",
      shortcutMac: (
        <>
          <Ctrl />+<Key>V</Key>
        </>
      ),
    },
    {
      description: "Cut (copy + delete)",
      shortcutMac: (
        <>
          <Ctrl />+<Key>X</Key>
        </>
      ),
    },
    {
      description: "Undo",
      shortcutMac: (
        <>
          <Ctrl />+<Key>Z</Key>
        </>
      ),
    },
    {
      description: "Close system dialog boxes / pop-ups",
      shortcutMac: (
        <>
          <Key>Esc</Key>
        </>
      ),
    },
    {
      description: "Quick-switch programs",
      shortcutMac: (
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
      shortcutMac: (
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
      shortcutMac: (
        <>
          <Ctrl />+<Alt />+<Key>Delete</Key>
        </>
      ),
    },
    {
      description: "Close program",
      shortcutMac: (
        <>
          <Alt />+<Key>F4</Key>
        </>
      ),
    },
    {
      description: "Snap window to sides",
      shortcutMac: (
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
      shortcutMac: (
        <>
          <Windows />+<Up />
          or
          <Down />
        </>
      ),
    },
    {
      description: "Move window between multiple monitors",
      shortcutMac: (
        <>
          <Shift />+<Windows />+<Left />
          or
          <Right />
        </>
      ),
    },
  ],
  quickAccess: [
    {
      description: "Spotlight search",
      shortcutMac: (
        <>
          <MacCommand />+<Key>Space</Key>
        </>
      ),
    },
    {
      description: "Open finder",
      shortcutMac: (
        <>
          <MacOption />+<MacCommand />+<Key>Space</Key>
        </>
      ),
    },
    {
      description: "Switch to most recently used open app",
      shortcutMac: (
        <>
          <MacCommand />+<Tab />
        </>
      ),
    },
    {
      description: "Mission Control",
      shortcutMac: (
        <>
          <MacMissionControl /> or <MacControl />+<Up />
        </>
      ),
    },
    {
      description: "Copy screen clipping to clipboard",
      shortcutMac: (
        <>
          <Shift />+<MacCommand />+<Key>4</Key>
        </>
      ),
    },
    {
      description: "Screen recording or screenshot (macOS Mojave or later)",
      shortcutMac: (
        <>
          <Shift />+<MacCommand />+<Key>5</Key>
        </>
      ),
    },
    {
      description: "New sticky note from selected text",
      shortcutMac: (
        <>
          <MacCommand />+<Shift />+<Key>Y</Key>
        </>
      ),
    },
    {
      description: "Show the desktop",
      shortcutMac: (
        <>
          <MacCommand />+<MacMissionControl />
        </>
      ),
    },
    {
      description: "Show all windows of the front app",
      shortcutMac: (
        <>
          <MacControl />+<Down />
        </>
      ),
    },
    {
      description: "Lock the computer",
      shortcutMac: (
        <>
          <MacControl />+<MacCommand />+<Key>Q</Key>
        </>
      ),
    },
    {
      description: "🎈 Emoji menu 😎✨",
      shortcutMac: (
        <>
          <MacControl />+<MacCommand />+<Key>Space</Key>
        </>
      ),
      moreInfo: <p>HEY I'm a more info over here</p>,
    },
    {
      description:
        "Something missing? I'm not an expert Mac user — recommendations are welcome!",
      shortcutMac: (
        <>
          <Key>Any suggestions?</Key>
        </>
      ),
    },
  ],
  fileExplorer: [
    {
      description: "Search programs, files, web",
      shortcutMac: (
        <>
          <Windows />, then <strong>type what you want</strong>
        </>
      ),
    },
    {
      description: "Open file explorer",
      shortcutMac: (
        <>
          <Windows />+<Key>E</Key>
        </>
      ),
    },
    {
      description: "Create a new folder",
      shortcutMac: (
        <>
          <Ctrl />+<Shift />+<Key>N</Key>
        </>
      ),
    },
    {
      description: "Rename selected file/folder",
      shortcutMac: (
        <>
          <Key>F2</Key>
        </>
      ),
    },
    {
      description: "Close file explorer",
      shortcutMac: (
        <>
          <Ctrl />+<Key>W</Key> or <Alt />+<Key>F4</Key>
        </>
      ),
    },
    {
      description: "Create a new file",
      shortcutMac: (
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
      shortcutMac: (
        <>
          <strong>click</strong> anywhere in the folder, then{" "}
          <strong>start typing</strong> the file name
        </>
      ),
    },
    {
      description: "Find a file or folder",
      shortcutMac: (
        <>
          <Ctrl />+<Key>F</Key>
        </>
      ),
    },
    {
      description: "Access any command in the top menus",
      shortcutMac: (
        <>
          <Alt />, then <strong>type the letters</strong> that appear on top of
          the menu items
        </>
      ),
    },
    {
      description:
        "Focus the address bar (e.g. to copy the address or navigate to a copied address)",
      shortcutMac: (
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
      shortcutMac: (
        <>
          <Ctrl />+<Windows />+<Key>D</Key>
        </>
      ),
    },
    {
      description: "Switch between virtual desktops",
      shortcutMac: (
        <>
          <Ctrl />+<Windows />+<Left /> or <Right />
        </>
      ),
    },
    {
      description: "Close virtual desktop",
      shortcutMac: (
        <>
          <Ctrl />+<Key>F4</Key>
        </>
      ),
    },
    {
      description: "Task View: perform any of above using mouse",
      shortcutMac: (
        <>
          <Windows />+<Tab />
        </>
      ),
    },
    {
      description: "Show a window or program on all desktops",
      shortcutMac: (
        <>
          In Task View, <strong>right-click</strong> a window >{" "}
          <strong>"show this window on all desktops"</strong> or{" "}
          <strong>"show windows from this app on all desktops"</strong>
        </>
      ),
    },
  ],
}
