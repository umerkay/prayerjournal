import React, { useState } from 'react';
import csc from 'country-state-city';

export default function LocationSelect({ onFinal, _countryID, _stateID, _cityID }) {

  const countries = csc.getAllCountries();
  const [states, setStates] = useState(_countryID ? csc.getStatesOfCountry(_countryID) : null);
  const [cities, setCities] = useState(_stateID ? csc.getCitiesOfState(_stateID) : null);
  const [formState, setFormState] = useState({ _countryID, _stateID, _cityID });

  const formUpdated = ({ target }) => {
    if (target.name == "country") {
      setFormState({
        ...formState,
        country: target.options[target.selectedIndex].innerHTML,
        _countryID: target.value
      });
      setStates(csc.getStatesOfCountry(target.value));
      setCities(null);
    } else if (target.name == "state") {
      setFormState({
        ...formState,
        state: target.options[target.selectedIndex].innerHTML,
        _stateID: target.value
      });
      setCities(csc.getCitiesOfState(target.value));
    } else if (target.name == "city") {
      const newState = {
        ...formState,
        city: target.options[target.selectedIndex].innerHTML,
        _cityID: target.value
      };
      setFormState(newState);
      onFinal({ target: { name: "location", value: newState } });
    }
  }
  return (
    <>
      <select value={formState._countryID} name="country" id="country" className="slct" onChange={formUpdated}>
        <option>Select Country</option>
        {countries.map((option, i) => <option value={option.id}>{option.name}</option>)}
      </select>

      {states ?
        (<select value={formState._stateID} name="state" id="state" className="slct" style={{ marginTop: "0.25rem" }} onChange={formUpdated}>
          <option>Select State</option>
          {states.map((option, i) => <option value={option.id}>{option.name}</option>)}
        </select>)
        : null}

      {cities ?
        (<select value={formState._cityID} name="city" id="city" className="slct" style={{ marginTop: "0.25rem" }} onChange={formUpdated}>
          <option>Select City</option>
          {cities.map((option, i) => <option value={option.id}>{option.name}</option>)}
        </select>)
        : null}
    </>
  )
}
