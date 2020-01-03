import React from 'react';
import styled from 'styled-components';
import { secondaryColor, tertiaryColor } from '../Colors/Color';

const Input = styled.input`
  display: none;
  &:checked + span{
    background: ${secondaryColor};
    color: #fff;
    border-color: #2196F3;
  }
`;
const Label = styled.span`
  display: block;
  margin-bottom: 10px;
  border: 1px solid ${tertiaryColor};
  padding: 13px 200px 13px 13px;
  cursor: pointer;  
`;

const DescriptionItem = (props) => {
  return(    
    <label>
      <Input type="radio" name="radio" id="option1"/>
      <Label>{props.text}</Label>
    </label>
  );
}

export default DescriptionItem;