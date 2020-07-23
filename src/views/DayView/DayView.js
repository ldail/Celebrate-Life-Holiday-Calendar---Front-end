import React, { useState, useEffect } from 'react';
import './DayView.css';
import moment from 'moment';
import { FAKE__EVENT_DATES, FAKE__EVENTS } from '../../assets/constants';

const DayView = ({selectedMonth, selectedYear, initialDay}) => {
  const [viewingDay, setViewingDay] = useState(1);
  const [currentMonthEvents, setCurrentMonthEvents] = useState({});

  useEffect(() => {
    setViewingDay(parseInt(initialDay));
  }, []);

  useEffect(() => {
    const currentYearEvents = FAKE__EVENT_DATES[selectedYear] || {};
    const correctedMonth = moment(selectedMonth, 'MMMM').format('MMM').toUpperCase();
    const currentMonthEventsFound = currentYearEvents[correctedMonth] || {};
    setCurrentMonthEvents(currentMonthEventsFound);
  }, [selectedMonth, selectedYear])


  const findDayOfWeek = (day) => {
    const dateString = `${selectedYear}-${selectedMonth}-${day}`;
    const dayOfWeek = moment(dateString, 'YYYY-MMMM-D').format('ddd');
    return dayOfWeek;
  }

  const findEventsForDay = (day) => {
    const currentDayEvents = currentMonthEvents[day] || [];
    return currentDayEvents;
  }

  const createEventsForDay = (day) => {
    const currentDayEvents = findEventsForDay(day);
    const viewEventData = [];
    for (let i = 0; i < currentDayEvents.length; i++) {
      const currentEventId = currentDayEvents[i];
      const {name, countries, major} = FAKE__EVENTS[currentEventId];
      viewEventData.push(
        <li className={`calendarEventItem ${major ? 'majorHoliday' : ''}`}>
                <span>{name}</span>
                <ul className="calendarEventCountryFlagList">
                  {countries.map(country => <li className="calendarEventCountryFlagItem">{`(${country})`}</li>)}
                </ul>
              </li>
      );
    }
  return viewEventData;
  }

  const createDays = () => {
    const daysInMonth = moment(`${selectedYear}-${selectedMonth}`, 'YYYY-MM').daysInMonth();
    const daysToDisplay = [];
    for (let i = 0; i < daysInMonth; i++) {
      const eventsForDay = findEventsForDay(i + 1);
      if (eventsForDay.length > 0) {
      daysToDisplay.push(
         <li className="eventDay">
          <div className="date">
            <span className="dayName">{findDayOfWeek(i + 1)}</span>
            <span className="monthAndDay">
              <span>{selectedMonth}</span>
              <span>{i + 1}</span>
            </span>
          </div>
            <ul className="calendarEventList">
            {createEventsForDay(i + 1)}
            </ul>
          </li>)
    }
  }
    return daysToDisplay;
  }


  return (
    <div className="DayView">
      <ul className="events">
        {createDays()}
        </ul>
        <ul className="daySelector">
          <li>1</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li onClick={() => setViewingDay(5)}>5</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li>10</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li>15</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li>20</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li>25</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li>31</li>
        </ul>
    </div>
  );
};

export default DayView;