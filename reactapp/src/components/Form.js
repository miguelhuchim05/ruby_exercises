import React from 'react';
import './Form';
import styled from 'styled-components';
import InputNumeric from './InputNumeric';
import CircleDay from './CircleDay';
import GroupRadio from './GroupRadio';
import InputText from './InputText';
import Button from './Button';
import Select from './Select';

const Wrap = styled.div`
  margin: 0 auto;
  width: 350px;
  padding: 15px;
`;
const FormGroup = styled.div``;
const FlexContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
const FlexContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Label = styled.label`
  margin: 5px 10px 5px 0;
  font-size: 14px;
  font-weight: 400;
`;
const Text = styled.span`
 display: block;
 font-size: 14px;
 font-weight: 400;
 margin: 1.33em 0;
`;
const TextLarge = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin: 1.33em 0;
`;

const Form = () => {
  return(
    <Wrap>
      <TextLarge>Periodicidad personalizada</TextLarge>
      <FormGroup>
        <Label>Repetir cada</Label>
        <InputNumeric />
        <Select />
      </FormGroup>
      <FormGroup>
        <Text>Se repite el</Text>
        <FormGroup>
          <CircleDay text={'D'}/>
          <CircleDay text={'L'}/>
          <CircleDay text={'M'}/>
          <CircleDay text={'X'}/>
          <CircleDay text={'J'}/>
          <CircleDay text={'V'}/>
          <CircleDay text={'S'}/>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Text>Termina</Text>
        <FlexContainer>
          <FormGroup>
            <GroupRadio />
          </FormGroup>
          <FormGroup>
            <InputText size={'120px'} placeholder={'27 de mar de 2020'}/>
            <InputText size={'150px'} placeholder={'13    repeticiones'}/>
          </FormGroup>
        </FlexContainer>
      </FormGroup>
      <FormGroup>
        <FlexContainerButtons>
          <Button text={'Cancelar'} textColor={'#828282'}/>
          <Button text={'Listo'} textColor={'#1a73e8'}/>
        </FlexContainerButtons>
      </FormGroup>
    </Wrap>
  );
}

export default Form;
