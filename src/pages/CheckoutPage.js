import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../Context';
import MovieCheckoutList from '../components/MovieCheckoutList';

const CheckoutStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 48px;
  margin-bottom: 48px;
  width: 100%;

  input {
    position: fixed;
    bottom: 0;
    font-size: 1.2rem;
    border: 3px solid white;
    -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
      0 0 16px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
      0 0 16px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.1);
    background: #61dafb;
    color: #282c34;
    padding: 16px;
    margin: 16px;
  }
`;

const CheckoutPage = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleCheckout = (e) => {
    e.preventDefault();
    dispatch({ type: 'FINISH_CHECKOUT' });
  };

  return (
    <CheckoutStyles onSubmit={handleCheckout}>
      <h3>Checkout</h3>
      <MovieCheckoutList />
      <input type="submit" value="Checkout" />
    </CheckoutStyles>
  );
};

export default CheckoutPage;
