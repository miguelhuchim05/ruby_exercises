import React from 'react'
import styled from 'styled-components';

const fontSize = '14px';
const primaryColor = '#9aa0a6';
const Wrap = styled.div`
  display: flex;    
`;
const Hours = styled.div`
  width: 4%;
  height: 30px;
  display: inline-block;
  border-right: 1px solid ${primaryColor};  
  padding-top: 20px;
  padding-right: 20px;
  text-align: right;
  position: relative;
  top: 50px;
  font-size: ${fontSize};
`;
const Container = styled.div`  
  width: 96%;
  height: 30px;
  display: inline-block;
  position: relative;
  top: 50px;
  left: -10px;  
  border-bottom: 1px solid ${primaryColor};
`;
const Schedule = styled.div`
  background-color: #1a73e8;
  color: white;
  padding: 4px;
  margin-left: 10px;
  font-size: ${fontSize};
  width: 98%;
  border-radius: 4px;
`;
const Task = (text) => {
  console.log(text);
  if(text) {
    return(
      <Schedule>
        {text}
      </Schedule>
    );
  }
  return null;
}

const Row = (props) => {
  return(
    <Wrap>
      <Hours>{props.hour}</Hours>
      <Container>
        {Task(props.text)}
      </Container>
    </Wrap>    
  );
}

export default Row;