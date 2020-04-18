import React, { useContext, useState, useEffect } from 'react';
import { StateStore } from '../store';
import './PrayersContainer.scss';
import PrayerModal from './PrayerModal';
import { editPrayerStatus, setTimings } from '../Actions/UserActions';
import { names } from '../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function PrayersContainer({ currTime }) {
  const [modalState, setModalState] = useState(false);
  const [prayerState, setPrayerState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { state: { preferences: { location, calcMethod, timeFormat }, timings, stati }, dispatch } = useContext(StateStore);

  useEffect(() => {
    // setTimeout(setLoading, 1000, false);
    const fetchData = async () => {
      if (calcMethod !== timings?.calcMethod || !timings || timings?.date !== new Date().toDateString() || timings?.location?.city !== location.city || timings?.location?.country !== location.country) {
        setLoading(true);
        const { city, country } = location;

        let res;
        try {
          res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${calcMethod}&school=1`);
          if (!res.ok) throw new Error(res);
        } catch (err) {
          setLoading(false);
          setError("Unable to update Prayer timings right now");
          return;
        }

        let json = await res.json();

        const newTimings = json.data.timings;
        newTimings.location = { ...location };
        newTimings.date = new Date().toDateString();
        newTimings.calcMethod = calcMethod;

        setTimings(dispatch, newTimings);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    fetchData();
  }, [calcMethod, dispatch, location, timings]);

  const save = (formData) => {
    editPrayerStatus(dispatch, stati, { [formData.name]: formData.status });
  }

  return (
    <>
      {loading ?
        <div className="prayers-container">
          {names.map((name, index) => (<Prayer
            status={"n"}
            loading={true}
            key={name}
          ></Prayer>))}
        </div> :
        <div className="prayers-container">
          {names.map((name, index) => (<Prayer
            key={name}
            name={name}
            time={timeFormat === "12" ? timeConvert(timings[name]) : timings[name]}
            timePassed={timeGreater(currTime, timings[name])}
            status={stati[stati.length - 1][name]}
            onClick={() => { setPrayerState({ name, status: stati[stati.length - 1][name] }); setModalState(true); }}
          ></Prayer>))}
        </div>
      }
      {
        !error ? null :
          (<div className="card error">
            <FontAwesomeIcon className="icon" icon={faExclamationTriangle}></FontAwesomeIcon>
            <span>{error}</span>
            <div className="delete" onClick={() => setError(null)}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></div>
          </div>)
      }
      {
        !modalState ? null :
          <PrayerModal save={save} prayerState={prayerState} modalIsOpen={modalState} toggle={setModalState}></PrayerModal>
      }
    </>
  )
}

export function timeGreater(a = "00:00", b = "00:01") {
  if (parseInt(a.split(':')[0]) > parseInt(b.split(':')[0])) return true;
  else if (parseInt(a.split(':')[0]) === parseInt(b.split(':')[0]) && parseInt(a.split(':')[1]) > parseInt(b.split(':')[1])) return true;
  else return false
}

function timeConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice(1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(''); // return adjusted time or original string
}

function Prayer(props) {
  let messages = {
    o: name => (`You prayed ${props.name} Prayer on time`),
    m: name => (`You missed ${props.name} Prayer`),
    n: name => (
      props.timePassed ?
        `${props.time} Onwards ${props.name} Prayer` :
        `${props.time} Onwards ${props.name} Prayer`
    ),
    d: name => (`You prayed ${props.name} Prayer at a delayed time`),
    ex: name => (`You were exempted from offering ${props.name} Prayer`)
  }
  return (
    <button onClick={!props.timePassed ? null : props.onClick} className={"card prayer-card " + props.status + (!props.timePassed ? " future" : "")}>
      {props.loading ? <span className="filler"></span> : messages[props.status](props)}
    </button>
  )
}