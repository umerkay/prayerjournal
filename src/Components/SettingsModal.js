import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import './SettingsModal.scss';
import { options } from './Registration';
import { StateStore } from '../store';
import { editPreferences } from '../Actions/UserActions';

export default function SettingsModal({ modalIsOpen, toggle }) {
  const { dispatch, state: { preferences } } = useContext(StateStore);
  const [formState, setFormState] = useState(preferences);
  // const [loading, setLoading] = useState(false);

  const formUpdated = e => {
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
      >
        <div className="heading">Preferences</div>
        <div className="preference">
          <label>Timing</label>
          <select className="slct input" name="calcMethod" onChange={formUpdated} value={formState.calcMethod}>
            {options.map((option, i) => <option value={i}>{option}</option>)}
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
        <button className="btn primary clickable" onClick={() => toggle(false)}>Discard</button>
        <button className="btn primary clickable" onClick={() => { editPreferences(dispatch, formState); toggle(false) }}>Save</button>
      </Modal>
    </div>
  )
}
