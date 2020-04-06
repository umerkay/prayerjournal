import React, { useContext, useState, useEffect } from 'react';
import { StateStore } from '../store';
import './Registration.scss';
import { register } from '../Actions/UserActions';
export const options = [
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

export default function Registration() {

  const { dispatch } = useContext(StateStore);
  const [formState, setFormState] = useState({ calcMethod: 0, location: undefined });
  const [loading, setLoading] = useState(false);

  const formUpdated = obj => {
    setFormState({ ...formState, ...obj });
  }

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(gotPos);
  }, [])

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
            <button className="dormant">
              {formState.location?.city ? (formState.location.city + ", " + formState.location.country) : "Give Location Access"}
            </button>
          }
          {formState.location ? <button onClick={() => register(dispatch, formState)}>Save</button> : null}
        </div>
      </div>
    </div>
  )
}
