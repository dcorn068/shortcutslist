import React from "react"
import styled from "styled-components/macro"
import basicShortcuts from "../../images/basicShortcuts.gif"
import notepadIcon from "../../images/icons/notepadIcon.jpg"

const demos = [
  {
    shortcuts: [
      { name: "Jump entire words", shortcut: "Ctrl + [←/→]" },
      { name: "Select characters", shortcut: "Shift + [←/→]" },
      { name: "Select entire words", shortcut: "Ctrl + Shift + [←/→]" },
      { name: "Jump to line ends", shortcut: "Home / End" },
      { name: "Select to line ends", shortcut: "Shift + [Home / End]" },
      { name: "Next field", shortcut: "Tab" },
      { name: "Previous field", shortcut: "Shift + Tab" },
      { name: "Switch windows", shortcut: "Alt + Tab" },
    ],
    image: basicShortcuts,
    logo: notepadIcon,
    title: "The Basics",
  },
  {
    shortcuts: [],
  },
]

const DemosGridStyles = styled.div`
  display: grid;

  .demoRow {
    border: 1px solid tomato;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    .shortcutsColumn {
      .header {
        display: grid;
        place-items: center;
        grid-template-rows: auto 1fr;
        .title {
          padding: 0.5em 0 1em 0;
          font-size: 2em;
        }
      }
      .shortcutRow {
        display: grid;
        grid-template-columns: 1fr 1fr;
        .name {
          text-align: left;
        }
        .shortcut {
        }
      }
    }

    .imageColumn {
      display: grid;
      place-items: center;
      background: #294675;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
      }
    }
  }
`

const ImageColumn = ({ image }) => (
  <div className="imageColumn">
    <img src={image} />
  </div>
)
const ShortcutsColumn = ({ logo, title, shortcuts }) => (
  <div className="shortcutsColumn">
    <div className="header">
      <div className="logoImage">
        <img src={logo} />
      </div>
      <div className="title">{title}</div>
    </div>
    {shortcuts.map(({ name, shortcut }) => (
      <div className="shortcutRow">
        <div className="name">{name}:</div>
        <div className="shortcut">{shortcut}</div>
      </div>
    ))}
  </div>
)

export default ({}) => {
  return (
    <DemosGridStyles>
      {demos.map(({ shortcuts, image, logo, title }, idx) => {
        const isEven = idx % 2 === 0
        return (
          <div className="demoRow">
            {isEven ? (
              <ShortcutsColumn
                logo={logo}
                title={title}
                shortcuts={shortcuts}
              />
            ) : (
              <ImageColumn image={image} />
            )}
            {!isEven ? (
              <ShortcutsColumn
                logo={logo}
                title={title}
                shortcuts={shortcuts}
              />
            ) : (
              <ImageColumn image={image} />
            )}
          </div>
        )
      })}
    </DemosGridStyles>
  )
}
