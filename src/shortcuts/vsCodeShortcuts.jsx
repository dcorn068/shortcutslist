import React from "react"
import styled from "styled-components/macro"
import {
  Alt,
  Tab,
  Key,
  Ctrl,
  Shift,
  Down,
  Up,
  Code,
} from "../components/Keyboard/Keys"
import commandPalette from "../images/vsCodeGifs/command_palette.gif"
import toggleSidebars from "../images/vsCodeGifs/toggle_sidebar_and_terminal.gif"
import joinLines from "../images/vsCodeGifs/join_lines.gif"
import foldAll from "../images/vsCodeGifs/fold_all.gif"
import insertLineAboveBelow from "../images/vsCodeGifs/insert_line_above_below.gif"
import lineEnds from "../images/vsCodeGifs/line_ends.gif"
import moveLines from "../images/vsCodeGifs/move_lines.gif"
import scrollFaster from "../images/vsCodeGifs/scroll_faster.gif"

export const ReferenceSheets = () => (
  <>
    <a
      style={{ marginLeft: "0.5em" }}
      href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Windows
    </a>
    <a
      style={{ marginLeft: "1em" }}
      href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Mac
    </a>
    <a
      style={{ marginLeft: "1em" }}
      href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Linux
    </a>
  </>
)

const JsResourcesStyles = styled.div`
  line-height: 1.5em;
  a {
    white-space: nowrap;
  }
`
export const JsResources = () => (
  <JsResourcesStyles>
    <a
      style={{ marginLeft: "0.5em" }}
      href="https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"
      target="_blank"
      rel="noopener noreferrer"
    >
      Functional Programming in JavaScript
    </a>
    <a
      style={{ marginLeft: "1em" }}
      href="https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH"
      target="_blank"
      rel="noopener noreferrer"
    >
      JavaScript30
    </a>
    <a
      style={{ marginLeft: "1em" }}
      href="https://www.youtube.com/watch?v=W6NZfCO5SIk"
      target="_blank"
      rel="noopener noreferrer"
    >
      JavaScript in 1 Hour
    </a>
    <a
      style={{ marginLeft: "1em" }}
      href="https://www.youtube.com/watch?v=8gNrZ4lAnAw"
      target="_blank"
      rel="noopener noreferrer"
    >
      2019 Frontend Dev Crash Course
    </a>
  </JsResourcesStyles>
)

const SUBLIME_TEXT_NOTICE = {
  description: (
    <div style={{}}>
      NOTE: this section's shortcuts use the extension{" "}
      <a
        href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sublime Text Keymap and Settings Importer
      </a>{" "}
      — equivalent shortcuts: <ReferenceSheets />
    </div>
  ),
}

