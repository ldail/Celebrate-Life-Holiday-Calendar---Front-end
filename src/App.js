import React, { useState } from 'react';
import './reset.css';
import './App.css';
import Calendar from 'react-calendar';

import Header from './components/Header';
import {VIEWS} from './assets/constants';
import DayView from './views/DayView/DayView';

function App() {
  const [currentView, setCurrentView] = useState({view: VIEWS.MONTH});

  const setDayView = (date) => {
    const day = date.toString().split(' ')[2];
    setCurrentView({view: VIEWS.DAY, day: day})
  }

  const sundayText = <><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p><p><span>It's sunday!!!</span><span>Other stuff!</span></p></>
  return (
    <div className="App">
      <Header
        currentView={currentView.view}
        setCurrentView={setCurrentView}
        />
    <main>
      {currentView.view === VIEWS.MONTH && 
        <Calendar 
        showFixedNumberOfWeeks={true} 
        tileContent={({date}) =>- date.getDay() === 0 ? sundayText : null} 
        tileClassName={({date}) => date.getDay() === 0 ? 'sundayClass' : null} 
        showNavigation={false}
        onClickDay={(date) => setDayView(date)}
        />
      }
      {currentView.view === VIEWS.DAY &&
        <DayView
          initialDay={currentView.day} />
      }
    </main>
    </div>
  );
}

export default App;
