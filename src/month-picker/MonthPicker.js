import React, { useState } from 'react';
import moment from 'moment';
import './MonthPicker.css';

const MonthPicker = ({hideMonthPicker, handleSubmit, modalHandler}) => {
  const [viewingYear, setViewingYear] = useState(moment().format('YYYY'));

  const monthConversions = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December'
  }

  const subtractYear = () => {
    setViewingYear(parseInt(viewingYear) - 1);
  }

  const addYear = () => {
    setViewingYear(parseInt(viewingYear) + 1);
  }

  const submitSelection = (e, selectedMonth) => {
    e.preventDefault();
    if (selectedMonth !== null) {
      const fullMonthName = monthConversions[selectedMonth]
      hideMonthPicker();
      handleSubmit(viewingYear, fullMonthName);
    }
    else {
      if (modalHandler) {
        modalHandler('Please select a month');
      }
      else {
        //TODO: Add default modal message
        console.error('please add a month!');
      }
    }
  }

  return (
    <div className="backgroundOpacity" onClick={hideMonthPicker}>
    <form className="MonthPicker" onSubmit={submitSelection}>
      <div className="yearSelection">
        <button type="button" onClick={subtractYear}>{`<`}</button>
        <span className="viewingYear">{viewingYear}</span>
        <button type="button" onClick={addYear}>{`>`}</button>
      </div>
      <ul className="monthSelectionTable">
        {Object.keys(monthConversions).map(month => <li key={month} className="monthOption" onClick={(e) => submitSelection(e, month)}>{month}</li>)}
      </ul>
    </form>
    </div>
  );
};

export default MonthPicker;