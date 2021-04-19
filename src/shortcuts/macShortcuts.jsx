import React from "react"
import {
  Windows,
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
      description: "Copy",
      shortcutMac: (
        <>
          <MacCommand />+<Key>C</Key>
        </>
      ),
    },
    {
      description: "Paste",
      shortcutMac: (
        <>
          <MacCommand />+<Key>V</Key>
        </>
      ),
    },
    {
      description: "Cut (copy + delete)",
      shortcutMac: (
        <>
          <MacCommand />+<Key>X</Key>
        </>
      ),
    },
    {
      description: "Undo",
      shortcutMac: (
        <>
          <MacCommand />+<Key>Z</Key>
        </>
      ),
    },
  ],
  quickAccess: [
    {
      description: "Spotlight search - open any program or file",
      frontPage: true,
      shortcutMac: (
        <>
          <MacCommand />+<Key>Space</Key>
        </>
      ),
    },
    {
      description: "Open finder",
      frontPage: true,
      shortcutMac: (
        <>
          <MacOption />+<MacCommand />+<Key>Space</Key>
        </>
      ),
    },
    {
      description: "Mission Control - view all open apps in a grid",
      frontPage: true,
      shortcutMac: (
        <>
          <MacMissionControl /> or <MacControl />+<Up />
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
      frontPage: true,
      shortcutMac: (
        <>
          <MacCommand />+<Tab />
        </>
      ),
      moreInfo: (
        <>
          <div>
            Hold <MacCommand />, then tap <Tab />, press the Tab key, then press{" "}
            <Left /> or <Right /> until you get to the app you want, then
            release <MacCommand />. <Key>Esc</Key> to cancel.
          </div>
          <p>Convenient for rapidly switching between two programs.</p>
        </>
      ),
    },
  ],
  appManagement: [
    {
      description: "Hide an app",
      shortcut: (
        <>
          <MacCommand />+<Key>H</Key>
        </>
      ),
    },
    {
      description: "Quit an app",
      shortcut: (
        <>
          <MacCommand />+<Key>Q</Key>
        </>
      ),
    },
    {
      description: "Close all open windows for an app (does not quit the app)",
      shortcut: (
        <>
          <MacOption />+<MacCommand />+<Key>W</Key>
        </>
      ),
    },
    {
      description: "Force an app to quit",
      shortcut: (
        <>
          <MacOption />+<MacCommand />+<Key>Esc</Key>
        </>
      ),
    },
    {
      description:
        "Task manager - force-quit programs (mini version of Activity Monitor) ",
      shortcutMac: (
        <>
          <MacCommand />+<MacOption />+<Key>Esc</Key>
        </>
      ),
    },
    {
      description: "Activity Monitor - diagnose problems like slow computer",
      frontPage: true,
      shortcutMac: (
        <>
          <MacCommand />+<Key>Space</Key>, then type "activity"
        </>
      ),
      moreInfo: (
        <>
          <p>
            Click the column headers to sort activities by usage of CPU, Memory
            etc. to find problematic activities.
          </p>
          <p>
            To improve performance, check your{" "}
            <a
              href="https://support.apple.com/en-ca/guide/mac-help/mh15189/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Startup programs
            </a>{" "}
            and disable any unnecessary activities.
          </p>
          <img src={taskManager} alt="task manager" />
        </>
      ),
    },
  ],
  windowManagement: [
    {
      description: "Maximize window",
      shortcutMac: <>Double-click the app's title bar</>,
    },
    {
      description: "Minimize window",
      shortcutMac: (
        <>
          <MacCommand />+<Key>M</Key>
        </>
      ),
      moreInfo: (
        <p>
          You can set an option in{" "}
          <a
            href="https://support.apple.com/en-ca/guide/mac-help/mchlp1119/11.0/mac/11.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dock & Menu Bar preferences
          </a>{" "}
          to have a window minimize when you double-click its title bar.
        </p>
      ),
    },
    {
      description: "Snap window to sides",
      frontPage: true,

      shortcutMac: (
        <>
          click and hold the full-screen button in the upper-left corner of a
          window
        </>
      ),
      moreInfo: (
        <p>Try it with one window on each side for side-by-side mode!</p>
      ),
    },
  ],
  spaces: [
    {
      description: "Create a space",
      shortcutMac: (
        <>
          <MacMissionControl />
          ,click the Add{" "}
          <span>
            <img
              src="https://help.apple.com/assets/5FCA9DF4094622AC2BC6F94E/5FCA9E00094622AC2BC6F96C/en_US/a2ef32e34a5573d192b10d340a4f46b1.png"
              alt="cross icon"
            />
          </span>{" "}
          button
        </>
      ),
      moreInfo: (
        <>
          <div>You can create up to 16 spaces</div>
          <div>
            Tip: Make your spaces unique by assigning a different desktop
            picture to each one. Just assign System Preferences to all desktops
          </div>
          .
        </>
      ),
    },
    {
      description: "Delete a space",
      shortcutMac: (
        <>
          <MacMissionControl />, then move the pointer to the top edge of the
          screen. In the Spaces bar, move the pointer over the space you want to
          delete, then click the Delete button that appears.
        </>
      ),
      moreInfo: (
        <>
          If the space contains open windows, they are moved to another space.
        </>
      ),
    },
    {
      description: "Move between spaces (virtual desktops)",
      shortcutMac: (
        <>
          <Ctrl />+<Right /> or <Left />
        </>
      ),
      frontPage: true,
      moreInfo: (
        <>
          <div>
            On a trackpad, swipe left or right with three or four fingers. On a
            Magic Mouse, swipe with two fingers.
          </div>
          <div>or</div>
          <div>
            Enter Mission Control, move the pointer to the top edge of the
            screen, then click a space in the Spaces bar.
          </div>
        </>
      ),
    },
    {
      description: "Move an app window between spaces",
      shortcutMac: (
        <>
          <MacMissionControl />, then drag the window up to the space you want
          to use.
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
  littleConveniences: [
    {
      description: "Copy screen clipping to clipboard",
      frontPage: true,

      shortcutMac: (
        <>
          <Shift />+<MacCommand />+<Key>4</Key>
        </>
      ),
    },
    {
      description: "Screen recording or screenshot",
      shortcutMac: (
        <>
          <Shift />+<MacCommand />+<Key>5</Key>
        </>
      ),
    },
    {
      description: "New sticky note from selected text",
      frontPage: true,

      shortcutMac: (
        <>
          <MacCommand />+<Shift />+<Key>Y</Key>
        </>
      ),
    },
    {
      frontPage: true,

      description: "Show the desktop",
      shortcutMac: (
        <>
          <MacCommand />+<MacMissionControl />
        </>
      ),
    },
    {
      frontPage: true,

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
      frontPage: true,

      description: "🎈 Emoji menu 😎✨",
      shortcutMac: (
        <>
          <MacControl />+<MacCommand />+<Key>Space</Key>
        </>
      ),
      moreInfo: <p>HEY I'm a more info over here</p>,
    },
    {
      frontPage: true,

      description: "Custom shortcuts",
      shortcutMac: (
        <div>
          Check out{" "}
          <a
            href="https://qsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline" }}
          >
            Quicksilver
          </a>{" "}
          or{" "}
          <a
            href="https://qsapp.com/wiki/AppleScripts"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline" }}
          >
            AppleScripts
          </a>{" "}
          — many scripts are already available!
        </div>
      ),
    },
  ],
  // fileExplorer: [
  //   {
  //     description: "Search programs, files, web",
  //     shortcutMac: (
  //       <>
  //         <Windows />, then <strong>type what you want</strong>
  //       </>
  //     ),
  //   },
  //   {
  //     description: "Open file explorer",
  //     shortcutMac: (
  //       <>
  //         <Windows />+<Key>E</Key>
  //       </>
  //     ),
  //   },
  //   {
  //     description: "Create a new folder",
  //     shortcutMac: (
  //       <>
  //         <Ctrl />+<Shift />+<Key>N</Key>
  //       </>
  //     ),
  //   },
  //   {
  //     description: "Rename selected file/folder",
  //     shortcutMac: (
  //       <>
  //         <Key>F2</Key>
  //       </>
  //     ),
  //   },
  //   {
  //     description: "Close file explorer",
  //     shortcutMac: (
  //       <>
  //         <Ctrl />+<Key>W</Key> or <Alt />+<Key>F4</Key>
  //       </>
  //     ),
  //   },
  //   {
  //     description: "Create a new file",
  //     shortcutMac: (
  //       <>
  //         <strong>right-click</strong>, <Key>W</Key>, <Key>T</Key>
  //       </>
  //     ),
  //     moreInfo: (
  //       <div style={{ marginBottom: "1em" }}>
  //         This creates a text file by default; just hit <Ctrl />+<Key>A</Key>{" "}
  //         and change the file extension.
  //       </div>
  //     ),
  //   },
  //   {
  //     description: "Jump to a file in the current directory",
  //     shortcutMac: (
  //       <>
  //         <strong>click</strong> anywhere in the folder, then{" "}
  //         <strong>start typing</strong> the file name
  //       </>
  //     ),
  //   },
  //   {
  //     description: "Find a file or folder",
  //     shortcutMac: (
  //       <>
  //         <Ctrl />+<Key>F</Key>
  //       </>
  //     ),
  //   },
  //   {
  //     description: "Access any command in the top menus",
  //     shortcutMac: (
  //       <>
  //         <Alt />, then <strong>type the letters</strong> that appear on top of
  //         the menu items
  //       </>
  //     ),
  //   },
  //   {
  //     description:
  //       "Focus the address bar (e.g. to copy the address or navigate to a copied address)",
  //     shortcutMac: (
  //       <>
  //         <Key>F4</Key> or <Ctrl />+<Key>L</Key>
  //       </>
  //     ),
  //   },
  // ],

  other: [
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
}
