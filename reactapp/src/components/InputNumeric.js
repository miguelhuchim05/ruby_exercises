import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 40px;
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 7px;
  background-color: #f1f3f4;
  border: 1px solid transparent;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  -moz-appearance: textfield;
  &:hover {
    -moz-appearance: number-input; 
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #1a73e8;
  }
`;

const InputNumeric = () => {
  return(
    <Input type="number"/>
  );
}

export default InputNumeric;