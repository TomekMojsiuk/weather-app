import React from 'react';

import './Weather.scss';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      location,
      temp_c,
      //isDay,
      text,
      iconURL,
      tempFeelsLike,
      lastUpdate,
      wind,
      windDirection,
      pressure,
      humidity,
    } = this.props;

    return (
      <div className="weather">

        <div className="location">{location}</div>
        
        <div className="weather--boxes">

          <div className="weather--container">
            <div className="weather--stats">
              <div className="weather--img">
                <img src={iconURL} alt="weather_image" />
              </div>
              <div className="temperature">{temp_c}</div>
            </div>
            <div className="weather--description">{text}</div>
          </div>
          <div className="weather--container description">
            <div className="weather--description temp">Temperature feels: {tempFeelsLike}</div>
            <div className="weather--description">Wind: {wind} km/h</div>
            <div className="weather--description">Wind direction: {windDirection}</div>
            <div className="weather--description">Pressure: {pressure}</div>
            <div className="weather--description">Humidity: {humidity}</div>
          </div>
        </div>
        <div className="weather--description last--update">Last update: {lastUpdate}</div>
      </div>
    );
  }
}

export default Weather;
