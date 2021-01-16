import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AppContext from '../Context';
import fetchMoviesByTitle from '../utils/fetchMovies';

const SearchStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  label {
    display: none;
  }

  input {
    font-size: 1.2rem;
    border: 5px solid white;
    -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
      0 0 16px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
      0 0 16px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.5);
    padding: 16px;
    margin: 16px;
    width: 90%;
  }
`;

const Search = () => {
  const [state, dispatch] = useContext(AppContext);

  const timeoutRef = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSearchChange = (e) => {
    e.preventDefault();

    clearTimeout(timeoutRef.current);

    dispatch({ type: 'START_SEARCH', query: e.target.value });

    timeoutRef.current = setTimeout(() => {
      if (e.target.value.length === 0) {
        dispatch({ type: 'RESET_SEARCH' });
        return;
      }

      fetchMoviesByTitle(e.target.value).then((results) => {
        console.log(results);
        dispatch({
          type: 'FINISH_SEARCH',
          results,
        });
      });
    }, 300);
  };

  return (
    <SearchStyles>
      <label htmlFor="movieSearch">Search for a movie by title</label>
      <input
        type="text"
        id="movieSearch"
        onInput={handleSearchChange}
        placeholder="Search for a movie by title..."
      />
    </SearchStyles>
  );
};

export default Search;
