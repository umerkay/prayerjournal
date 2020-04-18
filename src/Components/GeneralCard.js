import React from 'react'
import './GeneralCard.scss'

export default function GeneralCard(props) {
  return (
    <div className={"card general-card " + (props.onClick ? " clickable " : "") + (props.className || "")} onClick={props.onClick}>
      <span>{props.children}</span>
      <span>{props.text}</span>
    </div>
  )
}
