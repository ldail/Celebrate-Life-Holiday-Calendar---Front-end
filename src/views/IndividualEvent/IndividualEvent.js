import React from 'react';
import './IndividualEvent.css';
import {ReactComponent as HamburgerMenu} from '../../assets/hamburger-menu.svg';
import { FAKE__EVENTS } from '../../assets/constants';
import moment from 'moment';

const IndividualEvent = ({currentEventId = null}) => {
  const eventInfo = FAKE__EVENTS[currentEventId] || {};
  const {name, month, day, countries, major, recur, description, pictures, resources, comments} = eventInfo;
  return (
    <div className="IndividualEvent">
      <div className="fixedHeader">
        <div className="hamburgerNav">
          <HamburgerMenu className="navMenuButton" />
        </div>
        <div className="holidayContent">
          <h2>{name}</h2>
          <h3>{moment(month, 'M').format('MMMM')} {day}</h3>
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
          <h4>{recur}</h4>
        </div>
        <div className="indentedBackground">
          <h4>Celebrating Countries:</h4>
          <div className="countriesList">
            <ul className="countryFlagList">
              {countries.map(country => <li>-{country}-</li>)}
            </ul>
            <button className="seeMoreButton">...</button>
          </div>
        </div>

        <section>
          <h4>Description</h4>
          {description.map(descriptionParagraph => <p>{descriptionParagraph}</p>)}
          <button className="viewMore">(view more)</button>
        </section>

        <section>
          <h4>Pictures</h4>
          <ul className="holidayEventPictureList">
            {pictures.map((pictureLink) => <li><img src={pictureLink} alt={name} /></li>)}
          </ul>
        </section>

        <section>
          <h4>Resources</h4>
          <ul className="indentedBackground resourceList">
            {resources.map(resourceItem => <li><a href={resourceItem.url}>{resourceItem.title}</a></li>)}
          </ul>
        </section>

        <section>
          <h4>Comments <span className="headerExtraInfo">(by newest)</span></h4>
          <ul className="indentedBackground commentList">
            {comments.map(commentItem => {
              return (
            <li>
              <p>{commentItem.comment}</p>
              <div className="postInfo">
                <span className="usernamePosted">{commentItem.author}</span>
                <span className="datePosted">{moment(commentItem.date[1], 'M').format('MMM')} {commentItem.date[2]}, {commentItem.date[0]}</span>
              </div>
            </li>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default IndividualEvent;