import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.scss';
import QuranCard from './Components/QuranCard';
import GeneralCard from './Components/GeneralCard';
import WeeklyCard from './Components/WeeklyCard';
import PrayersContainer from './Components/PrayersContainer';
import SettingsModal from './Components/SettingsModal';
import Clock from 'react-live-clock';
import store from 'store';
import { StateStore } from './store';
import Registration from './Components/Registration'

function App() {

  const { state } = useContext(StateStore);
  const { hasInitialised, preferences, stati } = state;

  const [settingsModalState, setSettingsModal] = React.useState(false);

  if (!hasInitialised) return (
    <Registration></Registration>
  );

  let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const names = ['Fajr', 'Zuhr', 'Asr', 'Maghrib', 'Isha'];
  const status = names.map(name => stati.map(status => status[name]));
  const day = new Date().getDay();
  const temp = days.splice(day + 1);
  days = [...temp, ...days];

  let data = { days, status, names,
    times: ["3:05", "13:35", "17:03", "18:48", "20:46"],
    sunrise: "6:13", sunset: "18:48", //once a month from server, reuse if still valid for location and month
    // location: preferences.location.city + ", " + preferences.location.country, // get from client
    currTime: (new Date().getHours()) + ":" + (new Date().getMinutes()),
  }

  //if date now is not equal to the latest date in stati, shift and push to array, new date
  //when initiate, fill stati with 'n' for all prayers as default data
  //edit data as prayer stati are changed

  return (
    <div className="App">
      <button onClick={() => store.set("hasInitialised", false)}></button>
      <div style={{ color: "white" }} id="header"><h1>Prayer Journal</h1></div>
      <SettingsModal toggle={setSettingsModal} modalIsOpen={settingsModalState}></SettingsModal>
      <div className="main">
        <WeeklyCard prayerData={data}></WeeklyCard>
        <PrayersContainer prayerData={data}></PrayersContainer>
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
