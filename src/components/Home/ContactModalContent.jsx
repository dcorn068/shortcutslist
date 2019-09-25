import React, { useState } from "react"
import styled from "styled-components/macro"
import { IconButton, TextField, Button } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

const ModalContentStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  right: 0;
  display: grid;
  place-items: center center;
  pointer-events: none;
  .content {
    position: relative;
    .btnClose {
      position: absolute;
      top: 0;
      right: 0;
    }
    padding: 2.5em;
    display: grid;
    grid-gap: 1em;
    pointer-events: auto;
    background: white;
    width: 50vw;
    min-width: 340px;
    max-width: 600px;
    #message {
      min-height: 3em;
    }
    .actions {
      display: grid;
      place-items: center center;
      button {
        width: 120px;
      }
    }
  }
`
export default ({ handleClose }) => {
  const [btnText, setBtnText] = useState("Submit")
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }
  const handleSubmit = async () => {
    // TODO: send email
    await new Promise(resolve => {
      setBtnText("Sending...")
      setTimeout(() => {
        resolve()
      }, 500)
    })
    setBtnText("Sent!")
    setTimeout(() => {
      handleClose()
    }, 500)
  }
  return (
    <ModalContentStyles>
      <div className="content">
        <IconButton className="btnClose" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <TextField
          variant="outlined"
          id="name"
          label="Name"
          value={values.name}
          onChange={handleChange("name")}
        ></TextField>
        <TextField
          variant="outlined"
          id="email"
          label="Email"
          value={values.email}
          onChange={handleChange("email")}
          required={true}
        ></TextField>
        <TextField
          variant="outlined"
          id="message"
          label="Message"
          value={values.message}
          onChange={handleChange("message")}
          required={true}
          multiline={true}
        ></TextField>
        <div className="actions">
          <Button variant="outlined" onClick={handleSubmit}>
            {btnText}
          </Button>
        </div>
      </div>
    </ModalContentStyles>
  )
}
