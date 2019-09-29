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

export const browserShortcuts = {
  basics: [
    {
      description: "New window",
      shortcut: (
        <>
          <Ctrl />+<Key>N</Key>
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
          <Ctrl />+<Key>W</Key>
        </>
      ),
    },
    {
      description: "New tab",
      shortcut: (
        <>
          <Ctrl />+<Key>T</Key>
        </>
      ),
    },
    {
      description: "Reopen last closed tab",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>T</Key>
        </>
      ),
    },
    {
      description: "Open link in new tab",
      shortcut: (
        <>
          <Ctrl />+ <strong>Click</strong> or <strong>Mousewheel-Click</strong>
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
}
