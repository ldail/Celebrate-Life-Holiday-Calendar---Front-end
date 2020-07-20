import React, { useState, useRef } from 'react';
import './reset.css';
import './App.css';
import Calendar from 'react-calendar';
import Picker from 'react-month-picker';
import moment from 'moment';

function App() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [singleValue, setSingleValue] = useState({year: 2020, month: 7})
  const pickMonth = useRef();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const sundayText = <><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p></>
  return (
    <div className="App">
      <header className="monthView header">
        <p>`==`</p>
      <div>
        <span className="viewingMonthAndYear" onClick={() => setShowDatePicker(!showDatePicker)}>{moment().format('MMMM')} {moment().year()}</span>
        <h1 className="appTitle">celebrate life!</h1>
      </div>
      {showDatePicker && <Picker
      ref={pickMonth}
      value={singleValue}
      lang={months}
      years={{min: {year: 1980, month: 1}, max: {year: 2050, month: 1}}}
      onChange={(e) => console.log(e)}
      >
        <div className="showStuff">Yes</div>
        </Picker>}
      <div className="toggleBar">
        O-----------O
      </div>
    </header>
    <main>
      <Calendar 
      showFixedNumberOfWeeks={true} 
      tileContent={({date}) =>- date.getDay() === 0 ? sundayText : null} 
      tileClassName={({date}) => date.getDay() === 0 ? 'sundayClass' : null} 
      showNavigation={false}
      />
    </main>
    </div>
  );
}

export default App;
