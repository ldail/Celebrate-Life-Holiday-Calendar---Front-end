import React, { useState } from 'react';
import './reset.css';
import './App.css';
import Calendar from 'react-calendar';
import moment from 'moment';
import MonthPicker from './month-picker/MonthPicker';

function App() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [selectedMonth, setSelectedMonth] = useState(moment().format('MMMM'));

  const handleSubmit = (year, month) => {
    setSelectedMonth(month);
    setSelectedYear(year);
  }
  const sundayText = <><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p></>
  return (
    <div className="App">
      <header className="monthView header">
        <p>`==`</p>
      <div>
        <span className="viewingMonthAndYear" onClick={() => setShowDatePicker(!showDatePicker)}>{selectedMonth} {selectedYear}</span>
        <h1 className="appTitle">celebrate life!</h1>
      </div>
      {showDatePicker && 
        <MonthPicker 
        handleSubmit={handleSubmit}
        hideMonthPicker={() => setShowDatePicker(false)}
        />
      }
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
