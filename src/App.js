import React, { useState, useEffect } from 'react';
import './reset.css';
import './App.css';
import Calendar from 'react-calendar';
import moment from 'moment';

import Header from './components/Header';
import {VIEWS, FAKE__EVENT_DATES, FAKE__EVENTS} from './assets/constants';
import DayView from './views/DayView/DayView';
import EventInMonthView from './components/EventInMonthView';
import IndividualEvent from './views/IndividualEvent/IndividualEvent';

function App() {
  const [currentView, setCurrentView] = useState({view: VIEWS.MONTH});
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [selectedMonth, setSelectedMonth] = useState(moment().format('MMMM'));
  const [currentMonthEvents, setCurrentMonthEvents] = useState({});
  const [displayHeader, setDisplayHeader] = useState(true);

  useEffect(() => {
    const currentYearEvents = FAKE__EVENT_DATES[selectedYear] || {};
    const correctedMonth = moment(selectedMonth, 'MMMM').format('MMM').toUpperCase();
    const currentMonthEventsFound = currentYearEvents[correctedMonth] || {};
    setCurrentMonthEvents(currentMonthEventsFound);
  }, [selectedMonth, selectedYear])

  const setDayView = (date) => {
    const day = date.toString().split(' ')[2];
    setCurrentView({view: VIEWS.DAY, day: day})
  }

  const eventsForMonth = (month) => {
    const currentYearEvents = FAKE__EVENT_DATES[selectedYear] || {};
    const correctedMonth = moment(selectedMonth, 'MMMM').format('MMM').toUpperCase();
    const currentMonthEventsFound = currentYearEvents[correctedMonth] || {};
    return currentMonthEventsFound;
  }

  const createDayEventList = (date) => {
    let viewingDay = date.toString().split(' ')[2];
    if (viewingDay[0] === '0') {
      viewingDay = viewingDay.slice(1);
    }
    const viewingMonth = date.toString().split(' ')[1];
    let eventsOnDay = currentMonthEvents[viewingDay];
    const viewingMonthFormat = moment(viewingMonth, 'MMM').format('MMMM');
    if (viewingMonthFormat !== selectedMonth) {
      let monthEvents = eventsForMonth(viewingMonthFormat);
      eventsOnDay = monthEvents[viewingDay];
    }
    let viewingData = [];
    if (eventsOnDay) {
      viewingData = eventsOnDay.map(eventId => {
      const {name, countries, major} = FAKE__EVENTS[eventId];
      return (
      <EventInMonthView
        major={major}
        countries={countries}
        name={name}
        />
      );
    });
  }
    return viewingData;
  }

  const showIndividualEvent = (day) => {
    setCurrentView({view: VIEWS.EVENT});
    setDisplayHeader(false);
    const date = [selectedYear, selectedMonth, day]
    console.log(date);
  }

  return (
    <div className="App">
      <Header
        currentView={currentView.view}
        setCurrentView={setCurrentView}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        setSelectedYear={setSelectedYear}
        displayHeader={displayHeader}
        />
    <main>
      {currentView.view === VIEWS.MONTH && 
        <Calendar 
        showFixedNumberOfWeeks={true} 
        tileContent={({date}) => createDayEventList(date)}
        tileClassName={({date}) => date.getDay() === 0 ? 'sundayClass' : null} 
        showNavigation={false}
        onClickDay={(date) => setDayView(date)}
        />
      }
      {currentView.view === VIEWS.DAY &&
        <DayView
          initialDay={currentView.day} 
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          showIndividualEvent={showIndividualEvent}
        />
      }
      {currentView.view === VIEWS.EVENT &&
        <IndividualEvent />
      }
    </main>
    </div>
  );
}

export default App;
