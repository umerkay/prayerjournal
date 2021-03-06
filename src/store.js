import React, { createContext, useReducer } from 'react';
import store from 'store';

const initialState = {
  hasInitialised: store.get("hasInitialised"),
  preferences: store.get("preferences"),
  stati: store.get("stati"),
  timings: store.get("timings"),
};
const StateStore = createContext(initialState);
const { Provider } = StateStore;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "INITIALISE_SUCCESS":
        return {
          ...state,
          hasInitialised: true,
          preferences: action.payload.preferences,
          stati: action.payload.stati
        }
      case "INITIALISE_UNDO":
        return {
          hasInitialised: false
        }
      case "SYNC_STATI_DATE":
        return {
          ...state,
          stati: action.payload.stati
        }
      case "EDIT_PRAYER_STATUS":
        return {
          ...state,
          stati: action.payload.stati
        }
      case "EDIT_PREFERENCES":
        return {
          ...state,
          preferences: action.payload.preferences
        }
      case "SET_TIMINGS":
        return {
          ...state,
          timings: action.payload.timings
        }
      default:
        return state
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateStore, StateProvider }