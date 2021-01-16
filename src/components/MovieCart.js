import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../Context';

const MovieCartStyles = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  color: #61dafb;
  padding: 8px;
  z-index: 10;
  background: transparent;
  border: none;

  .items {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1rem;
    padding: 0 5px;
    border-radius: 100%;
    background: red;
    color: white;
  }
`;

const MovieCart = () => {
  const [state, dispatch] = useContext(AppContext);
  const { selection: items = [] } = state;

  const handleCheckout = (e) => {
    e.preventDefault();
    dispatch({ type: 'START_CHECKOUT' });
  };

  return (
    <MovieCartStyles onClick={handleCheckout}>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      {Object.keys(items).length > 0 && (
        <div className="items">{Object.keys(items).length}</div>
      )}
    </MovieCartStyles>
  );
};

export default MovieCart;
