import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../Context';
import MovieSearch from '../components/MovieSearch';
import MovieResults from '../components/MovieResults';

const SearchPage = () => {
  const [state, dispatch] = useContext(AppContext);
  const { loading } = state;

  return (
    <>
      <MovieSearch />

      {loading && (
        <FontAwesomeIcon
          className="app-spinner"
          icon={faSpinner}
          size="lg"
          spin
        />
      )}

      {!loading && <MovieResults />}
    </>
  );
};

export default SearchPage;
