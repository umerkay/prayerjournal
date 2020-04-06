import { StateStore } from '../store';
import store from 'store';

export const register = (dispatch, formState) => {
  store.set("hasInitialised", true);
  store.set("preferences", {
    ...formState
  });

  const stati = [];
  const temp = { Fajr: 'n', Zuhr: 'n', Asr: 'n', Maghrib: 'n', Isha: 'n' };
  for (let i = 6; i >= 0; i--) {
    stati.push({ ...temp });
  }
  stati[stati.length - 1].date = new Date().toLocaleDateString();

  store.set("stati", stati);
  dispatch({ type: "INITIALISE_SUCCESS", "source": "reg.js", payload: { preferences: formState, stati } });
}

export const syncStatiDate = (dispatch, stati) => {
  const newStati = [...stati]
  newStati.shift();
  newStati.push({ Fajr: 'n', Zuhr: 'n', Asr: 'n', Maghrib: 'n', Isha: 'n', date: new Date().toLocaleDateString() });
  dispatch({ type: "SYNC_STATI_DATE", payload: { stati: newStati } });
  store.set('stati', newStati);
}

export const editPrayerStatus = (dispatch, stati, newStatus, dayIndex = stati.length - 1) => {
  const newStati = [...stati];
  newStati[dayIndex] = { ...newStati[dayIndex], ...newStatus }
  dispatch({ type: "EDIT_PRAYER_STATUS", payload: { stati: newStati } });
  store.set('stati', newStati);
}

export const editPreferences = (dispatch, preferences) => {
  dispatch({ type: "EDIT_PREFERENCES", payload: { preferences: { ...preferences } } });
  store.set("preferences", preferences);
}