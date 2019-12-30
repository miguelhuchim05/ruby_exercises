import React, { useState } from 'react';
import styled from 'styled-components';

const CircleDay = (props) => {
  const [active, setActive] = useState(false);
  const Circle = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  text-align: center;
  background-color: ${active ? '#1a73e8': '#f1f3f4'};
  color: ${active ? 'white': '#9aa0a6'};
  cursor: pointer;
  margin-right: 8px;
  line-height: 25px;
  `;

  return(
    <Circle onClick={ () => setActive(!active) }>{props.text}</Circle>
  );
}

export default CircleDay;