import React, { createContext, useReducer } from "react";

const initialState = { films: [], credits: [] };
export const GlobalContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "SAVE_RESULTS":
      const saveState = {
        ...state,
        films: action.payload.results
      };
      return saveState;
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
