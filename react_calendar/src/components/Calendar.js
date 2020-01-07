import React from 'react'
import Header from './Header';
import Row from './Row';

const Calendar = () => {
  let rows = [<Row hour={''} text={''}/>];
  let hourFormat;
  let hourRestart = 0;

  for (let i = 1; i < 24; i++) {    
    if(i >= 12) {
      hourFormat = i - hourRestart + ' PM';
      hourRestart = 12;
    }else {
      hourFormat = i + ' AM';
    }
    if(i === 11) {
      rows.push(<Row hour={hourFormat} text={'Meeting, 10:30am'}></Row>);
    }else {
      rows.push(<Row hour={hourFormat}></Row>);
    }    
  }

  return(
    <div>
      <Header />
      {rows}
    </div>    
  );
}

export default Calendar;