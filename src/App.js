import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import AppContext from './Context';
import MovieCart from './components/MovieCart';
import SearchPage from './pages/SearchPage';
import CheckoutPage from './pages/CheckoutPage';

const AppStyles = styled.div`
  .app-header {
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 32px 0;
  }

  .app-logo {
    pointer-events: none;
    color: #61dafb;
  }

  .app-title {
    font-size: 2rem;
    color: #61dafb;
  }

  .app-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6rem;
  }
`;

function App() {
  const [state, dispatch] = useContext(AppContext);
  const { checkout } = state;

  return (
    <AppStyles>
      <header className="app-header">
        <MovieCart />
        <FontAwesomeIcon className="app-logo" icon={faFilm} size="5x" />
        <h1 className="app-title">Semantic Movies</h1>
      </header>
      <div className="app-content">
        {!checkout && <SearchPage />}

        {checkout && <CheckoutPage />}
      </div>
    </AppStyles>
  );
}

export default App;
