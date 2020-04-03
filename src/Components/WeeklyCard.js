import React from 'react'
import './WeeklyCard.scss'

export default function WeeklyCard(props) {
  let { prayerData } = props;
  /*
    missed m
    ontime o
    delayed d
    nodata n
  */
  return (
    <div className="card weekly-card">
      <div className="title">This Week</div>
      <div className="grid">
        <span></span>
        {prayerData.days.map((day, i) => (<span className={"day" + ((i == prayerData.days.length - 1) ? " today" : "")}>{day}</span>))}
        {prayerData.status.map(status => (
          [<span className="prayerName"><span>{prayerData.names[prayerData.status.indexOf(status)]}</span></span>,
          status.map(char => (<span className={"status " + char}></span>))]
        ))}
      </div>
      <div className="key">
        <span><div className="status o"></div>Timely</span>
        <span><div className="status d"></div>Delayed</span>
        <span><div className="status m"></div>Missed</span>
      </div>
    </div>
  )
}
