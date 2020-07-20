import React from 'react';
import './App.css';
import Calendar from 'react-calendar';

function App() {

  const sundayText = <><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p></>
  return (
    <div className="App">
      <Calendar 
      showFixedNumberOfWeeks={true} 
      tileContent={({date}) =>- date.getDay() === 0 ? sundayText : null} 
      tileClassName={({date}) => date.getDay() === 0 ? 'sundayClass' : null} />
    </div>
  );
}

export default App;
