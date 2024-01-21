"use client"
import React from 'react'
import Typed from 'react-typed';
function Type(props: { text: string[]; loop: boolean; cursor: boolean  }) {
  return (
    <Typed
        strings={props.text || " "}
        typeSpeed={100} backSpeed={100}
        showCursor={props.cursor || false}
        cursorChar="."
        loop={props.loop || false}
        />
  )
}

export default Type