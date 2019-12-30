import React, { useState } from 'react';
import arrowDown from '../dropDownArrow.png';
import styled from 'styled-components';

const Select = () => {
  const [show, showOptions] = useState(false);
  const [periodChosen, setPeriod] = useState('Semana');
  const DropDown = styled.div`
  position: relative;
  display: inline-block;
  `;
  const SelectHeader = styled.div`
    display: inline-block;
    min-width: 90px;
    background-color: #f1f3f4;
    padding: 9px;
    font-size: 14px;
    border: none;
    cursor: pointer;
  `;
  const Arrow = styled.div`
    display: inline-block;
    position: absolute;
    background-color: #f1f3f4;
    padding: 12px 9px 12px 9px;
    img {
      width: 10px;
      height: 10px;
      display:block;
    }
  `;
  const SelectBody = styled.div`
    display: ${show ? 'block': 'none'};
    position: absolute;
    right: 0;
    background-color: white;
    min-width: 135px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    top: -34px;
    left: 0;
  `;
  const Item = styled.a`
    color: black;
    padding: 9px 28px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    &:hover {
      background-color: #f1f1f1;
    }
  `;
  
  return(
    <DropDown onClick={ () => showOptions(!show) }>
      <SelectHeader>{periodChosen}</SelectHeader>
      <Arrow>
        <img src={arrowDown}></img>
      </Arrow>
      <SelectBody>
        <Item onClick={ ()=> setPeriod('Día') }>Día</Item>
        <Item onClick={ ()=> setPeriod('Semana') }>Semana</Item>
        <Item onClick={ ()=> setPeriod('Mes') }>Mes</Item>
        <Item onClick={ ()=> setPeriod('Año') }>Año</Item>
      </SelectBody>
    </DropDown>
  );
}

export default Select;