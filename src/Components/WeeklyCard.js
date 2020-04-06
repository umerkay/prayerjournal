import React, { useContext } from 'react';
import { StateStore } from '../store';
import store from 'store';
import './WeeklyCard.scss';
import { syncStatiDate } from '../Actions/UserActions';

export default function WeeklyCard(props) {
  const { dispatch, state: { stati } } = useContext(StateStore);

  let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const names = ['Fajr', 'Zuhr', 'Asr', 'Maghrib', 'Isha'];

  //if latest date in data is not today, add today's entry and remove first oldest entry
  if (new Date().toLocaleDateString() != stati[stati.length - 1].date) {
    syncStatiDate(dispatch, stati);
  }

  const status = names.map(name => stati.map(status => status[name])); //usable format
  const day = new Date().getDay();
  const temp = days.splice(day + 1);
  days = [...temp, ...days]; //order day headings for last seven days
  /*
    missed m
    ontime o
    delayed d
    nodata n
  */
  return (
    <div className="card weekly-card dark">
      <div className="heading">This Week</div>
      <div className="grid">
        <span></span>
        {days.map((day, i) => (<span className={"day" + ((i == days.length - 1) ? " today primary" : "")}>{day}</span>))}
        {status.map(status2 => (
          [<span className="prayerName"><span>{names[status.indexOf(status2)]}</span></span>,
          status2.map(char => (<span className={"status " + char}></span>))]
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
