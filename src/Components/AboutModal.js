import React from 'react';
import Modal from 'react-modal';
import './AboutModal.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function AboutModal({ modalIsOpen, toggle }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => toggle(false)}
        className="modal about-modal"
        overlayClassName="modal-overlay settings-modal-overlay"
      ><div>
        <div className="whatsnew">
          <div className="title">What's New?</div>
          <ul>
            <li>You can now mark prayers as "exempted," these are cases where you are permitted by Shariah to skip your prayer</li>
            <li>This about section has been added for nerds like you</li>
            <li>You can now change your location in the preferences section</li>
            <li>The Quran card allows force refresh, this is for cases where it had failed to fetch the verse of the day. It fetches a new one if available.</li>
          </ul>
        </div>
          Prayer Journal allows you to record the statuses of your prayers as you offer them. A Quranic verse is displayed in the Quran Card, fetched from a third party API, which is refreshed once a day. Prayer timings are fetched according to your location from another external API. This application is stricly for pupils following Islam as their religion, and supports the five compulsory daily prayers. It displays data for upto seven days, after which the data is stored in permanent storage. It will make use of that data in the future.
        <br></br>
          This application has been built by, and is maintained by the entity represented by <a href="https://umerkay.github.io" target="_blank" rel="noopener noreferrer" >umerkay</a>.
          This is primarily a personal project that is made available for public use on Github Pages.
          <br></br>
          This is a Progressive Web App (PWA) and can work offline; this same link works both for desktop browsers and on phone browsers. Browsers supporting PWA installations, for example Chrome, allow this to be locally installed on desktops and phones alike.
          Your data, as of now, is stored locally and I am yet to add mechanism for syncing data between devices, for example between your desktop and your phone.
          <br></br>
          If you have suggestions and/or requests for this app, you can open issues on the Github repository. If you do not know how to do that, send those to me personally (contact information is available on my portfolio).
        </div>
        <button className="btn primary clickable" onClick={() => toggle(false)}>
          <span>Okay</span>
        </button>
      </Modal>
    </div>
  )
}

Modal.setAppElement('body');