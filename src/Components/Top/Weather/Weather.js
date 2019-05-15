import React from "react";

import './Weather.scss'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {location, temp_c, isDay, text, iconURL} = this.props

    return (
      <div className='weather--container'>
        <div className='location'>{location}</div>

        <div className='weather--stats'>
          <div className='weather--img'><img src={iconURL} alt='weather_image'/></div>
          <div className='temperature'>{temp_c}</div>
        </div>

        <div className='temperature'>{text}</div>
      </div>
    );
  }
}

export default Weather;
