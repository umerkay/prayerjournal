import React, { useContext } from 'react';
import './App.scss';
import QuranCard from './Components/QuranCard';
import GeneralCard from './Components/GeneralCard';
import WeeklyCard from './Components/WeeklyCard';
import PrayersContainer, { timeGreater } from './Components/PrayersContainer';
import SettingsModal from './Components/SettingsModal';
import AboutModal from './Components/AboutModal';
// import Clock from 'react-live-clock';
// import store from 'store';
import { StateStore } from './store';
import Registration from './Components/Registerationtwo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog , faMapMarkerAlt, faInfo } from '@fortawesome/free-solid-svg-icons'
import HeaderMobile from './Components/HeaderMobile';

function App() {

  const { state } = useContext(StateStore);
  const { hasInitialised, preferences, timings } = state;

  const [settingsModalState, setSettingsModal] = React.useState(false);
  const [aboutModalState, setAboutModal] = React.useState(false);

  if (!hasInitialised) return (
    <Registration></Registration>
  );

  let theme;
  const currTime = (new Date().getHours()) + ":" + (new Date().getMinutes());
  if (preferences.theme === "auto") {
    theme = timeGreater(currTime, timings?.Sunrise) && timeGreater(timings?.Sunset, currTime) ? "light" : "dark";
  } else {
    theme = preferences.theme;
  }

  return (
    <div className={`App ${theme || "dark"}-theme`}>
      <HeaderMobile>
        <FontAwesomeIcon icon={faCog} className="icon" onClick={() => setSettingsModal(true)}></FontAwesomeIcon>
        <div className="text">Prayer Journal</div>
      </HeaderMobile>
      {settingsModalState ? <SettingsModal toggle={setSettingsModal} modalIsOpen={settingsModalState}></SettingsModal> : null}
      {aboutModalState ? <AboutModal toggle={setAboutModal} modalIsOpen={aboutModalState}></AboutModal> : null}
      <div className="main">
        <WeeklyCard></WeeklyCard>
        <PrayersContainer calcMethod={preferences.calcMethod} currTime={currTime} location={preferences.location}></PrayersContainer>
      </div>
      <div className="side">
        {/* <Clock format={'HH:mm'} ticking={true} className="card clock" /> */}
        <QuranCard></QuranCard>
        <GeneralCard text={preferences.location.city + ", " + preferences.location.country}>
          <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
        </GeneralCard>
        <GeneralCard className="only-desktop" text="Preferences" onClick={() => setSettingsModal(true)}>
          <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
        </GeneralCard>
        <GeneralCard text="About & What's New" onClick={() => setAboutModal(true)}>
          <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
        </GeneralCard>
      </div>
    </div>
  );
}

export default App;
