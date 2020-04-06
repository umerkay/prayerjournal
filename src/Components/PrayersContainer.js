import React, { useContext, useState, useEffect } from 'react';
import { StateStore } from '../store';
import './PrayersContainer.scss';
import PrayerModal from './PrayerModal';
import { editPrayerStatus } from '../Actions/UserActions';

export default function PrayersContainer(props) {
  const [modalState, setModalState] = useState(false);
  const [prayerState, setPrayerState] = useState({});

  const { dispatch, state: { stati } } = useContext(StateStore);
  const names = ['Fajr', 'Zuhr', 'Asr', 'Maghrib', 'Isha'];

  const save = (formData) => {
    editPrayerStatus(dispatch, stati, { [formData.name]: formData.status });
  }

  return (
    <>
      <div className="prayers-container">
        {names.map((name, index) => (<Prayer
          name={name}
          time={props.prayerData.times[index]}
          currTime={props.prayerData.currTime}
          status={stati[stati.length - 1][name]}
          onClick={() => { setPrayerState({ name, status: stati[stati.length - 1][name] }); setModalState(true); }}
        ></Prayer>))}
      </div>
      {!modalState ? null :
        <PrayerModal save={save} prayerState={prayerState} modalIsOpen={modalState} toggle={setModalState}></PrayerModal>}
    </>
  )
}

export function timeGreater(a, b) {
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
      {messages[props.status](props)}
    </button>
  )
}