import React from 'react';
import styled from 'styled-components';
import PropertyDescriptionList from './PropertyDescriptionList'
import Description from './Description';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 800px;
  padding-top: 20px;
`;
const Form = () => {
  return(
    <Wrap>
      <PropertyDescriptionList />
      <Description />
    </Wrap>
  );
}

export default Form;