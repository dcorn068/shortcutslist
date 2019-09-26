import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import { IconButton, TextField, Button } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

const ModalContentStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  display: grid;
  place-items: center center;
  pointer-events: none;
  h1 {
    text-align: center;
  }
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
    border-radius: 4px;
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
const GOOGLE_FORM_MESSAGE_ID = "entry.834901610"
const GOOGLE_FORM_EMAIL_ID = "entry.1062921287"
const GOOGLE_FORM_NAME_ID = "entry.557025916"
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdDaXE51QwlELPX_Vi1D4B8D35yjG2eUP1NYIpR7kmzU8hvMA/formResponse"
const CORS_PROXY = "https://cors-proxy-danielslist-2.herokuapp.com/"
const initialValues = {
  name: "",
  email: "",
  message: "",
}
export default ({ handleClose, setIsModalMounted }) => {
  useEffect(() => {
    setIsModalMounted(true)
  }, [])
  const [btnText, setBtnText] = useState("Submit")
  const [values, setValues] = useState(initialValues)
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }
  const sendMessage = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_MESSAGE_ID, values.message)
    formData.append(GOOGLE_FORM_EMAIL_ID, values.email)
    formData.append(GOOGLE_FORM_NAME_ID, values.name)

    fetch(CORS_PROXY + GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(data => {
      setValues(initialValues)
      setBtnText("Sent!")
      setTimeout(() => {
        handleClose()
      }, 500)
    })
  }
  const handleSubmit = () => {
    setBtnText("Sending...")
    sendMessage()
  }
  return (
    <ModalContentStyles>
      <div className="content">
        <IconButton className="btnClose" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <h1>
          Hey, thanks in advance!{" "}
          <span aria-label="cheers-beers" role="img">
            🍻
          </span>
        </h1>
        <TextField
          variant="outlined"
          id="name"
          label="Name"
          value={values.name}
          onChange={handleChange("name")}
        ></TextField>
        <TextField
          type="email"
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
          <Button
            disabled={!values.email || !values.message}
            variant="outlined"
            onClick={handleSubmit}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </ModalContentStyles>
  )
}
