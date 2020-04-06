import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './PrayerModal.scss';

export default function PrayerModal({ modalIsOpen, toggle, save, prayerState }) {
  const names = ['Fajr', 'Zuhr', 'Asr', 'Maghrib', 'Isha'];
  const [formData, setFormData] = useState({ ...prayerState });

  const setPrayerName = (e) => {
    setFormData({ ...formData, name: names[e.target.value] });
  }
  const setPrayerStatus = (e) => {
    setFormData({ ...formData, status: e.target.value });
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
            >{name}</option>))}
          </select>
         Prayer</div>
        <select name="" id="" value={formData.status} className="slct" onChange={setPrayerStatus}>
          <option value="n">Not sure</option>
          <option value="o">Timely</option>
          <option value="d">Delayed</option>
          <option value="m">Missed</option>
        </select>
        <div>
          <button className="btn primary clickable" onClick={() => toggle(false)}>Discard</button>
          <button className="btn primary clickable" onClick={() => { save(formData); toggle(false); }}>Save</button>
        </div>
      </Modal>
    </div>
  )
}