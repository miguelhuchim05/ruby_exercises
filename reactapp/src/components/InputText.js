import React from 'react';
import styled from 'styled-components';

const InputBlock = styled.input`
  display: block;
  width: ${props => props.size};
  margin-bottom: 10px;
  padding: 7px;
  background-color: #f1f3f4;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 400;
`;

const InputText = (props) => {
  return(
    <InputBlock size={props.size} placeholder={props.placeholder}/>
  );
}

export default InputText;