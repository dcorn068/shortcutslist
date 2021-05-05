import React from "react"
import {
  Alt,
  Tab,
  Key,
  Ctrl,
  Shift,
  Left,
  Right,
  MacOption,
  MacCommand,
  Up,
  Down,
} from "../components/Keyboard/Keys"

export const browserShortcuts = {
  basics: [
    {
      description: "Find text in page",
      shortcut: (
        <>
          <Ctrl />+<Key>F</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<Key>F</Key>
        </>
      ),
    },
    {
      description: "Jump to the next match to your Find Bar search",
      shortcut: (
        <>
          <Key>Enter</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<Key>G</Key>
        </>
      ),
    },
    {
      description: "Jump to the previous match to your Find Bar search",
      shortcut: (
        <>
          <Shift />+<Key>Enter</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<Shift />+<Key>G</Key>
        </>
      ),
    },
    {
      description: "Open link in new tab",
      frontPage: true,
      shortcut: (
        <>
          <Ctrl />+ <strong>Click</strong> or <strong>Mousewheel-Click</strong>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+ <strong>Click</strong> or{" "}
          <strong>Mousewheel-Click</strong>
        </>
      ),
    },
    {
      description: "Quick-search any text",
      shortcut: (
        <>
          <strong>Select the text</strong> then{" "}
          <strong>drag to the tab strip</strong>
        </>
      ),
      shortcutMac: (
        <>
          <strong>Select the text</strong> then{" "}
          <strong>drag to the tab strip</strong>
        </>
      ),
    },
  ],
  tabs: [
    {
      description: "New window",
      shortcut: (
        <>
          <Ctrl />+<Key>N</Key>
        </>
      ),
      frontPage: true,
      shortcutMac: (
        <>
          <MacCommand />+<Key>N</Key>
        </>
      ),
    },
    {
      frontPage: true,
      description: "Next tab",
      shortcut: (
        <>
          <Ctrl />+<Tab />
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<MacOption />+<Right />
        </>
      ),
    },
    {
      frontPage: true,
      description: "Previous tab",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Tab />
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<MacOption />+<Left />
        </>
      ),
    },
    {
      frontPage: true,
      description: "Close tab",
      shortcut: (
        <>
          <Ctrl />+<Key>W</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<Key>W</Key>
        </>
      ),
    },
    {
      description: "Close window",
      frontPage: true,
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>W</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<Shift />+<Key>W</Key>
        </>
      ),
    },
    {
      frontPage: true,
      description: "New tab",
      shortcut: (
        <>
          <Ctrl />+<Key>T</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<Key>T</Key>
        </>
      ),
    },
    {
      frontPage: true,
      description: "Unclose tab (reopen last closed tab)",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>T</Key>
        </>
      ),
      shortcutMac: (
        <>
          <Ctrl />+<Shift />+<Key>T</Key>
        </>
      ),
    },

    {
      frontPage: true,
      description: "Select multiple tabs",
      shortcut: (
        <>
          <Shift />
          or
          <Ctrl />+ <strong>Click</strong> tabs
        </>
      ),
      shortcutMac: (
        <>
          <Shift />
          or
          <Ctrl />+ <strong>Click</strong> tabs
        </>
      ),
    },
    {
      frontPage: true,
      description: "Split tabs into new window",
      shortcut: (
        <>
          <strong>Drag tabs</strong> out of the tab strip
        </>
      ),
      shortcutMac: (
        <>
          <strong>Drag tabs</strong> out of the tab strip
        </>
      ),
    },
    {
      frontPage: true,
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
      shortcutMac: (
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
  chrome: [
    {
      description: "",
      shortcut: (
        <>
          <a
            href="https://support.google.com/chrome/answer/157179?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Complete Chrome shortcuts reference
          </a>
        </>
      ),
      shortcutMac: (
        <>
          <a
            href="https://support.google.com/chrome/answer/157179?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Complete Chrome shortcuts reference
          </a>
        </>
      ),
    },
    {
      description: "Browser history",
      shortcut: (
        <>
          <Ctrl />+<Key>H</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<Key>Y</Key>
        </>
      ),
    },
    {
      description: "Browser downloads",
      shortcut: (
        <>
          <Ctrl />+<Key>J</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+
          <Shift />+<Key>J</Key>
        </>
      ),
    },
    {
      frontPage: true,
      description: "Go back one page in history",
      shortcut: (
        <>
          <Alt />+<Left />
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+
          <Left /> or <MacCommand />+<Key>{"["}</Key>{" "}
        </>
      ),
    },
    {
      frontPage: true,
      description: "Go forward one page in history",
      shortcut: (
        <>
          <Alt />+<Right />
        </>
      ),
      shortcutMac: (
        <>
          <>
            <MacCommand />+
            <Right /> or <MacCommand />+<Key>{"]"}</Key>{" "}
          </>{" "}
        </>
      ),
    },
    {
      description: `Add "www" and ".com" to a site name and open it in the current tab`,
      shortcut: (
        <>
          <Ctrl />+<Key>Enter</Key>
        </>
      ),
      shortcutMac: (
        <>
          <Ctrl />+<Key>Enter</Key>
        </>
      ),
    },
    {
      frontPage: true,
      description: "Jump to the address bar",
      shortcut: (
        <>
          <Ctrl />+<Key>L</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<Key>L</Key>
        </>
      ),
    },
    {
      description: "Switch focus between toolbars (tabs / address bar / page)",
      shortcut: (
        <>
          <Key>F6</Key>
        </>
      ),
      shortcutMac: (
        <>
          <MacCommand />+<MacOption />+<Up /> or <Down />
        </>
      ),
    },
    {
      description: "Add quick-search shortcuts",
      shortcut: <>Right-click address bar, "Edit search engines..."</>,
      shortcutMac: <>Right-click address bar, "Edit search engines..."</>,
      moreInfo: (
        <>
          <div>
            Next to <strong>Other search engines</strong>, click "Add", then
            fill in the form...
          </div>
          <p>
            "Search engine": the display name that will appear when you use it,
          </p>
          <p>
            "Keybanana": the keys used to perform the quick-search (shorter is
            better),
          </p>
          <p>
            "URL with %s in place of query": search for something on any website
            with a search, then look at the address that results. Replace the
            query, the thing you searched for, with %s and copy-paste it in
            here. Watch out, sometimes the query may appear more than once in
            the full address
          </p>
          <div style={{ marginBottom: "1em" }}>
            Now in your address bar you can type the keybanana, hit{" "}
            <Key>Space</Key> and you're off to the races!{" "}
            <span role="img" aria-label="horse">
              🐎
            </span>
          </div>
        </>
      ),
    },
    {
      description: "Open Chrome task manager",
      shortcut: (
        <>
          <Shift />+<Key>Esc</Key>
        </>
      ),
      shortcutMac: (
        <>select Window from the top menu bar, then select Task Manager</>
      ),
      moreInfo: (
        <>
          Useful if one of your tabs is frozen. If <Shift />+<Key>Esc</Key>{" "}
          doesn't work, try the top-right "More" ("...") button -> More tools ->
          Task manager.
        </>
      ),
    },
  ],
  // TODO: developer:[],
  videos: [
    {
      description: "Youtube shortcuts",
      shortcut: (
        <>
          <Shift />+<Key>?</Key>
        </>
      ),
      shortcutMac: (
        <>
          <Shift />+<Key>?</Key>
        </>
      ),
      moreInfo: (
        <div style={{ maxWidth: 500 }}>
          <div style={{ marginBottom: "1.5em" }}>
            Reveal Youtube's built-in shortcuts with <Shift />+<Key>F</Key>:
          </div>
          <ul>
            <li style={{ display: "grid", gridTemplateColumns: "1fr 183px" }}>
              <div>Speed up / slow down: </div>
              <div>
                <Shift />+<Key>{">"}</Key>/<Key>{"<"}</Key>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr 183px" }}>
              <div>Captions: </div>
              <div>
                <Key>C</Key>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr 183px" }}>
              <div>Play/pause without requiring focus:</div>
              <div>
                <Key>K</Key>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr 183px" }}>
              <div>Mute:</div>
              <div>
                <Key>M</Key>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      description: (
        <a
          href="https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video Speed Controller extension for Chrome
        </a>
      ),
      shortcut: (
        <>
          <Key>D</Key> / <Key>S</Key>
        </>
      ),
      shortcutMac: (
        <>
          <Key>D</Key> / <Key>S</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>
            Fine-tune video playback speed on any web player by increments of
            0.1X.
          </p>
          <p>
            Try this: play a video at a much higher rate than you’re comfortable
            with, then dial back the speed bit by bit until you hit your
            preferred speed.
          </p>
          <p>
            If you’re not sure a video will be interesting, you can skim over it
            to see by speeding it up, up to 16X.
          </p>
        </>
      ),
    },
  ],
}
