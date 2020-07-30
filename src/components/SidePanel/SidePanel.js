import React from 'react';
import './SidePanel.css';
import {ReactComponent as LeftArrow} from '../../assets/angle-left-solid.svg';
import {ReactComponent as ChevronWithBackgroundArrow} from '../../assets/chevron-circle-left-solid.svg';
import {ReactComponent as SolidStar} from '../../assets/star-solid.svg';
import {ReactComponent as GlobeIcon} from '../../assets/globe-americas-solid.svg';

const SidePanel = ({setShowNavigation}) => {
  return (
    <div className="backgroundOpacity" onClick={() => setShowNavigation(false)}>
    <div className="SidePanel">
      <div className="sidePanelContents">
        <LeftArrow className="returnFromNavigation" onClick={() => setShowNavigation(false)} />

        <div className="navBox">
          <ChevronWithBackgroundArrow className="navBoxIcon todayIcon" />
          <h4>Today</h4>
        </div>

        <div className="navBox">
          <div className="solidCircleBlueBackground">
            <SolidStar className="navBoxIcon-medium myCalendarIcon" />
          </div>
          <h5>My Calendar</h5>

        <div className="divider" />

        <div className="solidCircleBlueBackground">
          <GlobeIcon className="navBoxIcon-medium worldCalendarIcon" />
        </div>
        <h5>World Calendar</h5>
        <ul className="worldCalendarOptions">
          <li>
            <ChevronWithBackgroundArrow className="navBoxIcon-small worldCalendarOption" />
            <span>Starred Countries</span>
          </li>
          <li>
            <ChevronWithBackgroundArrow className="navBoxIcon-small worldCalendarOption" />
            <span>Select Countries</span>
          </li>
          <li>
            <ChevronWithBackgroundArrow className="navBoxIcon-small worldCalendarOption" />
            <span>All Countries</span>
          </li>
        </ul>
        </div>

        <button className="addHolidayButton" type="button">+ Add Holiday</button>
      </div>
      

      
      <h1>celebrate life!</h1>
    </div>
    </div>
  );
};

export default SidePanel;