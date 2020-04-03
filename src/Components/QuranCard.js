import React from 'react'
import './QuranCard.scss'

export default function QuranCard() {
  let verse = {
    reference: "2:155",
    text: "There shall be no compulsion in religion."
  };
  return (
    <div className="card quran-card">
      <div className="reference">Quran, {verse.reference}</div>
      <div className="verse">"{verse.text}"</div>
      <div className="more">
        <button className="more">Learn More</button>
      </div>
    </div>
  )
}
