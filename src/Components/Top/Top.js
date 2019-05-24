import React from 'react';

import './Top.scss';
import Weather from './Weather/Weather';
import Button from './Button/Button';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false,
    };
  }

  onToggleSelectLocation = () => {
    this.setState((prevState) => ({
      isSelectLocationOpen: !prevState.isSelectLocationOpen,
    }));
    console.log(this.state.isSelectLocationOpen);
  };

  onLocationNameChange = (e) => {
    this.setState({
      locationName: e.target.value,
    });
  };

  onSelectCity = () => {
    const { locationName } = this.state
    const { eventEmitter } = this.props
    eventEmitter.emit('updateWeather', locationName)
    this.setState({
      isSelectLocationOpen: false
    })
  };

  onEnter = (e) => {
    if (e.key === 'Enter') {
      this.onSelectCity();
    }
  }

  render() {
    return (
      <div className="top--container">
        <Button
          onToggleSelectLocation={this.onToggleSelectLocation}
          isSelectLocationOpen={this.state.isSelectLocationOpen}
          onLocationNameChange={this.onLocationNameChange}
          onSelectCity={this.onSelectCity}
          onEnter={this.onEnter}
        />
        <div className="title" />
        <div className="location">
          <Weather {...this.props} />
        </div>
      </div>
    );
  }
}

export default Top;
