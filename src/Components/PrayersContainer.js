import React, { useContext, useState, useEffect } from 'react';
import { StateStore } from '../store';
import './PrayersContainer.scss';
import PrayerModal from './PrayerModal';
import { editPrayerStatus, setTimings } from '../Actions/UserActions';
import { names } from '../Data';
import store from 'store';
import Loading from './Loading';

export default function PrayersContainer({ currTime }) {
  const [modalState, setModalState] = useState(false);
  const [prayerState, setPrayerState] = useState({});
  const [loading, setLoading] = useState(true);

  const { state: { preferences: { location, calcMethod }, timings, stati }, dispatch } = useContext(StateStore);

  useEffect(() => {
    // setTimeout(setLoading, 1000, false);
    const fetchData = async () => {
      if (!timings || timings?.date != new Date().toLocaleDateString() || !(timings?.location?.city == location.city && timings?.location?.country == location.country)) {
        setLoading(true);
        const { city, country } = location;
        const res = await fetch(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${calcMethod}&school=1`);
        if (!res.ok) return;
        let json = await res.json();

        const newTimings = json.data.timings;
        newTimings.location = { ...location };
        newTimings.date = new Date().toLocaleDateString();

        setTimings(dispatch, newTimings);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

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
          ></Prayer>))}
        </div> :
        <div className="prayers-container">
          {names.map((name, index) => (<Prayer
            name={name}
            time={timings[name]}
            currTime={currTime}
            status={stati[stati.length - 1][name]}
            onClick={() => { setPrayerState({ name, status: stati[stati.length - 1][name] }); setModalState(true); }}
          ></Prayer>))}
        </div>
      }
      {!modalState ? null :
        <PrayerModal save={save} prayerState={prayerState} modalIsOpen={modalState} toggle={setModalState}></PrayerModal>}
    </>
  )
}

export function timeGreater(a = "00:00", b = "00:01") {
  if (parseInt(a.split(':')[0]) > parseInt(b.split(':')[0])) return true;
  else if (parseInt(a.split(':')[0]) == parseInt(b.split(':')[0]) && parseInt(a.split(':')[1]) > parseInt(b.split(':')[1])) return true;
  else return false
}

function Prayer(props) {
  let timePassed = timeGreater(props.currTime, props.time);
  let messages = {
    o: name => (`You prayed ${props.name} Prayer on time`),
    m: name => (`You missed ${props.name} Prayer`),
    n: name => (
      timePassed ?
        `${props.time} Onwards ${props.name} Prayer` :
        `${props.time} Onwards ${props.name} Prayer`
    ),
    d: name => (`You prayed ${props.name} Prayer at a delayed time`)
  }
  return (
    <button onClick={!timePassed ? null : props.onClick} className={"card prayer-card " + props.status + (!timePassed ? " future" : "")}>
      {props.loading ? <span className="filler"></span> : messages[props.status](props)}
    </button>
  )
}