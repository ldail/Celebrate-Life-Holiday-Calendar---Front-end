import React from 'react';

const EventInMonthView = ({major, name, countries}) => {
  return (
    <li className={`monthEvent ${major? 'monthViewMajorHoliday' : ''}`}>
      <span className={`monthViewHolidayTitle ${major ? 'bold' : ''}`}>{name}</span>
      <ul className="monthViewCountryList">
        {countries.map(country => <li className="monthViewCountryItem">{`(${country}`}</li>)}
      </ul>
    </li>
  );
};

export default EventInMonthView;