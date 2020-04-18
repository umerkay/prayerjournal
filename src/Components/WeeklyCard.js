import React, { useContext } from 'react';
import { StateStore } from '../store';
import './WeeklyCard.scss';
import { syncStatiDate, editPrayerStatus, StringifySingleStati, ParseSingleStringifiedStati } from '../Actions/UserActions';
import { names } from '../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { json2csv } from 'json-2-csv';
import store from 'store';

function shouldUpdateStati(stati) {
  const lastStatus = stati[stati.length - 1];
  if (lastStatus.timestamp) return new Date().toDateString() !== new Date(lastStatus.timestamp).toDateString()
  else return new Date().toLocaleDateString(lastStatus.locale) !== lastStatus.date
}

function isDateToday(date) {
  return new Date().toDateString() === new Date(date).toDateString();
}

export default function WeeklyCard(props) {
  const { dispatch, state: { stati } } = useContext(StateStore);

  //if latest date in data is not today, add today's entry and remove first oldest entry
  if (shouldUpdateStati(stati)) {
    syncStatiDate(dispatch, stati);
  }

  let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  let statuses = ['o', 'd', 'm', 'n'];

  const status = names.map(name => stati.map(status => status[name])); //usable format
  const day = new Date(stati[stati.length - 1].timestamp || stati[stati.length - 1].date).getDay();
  const temp = days.splice(day + 1);
  days = [...temp, ...days]; //order day headings for last seven days

  const editStatus = (name, status, dayIndex) => {
    status = statuses[(statuses.indexOf(status) + 1) % statuses.length];
    editPrayerStatus(dispatch, stati, { [name]: status }, dayIndex);
  }
  /*
    missed m
    ontime o
    delayed d
    nodata n
    exempted e
  */

  return (
    <div className="card weekly-card dark">
      <div className="heading">
        <span>
          <FontAwesomeIcon icon={faCalendarWeek}></FontAwesomeIcon>
        </span> <span>This Week</span>
      </div>
      <div className="grid">
        <span></span>
        {days.map((day, i) => (<span key={day + "." + i} className={"day" + ((isDateToday(stati[i].timestamp || stati[i].date)) ? " today primary" : "")}>{day}</span>))}
        {status.map(status2 => {
          const name = names[status.indexOf(status2)];
          return (
            [<span className="prayerName" key={name}><span>{name}</span></span>,
            status2.map((char, i) => (
              // <FontAwesomeIcon className={"status o"} icon={faCheck}></FontAwesomeIcon>
              <span
                key={name + "." + i}
                className={"status " + char}
                onClick={() => editStatus(name, char, i)}>
              </span>
            ))]
          )
        })}
      </div>
      <div className="key">
        <span><div className="status o dormant"></div>Timely</span>
        <span><div className="status d dormant"></div>Delayed</span>
        <span><div className="status m dormant"></div>Missed</span>
      </div>
    </div>
  )
}