export const vsCodeShortcuts = {
  basics: [
    {
      description: "Show Command Palette — perform any action",
      pathToGif: commandPalette,
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>P</Key>
        </>
      ),
      moreInfo: (
        <>
          <div style={{ margin: "1em 0" }}>
            The one shortcut to rule them all.{" "}
            <span role="img" aria-label="ring">
              💍
            </span>
          </div>
          <p>
            Type what you want to do, and the command palette will show you your
            options, and any shortcut keys associated with them.
          </p>
        </>
      ),
    },
    {
      description: "Comment out lines of code",
      shortcut: (
        <>
          <Ctrl />+<Key>/</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>Handy for:</p>
          <ul>
            <li>Making notes to your future self or other developers.</li>
            <li>
              "Turning off" code that you don't want to delete (remember to
              clean up after yourself!)
            </li>
          </ul>
          <p>
            Select anywhere in one or more lines; this will comment out the
            entire line.
          </p>
        </>
      ),
    },
    {
      description: "Comment out sections (not entire lines) of code",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>/</Key>
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
      description: "Trigger suggestion/autocomplete",
      shortcut: (
        <>
          <Ctrl />+<Key>Space</Key>
        </>
      ),
    },
    {
      description: "Keyboard Shortcuts",
      shortcut: (
        <>
          <Ctrl />+<Key>K</Key> <Ctrl />+<Key>S</Key>
        </>
      ),
    },
  ],
  quickAccess: [
    {
      description: "Go to any file",
      shortcut: (
        <>
          <Ctrl />+<Key>P</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>
            Performs a "fuzzy match" — type any part{"("}s{")"} of the file name
            to find it.
          </p>
          <p>Much faster than using the file explorer!</p>
        </>
      ),
    },
    {
      description: "Go to line number",
      shortcut: (
        <>
          <Ctrl />+<Key>G</Key>
        </>
      ),
    },
    {
      description: "Scroll faster",
      pathToGif: scrollFaster,
      shortcut: (
        <>
          <Alt /> + scroll (mousewheel or trackpad)
        </>
      ),
    },
    {
      description: "Toggle sidebar",
      pathToGif: toggleSidebars,
      shortcut: (
        <>
          <Ctrl />+<Key>B</Key>
        </>
      ),
    },
    {
      description: "Toggle integrated terminal",
      shortcut: (
        <>
          <Ctrl />+<Key>{"`"}</Key>
        </>
      ),
    },
    {
      description: "Create new terminal",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>{"`"}</Key>
        </>
      ),
    },
    {
      description: "Toggle Problems panel",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>{"`"}</Key>
        </>
      ),
    },
    {
      description: "Fold All (get a bird's-eye-view of a file)",
      pathToGif: foldAll,
      shortcut: (
        <>
          <Ctrl />+<Key>K</Key>, <Ctrl />+<Key>0</Key>
        </>
      ),
    },
    {
      description: "Go to nearest/matching bracket",
      shortcut: (
        <>
          <Ctrl />+<Key>M</Key>
        </>
      ),
    },
    {
      description: "Settings",
      shortcut: (
        <>
          <Ctrl />+<Key>,</Key>
        </>
      ),
    },
  ],
  sidebar: [
    {
      description: "File explorer",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>E</Key>
        </>
      ),
    },
    {
      description: "Extensions",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>X</Key>
        </>
      ),
    },
    {
      description: "Search all files",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>F</Key>
        </>
      ),
    },
    {
      description: "Git (source control)",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>G</Key>
        </>
      ),
    },
  ],
  writingHtmlWithEmmet: [
    {
      description: (
        <div>
          Write HTML with maximum efficiency using Emmet shortcuts -- head on
          over to the{" "}
          <a
            style={{ fontWeight: "bold" }}
            href="https://docs.emmet.io/cheat-sheet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emmet Cheat Sheet
          </a>{" "}
          for a full specification.
        </div>
      ),
    },
    {
      description: `<div class="foo"></div>`,
      shortcut: (
        <>
          <Code>div.foo</Code> or simply <Code>.foo</Code>
        </>
      ),
    },
    {
      description: `<p id="bar"></p>`,
      shortcut: (
        <>
          <Code>p#bar</Code>
        </>
      ),
    },
    {
      description: `<h1 id="weirdo" class="salty sweet sour"></h1>`,
      shortcut: (
        <>
          <Code>h1#weirdo.salty.sweet.sour</Code>
        </>
      ),
    },
    {
      description: (
        <pre>
          {`<section class="list-container">
    <li>
      <ul>item 1</ul>
      <ul>item 2</ul>
      <ul>item 3</ul>
    </li>
  </section>`}
        </pre>
      ),
      shortcut: (
        <>
          <Code>
            section.list-container{">"}li{">"}ul*3{"{"}item ${"}"}
          </Code>
        </>
      ),
    },
  ],
  multipleCursors: [
    SUBLIME_TEXT_NOTICE,
    /* TODO: find shortcuts without sublime keymapper */
    {
      description: "Add cursor above or below",
      shortcut: (
        <>
          <Shift />+<Alt />+<Up /> or <Down />
        </>
      ),
    },
    {
      description: "Add cursor by clicking",
      shortcut: (
        <>
          <Ctrl />+ click or <Alt />+ click
        </>
      ),
      moreInfo: (
        <p>
          Search your settings for 'Editor: Multi Cursor Modifier' to change
          between <strong>Ctrl</strong> and <strong>Alt</strong>.
        </p>
      ),
    },
    {
      description: "Add cursors to line ends",
      pathToGif: lineEnds,
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>L</Key>
        </>
      ),
    },
    {
      description: "Column (box) selection",
      shortcut: (
        <>
          <Shift />+<Alt />+ drag mouse or <strong>Middle-mouse-drag</strong>
        </>
      ),
    },
  ],
  multipleSelections: [
    SUBLIME_TEXT_NOTICE,
    {
      description: "Add cursor at next instance of current selection",
      shortcut: (
        <>
          <Ctrl />+<Key>D</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>
            Select any repeating pattern or word, then use this shortcut
            repeatedly to select multiple occurrences.
          </p>
        </>
      ),
    },
    {
      description:
        "While adding cursors using Ctrl + D, skip the current selected instance",
      shortcut: (
        <>
          <Ctrl />+<Key>K</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>
            For example: to select all the <strong>'selectme'</strong> in{" "}
            <strong>'selectme selectme dontselectme selectme'</strong>:
          </p>
          <div style={{ marginBottom: "1em" }}>
            Select the first 'selectme', then hold <Ctrl />, then <Key>D</Key>,{" "}
            <Key>D</Key>, <Key>K</Key>, <Key>D</Key>.
          </div>
        </>
      ),
    },
    {
      description: "Select all occurrences of current selection",
      shortcut: (
        <>
          <Alt />+<Key>F3</Key>
        </>
      ),
    },
  ],
  searchAndReplace: [
    {
      description: "Find next/previous",
      shortcut: (
        <>
          <Key>F3</Key> / <Shift />+<Key>F3</Key>
        </>
      ),
    },
    {
      description: "Find",
      shortcut: (
        <>
          <Ctrl />+<Key>F</Key>
        </>
      ),
    },
    {
      description: "Replace",
      shortcut: (
        <>
          <Ctrl />+<Key>H</Key>
        </>
      ),
    },
    {
      description: "Global find",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>F</Key>
        </>
      ),
    },
    {
      description: "Global replace",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>H</Key>
        </>
      ),
      moreInfo: (
        <>
          <p>To replace a match globally, follow the steps:</p>
          <ol style={{ lineHeight: "1.5em", marginTop: "-0.5em" }}>
            <li>Select a word</li>
            <li>
              <Ctrl />+<Shift />+<Key>F</Key>
            </li>
            <li>
              <Key>Enter</Key>
            </li>
            <li>
              <Ctrl />+<Shift />+<Key>H</Key>
            </li>
            <li>
              <Tab />
            </li>
            <li>Type the replacement word</li>
            <li>
              <Ctrl />+<Alt />+<Key>Enter</Key>
            </li>
          </ol>
        </>
      ),
    },
  ],
  copyPaste: [
    SUBLIME_TEXT_NOTICE,
    {
      description: "Copy line (with empty selection)",
      shortcut: (
        <>
          with no selection, <Ctrl />+<Key>C</Key>
        </>
      ),
    },
    {
      description: "Cut (copy+delete) line (with empty selection)",
      shortcut: (
        <>
          with no selection, <Ctrl />+<Key>X</Key>
        </>
      ),
    },
    {
      description: "Multi-copy-paste",
      shortcut: <>multi-select + copy, multi-select + paste</>,
      moreInfo: (
        <>
          <p>
            Note: this will only work as expected if the number of selections
            when copying equals the number of cursors or selections when
            pasting.
          </p>
        </>
      ),
    },
    {
      description: "Duplicate line(s)",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>D</Key>
        </>
      ),
    },
    {
      description: "Delete line(s)",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>K</Key>
        </>
      ),
    },
  ],
  lineManipulation: [
    SUBLIME_TEXT_NOTICE,
    {
      description: "Bubble selected lines up or down",
      pathToGif: moveLines,
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Up /> or <Down />
        </>
      ),
    },
    {
      description: "Insert line below/above",
      pathToGif: insertLineAboveBelow,
      shortcut: (
        <>
          <Ctrl />+<Key>Enter</Key> {"/"} <Ctrl />+<Shift />+<Key>Enter</Key>
        </>
      ),
    },
    {
      description: "Join lines (and trim whitespace)",
      pathToGif: joinLines,
      shortcut: (
        <>
          <Ctrl />+<Key>J</Key>
        </>
      ),
    },
    {
      description: "Select current line(s)",
      shortcut: (
        <>
          <Ctrl />+<Key>L</Key>
        </>
      ),
    },
    {
      description: "Quick-select entire lines",
      shortcut: <>Drag mouse along the line numbers</>,
    },
  ],
  extensions: [
    {
      description: "Extensions sidebar",
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>X</Key>
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prettier - Code formatter
          </a>{" "}
          — auto-format code on save
        </>
      ),
      shortcut: (
        <>
          Go to Settings with
          <Ctrl />+<Key>,</Key>, search for "format on save" and tick the
          checkbox
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log"
            target="_blank"
            rel="noopener noreferrer"
          >
            Turbo Console Log
          </a>{" "}
          — never type console.log again!
        </>
      ),
      shortcut: (
        <>
          Select something, then
          <Ctrl />+<Alt />+<Key>L</Key> — customize the log prefix in Settings
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESLint - JavaScript linter
          </a>{" "}
          (checks for programmatic and stylistic errors)
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin"
            target="_blank"
            rel="noopener noreferrer"
          >
            TSLint - TypeScript linter
          </a>{" "}
          (like ESLint if you're using TypeScript)
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Server
          </a>{" "}
          — local development server that reloads on save
        </>
      ),
      shortcut: (
        <>
          In an <Code>index.html</Code> file, hit "Go Live" button at the bottom
          of your editor
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"
            target="_blank"
            rel="noopener noreferrer"
          >
            Better Comments
          </a>
        </>
      ),
      shortcut: (
        <>
          <div
            style={{ color: "hsl(20,70%,50%)", background: "hsl(0,0%,20%)" }}
          >
            <Code>{`// TODO: learn all the shortcuts!`}</Code>
          </div>
          <div
            style={{ color: "hsl(80,70%,50%)", background: "hsl(0,0%,20%)" }}
          >
            <Code>{`// * watch out for this thing`}</Code>
          </div>
          <div
            style={{ color: "hsl(200,70%,50%)", background: "hsl(0,0%,20%)" }}
          >
            <Code>{`// ? is this really necessary?`}</Code>
          </div>
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bracket Pair Colorizer 2
          </a>
        </>
      ),
      shortcut: (
        <>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>
              <span style={{ color: "hsl(280,70%,50%)" }}>{`{`}</span>
            </Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>
              <span style={{ marginLeft: "3ch" }} />
              bracketsArray.forEach
              <span style={{ color: "hsl(55,80%,50%)" }}>{`(`}</span>
            </Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>
              <span style={{ marginLeft: "5ch" }} />
              bracket {"=>"}
              <span style={{ color: "hsl(220,80%,70%)" }}>{` { `}</span>
              colorize
              <span style={{ color: "hsl(55,70%,50%)" }}>{`(`}</span>
              bracket
              <span style={{ color: "hsl(55,70%,50%)" }}>{`)`}</span>
              <span style={{ color: "hsl(220,80%,70%)" }}>{` }`}</span>
              <span style={{ color: "hsl(55,70%,50%)" }}>{`)`}</span>
            </Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>
              <span style={{ color: "hsl(280,70%,50%)" }}>{`}`}</span>
            </Code>
          </div>
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color Highlight
          </a>
        </>
      ),
      shortcut: (
        <>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>
              <span
                style={{
                  color: "white",
                  background: "hsl(60,90%,40%)",
                }}
              >
                hsl(60,90%,40%)
              </span>
            </Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>
              <span
                style={{
                  color: "white",
                  background: "rgba(100,200,255,0.5)",
                }}
              >
                rgba(100,200,255,0.5)
              </span>
            </Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>
              <span
                style={{
                  color: "white",
                  background: "#7f10e8",
                }}
              >
                #7f10e8
              </span>
            </Code>
          </div>
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitLens
          </a>{" "}
          - Git supercharged
        </>
      ),
      shortcut: (
        <>
          Powerful extension: find out who wrote each line and when, track /
          revert your current changes, or get a full file or line history in the
          sidebar.{" "}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the docs
          </a>
          !
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            vscode-icons
          </a>{" "}
          — sweet, sweet file icons
        </>
      ),
      shortcut: (
        <>
          Since this adds folder icons, you can turn off folder arrows with{" "}
          <Ctrl />+<Shift />+<Key>P</Key>, then "Toggle Explorer Folder Arrows
          Visibility"
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            htmltagwrap
          </a>
        </>
      ),
      shortcut: (
        <>
          Select some HTML, then <Alt />+<Key>W</Key> to wrap
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor"
            target="_blank"
            rel="noopener noreferrer"
          >
            VSCode React Refactor
          </a>{" "}
          — like right-click {"->"} refactor but for JSX
        </>
      ),
      shortcut: (
        <>
          Select some JSX, then click the{" "}
          <span role="img" aria-label="lightbulb">
            💡
          </span>{" "}
          icon {"->"} refactor
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case"
            target="_blank"
            rel="noopener noreferrer"
          >
            change-case
          </a>{" "}
          — command palette utility to switch between cases
        </>
      ),
      shortcut: (
        <>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>camelCase</Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>CONSTANT_CASE</Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>snake_case</Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>kebab-case</Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>Sentence case</Code>
          </div>
          <div style={{ color: "hsl(20,0%,70%)", background: "hsl(0,0%,20%)" }}>
            <Code>Title Case</Code>
          </div>
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Share Extension Pack
          </a>{" "}
          — code with your pals! Includes audio call{" "}
          <span role="img" aria-label="speaker">
            🔊
          </span>
        </>
      ),
      shortcut: (
        <>
          <Ctrl />+<Shift />+<Key>P</Key>, then "Live Share: Start Collaboration
          Session"
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toggle Quotes
          </a>{" "}
          — cycle between " {"->"} ' {"->"} `
        </>
      ),
      shortcut: (
        <>
          <Ctrl />+<Key>'</Key>
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
            target="_blank"
            rel="noopener noreferrer"
          >
            Auto Rename Tag
          </a>{" "}
          — auto-rename the matching HTML tag
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sublime Text Keymap and Settings Importer
          </a>
        </>
      ),
      shortcut: (
        <>
          Better keymappings than the defaults — fight me{" "}
          <span role="img" aria-label="boxing glove">
            🥊
          </span>
        </>
      ),
    },
    {
      description: (
        <>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components"
            target="_blank"
            rel="noopener noreferrer"
          >
            vscode-styled-components
          </a>
        </>
      ),
      shortcut: (
        <>
          syntax highlighting and autocompletion for the styled-components
          css-in-js library
        </>
      ),
    },
  ],
}
