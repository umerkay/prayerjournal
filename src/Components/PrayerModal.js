import React, { useState } from 'react';
import Modal from 'react-modal';
import './PrayerModal.scss';
import { names } from '../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

export default function PrayerModal({ modalIsOpen, toggle, save, prayerState }) {
  const [formData, setFormData] = useState({ ...prayerState });
  const [dataChanged, setDataChanged] = useState(false);

  const setPrayerName = (e) => {
    setFormData({ ...formData, name: names[e.target.value] });
    setDataChanged(true);
  }
  const setPrayerStatus = (e) => {
    setFormData({ ...formData, status: e.target.value });
    setDataChanged(true);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => toggle(false)}
        className="modal prayer-modal"
        overlayClassName="modal-overlay prayer-modal-overlay"
      >
        <div className="heading">Record the status of
          <select value={names.indexOf(formData.name)} className="slct" onChange={setPrayerName}>
            {names.map((name, index) => (<option
              name={name}
              value={index}
              key={name}
            >{name}</option>))}
          </select>
         Prayer</div>
        <select name="" id="" value={formData.status} className="slct" onChange={setPrayerStatus}>
          <option value="n">Not sure</option>
          <option value="o">Timely</option>
          <option value="d">Delayed</option>
          <option value="m">Missed</option>
          <option value="ex">Exempted</option>
        </select>
        <div>
          <button className="btn primary clickable" onClick={() => toggle(false)}>
            <FontAwesomeIcon className="icon" icon={faTimes}></FontAwesomeIcon> <span>Nevermind</span>
          </button>
          <button className={"btn" + (dataChanged ? " primary clickable" : "")} onClick={dataChanged ? (() => { save(formData); toggle(false); }) : null}>
            <FontAwesomeIcon className="icon" icon={faSave}></FontAwesomeIcon> <span>Save</span>
          </button>
        </div>
      </Modal>
    </div>
  )
}

Modal.setAppElement('body');