import React from 'react';
import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../Colors/Color';

const List = styled.ul`
  font-size: 16px;
  list-style-type: none;
  color: ${primaryColor};
  li {
    padding: 15px 16px;
  }
  .selected {
    color: ${secondaryColor};
  }
  .checked {
    color: ${secondaryColor};
    font-size: 20px;
    font-weight: bolder;
  }
`
const Wrap = styled.div`
  display: inline-block;
  padding: 20px 10px;
`;

const PropertyDesciptionList = () => {
  return(
    <Wrap>
      <List>      
        <li className="selected">Identidad</li>
        <li className="selected">ropietario</li>
        <li className="checked">Características básicas</li>
        <li>Espacios</li>
        <li>Fotos y anuncio</li>
        <li>Precio</li>
        <li>Disponibilidad</li>
      </List>
    </Wrap>
  ); 
}

export default PropertyDesciptionList;