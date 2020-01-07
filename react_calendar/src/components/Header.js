import React from 'react'
import styled from 'styled-components';

const NavHeader = styled.div`
  display: grid;
  grid-template-columns: 80px auto;  
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: white;
  z-index: 1;  
  font-size: 16px;
`;
const TimeZone = styled.div`
  margin-left: 10px;
  padding-top: 50px;
`;
const DayName = styled.div`
  margin: 15px 2px 2px 20px;
`;
const Day = styled.div`
  padding-left: 9px;  
  margin: 8px 0;
  margin: 8px 0 8px 18px;
  font-size: 25px;
`;
const Hr = styled.div`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));  
  grid-column-start: 1;
  grid-column-end: 3;
`;

const Header = () => {
  return(
    <NavHeader>
      <div>
        <TimeZone>GMT-06</TimeZone>
      </div>
      <div>
        <DayName>MIÉ</DayName>
        <Day>8</Day>
      </div>      
      <Hr></Hr>
    </NavHeader>    
  );
}

export default Header;