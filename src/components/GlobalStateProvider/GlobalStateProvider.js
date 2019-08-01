import React, { createContext, useReducer } from "react";

const initialState = { films: [], active_film: {} };
export const GlobalContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "SAVE_RESULTS":
      const saveState = {
        ...state,
        films: action.payload.results
      };
      return saveState;
    case "SET_ACTIVE_FILM":
      const active_film = action.id
        ? state.films.find(film => film.id === action.id)
        : {};
      const activeState = {
        ...state,
        active_film
      };
      return activeState;
    default:
      throw new Error();
  }
}

function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalStateProvider;
