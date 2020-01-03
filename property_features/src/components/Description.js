import React from 'react';
import styled from 'styled-components';
import DescriptionItem from './DescriptionItem';
import { secondaryColor } from '../Colors/Color';

const Wrap = styled.div`
  display: inline-block;
  border: 1px solid ${secondaryColor};
  height: 400px;
  padding: 55px 50px;
`;
const Label = styled.label`
  display: block;
  margin: 30px 0px;
  font-weight: 400;
  font-size: 20px;
  font-weight: normal;
`;

const Description = () => {
  return(
    <Wrap>
      <Label>Tipo de propiedad</Label>
      <DescriptionItem text={'Departamento'} />
      <DescriptionItem text={'Estudio'} />
      <DescriptionItem text={'Loft'} />
      <DescriptionItem text={'Casa'} />
      <DescriptionItem text={'Duplex'} />      
    </Wrap>    
  );
}

export default Description;