import React, { useState, useEffect } from 'react';
import './DayView.css';
import moment from 'moment';

const DayView = ({selectedMonth, selectedYear, initialDay}) => {
  const [viewingDay, setViewingDay] = useState(1);

  useEffect(() => {
    setViewingDay(parseInt(initialDay));
  }, []);


  const findDayOfWeek = (day) => {
    const dateString = `${selectedYear}-${selectedMonth}-${day}`;
    const momentDay = moment(dateString, 'YYYY-MMMM-D');
    const momentDay2 = momentDay.format('ddd')
    console.log(dateString);
    console.log(momentDay);
    console.log(momentDay2);
    return momentDay2;
  }

  const createDays = () => {
    const daysInMonth = moment(`${selectedYear}-${selectedMonth}`, 'YYYY-MM').daysInMonth();
    const daysToDisplay = [];
    for (let i = 0; i < daysInMonth; i++) {
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
              <li className="calendarEventItem majorHoliday">
                <span>Chuseok Day 1</span>
                <ul className="calendarEventCountryFlagList">
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                </ul>
              </li>
              <li className="calendarEventItem">
                <span>Chuseok Day 1</span>
                <ul className="calendarEventCountryFlagList">
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                </ul>
              </li>
              <li className="calendarEventItem">
                <span>Chuseok Day 1</span>
                <ul className="calendarEventCountryFlagList">
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                </ul>
              </li>
              <li className="calendarEventItem majorHoliday">
                <span>Chuseok Day 1</span>
                <ul className="calendarEventCountryFlagList">
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                  <li className="calendarEventCountryFlagItem">{`(---)`}</li>
                </ul>
              </li>
            </ul>
          </li>)
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