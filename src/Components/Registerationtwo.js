import React, { useContext, useState, useEffect } from 'react';
import { StateStore } from '../store';
import './Registration.scss';
import { register, unregister } from '../Actions/UserActions';
import Loading from './Loading';
import LocationSelect from './LocationSelect';

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

  const [formState, setFormState] = useState({ calcMethod: 1, theme: 'dark', location: undefined });

  const formUpdated = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  }

  return (
    <div className="register-container">
      <div className="card register-card">
        <div className="heading">
          Prayer Journal<br></br>
        </div>
        <p>Before we begin, select a Prayer times calculation method and your location</p>

        <select onChange={formUpdated} value={formState.calcMethod} name="calcMethod">
          {options.map((option, i) => <option value={i}>{option}</option>)}
        </select>

        <LocationSelect onFinal={formUpdated}></LocationSelect>

        {(formState.location) ? <button className="btn primary clickable" onClick={() => register(dispatch, formState)}>Save</button> : null}
      </div>
    </div>
  )
}
