import React from "react"
import styled from "styled-components/macro"
import basicShortcuts from "../../images/basicShortcuts.gif"
import notepadIcon from "../../images/icons/notepadIcon.jpg"

const demos = [
  {
    shortcuts: [
      { description: "Jump entire words", shortcut: "Ctrl + [←/→]" },
      { description: "Select characters", shortcut: "Shift + [←/→]" },
      { description: "Select entire words", shortcut: "Ctrl + Shift + [←/→]" },
      { description: "Jump to line ends", shortcut: "Home / End" },
      { description: "Select to line ends", shortcut: "Shift + [Home / End]" },
      { description: "Next field", shortcut: "Tab" },
      { description: "Previous field", shortcut: "Shift + Tab" },
      { description: "Switch windows", shortcut: "Alt + Tab" },
    ],
    imageSrc: basicShortcuts,
    logo: notepadIcon,
    title: "The Basics",
  },
  {
    shortcuts: [],
    title: "Windows 10",
  },
]

const DEMO_BOX_WIDTH = 500

const DemosGridStyles = styled.div`
  display: grid;

  .demoRow {
    height: ${DEMO_BOX_WIDTH}px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    width: 100%;
    margin: 0 auto;
    background: #ffffff;
    @media (min-width: ${DEMO_BOX_WIDTH * 2}px) {
      width: ${DEMO_BOX_WIDTH * 2}px;
    }

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
        grid-gap: 1.45em;
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

const ImageColumn = ({ imageSrc }) => (
  <div className="imageColumn">
    <img src={imageSrc} alt={``} />
  </div>
)
const ShortcutsColumn = ({ logo, title, shortcuts }) => (
  <div className="shortcutsColumn">
    <div className="header">
      <div className="logoImage">
        <img src={logo} alt="a software developer typing musically as though playing a piano"/>
      </div>
      <div className="title">{title}</div>
    </div>
    {shortcuts.map(({ description, shortcut }) => (
      <div className="shortcutRow" key={description}>
        <div className="name">{description}:</div>
        <div className="shortcut">{shortcut}</div>
      </div>
    ))}
  </div>
)

export default ({}) => {
  return (
    <DemosGridStyles>
      {demos.map(({ shortcuts, imageSrc, logo, title }, idx) => {
        const isEven = idx % 2 === 0
        return (
          <div className="demoRow" key={title}>
            {isEven ? (
              <ShortcutsColumn
                logo={logo}
                title={title}
                shortcuts={shortcuts}
              />
            ) : (
              <ImageColumn imageSrc={imageSrc}  />
            )}
            {!isEven ? (
              <ShortcutsColumn
                logo={logo}
                title={title}
                shortcuts={shortcuts}
              />
            ) : (
              <ImageColumn imageSrc={imageSrc} />
            )}
          </div>
        )
      })}
    </DemosGridStyles>
  )
}
