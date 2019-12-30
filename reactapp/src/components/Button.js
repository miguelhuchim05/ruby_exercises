import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: none;
  text-decoration: none;
  background-color: white;
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  color: ${props => props.color};
`;

const Button = (props) => {
  return(
  <ButtonPrimary color={props.textColor}>{props.text}</ButtonPrimary>
  );
}

export default Button;