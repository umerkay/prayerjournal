import React from 'react'
import './GeneralCard.scss'

export default function GeneralCard(props) {
  return (
    <div className={"card general-card" + (props.onClick ? " clickable" : "")} onClick={props.onClick}>
      {props.text}
    </div>
  )
}
