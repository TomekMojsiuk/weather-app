import React from 'react';

import './ForecastDay.scss';

class ForecastDay extends React.Component {
  render() {
    const { day } = this.props;
    const date = new Date(day.date);
    let weekDay = '';

    switch (date.getDay() + 1) {
      case 0:
        weekDay = '';
        break;
      case 1:
        weekDay = 'Monday';
        break;
      case 2:
        weekDay = 'Tuesday';
        break;
      case 3:
        weekDay = 'Wednesday';
        break;
      case 4:
        weekDay = 'Thursday';
        break;
      case 5:
        weekDay = 'Friday';
        break;
      case 6:
        weekDay = 'Saturday';
        break;
      case 7:
        weekDay = 'Sunday';
        break;
      default:
        weekDay = 'No such day';
    }

    return (
      <div className="forecast--day--container">
        <div className="date">{weekDay}</div>
        <div className="date">
          {date.getDate() + 1}.{date.getMonth() + 1}.{date.getFullYear()}
        </div>
        <div className="bottom--line" />
        <div className="weather-stats-container">
          <div className="img">
            <img src={day.day.condition.icon} alt="forecast img" />
          </div>
          <div className="tmeperature">Max: {day.day.maxtemp_c}</div>
          <div className="tmeperature">Min: {day.day.mintemp_c}</div>
          <div className="weather--description">{day.day.condition.text}</div>
        </div>
        <div className="bottom--line" />
      </div>
    );
  }
}

export default ForecastDay;
