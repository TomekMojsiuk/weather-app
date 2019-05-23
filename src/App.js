import React from 'react';
import axios from 'axios';
import Select from 'react-select'

import Top from './Components/Top/Top';
import Bottom from './Components/Bottom/Bottom';

import './App.scss';

const weatherKey = '092785562bfa4047b60200541191505';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Gdansk',
      forecastDays: '5',
      isLoading: true,
    };
  }

  componentDidMount() {
    const { location, forecastDays } = this.state;

    const Url = `http://api.apixu.com/v1/forecast.json?key=${weatherKey} 
                &q=${location} 
                &days=${forecastDays}`;

    axios
      .get(Url)
      .then((res) => {
        console.log('Data: ', res);
        return res.data;
      })
      .then((data) => {
        this.setState({
          temp_c: data.current.temp_c,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon,
        });
      })
      .catch((error) => {
        if (error) {
          console.log('Cannot fetch weather data from API', error);
        }
      });
  }

  render() {
    const { isLoading, location, temp_c, isDay, text, iconURL } = this.state;
    return (
      <div className="app--container">
        <div className="main--container">
          {/* { isLoading && <h1>Loading weather data...</h1> } */}
          {isLoading && (
            <div className="top--section">
              <Top
                location={location}
                temp_c={temp_c}
                isDay={isDay}
                text={text}
                iconURL={iconURL}
              />
            </div>
          )}
          <div className="bottom--section">
            <Bottom />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
