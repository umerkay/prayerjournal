// import React, { useContext, useState, useEffect } from 'react';
// import { StateStore } from '../store';
// import './Registration.scss';
// import { register } from '../Actions/UserActions';
// import Loading from './Loading';
// import csc from 'country-state-city';

// export const options = [
//   "Shia Ithna-Ansari",
//   "University of Islamic Sciences, Karachi",
//   "Islamic Society of North America",
//   "Muslim World League",
//   "Umm Al-Qura University, Makkah",
//   "Egyptian General Authority of Survey",
//   "Institute of Geophysics, University of Tehran",
//   "Gulf Region",
//   "Kuwait",
//   "Qatar",
//   "Majlis Ugama Islam Singapura, Singapore",
//   "Union Organization islamic de France",
//   "Diyanet İşleri Başkanlığı, Turkey",
//   "Spiritual Administration of Muslims of Russia"]

// export default function Registration() {

//   const { dispatch } = useContext(StateStore);
//   const [formState, setFormState] = useState({ calcMethod: 1, location: undefined, theme: 'dark', countries: csc.getAllCountries() });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const formUpdated = obj => {
//     setFormState({ ...formState, ...obj });
//   }

//   const gotPos = async pos => {
//     setError(null);
//     formUpdated({ location: pos.coords });
//     const { latitude, longitude } = pos.coords;
//     const url = `https://geocode.xyz/${latitude},${longitude}?json=1`;

//     let res;
//     try {
//       res = await fetch(url);
//       if (!res.ok) throw new Error(res.status);
//     } catch (err) {
//       couldNotGetPos(err);
//       return;
//     }

//     const { city, country } = await res.json();
//     formUpdated({ location: { ...pos.coords, city, country } });
//     setLoading(false);
//   }

//   const couldNotGetPos = err => {
//     setLoading(false);
//     if (err.message == "User denied Geolocation")
//       setError("Did you deny automatic location access?");
//     else
//       setError("Unable to automatically detect location");
//   }

//   useEffect(() => {
//     setLoading(true);
//     navigator.geolocation.getCurrentPosition(gotPos, couldNotGetPos);
//   }, []);

//   return (
//     <div className="register-container">
//       <div className="card register-card">
//         <div className="heading">
//           Prayer Journal<br></br>
//         </div>
//         <p>Before we begin, select a Prayer times calculation method and give access to your location</p>

//         {error ? <div className="card error">
//           <span>{error}</span>
//         </div> : null}

//         <select onChange={e => formUpdated({ calcMethod: e.target.value })} value={formState.calcMethod}>
//           {options.map((option, i) => <option value={i}>{option}</option>)}
//         </select>
//         <div>
//           {(loading && !error) ?
//             <button className="dormant"><Loading width="25px"></Loading></button> : formState.location?.city ?
//               <button className="dormant">
//                 {(formState.location.city + ", " + formState.location.country)}
//               </button> : null
//           }

//           {error ?
//             <>
//               <select name="country" id="country" onChange={e => formUpdated({ country: e.target.value })}>
//                 {formState.countries.map((option, i) => <option value={option.id}>{option.name}</option>)}
//               </select>
//               {formState.states ?
//                 (<select name="state" id="state">
//                   {formState.states.map((option, i) => <option value={option.id}>{option.name}</option>)}
//                 </select>)
//                 : null}
//               {formState.cities ?
//                 (<select name="city" id="city">
//                   {formState.cities.map((option, i) => <option value={option.id}>{option.name}</option>)}
//                 </select>)
//                 : null}
//               <button
//                 className="btn clickable error"
//                 onClick={() => navigator.geolocation.getCurrentPosition(gotPos, couldNotGetPos)}>
//                 Retry
//               </button>
//             </> :
//             null
//           }
//           {(formState.location.city && !loading && !error) ? <button className="btn primary clickable" onClick={() => register(dispatch, formState)}>Save</button> : null}
//         </div>
//       </div>
//     </div>
//   )
// }
