import React from 'react';
import ForecastDay from './ForecastDay/ForecastDay';

import './Bottom.scss';

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { forecastDays } = this.props;
    return (
      <div className="bottom--container">
        <div className="bottom--container_shadow" />
        {forecastDays &&
          forecastDays.map((day, index) => {
            return <ForecastDay key={index} day={day} />;
          })}
      </div>
    );
  }
}

export default Bottom;
