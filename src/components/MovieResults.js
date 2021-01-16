import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../Context';

const MovieResultStyles = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  .movie {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    width: 90%;
    padding: 8px;

    border: 5px solid white;
    -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
      0 0 16px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
      0 0 16px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.5);

    .details {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 0 4px;
    }

    .poster {
      width: 25%;
      height: 25%;
    }

    .title,
    .year {
      padding: 4px;
    }
  }
`;

const MovieResults = () => {
  const [state, dispatch] = useContext(AppContext);
  const { data: { Search: movies = [] } = { Search: [] } } = state.results;

  const handleMovieSelect = (e, movie) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SELECTION', movie });
  };

  return (
    <MovieResultStyles>
      {movies.length > 0 &&
        movies.map((result) => (
          <li
            className="movie"
            key={result.imdbID}
            onClick={(e) => handleMovieSelect(e, result)}
          >
            <img className="poster" src={result.Poster} alt={result.Title} />
            <div className="details">
              <div className="title">{result.Title}</div>
              <div className="year">{result.Year}</div>
            </div>
          </li>
        ))}
    </MovieResultStyles>
  );
};

export default MovieResults;
