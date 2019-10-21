import React from "react"
import {
  Alt,
  Tab,
  Key,
  Ctrl,
  Shift,
  Left,
  Right,
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
      description: "Quick-search any text",
      shortcut: (
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
      description: "Old tab (reopen last closed tab)",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>T</Key>
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
    },
    {
      description: "Browser history",
      shortcut: (
        <>
          <Ctrl />+<Key>H</Key>
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
    },
    {
      description: "Back a page",
      shortcut: (
        <>
          <Alt />+<Left />
        </>
      ),
    },
    {
      description: "Forward a page",
      shortcut: (
        <>
          <Alt />+<Right />
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
    },
    {
      description: "Jump to the address bar",
      shortcut: (
        <>
          <Ctrl />+<Key>L</Key>
        </>
      ),
    },
    {
      description: "Jump to the address bar, then tab bar, then page",
      shortcut: (
        <>
          <Key>F6</Key>
        </>
      ),
    },
    {
      description: "Add quick-search shortcuts",
      shortcut: <>Right-click address bar, "Edit search engines..."</>,
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
            "Keyword": the keys used to perform the quick-search (shorter is
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
            Now in your address bar you can type the keyword, hit{" "}
            <Key>Space</Key> and you're off to the races!{" "}
            <span role="img" alt="horse race">
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
      moreInfo: (
        <>
          Useful if one of your tabs is frozen. If <Shift />+<Key>Esc</Key>{" "}
          doesn't work, try the top-right "More" ("...") button -> More tools ->
          Task manager.
        </>
      ),
    },
  ],
  videos: [
    {
      description: "Youtube shortcuts",
      shortcut: (
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
