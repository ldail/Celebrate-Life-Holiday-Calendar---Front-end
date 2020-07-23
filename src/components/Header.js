import React, { useState } from 'react';
import {ReactComponent as HamburgerMenu} from '../assets/hamburger-menu.svg';
import MonthPicker from '../month-picker/MonthPicker';
import moment from 'moment';
import {VIEWS} from '../assets/constants';


const Header = ({selectedYear, setSelectedYear, selectedMonth, setSelectedMonth, currentView, setCurrentView}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = (year, month) => {
    setSelectedMonth(month);
    setSelectedYear(year);
  }

  const handleClickedMonthAndYear = () => {
    if (currentView === VIEWS.DAY) {
      setCurrentView({view: VIEWS.MONTH});
    }
    else {
      setShowDatePicker(true);
    }
  }


  return (
<header className="monthView header">
        <HamburgerMenu className="navMenuButton" />
      <div>
        <h2 className="viewingMonthAndYear" onClick={() => handleClickedMonthAndYear()}>{selectedMonth} {selectedYear}</h2>
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
  );
};

export default Header;