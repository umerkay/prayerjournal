// import { StateStore } from '../store';
import store from 'store';
import { json2csv } from 'json-2-csv';

export const register = (dispatch, formState) => {
  // formState.location = { city: formState.city, country: formState.country }
  store.set("preferences", {
    ...formState
  });
  store.set("hasInitialised", true);

  const stati = [];
  const temp = { Fajr: 'n', Zuhr: 'n', Asr: 'n', Maghrib: 'n', Isha: 'n' };
  const msRightNow = new Date().getTime();
  for (let i = 6; i >= 0; i--) {
    stati.push({ ...temp, timestamp: new Date(msRightNow - i * _MS_PER_DAY).toISOString() });
  }

  store.set("stati", stati);
  dispatch({ type: "INITIALISE_SUCCESS", "source": "reg.js", payload: { preferences: formState, stati } });
}

export const unregister = (dispatch) => {
  dispatch({ type: "INITIALISE_UNDO" });
  store.clearAll();
  window.location.reload();
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export function StringifySingleStati(temp, timestamp) {
  return `${temp.Fajr},${temp.Zuhr},${temp.Asr},${temp.Maghrib},${temp.Isha},${new Date(timestamp || temp.timestamp).getTime()}`
}

export function ParseSingleStringifiedStati(temp, isVerbose) {
  const parts = temp.split(',');
  return {
    Fajr: parts[0], //make verbose
    Zuhr: parts[1],
    Asr: parts[2],
    Maghrib: parts[3],
    Isha: parts[4],
    timestamp: new Date(parseInt(parts[5])).toISOString(),
  }
}

export const syncStatiDate = (dispatch, stati) => {
  const newStati = [...stati];
  const timestamp = new Date();
  const lastTimestamp = new Date(stati[stati.length - 1].timestamp || stati[stati.length - 1].date);
  const daysPassed = dateDiffInDays(lastTimestamp, timestamp);

  if (daysPassed <= 0) return;
  let dataToAbandon = [];
  for (let i = 1; i <= daysPassed; i++) {
    dataToAbandon.push(StringifySingleStati(newStati.shift(), (lastTimestamp.getTime() + ((i - 7) * _MS_PER_DAY))))
    newStati.push({
      Fajr: 'n',
      Zuhr: 'n',
      Asr: 'n',
      Maghrib: 'n',
      Isha: 'n',
      timestamp: new Date(lastTimestamp.getTime() + (i * _MS_PER_DAY)).toISOString()
    });
  }

  const abandonedStati = store.get('abandonedStati') || [];
  store.set('abandonedStati', [...abandonedStati, ...dataToAbandon]);
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

export const setTimings = (dispatch, timings) => {
  timings.Zuhr = timings.Dhuhr;
  dispatch({ type: "SET_TIMINGS", payload: { timings } });
  store.set("timings", timings);
}

function makeVerbose(items) {
  const fullForms = {
    o: "Timely",
    n: "-",
    m: "Missed",
    d: "Delayed",
    ex: "Exempted"
  };
  for (let item of items) {
    for (let key in item) {
      item[key] = fullForms[item[key]] || item[key];
    }
  }
  return items;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  alert("Downloaded all of your data as a .csv file")
}

export const printAllData = () => {
  if (window.confirm("This is an experimental feature. If you notice errors in the file generated, please report them"))
    json2csv(makeVerbose([...(store.get("abandonedStati") || []).map(item => ParseSingleStringifiedStati(item)), ...store.get('stati')]), (err, csv) => download(`prayer-log-${new Date().toISOString()}.csv`, csv));
}