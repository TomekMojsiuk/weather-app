import React from 'react';
import axios from 'axios';

import Top from './Components/Top/Top';
import Bottom from './Components/Bottom/Bottom';

import './App.scss';

const weatherKey = '092785562bfa4047b60200541191505';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Gdansk',
      numberOfForecastDays: '5',
      isLoading: true,
    };
  }

  updateWeather = () => {
    const { location, numberOfForecastDays } = this.state;

    const Url = `https://api.apixu.com/v1/forecast.json?key=${weatherKey} 
      &q=${location} 
      &days=${numberOfForecastDays}`;

    axios
      .get(Url)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        this.setState({
          isLoading: false,
          location: data.location.name,
          temp_c: data.current.temp_c,
          tempFeelsLike: data.current.feelslike_c,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon,
          lastUpdate: data.current.last_updated,
          wind: data.current.wind_kph,
          windDirection: data.current.wind_dir,
          pressure: data.current.pressure_mb,
          humidity: data.current.humidity,
          forecastDays: data.forecast.forecastday,
        });
      })
      .catch((error) => {
        if (error) {
          console.log('Cannot fetch weather data from API', error);
        }
      });
  };

  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();
    eventEmitter.on('updateWeather', (data) => {
      this.setState(
        {
          location: data,
        },
        () => this.updateWeather(),
      );
    });
  }

  render() {
    const {
      isLoading,
      location,
      temp_c,
      tempFeelsLike,
      isDay,
      text,
      iconURL,
      forecastDays,
      lastUpdate,
      wind,
      windDirection,
      pressure,
      humidity,
    } = this.state;

    const { eventEmitter } = this.props;

    return (
      <div className="app--container">
        <div className="main--container">
          {/* { isLoading && <h1>Loading weather data...</h1> } */}
          {!isLoading && (
            <div className="top--section">
              <Top
                location={location}
                temp_c={temp_c}
                tempFeelsLike={tempFeelsLike}
                isDay={isDay}
                text={text}
                iconURL={iconURL}
                lastUpdate={lastUpdate}
                wind={wind}
                windDirection={windDirection}
                pressure={pressure}
                humidity={humidity}
                eventEmitter={eventEmitter}
              />
            </div>
          )}
          <div className="bottom--section">
            <Bottom forecastDays={forecastDays} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
