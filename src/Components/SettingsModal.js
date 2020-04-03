import React from 'react'
import Modal from 'react-modal'
import './SettingsModal.scss'

export default function SettingsModal({ modalIsOpen, toggle }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => toggle(false)}
        className="modal settings-modal"
        overlayClassName="modal-overlay settings-modal-overlay"
      >
        <button onClick={() => toggle(false)}>close</button>
      </Modal>
    </div>
  )
}
