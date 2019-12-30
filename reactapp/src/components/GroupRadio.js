import React from 'react';
import styled from 'styled-components';
import InputRadio from './InputRadio';

const Radio = styled.div`
  label {
    &:before {
      content: "";
      display: inline-block;
      width: 9px;
      height: 9px;
      margin-right: 10px;
      border-radius: 100%;
      vertical-align: -5px;
      border: 2px solid #1a73e8;
      padding: 3px;
      background-color: transparent;
      background-clip: content-box;
    }

    font-size: 14px;
    font-weight: 400;
    display: block;
    margin-bottom: 18px;
    margin-right: 10px;
  }

  input {
    &:checked + label:before {
      background-color: #1a73e8;
      border-color: #1a73e8;
    }
  }
`;

const GroupRadio = () => {
  return(
    <Radio>
      <InputRadio id={"radio-custom-first"} name="period" type="radio"/>
      <label htmlFor="radio-custom-first">Nunca</label>
      <InputRadio id={"radio-custom-second"} name="period" type="radio"/>
      <label htmlFor="radio-custom-second">El</label>
      <InputRadio id={"radio-custom-third"} name="period" type="radio"/>
      <label htmlFor="radio-custom-third">Después de</label>
    </Radio>
  );
}

export default GroupRadio;