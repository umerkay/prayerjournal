import React, { useContext, useState } from 'react';
import { StateStore } from '../store';
import store from 'store';
import './Registration.scss';

export default function Registration() {

  const { dispatch } = useContext(StateStore);
  const [formState, setFormState] = useState({ calcMethod: 0, location: undefined });
  const [loading, setLoading] = useState(false);

  const formUpdated = obj => {
    setFormState({ ...formState, ...obj });
  }

  const gotPos = async pos => {
    setLoading(true);
    formUpdated({ location: pos.coords });
    const { latitude, longitude } = pos.coords;
    const url = `https://geocode.xyz/${latitude},${longitude}?json=1`;
    const res = await fetch(url);
    const { city, country } = await res.json();
    formUpdated({ location: { ...pos.coords, city, country } });
    setLoading(false);
  }

  const register = () => {
    store.set("hasInitialised", true);
    store.set("preferences", {
      ...formState
    });

    const stati = [];
    const temp = { Fajr: 'n', Zuhr: 'n', Asr: 'n', Maghrib: 'n', Isha: 'n' };
    for (let i = 6; i >= 0; i--) {
      stati.push({ ...temp })
    }
    stati[stati.length - 1].date = new Date().toLocaleDateString();

    store.set("stati", stati);

    dispatch({ type: "INITIALISE_SUCCESS", payload: { preferences: formState, stati } });
  }

  const options = [
    "Shia Ithna-Ansari",
    "University of Islamic Sciences, Karachi",
    "Islamic Society of North America",
    "Muslim World League",
    "Umm Al-Qura University, Makkah",
    "Egyptian General Authority of Survey",
    "Institute of Geophysics, University of Tehran",
    "Gulf Region",
    "Kuwait",
    "Qatar",
    "Majlis Ugama Islam Singapura, Singapore",
    "Union Organization islamic de France",
    "Diyanet İşleri Başkanlığı, Turkey",
    "Spiritual Administration of Muslims of Russia"]

  return (
    <div className="register-container">
      <div className="card register-card">
        <div className="heading">
          Prayer Journal<br></br>
        </div>
        <p>Before we begin, select a Prayer times calculation method and give access to your location</p>
        <select onChange={e => formUpdated({ calcMethod: e.target.value })} value={formState.calcMethod}>
          {options.map((option, i) => <option value={i}>{option}</option>)}
        </select>
        <div>
          {loading ?
            <button className="dormant">loading..</button> :
            <button onClick={() => navigator.geolocation.getCurrentPosition(gotPos)}>
              {formState.location?.city ? (formState.location.city + ", " + formState.location.country) : "Give Location Access"}
            </button>
          }
          {formState.location ? <button onClick={register}>Save</button> : null}
        </div>
      </div>
    </div>
  )
}
