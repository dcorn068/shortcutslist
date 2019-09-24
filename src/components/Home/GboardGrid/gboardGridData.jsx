import React from "react"

import cursorControl from "../../../images/gboardGrid/gboard-cursor-control.gif"
import gestureDelete from "../../../images/gboardGrid/gboard-gesture-delete.gif"
import glideTyping from "../../../images/gboardGrid/gboard-glide-typing.gif"
import voiceTyping from "../../../images/gboardGrid/gboard-voice-typing.gif"
import searchShare from "../../../images/gboardGrid/gboard-search-share.jpg"
import symbolHints from "../../../images/gboardGrid/gboard-symbol-hints.jpg"

export const gboardDemos = [
  {
    imageSrc: voiceTyping,
    content: <p>Slide your finger across the space bar to move the cursor</p>,
    title: "Voice Typing",
  },
  {
    imageSrc: glideTyping,
    content: (
      <p>Type words at a time by sliding your finger from letter to letter</p>
    ),
    title: "Glide Typing",
  },
  {
    imageSrc: searchShare,
    content: <p>Press the G to search and share anything from Google</p>,
    title: "Search and Share",
  },
  {
    imageSrc: gestureDelete,
    content: (
      <p>Slide left from the delete key to quickly delete multiple words</p>
    ),
    title: "Gesture Delete",
  },
  {
    imageSrc: cursorControl,
    content: <p>Slide your finger across the space bar to move the cursor</p>,
    title: "Gesture Cursor Control",
  },
  {
    imageSrc: symbolHints,
    content: (
      <>
        <p>Show quick hints to access symbols with a long press</p>
        <small>(Settings → Preferences → Long press for symbols)</small>
      </>
    ),
    title: "Symbol Hints",
  },
]
