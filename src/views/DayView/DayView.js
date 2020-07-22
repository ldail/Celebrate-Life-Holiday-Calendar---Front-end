import React from 'react';
import './DayView.css';

const DayView = () => {
  return (
    <div className="DayView">
      <ul className="events">
        <li className="eventDay">
          <div className="date">
            <span className="dayName">Wed</span>
            <span className="monthAndDay">
              <span>July</span>
              <span>21</span>
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
          </li>

          <li className="eventDay">
          <div className="date">
            <span className="dayName">Thur</span>
            <span className="monthAndDay">
              <span>July</span>
              <span>22</span>
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
          </li>
        </ul>
        <ul className="daySelector">
          <li>1</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li>5</li>
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