import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../Context';

const MovieCheckoutListStyles = styled.ul`
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

const MovieCheckoutList = () => {
  const [state, dispatch] = useContext(AppContext);
  const { selection } = state;

  return (
    <MovieCheckoutListStyles>
      {Object.keys(selection).length > 0 &&
        Object.keys(selection).map((id) => (
          <li className="movie" key={id}>
            <img
              className="poster"
              src={selection[id].Poster}
              alt={selection[id].Title}
            />
            <div className="details">
              <div className="title">{selection[id].Title}</div>
              <div className="year">{selection[id].Year}</div>
            </div>
          </li>
        ))}
    </MovieCheckoutListStyles>
  );
};

export default MovieCheckoutList;
