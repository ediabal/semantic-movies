import React, { useReducer } from 'react';

const AppContext = React.createContext();

const initialAppState = {
  loading: false,
  checkout: false,
  results: {},
  selection: {},
  query: '',
};

function searchReducer(state, action) {
  switch (action.type) {
    case 'RESET_SEARCH':
      return { ...state, loading: false, results: {}, query: '' };
    case 'START_SEARCH':
      return { ...state, loading: true, query: action.query };
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results };
    case 'UPDATE_SELECTION':
      const selection = { ...state.selection };
      selection[action.movie.imdbID] = action.movie;
      return { ...state, selection };
    case 'START_CHECKOUT':
      return { ...state, checkout: true };
    case 'FINISH_CHECKOUT':
      return initialAppState;
    default:
      throw new Error();
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, initialAppState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
