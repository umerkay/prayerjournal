import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import './SettingsModal.scss';
import { options } from './Registerationtwo';
import { StateStore } from '../store';
import { editPreferences, unregister, printAllData } from '../Actions/UserActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import LocationSelect from './LocationSelect';

export default function SettingsModal({ modalIsOpen, toggle }) {
  const { dispatch, state: { preferences } } = useContext(StateStore);
  const [formState, setFormState] = useState(preferences);
  const [dataChanged, setDataChanged] = useState(false);
  const location = preferences.location;
  // const [loading, setLoading] = useState(false);

  const formUpdated = e => {
    setDataChanged(true);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => toggle(false)}
        className="modal settings-modal"
        overlayClassName="modal-overlay settings-modal-overlay"
      ><div>
          {/* <div className="heading">Preferences</div> */}
          <div className="preference">
            <label>Timing</label>
            <select className="slct input" name="calcMethod" onChange={formUpdated} value={formState.calcMethod}>
              {options.map((option, i) => <option value={i} key={i}>{option}</option>)}
            </select>
          </div>
          <div className="preference">
            <label>Theme</label>
            <select className="slct input" name="theme" onChange={formUpdated} value={formState.theme}>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div className="preference">
            <label>Format</label>
            <select className="slct input" name="timeFormat" onChange={formUpdated} value={formState.timeFormat}>
              <option value="24">24 Hour Clock</option>
              <option value="12">12 Hour Clock</option>
            </select>
          </div>
          <div className="preference">
            <label>Location</label>
            <div>
              <LocationSelect
                onFinal={formUpdated}
                _countryID={location._countryID}
                _stateID={location._stateID}
                _cityID={location._cityID}
              >
              </LocationSelect>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="submitContainer">
            <button className="btn primary clickable" onClick={() => toggle(false)}>
              <FontAwesomeIcon className="icon" icon={faTimes}></FontAwesomeIcon> <span>Nevermind</span>
            </button>
            <button className={"btn" + (dataChanged ? " primary clickable" : "")} onClick={dataChanged ? (() => { editPreferences(dispatch, formState); toggle(false) }) : null}>
              <FontAwesomeIcon className="icon" icon={faSave}></FontAwesomeIcon> <span>Save</span>
            </button>
          </div>
          <div className="preference">
            <label>Data</label>
            <div>
              <button className="btn clickable primary" onClick={() => {
                if (window.confirm("Are you sure you want to delete all data? This data will not be recoverable")) unregister(dispatch);
              }}>Clear All Data</button>
              <button className="btn clickable primary" onClick={printAllData}>Export All Data</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

Modal.setAppElement('body');