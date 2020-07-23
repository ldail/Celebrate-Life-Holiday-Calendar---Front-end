import React from 'react';
import './IndividualEvent.css';
import {ReactComponent as HamburgerMenu} from '../../assets/hamburger-menu.svg';

const IndividualEvent = ({currentEventId}) => {
  console.log(currentEventId);
  return (
    <div className="IndividualEvent">
      <div className="fixedHeader">
        <div className="hamburgerNav">
          <HamburgerMenu className="navMenuButton" />
        </div>
        <div className="holidayContent">
          <h2>Int'l Talk Like A Pirate Day</h2>
          <h3>September 19</h3>
          <div className="activityButtons">
            <div className="activeButtons">
              <button className="addToCalendarButton">-star-</button>
              <button>-ddg-</button>
              <button>-share-</button>
            </div>
            <button className="suggestChangeButton">suggest change</button>
          </div>
          <div className="divider" />
        </div>
      </div>

      <div className="holidayContentInfo">
        <div className="indentedBackground">
          <h4>Recurrs Annually</h4>
        </div>
        <div className="indentedBackground">
          <h4>Celebrating Countries:</h4>
          <div className="countriesList">
            <ul className="countryFlagList">
              <li>-sk-</li>
              <li>-chn-</li>
              <li>-sa-</li>
            </ul>
            <button className="seeMoreButton">...</button>
          </div>
        </div>

        <section>
          <h4>Description</h4>
          <p>All you bilge rats, Aaaaaaaaaaaaarrrrrrrrrrrrgh! 
            As you are out and about on September 19th, 
            don’t be surprised if people are saying, “Ahoy 
            Matie,” “Avast,” “Aye, Aye Capt’n,” “Land ho!” 
            “Hornpipe,” and many other pirate-like phrases, 
            because it’s International Talk Like a Pirate Day. 
          </p>

            <p>While ordering your coffee in the drive-thru, ask 
            if they have change for gold bullion. Try testing 
            your pirate language out at the library when 
            asking for the location of Moby Dick. The 
            pirate language always fairs well in rough 
            seas. Settle a debate with “I’m right or I’ll walk
            the plank!”
          </p>
          <button className="viewMore">(view more)</button>
        </section>

        <section>
          <h4>Pictures</h4>
          <ul className="holidayEventPictureList">
            <li>Picture here</li>
            <li>Picture here</li>
            <li>Picture here</li>
          </ul>
        </section>

        <section>
          <h4>Resources</h4>
          <ul className="indentedBackground resourceList">
            <li>http://talklikeapirate.org</li>
            <li>www.fakeholidaysite.com/pirate</li>
          </ul>
        </section>

        <section>
          <h4>Comments <span className="headerExtraInfo">(by newest)</span></h4>
          <ul className="indentedBackground commentList">
            <li>
              <p>Best, favorite holiday. There is no
                other one like it. YARRRRR!!!!
              </p>
              <div className="postInfo">
                <span className="usernamePosted">r4ndy4110</span>
                <span className="datePosted">Jul 15, 2020</span>
              </div>
            </li>
            <li>
              <p>Can’t think of any other holiday I’d
                rather celebrate on a September 19
                than this amazing holiday. Did you know
                it was invented by a real pirate?? 

                Back in the 1500s. Wild huh? I kn-
              </p>
              <button className="viewMoreCommentButton">...</button>
              <div className="postInfo">
                <span className="usernamePosted">jenkins_00</span>
                <span className="datePosted">Jul 15, 2020</span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default IndividualEvent;