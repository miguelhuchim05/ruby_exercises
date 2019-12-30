import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  font-size: 14px;
  font-weight: 400;
`;

const InputRadio = (props) => {
  return(
    <Input id={props.id} name="period" type="radio"/>
  );
}

export default InputRadio;