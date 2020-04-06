import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.scss';
import QuranCard from './Components/QuranCard';
import GeneralCard from './Components/GeneralCard';
import WeeklyCard from './Components/WeeklyCard';
import PrayersContainer, { timeGreater } from './Components/PrayersContainer';
import SettingsModal from './Components/SettingsModal';
import Clock from 'react-live-clock';
import store from 'store';
import { StateStore } from './store';
import Registration from './Components/Registration'

function App() {

  const { state } = useContext(StateStore);
  const { hasInitialised, preferences, stati, timings } = state;

  const [settingsModalState, setSettingsModal] = React.useState(false);

  if (!hasInitialised) return (
    <Registration></Registration>
  );

  // let data = {
  //   times: ["3:05", "13:02", "17:03", "18:48", "20:46"],
  //   sunrise: "6:13", sunset: "18:48", //once a month from server, reuse if still valid for location and month
  //   // location: preferences.location.city + ", " + preferences.location.country, // get from client
  //   currTime: (new Date().getHours()) + ":" + (new Date().getMinutes()),
  // }
  let theme;
  const currTime = (new Date().getHours()) + ":" + (new Date().getMinutes());
  if (preferences.theme == "auto") {
    theme = timeGreater(currTime, timings?.Sunrise) && timeGreater(timings?.Sunset, currTime) ? "light" : "dark";
  } else {
    theme = preferences.theme;
  }
  return (
    <div className={`App ${theme}-theme`}>
      {/* <button onClick={() => store.set("hasInitialised", false)}></button> */}
      <div style={{ color: "white" }} id="header"><h1>Prayer Journal</h1></div>
      {settingsModalState ? <SettingsModal toggle={setSettingsModal} modalIsOpen={settingsModalState}></SettingsModal> : null}
      <div className="main">
        <WeeklyCard></WeeklyCard>
        <PrayersContainer calcMethod={preferences.calcMethod} currTime={currTime} location={preferences.location}></PrayersContainer>
      </div>
      <div className="side">
        {/* <Clock format={'HH:mm'} ticking={true} className="card clock" /> */}
        <GeneralCard text={preferences.location.city + ", " + preferences.location.country}></GeneralCard>
        <GeneralCard text="Preferences" onClick={() => setSettingsModal(true)}></GeneralCard>
        <QuranCard></QuranCard>
      </div>
    </div>
  );
}

export default App;
