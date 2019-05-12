import React from "react";

import './Weather.scss'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='weather--container'>
        <div className='location'>Choose Location</div>

        <div className='weather--stats'>
          <div className='weather--img'><img src={this.props.img} alt='weather image'/></div>
          <div className='temperature'>10</div>
        </div>

        <div className='temperature'>It's cloudy today</div>
      </div>
    );
  }
}

export default Weather;
