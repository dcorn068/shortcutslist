import React from "react"
import styled from "styled-components/macro"

const demos = [
  {
    shortcuts: [{ name: "copy", shortcut: "Ctrl C" }],
  },
  {
    shortcuts: [{ name: "copy", shortcut: "Ctrl C" }],
  },
  {
    shortcuts: [{ name: "copy", shortcut: "Ctrl C" }],
  },
]

const DemosGridStyles = styled.div`
  display: grid;
`

export default ({}) => (
  <DemosGridStyles>
    {demos.map(({ shortcuts }) => (
      <div className="demo">
        {shortcuts.map(({ name, shortcut }) => (
          <div className="shortcut">
            {name}:{shortcut}
          </div>
        ))}
      </div>
    ))}
  </DemosGridStyles>
)
