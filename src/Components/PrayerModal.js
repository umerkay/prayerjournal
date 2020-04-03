import React from 'react'
import Modal from 'react-modal'
import './PrayerModal.scss'

export default function PrayerModal({ modalIsOpen, toggle }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => toggle(false)}
        className="modal prayer-modal"
        overlayClassName="modal-overlay prayer-modal-overlay"
      >
        {modalIsOpen}
        <button onClick={() => toggle(false)}>Discard</button>
        <button onClick={() => toggle(false)}>Save</button>
      </Modal>
    </div>
  )
}