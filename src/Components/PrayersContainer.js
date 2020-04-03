import React from 'react'
import './PrayersContainer.scss';
import PrayerModal from './PrayerModal';

export default function PrayersContainer(props) {
  let { prayerData } = props;
  const [modalState, setModalState] = React.useState(false);

  return (
    <>
      <div className="prayers-container">
        {prayerData.status.map((status, index) => (<Prayer
          name={prayerData.names[index]}
          time={prayerData.times[index]}
          currTime={prayerData.currTime}
          status={status[status.length - 1]}
          onClick={() => setModalState(prayerData.names[index])}
        ></Prayer>))}
      </div>
      <PrayerModal modalIsOpen={modalState} toggle={setModalState}></PrayerModal>
    </>
  )
}

function timeGreater(a, b) {
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
        `${props.time} Onwards ${props.name} Prayer, Click here to record ` :
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